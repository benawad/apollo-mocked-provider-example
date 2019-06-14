export const typeDefs = `
directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE

enum CacheControlScope {
  PUBLIC
  PRIVATE
}

type Mutation {
  addTodo(type: String!): Todo
  updateTodo(id: String!, type: String!): Todo
}

type Query {
  todos: [Todo]
  todo(id: String!): Todo
}

type Todo {
  id: String!
  type: String!
}

"""
The \`Upload\` scalar type represents a file upload promise that resolves an
object containing \`stream\`, \`filename\`, \`mimetype\` and \`encoding\`.
"""
scalar Upload
`