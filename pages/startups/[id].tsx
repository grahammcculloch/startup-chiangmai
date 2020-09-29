import React from 'react';
import get from 'lodash/get';
import { GetServerSideProps } from 'next';
import { API, graphqlOperation } from 'aws-amplify';
import { GetStartupQuery } from '../../src/API';
import { getStartup } from '../../src/graphql/queries';

type StartupDetailsProps = {
  startup: GetStartupQuery['getStartup'];
};

export default function StartupDetails({ startup }: StartupDetailsProps) {
  return <h1>{startup.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await API.graphql(
    graphqlOperation(getStartup, { id: context.params.id }),
  );
  return {
    props: {
      startup: get(result, ['data', 'getStartup'], []),
    },
  };
};
