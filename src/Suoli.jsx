import React, { useState, useContext, useEffect } from 'react';
import { magic, RPCError } from './lib/magic';
import { UserContext } from './lib/UserContext';
import { useKey } from 'rooks';
import logo from './logo.png';
import { CgSpinner } from 'react-icons/cg';
import clsx from 'clsx';

const emailRegex = /^.+@\S+$/;

const Suoli = () => {
  const [user, setUser] = useContext(UserContext);
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const suffix = showMore ? (
    ", so you don't have to remember another password or rely on a social networking service. To log in or sign up, click the link in the email we send you."
  ) : (
    <>
      .{' '}
      <span
        onClick={() => setShowMore(true)}
        className="underline font-semibold"
      >
        Tell me more
      </span>
    </>
  );

  const handleLogin = async () => {
    try {
      setSending(true);
      await magic.auth.loginWithMagicLink({ email });
      await updateUser();
    } catch (err) {
      if (err instanceof RPCError) {
        setLoginError(err.rawMessage);
      } else {
        console.log('Unknown error');
        throw err;
      }
    } finally {
      setSending(false);
    }
  };

  useKey('Enter', handleLogin);

  const updateUser = async () => {
    try {
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
    }
  };
  const validEmail = email.match(emailRegex);

  return (
    <div className="bg-gray-100 max-w-screen-sm space-y-12 flex-col mx-auto fixed inset-0 flex">
      <div className="flex-1 flex-col">
        <div className="flex-grow items-center">
          <img src={logo} className="object-contain w-16 mx-auto" />
        </div>
        <div className="flex-col space-y-4 mx-8 font-medium text-gray-800">
          <div className="space-y-2 flex-col">
            <p>Enter your email to log in or sign up</p>
            <input
              autoFocus
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
              placeholder="email@address.com"
              className="p-2"
            />
          </div>
          <div className="grid">
            <div
              onClick={handleLogin}
              className={clsx(
                'text-gray-50 font-semibold justify-center items-center py-3 bg-gray-500 rounded-lg hover:bg-gray-700 grid-overlay',
                (sending || !validEmail) && 'opacity-40',
              )}
            >
              Send magic link
            </div>
            {sending && (
              <CgSpinner className="text-gray-900 w-8 h-8 flex self-center mx-auto grid-overlay animate-spin grid-overlay" />
            )}
          </div>
        </div>
      </div>

      <p className="mx-8 flex-1 text-sm">
        We use magic-link authentication{suffix}
      </p>
    </div>
  );
};

export default Suoli;
