import { gql } from '@apollo/client';

const updateInboxMessage = gql`
  mutation UpdateInboxMessage($updateInboxMessageInput: UpdateInboxMessageInput!) {
    updateInboxMessage(updateInboxMessageInput: $updateInboxMessageInput) {
      data {
        message
        statusCode
      }
    }
  }
`;

export default updateInboxMessage;
