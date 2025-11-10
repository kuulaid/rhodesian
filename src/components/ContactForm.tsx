import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const WEB3FORMS_API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

type Status = "idle" | "loading" | "success" | "error" | "rate-limited";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form) return;

    
    const lastSubmit = localStorage.getItem("lastSubmitTime");
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 30000) {
      setStatus("rate-limited");
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

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
        localStorage.setItem("lastSubmitTime", now.toString());
        form.reset();
        setTimeout(() => setStatus("idle"), 2000); // Auto-hide popup
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 2000);
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <div className="relative bg-gray-50 p-8 rounded-lg shadow-lg overflow-hidden">
      {/* ✅ Popup Overlay */}
      {(status === "success" || status === "error" || status === "rate-limited") && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm animate-fadeIn">
          {status === "success" && (
            <div className="flex flex-col items-center text-green-600">
              <CheckCircle size={60} />
              <p className="mt-2 font-semibold">Message Sent!</p>
            </div>
          )}
          {status === "error" && (
            <div className="flex flex-col items-center text-red-600">
              <XCircle size={60} />
              <p className="mt-2 font-semibold">Something went wrong!</p>
            </div>
          )}
          {status === "rate-limited" && (
            <div className="flex flex-col items-center text-yellow-600">
              <XCircle size={60} />
              <p className="mt-2 font-semibold">Please wait before sending again.</p>
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Web3Forms hidden inputs */}
        <input type="hidden" name="access_key" value={WEB3FORMS_API_KEY} />
        <input type="hidden" name="subject" value="New Contact Form Submission" />

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
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#f5c71d] resize-none overflow-y-auto max-h-40"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full font-semibold px-6 py-3 rounded transition ${
            status === "loading"
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#f5c71d] hover:bg-[#d4ab0d] text-black"
          }`}
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
