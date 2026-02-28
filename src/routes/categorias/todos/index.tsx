import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categorias/todos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/categorias/todos/"!</div>
}
