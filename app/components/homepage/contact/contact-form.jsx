"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { SpotlightCard } from "@/app/components/ui/spotlight";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    } else {
      setError((prev) => ({ ...prev, required: false }));
    }

    try {
      setIsLoading(true);
      
      const formData = new FormData();
      formData.append('name', userInput.name);
      formData.append('email', userInput.email);
      formData.append('message', userInput.message);
      formData.append('_subject', 'New portfolio contact');
      formData.append('_captcha', 'false');

      const res = await fetch('https://formsubmit.co/aniketmhalungekar0703@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SpotlightCard className="p-6 sm:p-8 border-neutral-200 dark:border-white/10">
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Send a Message</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Fill out the form below and I&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSendMail} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">Your Name</label>
          <input
            className="w-full rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-violet-500/80 focus:bg-white/10 focus:outline-none transition-all duration-300"
            type="text"
            placeholder="John Doe"
            maxLength="100"
            required
            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
            onBlur={checkRequired}
            value={userInput.name}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">Your Email</label>
          <input
            className="w-full rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-violet-500/80 focus:bg-white/10 focus:outline-none transition-all duration-300"
            type="email"
            placeholder="john@example.com"
            maxLength="100"
            required
            value={userInput.email}
            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
            onBlur={() => {
              checkRequired();
              setError((prev) => ({ ...prev, email: !isValidEmail(userInput.email) }));
            }}
          />
          {error.email && <p className="text-xs text-red-400">Please enter a valid email address.</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">Your Message</label>
          <textarea
            className="w-full rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:border-violet-500/80 focus:bg-white/10 focus:outline-none transition-all duration-300"
            placeholder="Hello, I'd like to talk about..."
            maxLength="500"
            name="message"
            required
            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
            onBlur={checkRequired}
            rows="4"
            value={userInput.message}
          />
        </div>

        {error.required && <p className="text-xs text-red-400">All fields are required!</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl p-[1px] font-semibold text-sm focus:outline-none"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 transition-all duration-300 group-hover:opacity-100" />
          <span className="relative flex items-center justify-center gap-2 w-full rounded-xl bg-neutral-900 dark:bg-black/90 px-6 py-3.5 text-white transition-all duration-300 group-hover:bg-neutral-800 dark:group-hover:bg-black/60">
            {isLoading ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <span>Send Message</span>
                <TbMailForward size={18} className="text-pink-400 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </span>
        </button>
      </form>
    </SpotlightCard>
  );
};

export default ContactForm;
