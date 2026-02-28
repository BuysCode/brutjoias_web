interface ProductsI {
  id: string | number;
  name: string;
  price: number;
  discount?: number;
  description: string;
  sizes: string[];
  images: string[];
  category: string;
}

export const earringsProducts: ProductsI[] = [
  {
    id: 1,
    name: "Brinco Ponto de Luz Classic",
    price: 79.9,
    description: "Brinco minimalista com zircônia central e acabamento em banho dourado.",
    sizes: ["Único"],
    images: ["/images/brincos/ponto-de-luz-1.jpg"],
    category: "brincos-minimalistas"
  },
  {
    id: 2,
    name: "Brinco Traço Linear Prata",
    price: 69.9,
    discount: 10,
    description: "Design fino e contemporâneo em formato linear, ideal para composições discretas.",
    sizes: ["Único"],
    images: ["/images/brincos/traco-linear-1.jpg"],
    category: "brincos-minimalistas"
  },
  {
    id: 3,
    name: "Brinco Lux Cravejado Cristal",
    price: 149.9,
    discount: 15,
    description: "Modelo sofisticado com microcravação de cristais brilhantes.",
    sizes: ["Único"],
    images: ["/images/brincos/lux-cravejado-1.jpg"],
    category: "brincos-cravejados"
  },
  {
    id: 4,
    name: "Brinco Gota Glam Cravejado",
    price: 169.9,
    description: "Formato gota com pedras cravejadas que elevam o visual para ocasiões especiais.",
    sizes: ["Único"],
    images: ["/images/brincos/gota-glam-1.jpg"],
    category: "brincos-cravejados"
  },
  {
    id: 5,
    name: "Argola Média Dourada Premium",
    price: 119.9,
    description: "Argola clássica com espessura média e acabamento polido.",
    sizes: ["P", "M", "G"],
    images: ["/images/brincos/argola-media-1.jpg"],
    category: "brincos-argolas"
  },
  {
    id: 6,
    name: "Argola Texturizada Statement",
    price: 139.9,
    discount: 20,
    description: "Argola com textura diferenciada para composições modernas.",
    sizes: ["M", "G"],
    images: ["/images/brincos/argola-texturizada-1.jpg"],
    category: "brincos-argolas"
  }
];