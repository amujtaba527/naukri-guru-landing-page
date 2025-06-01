
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-naukri-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NG</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Naukri Guru</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-naukri-green transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-naukri-green transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-naukri-green transition-colors">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-naukri-green transition-colors">About</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-naukri-green">
              Sign In
            </Button>
            <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-medium">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
