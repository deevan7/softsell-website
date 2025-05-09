import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddr: '',
    companyName: '',
    licenseType: '',
    messageContent: '',
  });

  const updateForm = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendForm = (e) => {
    e.preventDefault();
    alert("Message sent! (demo version)");
  };

  return (
    <section className="min-h-screen px-4 py-16 flex items-center justify-center bg-gradient-to-br from-purple-100 via-lavender to-purple-200 dark:from-purple-950 dark:via-purple-900 dark:to-black transition-colors duration-500">
      <div className="w-full max-w-xl bg-white/90 dark:bg-[#1e1b2e]/90 border border-purple-200 dark:border-purple-800 rounded-xl shadow-2xl p-6 md:p-8 backdrop-blur-md">
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-purple-700 dark:text-purple-300">
            Get In Touch
            <span className="block w-[60px] h-[2px] bg-purple-500 dark:bg-purple-400 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="text-sm mt-2 opacity-80 text-gray-700 dark:text-gray-300">
            We usually respond within 24 hours
          </p>
        </div>

        <form onSubmit={sendForm} className="flex flex-col gap-6">
          {[
            { type: 'text', name: 'fullName', placeholder: 'Your full name' },
            { type: 'email', name: 'emailAddr', placeholder: 'Work email' },
            { type: 'text', name: 'companyName', placeholder: 'Company (optional)' },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              required={field.type !== 'text'}
              onChange={updateForm}
              className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-[15px] focus:ring-2 ring-purple-400 focus:outline-none shadow-sm dark:shadow-md transition-all duration-200"
              placeholder={field.placeholder}
            />
          ))}

          <select 
            name="licenseType"
            onChange={updateForm}
            className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-[15px] cursor-pointer focus:ring-2 ring-purple-400 focus:outline-none shadow-sm dark:shadow-md transition-all duration-200"
            required
          >
            <option value="">What license type?</option>
            <option>Office Suite</option>
            <option>Antivirus Protection</option>
            <option>Design Tools</option>
          </select>

          <textarea
            name="messageContent"
            onChange={updateForm}
            rows={5}
            placeholder="Describe your needs..."
            className="bg-white dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-[15px] resize-y min-h-[120px] focus:ring-2 ring-purple-400 focus:outline-none shadow-sm dark:shadow-md transition-all duration-200"
          ></textarea>

          <button 
            type="submit" 
            className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-[14px] rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.05] active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <span className="relative font-semibold tracking-wide">
              Send Message
              <span className="absolute right-[-28px] top-1/2 -translate-y-1/2">✉️</span>
            </span>
          </button>
        </form>

        {/* Designed by Deevankumar Gaddala */}
        <div className="text-center mt-[60px]">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By <span className="font-semibold text-gray-900 dark:text-white">Deevankumar Gaddala</span>
          </p>
        </div>
      </div>
    </section>
  );
}
