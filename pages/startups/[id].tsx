import React from 'react';
import Head from 'next/head';
import get from 'lodash/get';
import { GetServerSideProps } from 'next';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { API, graphqlOperation } from 'aws-amplify';
import { GetStartupQuery } from '../../src/API';
import PageBreadcrumbs from '../../src/components/PageBreadcrumbs';
import { getStartup } from '../../src/graphql/queries';

type StartupDetailsProps = {
  startup: GetStartupQuery['getStartup'];
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);

export default function StartupDetails({ startup }: StartupDetailsProps) {
  const styles = useStyles();
  return (
    <>
      <Head>
        <title>{startup.name} | Startup Chiang Mai</title>
      </Head>
      <PageBreadcrumbs
        breadcrumbs={[
          { label: 'Startups', href: '/startups' },
          { label: startup.name },
        ]}
      />
      <Typography variant='h3' component='h1' gutterBottom>
        {startup.name}
      </Typography>
    </>
  );
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
