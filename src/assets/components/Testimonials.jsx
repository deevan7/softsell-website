export default function ClientVoices() {
    return (
      <section className="relative py-[70px] bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-[55px]">
            <h2 className="text-[32px] md:text-[38px] font-bold mb-3 font-serif text-gray-900 dark:text-white">
              Voices from Our Partners
              <span className="block mt-4 mx-auto w-[80px] h-[1px] bg-gradient-to-r from-transparent via-sunset to-transparent"></span>
            </h2>
            <p className="text-sm opacity-90 text-gray-700 dark:text-gray-300">Trusted by teams at fast-growing companies</p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-[30px] px-4">
            {[
              { 
                name: "Alicia Grey", 
                role: "Co-Founder", 
                company: "AppFlow", 
                msg: "Liquidated 15+ licenses in record time. Freed up essential budget for our Series B!",
                accent: "bg-lilac/10",
                logo: "https://randomuser.me/api/portraits/women/45.jpg"
              },
              { 
                name: "Mark Tan", 
                role: "CTO", 
                company: "NetCore", 
                msg: "Received payment before our accounting team even filed the paperwork. Unbeatable speed.",
                accent: "bg-sunset/10",
                logo: "https://randomuser.me/api/portraits/men/45.jpg"
              }
            ].map((testimonial, i) => (
              <div 
                key={i}
                className={`testimonial-card p-[30px] rounded-[18px] border-[1.8px] border-porcelain dark:border-night ${testimonial.accent} hover:transform hover:translate-y-[-5px] transition-all duration-400 group`}
              >
                <div className="relative mb-6">
                  <div className="absolute -top-[42px] left-0 w-[60px] h-[60px] rounded-full bg-gradient-to-br from-sunset to-ember flex items-center justify-center text-white font-bold shadow-md">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover rounded-full" 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/60x60/000000/FFFFFF?text=No+Image"; }} 
                    />
                  </div>
                  <div className="text-[72px] absolute top-[-30px] right-0 opacity-10 dark:opacity-20">
                    ”
                  </div>
                </div>
                
                <blockquote className="text-[17px] leading-relaxed mb-6 italic font-medium opacity-95 text-gray-800 dark:text-gray-200">
                  "{testimonial.msg}"
                </blockquote>
                
                <div className="border-t-[1.5px] border-porcelain dark:border-night pt-4">
                  <h4 className="font-semibold text-[18px] mb-1 text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm opacity-90 text-gray-700 dark:text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Decorative elements */}
          <div className="absolute top-20 -left-10 w-[300px] h-[300px] bg-lilac/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-sunset/10 rounded-full blur-[80px] opacity-30"></div>
        </div>
  
        <style jsx>{`
          .testimonial-card {
            transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
            backdrop-filter: blur(4px);
          }
          .testimonial-card:hover {
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          }
          blockquote::before {
            content: '“';
            position: absolute;
            left: -20px;
            top: -10px;
            font-size: 4em;
            opacity: 0.1;
          }
          @media (prefers-reduced-motion: reduce) {
            .testimonial-card {
              transition: none !important;
            }
          }
        `}</style>
      </section>
    );
  }
  