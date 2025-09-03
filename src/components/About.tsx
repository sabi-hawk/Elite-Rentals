import React from 'react';
import { Users, Award, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Satisfied Customers', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: MapPin, label: 'Locations', value: '5' },
    { icon: Clock, label: 'Available 24/7', value: 'Always' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Elite Rentals?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in the car rental industry, we pride ourselves on 
                providing exceptional service and maintaining a premium fleet of vehicles. Our commitment 
                to quality and customer satisfaction has made us the preferred choice for thousands of travelers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, affordable, and premium car rental services that exceed our customers' 
                expectations. We believe every journey should be comfortable, safe, and memorable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional car rental service"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Premium Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;