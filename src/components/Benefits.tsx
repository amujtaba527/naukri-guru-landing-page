import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Award, Users } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-20 bg-naukri-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Employers Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-naukri-green to-naukri-green/80 rounded-2xl p-8 text-white h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <TrendingUp className="h-8 w-8 text-naukri-amber group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold">For Employers</h3>
              </div>
              
              <h4 className="text-3xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>Hire Smarter, Not Harder</h4>
              <p className="text-white/90 mb-8 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Transform your recruitment process with AI-powered candidate screening, 
                automated interviews, and data-driven hiring decisions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
                  <Clock className="h-5 w-5 text-naukri-amber" />
                  <span>Reduce hiring time by 70%</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.6s' }}>
                  <Award className="h-5 w-5 text-naukri-amber" />
                  <span>Improve candidate quality by 85%</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.7s' }}>
                  <Users className="h-5 w-5 text-naukri-amber" />
                  <span>Access to verified talent pool</span>
                </div>
              </div>
              
              <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold w-full animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ animationDelay: '0.8s' }}>
                Start Hiring Today
              </Button>
            </div>
          </div>
          
          {/* Job Seekers Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-naukri-beige border-2 border-naukri-green rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Award className="h-8 w-8 text-naukri-green group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-900">For Job Seekers</h3>
              </div>
              
              <h4 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>Land Your Dream Job</h4>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Prepare for interviews with AI coaching, optimize your resume, 
                and get matched with opportunities that fit your skills perfectly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.7s' }}>
                  <TrendingUp className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Increase interview success by 90%</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.8s' }}>
                  <Clock className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Get hired 3x faster</span>
                </div>
                <div className="flex items-center gap-3 animate-fade-in hover:translate-x-2 transition-transform duration-300" style={{ animationDelay: '0.9s' }}>
                  <Users className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Connect with top employers</span>
                </div>
              </div>
              
              <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold w-full animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ animationDelay: '1s' }}>
                Prepare for Success
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
