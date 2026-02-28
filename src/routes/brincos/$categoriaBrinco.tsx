import NotFound from '@/components/404'
import Header from '@/components/Header'
import { EarringsGrid } from '@/components/products/grid'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brincos/$categoriaBrinco')({
  component: RouteComponent,
})

const earringsSubRoutes: string[] = ["todos", "argolas", "minimalistas", "cravejados"]

function RouteComponent() {
  const { categoriaBrinco } = Route.useParams()
  if (!earringsSubRoutes.includes(categoriaBrinco)) {
    return (
      <NotFound />
    )
  }
  return (
    <>
      <Header />

      <main className=''>
        <h1 className='text-2xl font-bold p-8'>
          Brincos {earringsSubRoutes[0] === categoriaBrinco ? "" : `- ${categoriaBrinco}`}
        </h1>
        <div className='flex justify-center'>
          <EarringsGrid category={`brincos${earringsSubRoutes[0] === categoriaBrinco ? "" : `-` + categoriaBrinco}`} />
        </div>
      </main>
    </>
  )
}
