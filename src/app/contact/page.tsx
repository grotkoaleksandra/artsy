"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "artist",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-12 md:pt-14">
      {/* Header */}
      <section className="px-6 py-12 md:py-16 max-w-[1400px] mx-auto">
        <p className="text-[11px] tracking-[2px] uppercase text-gray-400 mb-4">
          Contact
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-[28px] md:text-[36px] font-normal leading-[1.15] tracking-[0.3px] max-w-xl">
          Get in touch
        </h1>
        <p className="mt-4 text-[13px] leading-[20px] tracking-[0.3px] text-gray-500 max-w-lg">
          Whether you are an artist looking to join the collective, a dealer
          searching for new talent, or a collector with a specific vision.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 pb-24 md:pb-32 max-w-[600px] mx-auto">
        {submitted ? (
          <div className="border-t border-gray-100 pt-12 text-center animate-fade">
            <p className="text-[13px] tracking-[0.3px] uppercase mb-4">
              Thank you
            </p>
            <p className="text-[13px] leading-[20px] tracking-[0.3px] text-gray-500">
              We have received your message and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name */}
            <div>
              <label className="block text-[11px] tracking-[1.5px] uppercase text-gray-400 mb-3">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] tracking-[0.3px] placeholder:text-gray-300 focus:border-black focus:outline-none transition-colors duration-100"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] tracking-[1.5px] uppercase text-gray-400 mb-3">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] tracking-[0.3px] placeholder:text-gray-300 focus:border-black focus:outline-none transition-colors duration-100"
                placeholder="your@email.com"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block text-[11px] tracking-[1.5px] uppercase text-gray-400 mb-3">
                I am a
              </label>
              <div className="flex gap-3 flex-wrap">
                {["artist", "dealer", "collector", "other"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, type })}
                    className={`px-5 py-2.5 text-[11px] tracking-[1.5px] uppercase border transition-colors duration-100 ${
                      formData.type === type
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-gray-500 hover:border-black hover:text-black"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] tracking-[1.5px] uppercase text-gray-400 mb-3">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-200 py-3 text-[13px] tracking-[0.3px] placeholder:text-gray-300 focus:border-black focus:outline-none transition-colors duration-100 resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="px-8 py-3 bg-blue text-white text-[11px] tracking-[1.5px] uppercase hover:bg-blue-hover transition-colors duration-100"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
