import NotFound from '@/components/404'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/colares/$categoriaColar')({
  component: RouteComponent,
})

const necklacesSubRoutes : string[] = []

function RouteComponent() {
  const { categoriaColar } = Route.useParams()
  if (!necklacesSubRoutes.includes(categoriaColar)) {
    return (
      <NotFound />
    )
  }
  return <div>Hello "/colares/$categoriaColar"!</div>
}
