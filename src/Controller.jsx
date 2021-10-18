import React, { useState, useContext, useEffect, useRef } from 'react';
import { useCollection } from './Database';
// import { HiPlus, HiX, HiPencil, HiCheck } from 'react-icons/hi';
// import { useKey, useOutsideClickRef } from 'rooks'; // react-recipes looks great too
// import { UserMetadata } from './Auth';
import Landing from './Landing';
import Suoli from './Suoli';
import Etc from './Etc';
import { UserContext } from './lib/UserContext';
import { magic, RPCError } from './lib/magic.js';


const [
  listScreen,
  adjustScreen,
  achieveScreen,
  etcScreen,
  landingScreen,
  gameScreen,
  signinScreen,
] = [
  Symbol('list'),
  Symbol('adjust'),
  Symbol('achieve'),
  Symbol('etc'),
  Symbol('game'),
  Symbol('landing'),
  Symbol('signin'),
];

const Controller = () => {
  const [user, setUser] = useContext(UserContext);
  const [collection, tasks] = useCollection('documents');
  const [screen, setScreen] = useState(landingScreen);
  // const [screen, setScreen] = useState(signinScreen);

  console.log({ screen, user });
  useEffect(() => {
    if (user && [landingScreen, signinScreen].includes(screen)) {
      setScreen(etcScreen);
    }
    if (!user) {
      setScreen(landingScreen);
    }
  }, [user?.email]);

  useEffect(async () => {
    await updateUser();
  }, []);

  const updateUser = async () => {
    try {
      setUser((user) => ({ ...user, loading: true }));
      const metadata = await magic.user.getMetadata();

      // const { plan } = await getAuth();
      // also a bit hacky?:
      // metadata.plan = plan;
      // console.log(token);
      console.log('Auth: setting user', { metadata });
      setUser(metadata);
    } catch {
      console.log('Auth: setting user to null');
      setUser(null);
    } finally {
      setUser((user) => ({ ...user, loading: false }));

    }
  };

  return (
    <div className="bg-white text-gray-900 cursor-default .block .h-full">
      {screen === landingScreen && (
        <Landing onLogin={() => setScreen(signinScreen)} />
      )}
      {screen === signinScreen && <Suoli />}
      {screen === etcScreen && <Etc />}
    </div>
  );
};

export default Controller;
