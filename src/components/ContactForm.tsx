import { useState } from "react";
import type { FormEvent } from "react";

const WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form) return; // Safety check

    setStatus("loading");

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset(); // Safe reset
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      {status === "success" && (
        <p className="mb-4 text-green-600 font-semibold">
          Thank you! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="mb-4 text-red-600 font-semibold">
          Oops! Something went wrong. Please try again.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Web3Forms hidden inputs */}
        <input type="hidden" name="access_key" value={WEB3FORMS_API_KEY} />
        <input type="hidden" name="subject" value="New Contact Form Submission" />
        <input type="hidden" name="redirect" value="" />

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d]"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full font-semibold px-6 py-3 rounded transition ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#f5c71d] hover:bg-[#d4ab0d] text-black"
          }`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
