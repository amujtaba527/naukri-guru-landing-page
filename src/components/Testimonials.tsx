
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Startup",
      content: "Naukri Guru's AI interview prep was incredible. I went from nervous to confident and landed my dream job at a top tech company!",
      rating: 5,
      image: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "HR Director",
      company: "Fortune 500",
      content: "We reduced our hiring time by 75% and improved candidate quality significantly. The AI matching is spot-on every time.",
      rating: 5,
      image: "MR"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager",
      company: "Fintech Unicorn",
      content: "The resume analysis helped me identify exactly what employers were looking for. Got 3 job offers in 2 weeks!",
      rating: 5,
      image: "PS"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Naukri Guru
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-naukri-amber text-naukri-amber" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-naukri-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['AG', 'KL', 'DM', 'RS'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 bg-naukri-green rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs font-semibold">{initials}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                <strong className="text-naukri-amber">10,000+</strong> professionals trust Naukri Guru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
