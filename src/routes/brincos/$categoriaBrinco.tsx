import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brincos/$categoriaBrinco')({
  component: RouteComponent,
})

function RouteComponent() {
  const { categoriaBrinco } = Route.useParams()
  return <div>Hello {categoriaBrinco}!</div>
}
