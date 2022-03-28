import {Navigate} from 'react-router-dom';

const Logout = props => {
    localStorage.clear();
  return <Navigate to ="/" />;
};


export default Logout;
