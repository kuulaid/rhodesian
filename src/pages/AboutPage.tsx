import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";


export function AboutPage() {
  const coreValues = [
    { title: 'Partnership & Trust', image: '/images/about-values1.jpg' },
    { title: 'Creativity & Efficiency', image: '/images/about-values2.jpg' },
    { title: 'Speed & Flexibility', image: '/images/about-values3.jpg' }
  ];

  const milestones = [
    {
      year: '1991',
      description: 'Entered the garment facility industry as Rhodesian Distributor.',
      image: '/images/about-1991.jpg'
    },
    {
      year: '1995',
      description: 'Appointed as an exclusive distributor of cosmetic products by Splash Manufacturing Corporation.',
      image: '/images/about-1995.jpg'
    },
    {
      year: '2000',
      description: 'Appointed as an exclusive distributor of Comark International Corporation.',
      image: '/images/about-2000.jpg'
    },
    {
      year: '2004',
      description: 'Created the Oliganics Head Lice Treatment Shampoo.',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=250&fit=crop'
    },
    {
      year: '2005',
      description: 'Appointed as an exclusive distributor for GMA (Greater Manila Area) Drugstore of Unitrade Corporation.',
      image: '/images/about-2005.jpg'
    },
    {
      year: '2007',
      description: 'Launched Tai Chi Liniments which was hailed as one of the top 1000 brands in the Philippines in 2011.',
      image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?w=400&h=250&fit=crop'
    },
    {
      year: '2015',
      description: 'Rhodesian Distributor was restructured into Rhodesian Sales Corp.',
      image: '/images/about-2015.jpg'
    },
    {
      year: '2019',
      description: 'Rhodesian Sales Corp. has expanded its coverage beyond the Greater Manila Area to include Regions 1, 2, 3 and 4. ',
      image: '/images/about-2019.jpeg'
    },
    {
      year: 'Present',
      description: 'As a result of its expansion, a division of the company was spun off into a new entity, Owann Incorporated. ',
      image: '/images/about-present.jpg'
    }
  ];

  /** ✔ FIXED — Fully typed variants */
  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial="hidden"
            animate="visible"
            variants={defaultVariants}
          >
            About Us
          </motion.h1>

          <motion.p
            className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: defaultVariants.hidden,
              visible: {
                ...defaultVariants.visible,
                transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
              }
            }}
          >
            A leading distributor of pharmaceuticals, health, and consumer products in the Philippines.
          </motion.p>

          <motion.div
            className="w-full max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: defaultVariants.hidden,
              visible: {
                ...defaultVariants.visible,
                transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
              }
            }}
          >
            <img
              src="/images/about-hero.jpg"
              alt="Our team"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            Core Values
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={{
              hidden: defaultVariants.hidden,
              visible: {
                ...defaultVariants.visible,
                transition: { duration: 0.6, delay: 0.1, ease: "easeOut" }
              }
            }}
          >
            Building trust, driving innovation, delivering fast.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group"
                variants={defaultVariants}
              >
                <img src={value.image} alt={value.title} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-2">
                  <h3 className="text-white text-lg font-bold text-center">{value.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            Mission and Vision
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={defaultVariants}>
              <img src="/images/about-mv.jpg" alt="Mission and Vision" className="w-full rounded-lg shadow-lg" />
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={defaultVariants}>
                <h3 className="text-2xl font-bold text-[#f5c71d] mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To continuously improve our organizational setup of activities by providing our employees with the best working environment and career growth opportunities. Their ingenuity, innovativeness, and accomplishments make the company achieve its goals. We are committed to providing our customers with the best products that will enhance the highest quality of life they deserve.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: defaultVariants.hidden,
                  visible: {
                    ...defaultVariants.visible,
                    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" }
                  }
                }}
              >
                <h3 className="text-2xl font-bold text-[#f5c71d] mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To become an excellent service provider through professional management that satisfies business partners and consumers. To become the most preferred, profitable, most efficient co-marketer and distributor and be the leading company in its category, in the Philippines, and the Asian countries.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HISTORY & MILESTONES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={defaultVariants}
          >
            History and Milestones
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                variants={defaultVariants}
              >
                <div className="relative h-48">
                  <img src={milestone.image} alt={milestone.year} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow">
                    <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
