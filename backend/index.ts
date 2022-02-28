import { gql, ApolloServer } from "apollo-server"
  
const typeDefs = gql`
  type Query {
    nome: String
    idade: Int
    salario: Float
    ativo: Boolean
    id: ID,
    tecnologias: [String!]!
  }
`

const resolvers = {
  Query: {
    nome() {
      return 'Bruno Martins'
    },
    idade() {
      return 24
    },
    salario() {
      return 1234.50
    },
    ativo() {
      return true
    },
    id() {
      return 123321123
    },
    tecnologias() {
      return ["React", "Node", "GraphQL", "CSS"]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()