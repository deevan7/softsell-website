import { motion } from "framer-motion";

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Sample company logo URLs (you can replace or add more)
const companies = [
    "https://logo.clearbit.com/microsoft.com",
    "https://logo.clearbit.com/adobe.com",
    "https://logo.clearbit.com/autodesk.com",
    "https://logo.clearbit.com/oracle.com",
    "https://logo.clearbit.com/intuit.com",
    "https://logo.clearbit.com/atlassian.com",
    "https://logo.clearbit.com/salesforce.com",
    "https://logo.clearbit.com/dropbox.com",
    "https://logo.clearbit.com/slack.com",
    "https://logo.clearbit.com/zoom.us",
    "https://logo.clearbit.com/github.com",
    "https://logo.clearbit.com/gitlab.com",
    "https://logo.clearbit.com/shopify.com",
    "https://logo.clearbit.com/figma.com",
    "https://logo.clearbit.com/spotify.com",
    "https://logo.clearbit.com/airbnb.com",
    "https://logo.clearbit.com/asana.com",
    "https://logo.clearbit.com/trello.com",
    "https://logo.clearbit.com/stripe.com",
    "https://logo.clearbit.com/notion.so"
  ];

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-[700px] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-indigo-900/20 dark:bg-grid-indigo-200/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-violet-900/80 to-purple-900/90" />
      </div>

      {/* Floating Company Logos */}
      {companies.map((logo, i) => (
        <motion.img
          key={i}
          src={logo}
          alt={`Company logo ${i}`}
          className="absolute z-0 w-20 h-20 rounded-xl object-contain p-2 bg-white/10 backdrop-blur-sm border border-white/10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100],
            opacity: [0.8, 0],
            rotate: [0, 10]
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 container px-4">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform Unused Licenses
            </span>
            <br />
            <span className="text-white">Into Immediate Capital</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Instant valuations • 24-hour payouts • Zero transaction fees
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <span className="mr-3">Get Instant Valuation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 border border-white/20 rounded-xl -m-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { value: "$2.1M+", label: "Licenses Traded" },
            { value: "24h", label: "Average Payout" },
            { value: "4.9/5", label: "Trustpilot Rating" }
          ].map((metric, i) => (
            <div key={i} className="p-4 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{metric.value}</div>
              <div className="text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -40],
              opacity: [0.8, 0],
              scale: [1, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Circuit Board Overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-10 mix-blend-overlay"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </motion.section>
  );
}
