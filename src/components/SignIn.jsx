import { useNavigate } from "react-router-native";

import LogInForm from './LogInForm';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
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