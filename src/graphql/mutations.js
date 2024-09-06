import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SAVE_REVIEW = gql`
  mutation Review($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      repositoryId
    }
  }
`;
