import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  waitForDomChange
} from "@testing-library/react";
import { ApolloMockedProvider } from "./test-utils/providers";
import App from "./App";

afterEach(cleanup);

test("make sure I can submit a todo", async () => {
  const { getByPlaceholderText, getByTestId, getByText } = render(
    <ApolloMockedProvider
      customResolvers={{
        Mutation: () => ({
          addTodo: () => ({ id: 1, type: "go to the store" })
        })
      }}
    >
      <App />
    </ApolloMockedProvider>
  );

  const todoInput = getByPlaceholderText("todo...");
  const submitButton = getByTestId("submit-button");
  fireEvent.click(submitButton);

  await waitForDomChange();

  getByText("required");

  fireEvent.change(todoInput, { target: { value: "go to the store" } });

  fireEvent.click(submitButton);

  await waitForElement(() => getByText("go to the store"));
});
