import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/populares/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'BrutJoias - Populares',
      },
    ],
  }),
})

function RouteComponent() {
  return <div>Hello "/populares/"!</div>
}
