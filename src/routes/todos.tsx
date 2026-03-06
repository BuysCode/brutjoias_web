import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todos')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'BrutJoias - Produtos',
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/todos"!</div>
}
