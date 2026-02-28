import { earringsProducts } from "@/constants"
import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { formatToBR } from "@/lib/functions/products/formatPrice"

export function EarringsGrid({ category }: { category: string }) {

  const calculateDiscountedPrice = (
    price: number,
    discount: number
  ): number => {
    return price - (price * discount) / 100
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 space-x-8 space-y-8 md:space-y-0">
      {
        earringsProducts
          .filter((product) => product.category === category)
          .map(product => {

            const hasDiscount =
              typeof product.discount === "number" &&
              product.discount > 0

            const finalPrice = hasDiscount
              ? calculateDiscountedPrice(product.price, product.discount!)
              : product.price

            return (
              <div
                key={product.id}
                className="items-center flex justify-center flex-col w-85 gap-2 p-4 rounded-lg border-gray-300 border"
              >
                <h1 className="text-xl text-center font-bold">
                  {product.name}
                </h1>

                {!hasDiscount ? (
                  <p className="text-lg text-gray-700">
                    R$ {formatToBR(product.price)}
                  </p>
                ) : (
                  <div className="flex flex-col gap-2">
                    <del className="text-lg text-center text-gray-500">
                      R$ {formatToBR(product.price)}
                    </del>
                    <p className="text-lg text-center text-gray-700">
                      R$ {formatToBR(finalPrice)}
                    </p>
                  </div>
                )}

                <Button className="cursor-pointer w-full">
                  <ShoppingCart size={20} />
                  Comprar
                </Button>
              </div>
            )
          })
      }
    </div>
  )
}