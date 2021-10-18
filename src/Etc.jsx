import React, { useContext } from 'react';
import { UserContext } from './lib/UserContext';

const Etc = () => {
  const [user, setUser] = useContext(UserContext);


  return <div>{user.email}</div>;
};

export default Etc;
