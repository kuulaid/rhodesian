import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { GoogleMap } from "../components/GoogleMap";

export function ContactPage() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=..."; // replace with your actual embed URL

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Get in touch with our team for wholesale inquiries and promotions!
        </p>

        {/* Grid layout: form (left) + map & info (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <ContactForm />

          {/* Map and contact details */}
          <div className="space-y-8">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <GoogleMap embedUrl={mapUrl} />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Unit 1, 2nd Floor, Liberte Building, Ignacia St, Punta Street
                    Barangay 395, Liberia Building, Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Telephone Number
                  </h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#f5c71d] mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">
                    rhodesiansalescorp@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;