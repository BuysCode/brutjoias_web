import { ImageOff, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"

interface ProductInfoProps {
  productId?: number | string
}

export function ProductDetails({ productId } : ProductInfoProps) {
  return (
    <div>
      <div className="flex items-center justify-evenly flex-col md:flex-row">
        <div>
          <div className="w-100 h-120 bg-gray-500 rounded-lg flex items-center justify-center text-gray-400 text-sm border-2 border-dashed border-gray-300">
            <ImageOff size={40} />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Nome do Produto</h1>
          <Button className="cursor-pointer w-full md:w-120">
            <ShoppingCart size={20} />
            Comprar
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export function ProductFeedbacks({ productId } : ProductInfoProps) {
  return (
    <></>
  )
}