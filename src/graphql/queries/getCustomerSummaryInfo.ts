import { gql } from '@apollo/client';

const getCustomerSummaryInfo = gql`
  query GetCustomerSummaryInfo($customerInput: CustomerInput) {
    getCustomerSummaryInfo(customerInput: $customerInput) {
      totalCatalogs
      totalExhibitions
      totalInvoices
      totalOrders
      fillRateLastWeek {
        dateEnd
        dateIni
        percentage
        week
        flag
      }
    }
  }
`;

export default getCustomerSummaryInfo;
