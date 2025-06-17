import { Button } from '@/components/ui/button';
import Logo from '../../public/Naukri گرو.png';

const Footer = () => {
  const footerLinks = {
    product: [{
      name: "Features",
      href: "#features"
    }, {
      name: "How It Works",
      href: "#how-it-works"
    }, {
      name: "Pricing",
      href: "#pricing"
    }, {
      name: "API Documentation",
      href: "#"
    }],
    company: [{
      name: "About Us",
      href: "#"
    }, {
      name: "Careers",
      href: "#"
    }, {
      name: "Press",
      href: "#"
    }, {
      name: "Contact",
      href: "#"
    }],
    resources: [{
      name: "Blog",
      href: "#"
    }, {
      name: "Help Center",
      href: "#"
    }, {
      name: "Interview Tips",
      href: "#"
    }, {
      name: "Resume Templates",
      href: "#"
    }],
    legal: [{
      name: "Privacy Policy",
      href: "#"
    }, {
      name: "Terms of Service",
      href: "#"
    }, {
      name: "Cookie Policy",
      href: "#"
    }, {
      name: "GDPR",
      href: "#"
    }]
  };

  return (
    <footer className="bg-naukri-green text-white">
      <div className="container mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="bg-naukri-green/80 rounded-2xl p-8 mb-16 text-center border border-white/10">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Hiring Process?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of companies and professionals who trust Naukri Guru for their recruitment and career needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-naukri-amber hover:bg-naukri-amber/90 text-black font-semibold px-8">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-naukri-beige bg-naukri-beige text-naukri-green hover:bg-naukri-beige/90">
              Schedule Demo
            </Button>
          </div>
        </div>
        
        {/* Links Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-8 bg-naukri-beige rounded-lg flex items-center justify-center">
                <img src={Logo} alt="Naukri Guru Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold">Naukri Guru</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              AI-powered hiring and interview preparation platform helping companies find the right talent and professionals land their dream jobs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-naukri-amber transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-naukri-amber transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-naukri-amber transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-naukri-amber transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Naukri Guru. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-sm">Follow us:</span>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social, index) => (
                  <a key={index} href="#" className="text-white/80 hover:text-naukri-amber transition-colors text-sm">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
