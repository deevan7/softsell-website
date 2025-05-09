import Hero from './assets/components/Hero';
import HowItWorks from './assets/components/HowItWorks';
import WhyChooseUs from './assets/components/WhyChooseUs';
import Testimonials from './assets/components/Testimonials';
import ContactForm from './assets/components/ContactForm';
import ChatWidget from './assets/components/ChatWidget';
import ThemeToggle from './assets/components/ThemeToggle';


function App() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </div>
  );
}

export default App;
