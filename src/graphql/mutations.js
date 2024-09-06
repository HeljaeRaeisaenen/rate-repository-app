import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
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
