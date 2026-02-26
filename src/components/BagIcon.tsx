import { ShoppingBag } from "lucide-react";
import { redirect } from '@tanstack/react-router'

interface BagIconProps {
  count: number;
}

export default function BagIcon({ count }: BagIconProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <button
        onClick={() => redirect({
          to: "/"
        })}
        aria-label="Shopping Bag"
        className="relative mx-0 cursor-pointer rounded-xl hover:bg-gray-100 transition-all duration-200 active:scale-95 bg-transparent"
      >
        <ShoppingBag className="w-6 h-6 text-gray-800" />
      </button>
      {count >= 0 && (
        <span
          className="
            absolute -top-1 -right-1
            min-w-3 h-3
            px-1
            flex items-center justify-center
            text-xs font-semibold
            text-white
            bg-black
            rounded-full
            shadow-md
          "
        >
          {count}
        </span>
      )}
    </div>
  );
}