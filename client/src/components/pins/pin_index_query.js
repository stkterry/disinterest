import React from 'react';
import { Query } from 'react-apollo';

import PinIndex from "./pin_index";
import Queries from "../../graphql/queries";
const { FETCH_SOME_PINS } = Queries;

const PinIndexQuery = () => (
  <Query query={FETCH_SOME_PINS}>
    {({ loading, error, data, fetchMore }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Somethin' done borked</p>
      return <PinIndex
        pins={data.somePins || []}
        onLoadMore={() => {
          return fetchMore({
            variables: {
              offset: data.somePins.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) return prev;
              return Object.assign({}, prev, {
                somePins: [...prev.somePins, ...fetchMoreResult.somePins]
              });
            }
          })
        }
        }
      />

    }}
  </Query>
);

export default PinIndexQuery;