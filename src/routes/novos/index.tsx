import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/novos/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/novos/"!</div>
}
