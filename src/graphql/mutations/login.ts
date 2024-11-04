import { gql } from '@apollo/client';

const login = gql`
  mutation Login($password: String!, $username: String!) {
    login(password: $password, username: $username) {
      refreshToken
      token
      error {
        details
      }
    }
  }
`;

export default login;
