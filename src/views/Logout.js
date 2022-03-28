import { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { MediaContext } from '../contexts/MediaContexts';

const Logout = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
    setUser(null);
    localStorage.clear();
  return <>{!user ? <Navigate to ="/" /> : <div>Loading...</div>}</>;
};


export default Logout;
