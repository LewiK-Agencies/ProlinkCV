import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './index.css';

const testimonials = [
  { quote: "ProLink CV helped me land my dream job in Nairobi!", author: "Jane M., Software Engineer" },
  { quote: "The ATS checker improved my resume score instantly!", author: "Peter K., Marketing Specialist" },
  { quote: "Easy to use and professional. Highly recommend!", author: "Mary W., Accountant" }
];

function App() {
  useEffect(() => {
    document.title = "ProLink CV - Best Resume Builder in Kenya";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-green-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">ProLink CV</h1>
          <p className="text-xl mt-2">Craft Your Future with ProLink CV</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Create ATS-Compliant CVs in Minutes!</h2>
        <p className="text-lg mb-6">Land your dream job in Kenya with a professional resume built by ProLink CV.</p>
        <div className="flex justify-center gap-4">
          <Link to="/home" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900">
            Get Started
          </Link>
          <Link to="/ats-checker" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            ATS Score Checker
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="/resume1.png" alt="Sample Resume 1" className="w-full h-64 object-cover rounded-lg" />
          <img src="/resume2.png" alt="Sample Resume 2" className="w-full h-64 object-cover rounded-lg" />
          <img src="/resume3.png" alt="Sample Resume 3" className="w-full h-64 object-cover rounded-lg" />
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">What Our Users Say</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            className="max-w-2xl"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <p className="text-lg italic">"{t.quote}"</p>
                  <p className="mt-4 font-semibold">{t.author}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p>© 2025 ProLink CV. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <a href="https://wa.me/+254706625195" className="hover:underline">Contact Us (+254706 625 195)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;