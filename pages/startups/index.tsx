import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import get from 'lodash/get';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  DataGrid,
  ColDef,
  ValueFormatterParams,
} from '@material-ui/data-grid';
import { default as MuiLink } from '@material-ui/core/Link';
import { GetServerSideProps } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { ListStartupsQuery } from '../../src/API';
import { listStartups } from '../../src/graphql/queries';

type DirectoryProps = {
  startups: ListStartupsQuery['listStartups']['items'];
};

const columns: ColDef[] = [
  { field: 'id', hide: true },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    renderCell: (params: ValueFormatterParams) => (
      <Link href={`/startups/${params.data.id}`} passHref>
        <MuiLink>{params.value}</MuiLink>
      </Link>
    ),
  },
  { field: 'address', headerName: 'Address', width: 250 },
  { field: 'customer', headerName: 'Customer', width: 100 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'category', headerName: 'Category', width: 100 },
  { field: 'sector', headerName: 'Sector', width: 100 },
  { field: 'stage', headerName: 'Stage', width: 100 },
  { field: 'description', headerName: 'Description', width: 250 },
];

export default function Directory({ startups }: DirectoryProps) {
  return (
    <>
      <Head>
        <title>Directory | Startup Chiang Mai</title>
      </Head>
      <Typography variant='h3' component='h1' gutterBottom>
        Startup Directory
      </Typography>
      <Box width="100%" height="60vh">
        <DataGrid autoHeight rows={startups} columns={columns} />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await API.graphql(
    graphqlOperation(listStartups, { id: 'global' }),
  );
  return {
    props: {
      startups: get(result, ['data', 'listStartups', 'items'], []),
    },
  };
};
