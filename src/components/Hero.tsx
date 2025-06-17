import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
const Hero = () => {
  return <section className="py-20 lg:py-28 bg-naukri-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              AI-Powered Hiring & 
              <span className="text-naukri-green animate-fade-in" style={{
              animationDelay: '0.2s'
            }}> Interview Preparation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Let Naukri Guru connect top talent with smart hiring — all powered by artificial intelligence.
              Transform your recruitment process and accelerate career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Try for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button size="lg" variant="outline" className="border-naukri-green text-naukri-green hover:bg-naukri-green px-8 py-4 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg text-[#f5f5dc]">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Request a Demo
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-naukri-green rounded-full animate-pulse"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-naukri-amber rounded-full animate-pulse" style={{
                animationDelay: '0.5s'
              }}></div>
                <span>Free 14-day Trial</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="bg-gradient-to-br from-naukri-green to-naukri-green/80 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center justify-between animate-fade-in" style={{
                animationDelay: '0.6s'
              }}>
                  <h3 className="text-lg font-semibold">AI Interview Assistant</h3>
                  <div className="w-3 h-3 bg-naukri-amber rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4 animate-fade-in hover:bg-white/20 transition-colors duration-300" style={{
                  animationDelay: '0.7s'
                }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-naukri-amber rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-xs font-bold text-black">AI</span>
                      </div>
                      <span className="text-sm">Analyzing your response...</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-naukri-amber h-2 rounded-full w-3/4 animate-pulse transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 rounded-lg p-3 text-center animate-fade-in hover:bg-white/20 transition-all duration-300 hover:scale-105" style={{
                    animationDelay: '0.8s'
                  }}>
                      <div className="text-2xl font-bold text-naukri-amber">94%</div>
                      <div className="text-xs">Confidence Score</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center animate-fade-in hover:bg-white/20 transition-all duration-300 hover:scale-105" style={{
                    animationDelay: '0.9s'
                  }}>
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
    </section>;
};
export default Hero;