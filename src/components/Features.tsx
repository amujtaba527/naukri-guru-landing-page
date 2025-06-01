
import { Brain, FileCheck, Target, BarChart, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Interview Simulation",
      description: "Practice with our advanced AI that adapts to your responses and provides real-time feedback on communication skills.",
      color: "text-naukri-green"
    },
    {
      icon: FileCheck,
      title: "Resume Evaluation",
      description: "Get instant AI-powered analysis of your resume with actionable suggestions to improve your chances.",
      color: "text-naukri-green"
    },
    {
      icon: Target,
      title: "Smart Job Matching",
      description: "Our AI matches you with the perfect opportunities based on skills, experience, and career aspirations.",
      color: "text-naukri-green"
    },
    {
      icon: BarChart,
      title: "Employer Analytics Dashboard",
      description: "Comprehensive insights and data-driven recommendations to optimize your hiring process and find top talent.",
      color: "text-naukri-green"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Hiring
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to transform your recruitment process and accelerate career growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-naukri-green/20 hover:shadow-lg transition-all duration-500 animate-fade-in hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-naukri-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-naukri-green/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-naukri-green transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-naukri-amber font-medium text-sm inline-flex items-center gap-2">
                  Learn more 
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
