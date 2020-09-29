import React from 'react';
import Link from 'next/link';
import get from 'lodash/get';
import { GetServerSideProps } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { ListStartupsQuery } from '../src/API';
import { listStartups } from '../src/graphql/queries';

type DirectoryProps = {
  startups: ListStartupsQuery['listStartups']['items'];
};

export default function Directory({ startups }: DirectoryProps) {
  return (
    <>
      <h1>Directory</h1>
      {startups.map((startup) => (
        <Link key={startup.id} href={`/startups/${startup.id}`}>
          <a>
            {startup.name}
          </a>
        </Link>
      ))}
      <Link href='/'>
        <a>Back to home</a>
      </Link>
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
