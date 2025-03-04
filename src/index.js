import { startStandaloneServer } from '@apollo/server/standalone'
import { server } from './apollo/server.js'

const { url } = await startStandaloneServer(server, {
  listen: { port: 4002 },
})

console.log(`🚀  Server ready at: ${url}`)
