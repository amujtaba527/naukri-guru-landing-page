import { Star } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Startup",
    content: "Naukri Guru's AI interview prep was incredible. I went from nervous to confident and landed my dream job at a top tech company!",
    rating: 5,
    image: "SC"
  }, {
    name: "Michael Rodriguez",
    role: "HR Director",
    company: "Fortune 500",
    content: "We reduced our hiring time by 75% and improved candidate quality significantly. The AI matching is spot-on every time.",
    rating: 5,
    image: "MR"
  }, {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Fintech Unicorn",
    content: "The resume analysis helped me identify exactly what employers were looking for. Got 3 job offers in 2 weeks!",
    rating: 5,
    image: "PS"
  }];
  return <section className="py-20 bg-[#f5f5dc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Naukri Guru
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-naukri-beige rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2 group" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-naukri-amber text-naukri-amber transition-transform duration-300 group-hover:scale-110" style={{
              animationDelay: `${i * 0.1}s`
            }} />)}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-naukri-green rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-naukri-green/90">
                  <span className="text-white font-semibold text-sm">{testimonial.image}</span>
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-gray-900 group-hover:text-naukri-green transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{
        animationDelay: '0.6s'
      }}>
          <div className="inline-flex items-center bg-naukri-beige rounded-full px-6 py-3 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {['AG', 'KL', 'DM', 'RS'].map((initials, i) => <div key={i} className="w-8 h-8 bg-naukri-green rounded-full flex items-center justify-center border-2 border-naukri-beige hover:scale-110 transition-transform duration-300" style={{
                animationDelay: `${i * 0.1}s`
              }}>
                    <span className="text-white text-xs font-semibold">{initials}</span>
                  </div>)}
              </div>
              <span className="text-sm text-gray-600">
                <strong className="text-naukri-amber">10,000+</strong> professionals trust Naukri Guru
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;