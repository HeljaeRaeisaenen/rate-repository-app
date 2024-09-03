import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: { credentials: { username, password } },
    });
  };

  return [signIn, result];
};

export default useSignIn;

// probelm is that the first "submit" click, the data at line 11 is undefined
// but on second sumbit click, the data is what is needed.
// why not first click work?
// ensure rsult is not returned here before async has completed
