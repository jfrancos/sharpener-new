import React, { useState } from 'react';
import logo from './logo.png';

const Suoli = () => {
  const [showMore, setShowMore] = useState(false);

  const suffix = showMore ? (
    ", so you don't have to remember another password or rely on a social networking service. To log in or sign up, click the link in the email we send you."
  ) : (
    <>
      . <span onClick={() => setShowMore(true)} className="underline font-semibold">Tell me more</span>
    </>
  );

  return (
    <div className="bg-gray-100 max-w-screen-sm space-y-6 flex-col mx-auto fixed inset-0 flex">
      <div className="flex-1 flex-col .bg-red-400">
        <div className="flex-grow items-center">
          <img src={logo} className="object-contain w-16 mx-auto" />
        </div>
        <div className="flex-col .mb-4 space-y-3 mx-8">
          <p>Enter your email to login or sign up</p>
          <input placeholder="email@address.com" className="p-2" />
          <div className="text-gray-50 font-semibold justify-center items-center py-3 bg-gray-500 rounded-lg">
            Send magic link
          </div>
        </div>
      </div>

      <p className="px-8 flex-1 .bg-green-400">
        We use magic-link authentication{suffix}
      </p>
    </div>
  );
};

export default Suoli;
