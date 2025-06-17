
import { Upload, Search, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload Resume",
      description: "Simply upload your resume or create your employer profile to get started with our AI-powered platform."
    },
    {
      icon: Search,
      number: "02",
      title: "AI Analysis",
      description: "Our intelligent algorithms analyze your profile, skills, and preferences to understand your unique requirements."
    },
    {
      icon: Users,
      number: "03",
      title: "Smart Matching",
      description: "Get connected with perfectly matched opportunities or candidates based on comprehensive AI evaluation."
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Interview Success",
      description: "Use our AI interview preparation tools to practice and improve, ensuring successful outcomes."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-naukri-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to revolutionize your hiring process or accelerate your career growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in group" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-naukri-green rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-naukri-green/90">
                  <step.icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-naukri-amber rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <span className="text-xs font-bold text-black">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-naukri-green to-naukri-amber/50 animate-fade-in" 
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  ></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-naukri-green transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center bg-naukri-beige rounded-full px-6 py-3 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-naukri-green rounded-full animate-pulse"></div>
              <span>Average time to first match: <strong className="text-naukri-amber">under 2 minutes</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
