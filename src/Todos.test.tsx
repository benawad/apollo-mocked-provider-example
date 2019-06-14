import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Todos } from "./Todos";
import {
  ApolloLoadingProvider,
  ApolloErrorProvider,
  ApolloMockedProvider
} from "./test-utils/providers";

afterEach(cleanup);

test("TodoForm", async () => {
  const { debug } = render(
    <ApolloMockedProvider
      customResolvers={{
        Query: () => ({
          todos: () => [{ id: 1, type: "hello from custom mocked data" }]
        })
      }}
    >
      <Todos />
    </ApolloMockedProvider>
  );

  debug();
  await Promise.resolve();
  debug();
});
