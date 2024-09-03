import { useNavigate } from "react-router-dom";

import LogInForm from './LogInForm';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      //console.log(data.authenticate);
      navigate("/")
    } catch (e) {
      console.log(e);
    }
  };

  return <>
    <LogInForm onSubmit={onSubmit}/>
  </>;
};

export default SignIn;