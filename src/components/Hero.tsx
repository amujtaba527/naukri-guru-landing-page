
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered Hiring & 
              <span className="text-naukri-green"> Interview Preparation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let Naukri Guru connect top talent with smart hiring — all powered by artificial intelligence.
              Transform your recruitment process and accelerate career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold px-8 py-4 text-lg group"
              >
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-naukri-green text-naukri-green hover:bg-naukri-green hover:text-white px-8 py-4 text-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-naukri-green rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-naukri-amber rounded-full"></div>
                <span>Free 14-day Trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-naukri-green to-naukri-green/80 rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">AI Interview Assistant</h3>
                  <div className="w-3 h-3 bg-naukri-amber rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-naukri-amber rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">AI</span>
                      </div>
                      <span className="text-sm">Analyzing your response...</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-naukri-amber h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-naukri-amber">94%</div>
                      <div className="text-xs">Confidence Score</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-naukri-amber">8.7</div>
                      <div className="text-xs">Communication</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
