import { useMutation, useApolloClient } from "@apollo/client";

import { SAVE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const client = useApolloClient();
  const [saveReview, result] = useMutation(SAVE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await saveReview({
      variables: {
        review: {
          ownerName,
          rating: parseInt(rating),
          repositoryName,
          text,
        },
      },
    });
    client.resetStore();

    return { data };
  };

  return [createReview, result];
};

export default useCreateReview;
