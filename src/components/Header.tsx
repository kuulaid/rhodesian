import { Link, useLocation } from 'react-router-dom';
export function Header() {
  const location = useLocation();
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Rhodesian Sales Corp.
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`transition ${location.pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}>
              Home
            </Link>
            <Link to="/about" className={`transition ${location.pathname === '/about' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}>
              About
            </Link>
            <Link to="/products" className={`transition ${location.pathname === '/products' ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900'}`}>
              Products
            </Link>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </a>
          </nav>
          <button className="bg-[#f5c71d] hover:bg-[#d4ab0d] text-black font-semibold px-6 py-2 rounded transition">
            Get in Touch
          </button>
        </div>
      </div>
    </header>;
}