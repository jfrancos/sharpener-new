import React, { useState, useEffect } from 'react';
import logo from './logo.png';

const Landing = ({ onLogin: handleLogin }) => {
  return (
    <div className="bg-white  text-gray-900 .block .space-y-12 .flex .flex-col cursor-default">
      <div className="bg-gray-100 max-w-screen-sm flex-col space-y-12 mx-auto">
        <div className="space-y-6 flex-col">
          <div className="py-6 bg-gray-400 justify-between px-8 items-center">
            <div className="text-xl font-bold">Ear Sharpener</div>
            <div className="group p-3 -m-3" onClick={handleLogin}>
              <div className="group-hover:bg-gray-700 group-hover:text-gray-300 uppercase flex-col bg-gray-50 rounded-lg items-center px-7 py-1.5 font-semibold text-xs tracking-tight">
                <p>Sign up</p>
                <div className="my-0.5 h-0.5 bg-gray-300 self-stretch" />
                <div>Log in</div>
              </div>
            </div>
          </div>

          <div className="px-8 text-3xl font-bold inline">
            <p className="tracking-tight leading-10">
              Master relative pitch
              <span className="text-gray-400 ">
                {' '}
                with gamified ear training
              </span>
            </p>
          </div>

          <p className="px-8 text-gray-700">
            Instead of training to hear intervals,{' '}
            <span className="font-semibold text-gray-900">
              practice identifying pitches in the context of a tonal center
            </span>{' '}
            — the way you’ll hear them when you’re jamming or transcribing.{' '}
            <span className="font-semibold text-gray-900">
              Try out a few sample lessons:
            </span>
          </p>
          <Button>Beginner</Button>
          <div>
            <p className="mx-16 text-xs -my-4 pointer-events-none">
              <span
                className="pointer-events-auto underline p-6 -m-6 pt-2 -mt-2 "
                onClick={handleLogin}
              >
                Sign up
              </span>{' '}
              to access 50+ curated levels that gradually take you from
              “Beginner” to “Intermediate” (for free!)
            </p>
          </div>
          <Button>Intermediate</Button>
          <Button>Advanced</Button>
          <Button>Very advanced</Button>
        </div>

        <div className="flex-col space-y-6">
          <div className="py-5 bg-gray-600 justify-center items-center font-semibold text-gray-50 text-2xl tracking-wide">
            Pricing
          </div>

          <div className="px-8 .mt-6 flex-col items-start space-y-2">
            <h2 className="py-1 px-3 bg-gray-300 rounded font-medium">$0</h2>
            <p className="">
              Get a thorough ear training foundation for free. 50+ exercises
              take you in baby steps from complete beginner to identifying all
              twelve notes of the scale.
            </p>
          </div>

          <div className="px-8 flex-col space-y-2">
            <div className="justify-between items-center">
              <h2 className="py-1 px-3 bg-gray-300 rounded font-medium">
                $4 <span className="text-gray-700 font-normal">/ month</span>
              </h2>
              <p className="baseline">or</p>
              <p className="text-xs text-right text-gray-700">
                $19 / 6 mos ={' '}
                <span className="text-gray-900 font-medium">$3.17/mo</span>
                <br />
                $34 / year ={' '}
                <span className="text-gray-900 font-medium">$2.84/mo</span>
              </p>
            </div>
            <p>
              Train with simultaneous notes, choose your own tonal centers, and
              create custom levels.
            </p>
          </div>
        </div>
        <img src={logo} className="w-24 mx-auto pb-12" />
      </div>
    </div>
  );
};

const Button = ({ children }) => {
  return (
    <div className="text-gray-50 py-3 mx-8 bg-gray-500 justify-center items-center rounded-lg font-medium">
      {children}
    </div>
  );
};

export default Landing;
