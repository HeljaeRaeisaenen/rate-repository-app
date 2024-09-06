import { useMutation, useApolloClient } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

import useAuthStorage from "../hooks/useAuthStorage";

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const { data } = await createUser({
      variables: { user: { username, password } },
    });

    return { data };
  };

  return [signUp, result];
};

export default useSignUp;
