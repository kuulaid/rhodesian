import { Link } from 'react-router-dom';
import { FacebookIcon} from 'lucide-react';
import { SiShopee } from "react-icons/si";
export function Footer() {
  return (
  <footer className="bg-[#2f472c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rhodesian Sales Corp.</h3>
            <p className="text-gray-300 text-sm">
              Trusted partner in distribution and wholesale.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-[#f5c71d] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#f5c71d] transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#f5c71d] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/products?filter=oilganics"
                  className="hover:text-[#f5c71d] transition"
                >
                  Oilganics
                </Link>
              </li>
              <li>
                <Link
                  to="/products?filter=kuchi-kuchi"
                  className="hover:text-[#f5c71d] transition"
                >
                  Kuchi Kuchi
                </Link>
              </li>
              <li>
                <Link
                  to="/products?filter=tai-chi"
                  className="hover:text-[#f5c71d] transition"
                >
                  Tai Chi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/RhodesianGroupofCompanies"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5c71d] transition"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>

              <a
                href="https://shopee.ph/rhodesian?categoryId=100631&entryPoint=ShopByPDP&itemId=6017068835"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5c71d] transition"
              >
                <SiShopee className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Rhodesian Sales Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
    );
}