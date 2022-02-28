import { gql, ApolloServer } from "apollo-server"

const produtos = [
  {
    nome: 'Notebook Dell',
    valor: 4500.99,
    id: 1
  },
  {
    nome: 'Mouse Razer',
    valor: 200.50,
    id: 2
  }
]

const usuarios = [
  {
    nome: 'Bruno',
    idade: 24,
    salario: 1234.50,
    ativo: true,
    id: 1
  },
  {
    nome: 'Ana',
    idade: 23,
    salario: 1500.95,
    ativo: true,
    id: 2
  }
]

const typeDefs = gql`
  type Usuario {
    nome: String
    idade: Int
    salario: Float
    ativo: Boolean
    id: ID
  }

  type Produto {
    nome: String
    valor: Float
    id: ID
  }

  type Query {
    usuarios: [Usuario]
    produtos: [Produto]
  }
`

const resolvers = {
  Query: {
    usuarios() {
      return usuarios
    },
    produtos() {
      return produtos
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen()