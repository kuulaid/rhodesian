import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ProductCard } from '../components/ProductCard';
import { products, type Product } from '../data/products';
import ProductModal from "../components/ProductModal";

export function ProductsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialFilter = queryParams.get('filter') || 'All Products';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const formatForUrl = (str: string) => str.toLowerCase().replace(/\s+/g, '-');

  // Convert URL filter to dropdown-friendly text
  useEffect(() => {
    if (initialFilter) {
      const formatted = initialFilter
        .split('-')
        .map(s => s[0].toUpperCase() + s.slice(1))
        .join(' ');
      setSelectedCategory(formatted);
    }
  }, [initialFilter]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    if (category.toLowerCase() === "all products") {
      navigate("/products");
    } else {
      navigate(`/products?filter=${formatForUrl(category)}`);
    }
  };

  const filteredProducts = products.filter(product => {
  const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
  
  const matchesCategory =
    selectedCategory.toLowerCase() === "all products" ||
    product.category.toLowerCase() === selectedCategory.toLowerCase();

  return matchesSearch && matchesCategory;
});


  const handleProductClick = (product: Product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalProduct(null);
  };

  return (
    <div className="w-full">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Products
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12">
            A diverse product range to meet all your wholesale and retail needs.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={e => handleCategoryChange(e.target.value)}
                className="px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5c71d] bg-white"
              >
                <option>All Products</option>
                <option>Doggies' Choice</option>
                <option>Kuchi Kuchi</option>
                <option>Oilganics</option>
                <option>Tai Chi</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.name}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer"
              >
                <ProductCard name={product.name} image={product.image} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your search or filter.
              </p>
            </div>
          )}

          {/* Product Modal */}
          {modalProduct && (
            <ProductModal
              product={modalProduct}
              open={isModalOpen}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
