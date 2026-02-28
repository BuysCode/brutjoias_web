import { earringsProducts } from "@/constants"
import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"

export function EarringsGrid({ category }: { category: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 space-x-8 space-y-8 md:space-y-0">
      {
        earringsProducts.filter((product) => product.category === category).map(product => (
          <div key={product.id} className="items-center flex justify-center flex-col w-80 gap-2 p-4 rounded-lg border-gray-300 border">
            <h1 className="text-xl text-center font-bold">
              {product.name}
            </h1>
            <p className="text-lg text-gray-500">
              R$ {product.price.toFixed(2)}
            </p>
            <Button className="cursor-pointer w-full">
              <ShoppingCart size={20} />
              Comprar
            </Button>
          </div>
        ))
      }
    </div>
  )
}