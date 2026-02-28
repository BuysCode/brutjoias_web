import type { ProductsI } from '@/constants';
import { useState, useMemo } from 'react';
import { Input } from '../ui/input';

export const SearchJewel = ({ products }: { products: ProductsI[] }) => {
  const [search, setsearch] = useState('');

  const filteredProducts = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();
    
    return products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [search, products]);

  return (
    <div>
      <Input
        type="text"
        placeholder="Procure anéis, colares..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        className="border-0 border-black hover:border-gray-700 placeholder:text-gray-500 placeholder:text-lg w-160 rounded-none border-b-2"
      />

      <ul className="gap-2 flex flex-col">
        {search.length > 0 && filteredProducts.map((item) => (
          <li key={item.id}>
            {/* <img src={item.images[0]} alt={item.name} width={30} /> */}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};