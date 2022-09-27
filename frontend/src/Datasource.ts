// const createServerSideDatasource: (server: any) => IServerSideDatasource = (
//   server: any
// ) => {
//   return {
//     getRows: params => {
//       var response = server.getData(params.request);
//       params.success({ rowData: response.rows });
//     },
//   };
// };

import { gql } from '@apollo/client';

const GET_OLYMPIANS = gql`
  query getRows {
    rows {
      id
      athlete
      age
      country
      year
      date
      sport
      gold
      silver
      bronze
      total
    }
  }
`;

const Datasource = () => {
  return;
};

export default Datasource;
