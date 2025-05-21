
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  subCategory: string;
  inStock: number;
  sku: string;
  expiryDate: string;
  status: 'Normal' | 'Markdown' | 'Damaged';
  weight: string;
  description: string;
  saleHistory?: SaleEntry[];
}

export interface SaleEntry {
  date: string;
  quantity: number;
  revenue: number;
}

export interface InventorySummary {
  totalQuantity: number;
  pendingReceival: number;
  shelfCapacity: number;
  totalValue: number;
  damagedGoods: number;
  exhaustedItems: number;
}

export const inventorySummary: InventorySummary = {
  totalQuantity: 113019,
  pendingReceival: 1938,
  shelfCapacity: 92, // percent
  totalValue: 12810865,
  damagedGoods: 12,
  exhaustedItems: 29
};

export const products: Product[] = [
  {
    id: "1",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12345",
    expiryDate: "May 28, 2025",
    status: "Normal",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications.",
    saleHistory: [
      { date: "May 28, 2025", quantity: 10, revenue: 4200 },
      { date: "May 27, 2025", quantity: 8, revenue: 3360 },
      { date: "May 26, 2025", quantity: 12, revenue: 5040 },
      { date: "May 25, 2025", quantity: 5, revenue: 2100 }
    ]
  },
  {
    id: "2",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12346",
    expiryDate: "May 28, 2025",
    status: "Normal",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications."
  },
  {
    id: "3",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12347",
    expiryDate: "May 15, 2025",
    status: "Markdown",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications."
  },
  {
    id: "4",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12348",
    expiryDate: "Jun 10, 2025",
    status: "Normal",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications."
  },
  {
    id: "5",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12349",
    expiryDate: "Jun 15, 2025",
    status: "Normal",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications."
  },
  {
    id: "6",
    name: "Nescafe Coffee",
    image: "https://m.media-amazon.com/images/I/61eDXs9QBML._AC_UF1000,1000_QL80_.jpg",
    price: 420,
    category: "Beverages",
    subCategory: "Coffee",
    inStock: 99,
    sku: "SKU-12350",
    expiryDate: "Jun 28, 2025",
    status: "Normal",
    weight: "300gms",
    description: "This is a sample product description. It would contain detailed information about the product's features and specifications."
  },
  {
    id: "7",
    name: "Fresh Mangoes",
    image: "https://img.freepik.com/free-photo/mango_144627-27267.jpg",
    price: 180,
    category: "Fruits",
    subCategory: "Fresh Fruits",
    inStock: 150,
    sku: "SKU-45678",
    expiryDate: "Jun 5, 2025",
    status: "Normal",
    weight: "1kg",
    description: "Fresh ripe mangoes sourced from local farms. Perfect for summer desserts and smoothies."
  }
];

export const chartData = [
  { name: 'Jul', value: 80 },
  { name: 'Aug', value: 60 },
  { name: 'Sep', value: 85 },
  { name: 'Oct', value: 55 },
  { name: 'Nov', value: 90 },
  { name: 'Dec', value: 30 },
];
