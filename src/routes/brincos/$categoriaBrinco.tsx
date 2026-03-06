import NotFound from '@/components/404'
import Header from '@/components/Header'
import { EarringsGrid } from '@/components/products/grid'
import { createFileRoute, Link } from '@tanstack/react-router'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const Route = createFileRoute('/brincos/$categoriaBrinco')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'BrutJoias - Brincos',
      },
    ],
  }),
})

const earringsSubRoutes: string[] = [
  'todos',
  'argolas',
  'minimalistas',
  'cravejados',
]

function RouteComponent() {
  const { categoriaBrinco } = Route.useParams()
  if (!earringsSubRoutes.includes(categoriaBrinco)) {
    return <NotFound />
  }
  return (
    <>
      <Header />

      <main className="">
        <Breadcrumb className="px-8 pt-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Início</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Brincos</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{categoriaBrinco}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold p-8">
          Brincos{' '}
          {earringsSubRoutes[0] === categoriaBrinco
            ? ''
            : `- ${categoriaBrinco}`}
        </h1>
        <div className="flex justify-center">
          <EarringsGrid
            category={`brincos${earringsSubRoutes[0] === categoriaBrinco ? '' : `-` + categoriaBrinco}`}
          />
        </div>
      </main>
    </>
  )
}
