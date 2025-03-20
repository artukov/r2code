import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            data-aos="fade-down" 
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" className="inline-block">
              Building 
            </span> {" "}
            <span data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800" className="inline-block">
              Scalable 
            </span> {" "}
            <span data-aos="zoom-in" data-aos-delay="700" data-aos-duration="800" className="inline-block text-blue-600">
              & Secure 
            </span> {" "}
            <span data-aos="zoom-in" data-aos-delay="900" data-aos-duration="800" className="inline-block">
              Software Solutions
            </span>
            <br />
            <span data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="800" className="inline-block">
              for Innovative Businesses
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up" 
            data-aos-duration="1000" 
            data-aos-delay="1300"
          >
            Our team has worked with leading companies like Sterling Trading Tech, Anthology, goUrban, 
            Polly.be (formerly Fidelmed), and others to develop high-performance applications, 
            platforms, and systems.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="1500"
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center transform hover:scale-105 duration-300"
              data-aos="zoom-in-right"
              data-aos-delay="1700"
            >
              Get in Touch
            </Link>
            
            <Link
              href="#services"
              className="px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors text-center transform hover:scale-105 duration-300"
              data-aos="zoom-in-left"
              data-aos-delay="1900"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 