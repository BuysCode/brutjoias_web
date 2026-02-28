import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"

export function ProductDetails() {
  return (
    <>
      <Button className="cursor-pointer w-full">
        <ShoppingCart size={20} />
        Comprar
      </Button>
    </>
  )
}

export function ProductFeedbacks() {
  return (
    <></>
  )
}