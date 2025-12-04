import { CheckCircleIcon, PackageIcon, TruckIcon, ShieldCheckIcon, MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AnimatedCounter from '../components/AnimatedCounter';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import oilganicsLogo from '../assets/logos/oilganics.jpg';
import doggiesLogo from '../assets/logos/doggies_choice.jpeg';
import taichiLogo from '../assets/logos/taichi.jpg';
import kuchiLogo from '../assets/logos/kuchi.jpg';

// -------- FIXED: Using cubic-bezier numbers instead of "easeOut" -------- //
const EASE = [0.16, 1, 0.3, 1] as const;

// General Animation Variants
const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    }
  },
};

// Variants for staggered cards
const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
    }
  },
};

export function LandingPage() {
  const navigate = useNavigate();

  const stats = [
    { number: 3800, label: 'Active Retail Doors' },
    { number: 1700, label: 'Drugstore Partnerships' },
    { number: 20, label: 'Corporate Partnerships' },
  ];

  const features = [
    { icon: CheckCircleIcon, title: 'Organized', description: 'Everything is structured and managed efficiently for smooth workflow.' },
    { icon: PackageIcon, title: 'Wide Product Range', description: 'Extensive selection of quality products.' },
    { icon: TruckIcon, title: 'Fast Delivery', description: 'Reliable, fast delivery networks.' },
    { icon: ShieldCheckIcon, title: 'Trusted Partner', description: '34 years of industry experience.' },
  ];

  const products = [
    { name: 'Oilganics', logo: oilganicsLogo },
    { name: "Doggies' Choice", logo: doggiesLogo },
    { name: 'Tai Chi', logo: taichiLogo },
    { name: 'Kuchi Kuchi', logo: kuchiLogo },
  ];

  return (
    <div className="flex flex-col">
      
      {/* HERO */}
      <section id="home" className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/landing-hero-bg.jpg)' }}>
          <motion.div 
            className="absolute inset-0 bg-[#2f472c] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.5 }}
          />
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: EASE, staggerChildren: 0.2 }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f2c500] mb-4"
            variants={defaultVariants}
          >
            Trusted Partner in Distribution and Wholesale
          </motion.h1>

          <motion.p 
            className="text-white text-lg md:text-xl"
            variants={defaultVariants}
          >
            We are devoted and focused on deliver exceptional services and a competitive advantage.
          </motion.p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-[#2f472c] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.number} />
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            We offer quality, <span className="text-gray-600">with the best products and service</span>
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition"
                variants={featureVariants}
              >
                <div className="bg-[#2f472c] w-12 h-12 rounded flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#f5c71d]" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            Who We Are
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={defaultVariants}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={defaultVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f5c71d] mb-4">Rhodesian Sales Corp.</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A leading distributor and wholesaler of pharmaceutical, cosmetic and consumer goods with a strong presence in
                the regional retailers across the Philippines.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="bg-[#f5c71d] hover:bg-[#d4ab0d] text-black font-semibold px-8 py-3 rounded transition"
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 bg-[#2f472c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            Our Products
          </motion.h2>

          <motion.p 
            className="text-center text-gray-300 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: EASE, delay: 0.1 }
              }
            }}
          >
            A diverse product range to meet all your wholesale and retail needs.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="border-2 border-white p-12 rounded-lg flex flex-col items-center justify-center hover:bg-[#3d5a38] transition"
                variants={featureVariants}
              >
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-32 h-32 rounded-full mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            Contact Us
          </motion.h2>

          <motion.p 
            className="text-center text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: EASE, delay: 0.1 }
              }
            }}
          >
            Get in touch with our team for wholesale inquiries and promotions!
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            
            <motion.div variants={defaultVariants}>
              <ContactForm />
            </motion.div>

            <motion.div className="space-y-8" variants={defaultVariants}>
              <div className="flex items-start space-x-4">
                <MapPinIcon className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">31 Iglesia Ni Kristo Street, Marilao, 3019 Bulacan</p>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default LandingPage;
