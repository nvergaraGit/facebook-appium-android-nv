import { gql } from '@apollo/client';

const getProblemOptionsReview = gql`
  query GetProblemOptionsReview {
    getProblemOptionsReview {
      data {
        id
        option
      }
    }
  }
`;

export default getProblemOptionsReview;
