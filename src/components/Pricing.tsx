
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Job Seeker",
      price: "Free",
      period: "forever",
      description: "Perfect for individuals starting their job search",
      features: [
        "AI Resume Analysis",
        "5 Interview Simulations/month",
        "Basic Job Matching",
        "Email Support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for serious job seekers and career changers",
      features: [
        "Everything in Free",
        "Unlimited Interview Simulations",
        "Advanced AI Coaching",
        "Priority Job Matching",
        "Phone Support",
        "Interview Analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Complete hiring solution for companies",
      features: [
        "Bulk Candidate Screening",
        "Custom AI Models",
        "Advanced Analytics Dashboard",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-naukri-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-naukri-beige rounded-2xl border-2 p-8 transition-all duration-500 hover:shadow-xl animate-fade-in group hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-naukri-green shadow-lg scale-105 hover:scale-110' 
                  : 'border-gray-100 hover:border-naukri-green/30 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                  <span className="bg-naukri-amber text-black px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-naukri-green transition-colors duration-300">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 group-hover:text-naukri-green transition-colors duration-300">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-500 ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 animate-fade-in hover:translate-x-1 transition-transform duration-300" style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}>
                    <Check className="h-5 w-5 text-naukri-green flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  plan.popular
                    ? 'bg-naukri-amber hover:bg-naukri-amber/90 text-black'
                    : 'bg-naukri-green hover:bg-naukri-green/90 text-white'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-600 mb-4">
            All plans include our <strong>14-day money-back guarantee</strong>
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-naukri-green rounded-full animate-pulse"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-naukri-amber rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-naukri-green rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
