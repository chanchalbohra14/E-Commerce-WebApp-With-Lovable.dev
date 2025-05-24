
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const [products] = useState([
    {
      id: 1,
      name: "Women's Elegant Blazer",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=center",
      rating: 4.8,
      reviews: 124,
      category: "womens-wear"
    },
    {
      id: 2,
      name: "Women's Professional Shirt",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=500&fit=crop&crop=center",
      rating: 4.6,
      reviews: 89,
      category: "womens-wear"
    },
    {
      id: 3,
      name: "Men's Checkered Dress Shirt",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&h=500&fit=crop&crop=center",
      rating: 4.9,
      reviews: 156,
      category: "mens-wear"
    },
    {
      id: 4,
      name: "Women's Summer Dress",
      price: 95.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop&crop=center",
      rating: 4.7,
      reviews: 78,
      category: "womens-wear"
    },
    {
      id: 5,
      name: "Men's Casual T-Shirt",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop&crop=center",
      rating: 4.5,
      reviews: 92,
      category: "mens-wear"
    },
    {
      id: 6,
      name: "Women's Designer Handbag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop&crop=center",
      rating: 4.6,
      reviews: 67,
      category: "womens-wear"
    },
    {
      id: 7,
      name: "Men's Leather Jacket",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop&crop=center",
      rating: 4.8,
      reviews: 143,
      category: "mens-wear"
    },
    {
      id: 8,
      name: "Women's Floral Blouse",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop&crop=center",
      rating: 4.4,
      reviews: 55,
      category: "womens-wear"
    }
  ]);

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      selectedCategory === "all" || product.category === selectedCategory
    )
    .filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium fashion at unbeatable prices.
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
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>
                <ProductFilter
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </SheetContent>
            </Sheet>
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
