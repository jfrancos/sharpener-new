import React, { useContext } from 'react';
import { UserContext } from './lib/UserContext';

const Etc = ({onSignout: handleSignout}) => {
  const [user, setUser] = useContext(UserContext);
  
  return <div className="flex-col">
      {user?.email}
      <div onClick={handleSignout} className="py-2 px-4 bg-gray-500">
        Log out
      </div>
  
  
  </div>;
};

export default Etc;
