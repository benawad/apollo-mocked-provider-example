import * as React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Formik, Form } from "formik";
import { GET_TODOS } from "./Todos";

interface Props {}

export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const TodoForm: React.FC<Props> = () => {
  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        let todos = [];
        try {
          const data = cache.readQuery({ query: GET_TODOS });
          todos = data.todos;
        } catch {}
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: [...todos, addTodo] }
        });
      }}
    >
      {(addTodo, { loading }) => (
        <Formik
          initialValues={{ type: "" }}
          validate={x => {
            if (!x.type) {
              return {
                type: "required"
              };
            }
            return {};
          }}
          onSubmit={values => {
            addTodo({ variables: values });
          }}
        >
          {({ handleChange, values, errors, touched }) => (
            <Form>
              <div>
                <input
                  name="type"
                  placeholder="todo..."
                  value={values.type}
                  onChange={handleChange}
                />
                {touched.type && errors.type && (
                  <div style={{ color: "red" }}>{errors.type}</div>
                )}
              </div>
              <button
                disabled={loading}
                type="submit"
              >
                Add Todo
              </button>
            </Form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};
