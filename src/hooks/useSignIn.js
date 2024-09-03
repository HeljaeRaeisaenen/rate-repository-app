import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

import useAuthStorage from "../hooks/useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [authenticate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const { data } = await authenticate({
      variables: { credentials: { username, password } },
    });
    await authStorage.setAccessToken(data.authenticate);
    client.resetStore();

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
