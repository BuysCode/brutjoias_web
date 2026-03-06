import type { ProductsI } from '@/constants'
import { useState, useMemo } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator'

export const SearchJewel = ({ products }: { products: ProductsI[] }) => {
  const [search, setsearch] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const navigate = useNavigate()

  const filteredProducts = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase()
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearch),
    )
  }, [search, products])

  return (
    <div className="relative">
      <div className="flex flex-row gap-4">
        <Input
          type="text"
          placeholder="Procure anéis, colares..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="border-0 border-black hover:border-gray-700 placeholder:text-gray-500 placeholder:text-lg w-160 rounded-none border-b-2"
        />
        <Button
          onClick={() =>
            navigate({
              to: '/pesquisa/$nomeProduto',
              params: {
                nomeProduto: search,
              },
            })
          }
          className="p-4 cursor-pointer"
        >
          <Search size={20} />
        </Button>
      </div>

      {search.length > 0 && isFocused && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <li key={item.id}>
                <div
                  onClick={() => {
                    navigate({
                      to: '/produto/$idProduto',
                      params: {
                        idProduto: item.id as string,
                      },
                    })
                    setIsFocused(false)
                  }}
                  className="hover:bg-gray-100 cursor-pointer p-4"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                      <span>{item.name}</span>
                    </div>
                    {/* Só mostra o Separator se NÃO for o último item */}
                    {index < filteredProducts.length - 1 && (
                      <Separator
                        orientation="horizontal"
                        className="bg-gray-300"
                      />
                    )}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="p-4 text-gray-500">Nenhum produto encontrado</li>
          )}
        </ul>
      )}
    </div>
  )
}
