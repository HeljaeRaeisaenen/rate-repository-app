import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useAuthenticatedUser = () => {
  const { data, loading, error } = useQuery(GET_AUTHENTICATED_USER);

  if (error) return error.message;

  if (loading) return loading;

  return { user: data.me };
};

export default useAuthenticatedUser;
