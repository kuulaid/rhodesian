import ContactForm from '../components/ContactForm';
import { GoogleMap } from "../components/GoogleMap";

export function ContactPage() {
  const mapUrl = "https://www.google.com/maps/embed?pb=..."; // replace with your embed URL

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch with our team for inquiries and promotions!
        </p>

        {/* Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Google Map */}
          <GoogleMap embedUrl={mapUrl} />
        </div>
      </div>
    </section>
  );
}
