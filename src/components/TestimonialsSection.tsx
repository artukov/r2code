import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The team was instrumental in helping us scale our platform. Their expertise in secure healthcare integrations saved us months of development time.",
      name: "Sarah Johnson",
      title: "CTO at HealthTech",
      image: "/testimonial1.jpg", // This will be a placeholder until you provide real images
    },
    {
      quote: "Working with this team has been a game-changer for our fintech startup. They delivered a robust trading platform that exceeded our expectations in both performance and security.",
      name: "Michael Chen",
      title: "CEO at FinTrade Solutions",
      image: "/testimonial2.jpg", // This will be a placeholder until you provide real images
    },
    {
      quote: "Their deep understanding of educational software helped us create an engaging learning platform that our customers love. The attention to detail and user experience was exceptional.",
      name: "Emily Rodriguez",
      title: "Product Manager at EduSmart",
      image: "/testimonial3.jpg", // This will be a placeholder until you provide real images
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what some of our clients have to say about 
              working with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 relative">
                <div className="mb-6">
                  <svg className="h-10 w-10 text-blue-200" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {/* This will be replaced with actual images later */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-500">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 