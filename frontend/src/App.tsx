import { useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';

import { IOlympicData } from './interfaces';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const createServerSideDatasource = (server: any) => {
  return {
    getRows: (params: any) => {
      console.log(
        '[Datasource] - rows requested by grid: startRow = ' +
          params.request.startRow +
          ', endRow = ' +
          params.request.endRow
      );
      if (server) {
        params.success({
          rowData: server.rows,
          rowCount: server.lastRow,
        });
      } else {
        params.fail();
      }
    },
  };
};

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
    lastRow
  }
`;

const App = () => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const gridRef = useRef<AgGridReact<IOlympicData>>(null);
  const { data } = useQuery(GET_OLYMPIANS);

  const dataSource = createServerSideDatasource(data);
  console.log(dataSource);
  useEffect(() => {
    if (data && gridRef.current?.api) {
      gridRef.current?.api!.setServerSideDatasource(dataSource);
    }
  }, [data]);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'athlete' },
    { field: 'country' },
    { field: 'year' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      minWidth: 100,
    };
  }, []);

  // make it a partial store with infinite scroll
  // get sorting and filtering working

  return (
    <>
      <div style={containerStyle}>
        <div style={gridStyle} className='ag-theme-alpine-dark'>
          <AgGridReact<IOlympicData>
            ref={gridRef}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowModelType={'serverSide'}
            serverSideInfiniteScroll
            cacheBlockSize={50}
            maxBlocksInCache={2}
            enableRangeSelection
          ></AgGridReact>
        </div>
      </div>
    </>
  );
};

export default App;
