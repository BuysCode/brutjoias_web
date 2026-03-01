import Header from '@/components/Header'
import { createFileRoute } from '@tanstack/react-router'
import { ProductDetails, ProductFeedbacks } from '@/components/products/info'

export const Route = createFileRoute('/produto/$idProduto')({
  component: RouteComponent,
})

function RouteComponent() {
  const { idProduto } = Route.useParams()

  return (
    <>
      <Header />
      <div className='p-8'>
        <ProductDetails />
        <ProductFeedbacks />
      </div>
    </>
  )
}
