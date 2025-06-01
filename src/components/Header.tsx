
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-scale-in">
            <div className="w-12 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
              <img src="/public/Naukri گرو.png" alt="Naukri Guru Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-gray-900">Naukri Guru</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-naukri-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-naukri-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-naukri-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-naukri-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-naukri-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-naukri-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-naukri-green transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-naukri-green after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</a>
          </nav>
          
          <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button variant="ghost" className="text-gray-600 hover:text-naukri-green transition-all duration-300 hover:scale-105">
              Sign In
            </Button>
            <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
