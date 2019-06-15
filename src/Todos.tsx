import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

interface Props {}

export const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

export const Todos: React.FC<Props> = () => {
  return (
    <Query query={GET_TODOS}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.todos.map(({ type }, idx) => {
          return <p key={idx}>{type}</p>;
        });
      }}
    </Query>
  );
};
