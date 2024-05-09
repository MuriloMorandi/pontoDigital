import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

import funcionarioRoutes from "./services/funcionarios/routesFuncionario";

const app = new Hono()
app.use(cors());

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/funcionario', funcionarioRoutes)


const port = 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
