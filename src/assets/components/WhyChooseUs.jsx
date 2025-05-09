export default function ValuePropositions() {
    return (
      <section className="relative py-[70px] bg-gradient-to-r from-indigo-900 to-purple-900 dark:from-indigo-800 dark:to-purple-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-[60px]">
            <h2 className="text-[32px] md:text-[38px] font-bold mb-3 font-serif text-white">
              Why We're Different
              <span className="block mt-4 mx-auto w-[45px] h-[2px] bg-gradient-to-r from-sunset to-ember"></span>
            </h2>
            <p className="text-sm opacity-90 text-white">Built for speed, security, and your bottom line</p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-[30px] px-4">
            {[
              { 
                icon: "⚡", 
                title: "Lightning-Fast Payments", 
                desc: "Funds cleared within 12hrs via multiple channels",
                accent: "bg-sunset/10",
                animDelay: "0"
              },
              { 
                icon: "🛡️", 
                title: "Military-Grade Security", 
                desc: "256-bit encryption & blockchain verification",
                accent: "bg-lilac/10",
                animDelay: "150"
              },
              { 
                icon: "📊", 
                title: "Premium Valuations", 
                desc: "Real-time market benchmarking algorithm",
                accent: "bg-emerald/10",
                animDelay: "300"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`feature-card p-[28px] rounded-xl border-[1.8px] border-porcelain dark:border-night ${item.accent} hover:transform hover:scale-[1.02] transition-all duration-400 group`}
                data-aos="fade-up"
                data-aos-delay={item.animDelay}
              >
                <div className="icon-container mb-6 relative">
                  <div className="w-[60px] h-[60px] rounded-lg bg-gradient-to-br from-sunset/20 to-sunset/5 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <span className="text-[34px] animate-float">{item.icon}</span>
                  </div>
                  <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-[30%] h-[2px] bg-gradient-to-r from-transparent via-sunset to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-[20px] font-semibold mb-3 text-center text-white">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-center opacity-90 px-2 text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
  
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-lilac/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-[250px] h-[250px] bg-sunset/10 rounded-full blur-[80px] opacity-30"></div>
        </div>
  
        <style jsx>{`
          .feature-card {
            transition-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
            backdrop-filter: blur(4px);
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .feature-card:hover {
            box-shadow: 0 10px 30px rgba(255, 105, 85, 0.08);
          }
          .icon-container::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #ff6955 0%, #ffac8e 100%);
            transition: width 0.4s ease;
          }
          .feature-card:hover .icon-container::after {
            width: 50%;
          }
  
          /* Hover effects for the feature card */
          .feature-card:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
            background: linear-gradient(135deg, rgba(0, 200, 255, 0.1), rgba(0, 0, 255, 0.1));
          }
        `}</style>
      </section>
    );
  }
  