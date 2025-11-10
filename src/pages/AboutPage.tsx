export function AboutPage() {
  const coreValues = [{
    title: 'Partnership & Trust',
    image: '/images/about-values1.jpg'
  }, {
    title: 'Creativity & Efficiency',
    image: '/images/about-values2.jpg'
  }, {
    title: 'Speed & Flexibility',
    image: '/images/about-values3.jpg'
  }];
  const milestones = [{
    year: '1991',
    description: 'Entered the garment facility industry as Rhodesian Distributor.',
    image: '/images/about-1991.jpg'
  }, {
    year: '1995',
    description: 'Appointed as an exclusive distributor of generic products by Brands Manufacturing Corporation.',
    image: '/images/about-1995.jpg'
  }, {
    year: '2000',
    description: 'Appointed as an exclusive distributor of Consave Health Corporation.',
    image: '/images/about-2000.jpg'
  }, {
    year: '2004',
    description: 'Appointed as Oilganics Head USA Treatment Shampoo.',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=400&h=250&fit=crop'
  }, {
    year: '2005',
    description: 'Appointed as an exclusive distributor for GM (Ginsan Marko Area) Drugstore of ultrasonic corporation.',
    image: '/images/about-2005.jpg'
  }, {
    year: '2007',
    description: 'Launched Tai Chi Green Tea which was hailed as one of the fastest growth in the industry.',
    image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?w=400&h=250&fit=crop'
  }, {
    year: '2015',
    description: 'Rhodesian Distributor joins NetroSales into Rhodesian Sales Corp.',
    image: '/images/about-2015.jpg'
  }, {
    year: '2019',
    description: 'Rhodesian Sales Corp. has expanded its coverage nationwide to Greater Manila Area and Visayas.',
    image: '/images/about-2019.jpeg'
  }, {
    year: 'Present',
    description: 'As a result of its expansion, a division of the company was spun off into a new entity, Rhodesian Healthcare Inc.',
    image: '/images/about-present.jpg'
  }];
  return <div className="w-full">
      {/* About Us Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Us
          </h1>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            A leading distributor of pharmaceuticals, health, and consumer
            products in the Philippines.
          </p>
          <div className="w-full max-w-4xl mx-auto">
            <img src="/images/about-hero.jpg" alt="Our team" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Core Values
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Building trust, driving innovation, delivering fast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
            {coreValues.map((value, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-64 object-cover"
                />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 px-4 py-2">
                  <h3 className="text-white text-lg font-bold text-center">
                    {value.title}
                  </h3>
                </div> 
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Mission and Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mission and Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/images/about-mv.jpg" alt="Mission and Vision" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#f5c71d] mb-4">
                  Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To continuously improve our organizational setup of people,
                  processes, and systems to create a working environment and
                  career growth opportunities. Their ingenuity, innovativeness,
                  and commitment to excellence will enable us to serve our
                  clients. We are committed to providing our customers with
                  quality and services that will enhance the highest level of
                  satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#f5c71d] mb-4">
                  Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To become an excellent service provider through innovative
                  leadership that serves our clients, partners and consumers. To
                  become the most preferred, profitable, most efficient
                  co-marketer and distributor of quality health, wellness and
                  lifestyle category, in the Philippines, and the Asian
                  countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* History and Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            History and Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative h-48">
                  <img src={milestone.image} alt={milestone.year} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow">
                    <span className="text-2xl font-bold text-gray-900">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}

export default AboutPage;