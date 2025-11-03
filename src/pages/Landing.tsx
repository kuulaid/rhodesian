import React from 'react';
import { CheckCircleIcon, PackageIcon, TruckIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';

export function Landing() {
  const stats = [
    { number: '3,800+', label: 'Active Retail Doors' },
    { number: '1,700+', label: 'Drugstore Partnerships' },
    { number: '20+', label: 'Corporate Partnerships' },
  ];

  const features = [
    { icon: CheckCircleIcon, title: 'Quality Control', description: 'Every product is put through quality control.' },
    { icon: PackageIcon, title: 'Wide Product Range', description: 'Extensive selection of quality products.' },
    { icon: TruckIcon, title: 'Fast Delivery', description: 'Reliable, fast delivery networks.' },
    { icon: ShieldCheckIcon, title: 'Trusted Partner', description: '15 years of industry experience.' },
  ];

  const products = [
  { name: 'Oilganics', logo: '/src/assets/logos/oilganics.jpg' },
  { name: "Doggies' Choice", logo: '/src/assets/logos/doggies_choice.jpeg' },
  { name: 'Tai Chi', logo: '/src/assets/logos/taichi.jpg' },
  { name: 'Kuchi Kuchi', logo: '/src/assets/logos/kuchi.jpg' },
];


  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section id="home" className="relative h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-bg.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-[#2f472c] opacity-80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f2c500] mb-4">
            Trusted Partner in Distribution and Wholesale
          </h1>
          <p className="text-white text-lg md:text-xl">
            We are devoted and focused on deliver exceptional services and a competitive advantage.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#2f472c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            We offer quality, <span className="text-gray-600">with the best products and service</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="bg-[#2f472c] w-12 h-12 rounded flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#f5c71d]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f5c71d] mb-4">Rhodesian Sales Corp.</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A leading distributor and wholesaler of pharmaceutical, cosmetic and consumer goods with a strong presence in
                the regional retailers across the Philippines.
              </p>
              <button className="bg-[#f5c71d] hover:bg-[#d4ab0d] text-black font-semibold px-8 py-3 rounded transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-[#2f472c]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Our Products</h2>
    <p className="text-center text-gray-300 mb-12">
      A diverse product range to meet all your wholesale and retail needs.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="border-2 border-white p-12 rounded-lg flex flex-col items-center justify-center hover:bg-[#3d5a38] transition"
        >
          {/* Logo image */}
          <img
            src={product.logo} // Add a `logo` property to your products array
            alt={product.name}
            className="w-32 h-32 rounded-full mb-6 object-cover shadow-lg"
          />
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12">
            Get in touch with our team for wholesale inquiries and promotions!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f5c71d] hover:bg-[#d4ab0d] text-black font-semibold px-6 py-3 rounded transition"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Unit 1, 2nd Floor, Liberte Building, Ignacia St, Punta Street Barangay 395, Liberia Buildiing Philippines
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telephone Number</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">rhodesiansalescorp@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
