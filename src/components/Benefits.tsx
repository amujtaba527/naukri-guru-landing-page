
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Award, Users } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Employers Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-naukri-green to-naukri-green/80 rounded-2xl p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-naukri-amber" />
                <h3 className="text-2xl font-bold">For Employers</h3>
              </div>
              
              <h4 className="text-3xl font-bold mb-4">Hire Smarter, Not Harder</h4>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Transform your recruitment process with AI-powered candidate screening, 
                automated interviews, and data-driven hiring decisions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-naukri-amber" />
                  <span>Reduce hiring time by 70%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-naukri-amber" />
                  <span>Improve candidate quality by 85%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-naukri-amber" />
                  <span>Access to verified talent pool</span>
                </div>
              </div>
              
              <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold w-full">
                Start Hiring Today
              </Button>
            </div>
          </div>
          
          {/* Job Seekers Section */}
          <div className="animate-fade-in">
            <div className="bg-white border-2 border-naukri-green rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-naukri-green" />
                <h3 className="text-2xl font-bold text-gray-900">For Job Seekers</h3>
              </div>
              
              <h4 className="text-3xl font-bold text-gray-900 mb-4">Land Your Dream Job</h4>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Prepare for interviews with AI coaching, optimize your resume, 
                and get matched with opportunities that fit your skills perfectly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Increase interview success by 90%</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Get hired 3x faster</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-naukri-green" />
                  <span className="text-gray-700">Connect with top employers</span>
                </div>
              </div>
              
              <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold w-full">
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
