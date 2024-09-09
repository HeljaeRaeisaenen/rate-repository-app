import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries";

const useAuthenticatedUser = (props) => {
  const { data, loading, error } = useQuery(GET_AUTHENTICATED_USER, {
    variables: props ? { includeReviews: props.includeReviews } : {},
  });

  if (error) return error.message;

  if (loading) return loading;

  if (props) return data.me;

  return { user: data.me };
};

export default useAuthenticatedUser;
