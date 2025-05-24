
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 89.99,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Professional Camera Lens",
      price: 599.99,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 78
    },
    {
      id: 5,
      name: "Wireless Gaming Mouse",
      price: 79.99,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 92
    },
    {
      id: 6,
      name: "4K Webcam",
      price: 149.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 67
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium products at unbeatable prices.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
