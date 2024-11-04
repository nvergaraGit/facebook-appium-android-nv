import { gql } from '@apollo/client';

const RegisterDevice = gql`
  mutation RegisterDevice($registerDeviceInput: RegisterDeviceInput!) {
    registerDevice(registerDeviceInput: $registerDeviceInput) {
      data {
        message
        statusCode
      }
    }
  }
`;

export default RegisterDevice;
