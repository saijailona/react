/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import {useLogin} from '../hooks/ApiHooks';
import useForm from '../hooks/Formhooks';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MediaContext } from '../contexts/MediaContexts';

const LoginForm = (props) => {
    const [user, setUser] = useContext(MediaContext);
  const alkuarvot = {
    username: '',
    password: '',
  };

  const {postLogin} = useLogin();
  const navigate = useNavigate();

  const doLogin = async () => {
    console.log('doLogin');
    try {
        const userData = await postLogin(inputs);
        localStorage.setItem('token', userData.token);
        setUser(userData.user);
        navigate('/home');
    } catch (err) {
        alert(err.message);
    };
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, alkuarvot);
  console.log(inputs);
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        name="username"
        onChange={handleInputChange}
        value={inputs.username}
      />
      <input
        placeholder="password"
        name="password"
        type="password"
        onChange={handleInputChange}
        value={inputs.password}
      />
      <input type="submit" value="login" />
    </form>
  );
};

LoginForm.propTypes = {};

export default LoginForm;