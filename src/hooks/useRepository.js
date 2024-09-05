import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ id }) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id: id },
    fetchPolicy: "cache-and-network",
  });

  if (error) return error.message;

  if (loading) return loading;

  return { repository: data.repository };
};

export default useRepository;
