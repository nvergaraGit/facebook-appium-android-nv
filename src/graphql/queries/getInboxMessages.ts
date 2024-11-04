import { gql } from '@apollo/client';

const getInboxMessages = gql`
  query GetInboxMessages($getInboxMessagesInput: GetInboxMessagesInput!) {
    getInboxMessages(getInboxMessagesInput: $getInboxMessagesInput) {
      data {
        body
        category
        createdAt
        image
        messageId
        pairId
        status
        title
        updatedAt
      }
    }
  }
`;

export default getInboxMessages;
