import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
              <h3 className="text-2xl font-bold text-gray-800">Who We Are</h3>
              <p className="text-gray-600">
                We are a team of experienced software developers specializing in fintech, edtech, mobility, 
                and healthcare solutions. Our team has worked on projects for startups and established 
                enterprises, delivering cutting-edge software tailored to business needs.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with scalable, efficient, and secure technology solutions that drive 
                innovation and growth.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm" data-aos="fade-left" data-aos-duration="1000">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Security First</h4>
                  <p className="text-sm text-gray-600">We prioritize data protection and system security in everything we build.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Performance Driven</h4>
                  <p className="text-sm text-gray-600">We optimize for speed, efficiency, and reliability in all solutions.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Innovation Focus</h4>
                  <p className="text-sm text-gray-600">We embrace new technologies to solve complex problems creatively.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Client Partnership</h4>
                  <p className="text-sm text-gray-600">We build lasting relationships through transparency and collaboration.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div 
              className="bg-blue-50 p-4 rounded-lg text-center" 
              data-aos="zoom-in-up" 
              data-aos-delay="100" 
              data-aos-duration="800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2" data-aos="fade-up" data-aos-delay="300">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div 
              className="bg-blue-50 p-4 rounded-lg text-center" 
              data-aos="zoom-in-up" 
              data-aos-delay="200" 
              data-aos-duration="800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2" data-aos="fade-up" data-aos-delay="400">50+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div 
              className="bg-blue-50 p-4 rounded-lg text-center" 
              data-aos="zoom-in-up" 
              data-aos-delay="300" 
              data-aos-duration="800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2" data-aos="fade-up" data-aos-delay="500">20+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div 
              className="bg-blue-50 p-4 rounded-lg text-center" 
              data-aos="zoom-in-up" 
              data-aos-delay="400" 
              data-aos-duration="800"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2" data-aos="fade-up" data-aos-delay="600">4</div>
              <div className="text-sm text-gray-600">Industry Specializations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 