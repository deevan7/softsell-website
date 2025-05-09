export default function ProcessFlow() {
    return (
      <section className="relative py-[60px] md:py-[80px] bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-indigo-800 dark:to-purple-800 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5">
          <header className="mb-[55px] text-center">
            <h2 className="text-[32px] md:text-[38px] font-bold mb-3 font-serif text-white">
              Our Simple Process
              <span className="block mt-4 mx-auto w-[80px] h-[2px] bg-sunset dark:bg-moonlight opacity-80"></span>
            </h2>
            <p className="text-sm opacity-90 max-w-[500px] mx-auto text-white">
              Three easy steps to turn your unused licenses into cash
            </p>
          </header>
  
          <div className="grid md:grid-cols-3 gap-[30px] px-4">
            {[
              { 
                icon: "📤", 
                title: "Share License Details", 
                desc: "Upload through our secure portal or email attachments",
                bg: "bg-lilac/10"
              },
              { 
                icon: "🧮", 
                title: "Instant Valuation", 
                desc: "We'll crunch the numbers within 24 hours",
                bg: "bg-sunset/10",
                delay: "200"
              },
              { 
                icon: "💸", 
                title: "Fast Payment", 
                desc: "Choose between wire transfer or crypto",
                bg: "bg-emerald/10",
                delay: "400"
              }
            ].map((step, i) => (
              <div 
                key={i}
                className={`process-card p-[25px] rounded-[16px] border-[1.8px] border-porcelain dark:border-night ${step.bg} hover:shadow-2xl transition-all duration-350 group`}
                data-aos="fade-up"
                data-aos-delay={step.delay}
              >
                <div className="icon-wrapper mb-[22px] relative">
                  <span className="text-[48px] block mb-2 transition-transform group-hover:scale-125 group-hover:text-sunset duration-300">
                    {step.icon}
                  </span>
                  <div className="absolute bottom-0 left-0 w-[35px] h-[3px] bg-sunset dark:bg-moonlight"></div>
                </div>
                <h3 className="text-[20px] font-semibold mb-[12px] leading-tight text-white">
                  {step.title}
                </h3>
                <p className="text-[15px] leading-relaxed opacity-90 text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
  
          {/* Decorative elements */}
          <div className="absolute top-20 -left-10 w-[200px] h-[200px] bg-lilac/20 rounded-full blur-[80px] opacity-50"></div>
          <div className="absolute bottom-10 -right-20 w-[250px] h-[250px] bg-sunset/20 rounded-full blur-[100px] opacity-30"></div>
        </div>
  
        <style jsx>{`
          .process-card {
            transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .icon-wrapper::after {
            content: '';
            transition: width 0.4s ease;
          }
          .process-card:hover .icon-wrapper::after {
            width: 50px;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .icon-wrapper span {
            animation: float 3s ease-in-out infinite;
          }
  
          /* Hover effect on the process card */
          .process-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
            background: linear-gradient(135deg, rgba(0, 200, 255, 0.1), rgba(0, 0, 255, 0.1));
          }
  
          /* Background gradient colors */
          .bg-lilac {
            background: #b083f0;
          }
          .bg-sunset {
            background: #ff5f6d;
          }
          .bg-emerald {
            background: #2ecc71;
          }
  
          .group:hover .icon-wrapper span {
            animation: none;
          }
        `}</style>
      </section>
    );
  }
  