import NotFound from '@/components/404'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/aneis/$categoriaAnel')({
  component: RouteComponent,
})

const ringsSubRoutes : string[] = []

function RouteComponent() {
  const { categoriaAnel } = Route.useParams()
  if (!ringsSubRoutes.includes(categoriaAnel)){
    return (
      <NotFound/>
    )
  }
  return <div>Hello "/aneis/$categoriaAnel"!</div>
}
