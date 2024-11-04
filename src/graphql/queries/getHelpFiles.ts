import { gql } from '@apollo/client';

const getHelpFiles = gql`
  query GetHelpDocuments {
    getHelpDocuments {
      data {
        videos {
          id
          title
          description
          duration
          link
          visible
        }
        documents {
          id
          title
          link
          visible
        }
      }
    }
  }
`;

export default getHelpFiles;
