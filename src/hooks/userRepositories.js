import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, {
    variables: orderBy
      ? { orderBy: orderBy, orderDirection: orderDirection }
      : {},
    fetchPolicy: "cache-and-network",
  });

  if (error) return error.message;

  if (loading) return loading;

  return { repositories: data.repositories };
};

export default useRepositories;
