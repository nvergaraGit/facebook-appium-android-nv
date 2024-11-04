
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // schema: 'https://graphql-api-main.exde.ca/graphql',
  schema: [
    {
      'https://dev.canalmoderno.embonorservices.cl/graphql': {
        headers: {
          'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRjb3J0ZXNAZW1ib25vci5jbCIsIm5hbWUiOiJEaWFuYSBDb3J0ZXMiLCJpZCI6IjY0YzdmNDI4YWI4MWQyMDAxMzE2Y2Y5MSIsInJvbGVzIjpbImVqZWN1dGl2by1jbW9kZXJubyIsImFkbWluLWNtb2Rlcm5vIl0sImFjY2Vzc1RhZyI6ImNsOiIsInJlZmVyZW5jZSI6ImNsOmFkbWluOm51bGwiLCJBQ0wiOlt7ImFjdGlvbnMiOlsiR0VUIC9vcmRlcnMtc2VydmljZS9vcmRlcnMiLCJHRVQgL21lZGlhLXNlcnZpY2UvKiIsIlBPU1QgL21lZGlhLXNlcnZpY2UvKiIsIkdFVCAvYXV0aC1zZXJ2aWNlLyoiLCJHRVQgL2Jhc2Utc2VydmljZS8qIl0sInJlc291cmNlcyI6WyJjbCJdLCJfaWQiOiI2NTBiMzNhMDJlN2U4YjAwMTNhMzU1YjkifSx7ImFjdGlvbnMiOlsiZ2V0Q2F0YWxvZ3VlcyIsImdldENhdGFnb3JpZXNDYXRhbG9ndWUiLCJ1cGxvYWRDYXRhbG9ndWVGaWxlIl0sInJlc291cmNlcyI6WyJjbDp2acOxYTpzYW4gZmVsaXBlIiwiY2w6dmnDsWE6dmnDsWEgZGVsIG1hciJdLCJfaWQiOiI2NGVjZDcxYzAwOThiYjAwMTRhNDAwMTAifV0sIm1ldGFkYXRhIjp7fSwibmVlZFBhc3N3b3JkVXBkYXRlIjpmYWxzZSwiY29udGV4dCI6ImFwcGNhbmFsbW9kZXJubyIsImlhdCI6MTcxNzc3Mzg1MiwiZXhwIjoxNzE3Nzc3NDUyfQ.siwGYzIh0szl8cFOZ54ooQToyO3UlGbagPcV5yGLdbzrT9k-BekKFLDrk53oXWE-8DF5CGB5azoFtgQ7Ct61UFkI8kd0tvdAAg-q0y2pf6pWl6pr_vyO3a61my1ev7tnab_mwZ4kr9acP0b_W05mb9bzFXQQDFMaZQXx8bw_dhmNZORKtxSHSEG3jaEFIJfD9YayF9MMXb4qTxVqev_VDZbC2Nfv25NL0oVKGWBl9NmGHKHDUcsxffpZhhxiS0I2wirVVdtpxzdAYcoLKDfVnApjFRUC3aqWbTjO4VTcBi8Da6BHbGrvXaN-PjOpbwjBsd6jRtgPVL4lSXXp2-WhGGlFau853M6wlekSk4ywTgEBSi1X9dhs-FV6UPZ8AAgEEGJc02hXnfsrDQJWu_MsIUXi1QyCaWR51a_JnSWFXtYXCwZPU3zawFr0_oLDb24jdYg-AwyVGadmLOQZGz1MQ6xT6HdyFReM-L38WPoS5WjS2evv2W2cT6YHqUbueI9dOFwvGbLfpRt8Umt1AtVvvNxV4rh5_jHgbWhlmYLFCo5dhD5aRbWs6InwOLqW6EW62KsLm1xgEp5PogEPZ64YwsMRe_PBDdn5-pcvpfuKpE-9wmed6cwoS41Z5tdrtgNxTIzNSr5F6uYG3mN8_gCNV0Qg0jGrbfjMgc9DbzG4e_Q'
        },
      },
    },
  ],
  documents: 'src/graphql/operations/*',
  generates: {
    'src/graphql/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config:{
        maybeValue: 'T | null | undefined',
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: false,
          defaultValue: false,
        }
      }
    }
  }
};

export default config;
