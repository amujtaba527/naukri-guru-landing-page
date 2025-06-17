import { Users, Target, Award, Globe } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Users,
    value: "10,000+",
    label: "Companies Trust Us"
  }, {
    icon: Target,
    value: "500,000+",
    label: "Successful Placements"
  }, {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction"
  }, {
    icon: Globe,
    value: "50+",
    label: "Countries Served"
  }];
  return <section id="about" className="py-20 bg-[#f5f5dc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Naukri Guru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the hiring landscape with AI-powered solutions that connect the right talent with the right opportunities, making recruitment smarter and more efficient.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Naukri Guru, we believe that finding the perfect job or the ideal candidate shouldn't be a matter of luck. Our AI-powered platform transforms the traditional hiring process by leveraging cutting-edge technology to create meaningful connections between employers and job seekers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're committed to democratizing access to opportunities and making the hiring process more transparent, efficient, and fair for everyone involved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            {stats.map((stat, index) => <div key={index} className="bg-naukri-beige p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-naukri-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-naukri-green" />
                </div>
                <div className="text-2xl font-bold text-naukri-green mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>)}
          </div>
        </div>

        <div className="bg-naukri-beige rounded-2xl p-8 lg:p-12 border border-gray-100 animate-fade-in" style={{
        animationDelay: '0.4s'
      }}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-naukri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-naukri-green" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h4>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible in recruitment technology, staying ahead of industry trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-naukri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-naukri-green" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">People-Centric</h4>
              <p className="text-gray-600">
                Every feature we build is designed with real people in mind, ensuring both candidates and employers have the best experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-naukri-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-naukri-green" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h4>
              <p className="text-gray-600">
                We're committed to delivering exceptional results and maintaining the highest standards in everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;