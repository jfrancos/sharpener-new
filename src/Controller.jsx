import React, { useState, useContext, useEffect, useRef } from 'react';
import { useCollection } from './Database';
import { HiPlus, HiX, HiPencil, HiCheck } from 'react-icons/hi';
import { useKey, useOutsideClickRef } from 'rooks'; // react-recipes looks great too
import { UserMetadata } from './Auth';
import Landing from './Landing';

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
  Symbol('landing'),
  Symbol('game'),
  Symbol('signin'),
];

const Controller = () => {
  const user = useContext(UserMetadata);
  const [collection, tasks] = useCollection('documents');
  const [screen, setScreen] = useState(landingScreen);

  return screen === landingScreen && <Landing />;
};

export default Controller;
