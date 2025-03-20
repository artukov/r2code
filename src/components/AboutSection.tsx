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
          
          <div>
            <div className="space-y-6 max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
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
              
              <div className="grid grid-cols-2 gap-4 mt-8">
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
        </div>
      </div>
    </section>
  );
} 