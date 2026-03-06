import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pesquisa/$nomeProduto')({
  component: RouteComponent,
})

function RouteComponent() {
  const { nomeProduto } = Route.useParams()
  return <div>Hello "/pesquisa/{nomeProduto}"!</div>
}
