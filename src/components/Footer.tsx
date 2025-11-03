import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#2f472c] text-white py-12">
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
                <a href="#about" className="hover:text-[#f5c71d] transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5c71d] transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5c71d] transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#f5c71d] transition">
                  Oilganics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5c71d] transition">
                  Kuchi Kuchi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f5c71d] transition">
                  Tai Chi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f5c71d] transition">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#f5c71d] transition">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#f5c71d] transition">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Rhodesian Sales Corp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#f5c71d] transition">
              Privacy
            </a>
            <a href="#" className="hover:text-[#f5c71d] transition">
              Terms
            </a>
            <a href="#" className="hover:text-[#f5c71d] transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>;
}