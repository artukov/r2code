export default function WorkSection() {
  const workExperience = [
    {
      companyName: "Sterling Trading Tech",
      industry: "FinTech",
      description: "Members of our team contributed to the development of trading platforms and order management systems used by financial institutions globally. We worked on real-time trading infrastructure, risk analysis tools, and API integrations for secure trading operations.",
      skills: ["High-frequency trading systems", "Real-time data processing", "Secure API integrations"],
      color: "from-blue-400 to-blue-700",
    },
    {
      companyName: "Anthology",
      industry: "EdTech",
      description: "Our team has experience in building learning management systems (LMS) and student engagement platforms. We contributed to backend optimizations, AI-driven analytics, and scalable cloud solutions.",
      skills: ["Learning Management Systems (LMS)", "AI-driven student engagement", "Cloud-based infrastructure"],
      color: "from-indigo-400 to-indigo-700",
    },
    {
      companyName: "goUrban",
      industry: "Mobility & Fleet Management",
      description: "We worked on mobility and fleet management solutions, contributing to the development of shared vehicle platforms for e-scooters, bikes, and car-sharing services.",
      skills: ["IoT and GPS tracking integration", "Mobile app development", "Payment and subscription integrations"],
      color: "from-green-400 to-green-700",
    },
    {
      companyName: "Polly.be (formerly Fidelmed)",
      industry: "Healthcare Tech",
      description: "Our developers worked on Polly.be (formerly Fidelmed), an innovative digital health solution that simplifies medication management. We helped develop a pharmacy integration system, ensuring smooth and secure patient medication tracking.",
      skills: ["Secure healthcare data processing", "Pharmacy system integration", "Mobile and web app development"],
      color: "from-red-400 to-red-700",
    },
  ];

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team members have contributed to projects across various industries, 
              bringing extensive experience and expertise to your software development needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExperience.map((work, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className={`bg-gradient-to-r ${work.color} text-white p-6`}>
                  <h3 className="text-xl font-bold mb-1">{work.companyName}</h3>
                  <p className="text-sm font-medium opacity-85">{work.industry}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <h4 className="font-bold text-gray-800 mb-2">Skills Used:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {work.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 