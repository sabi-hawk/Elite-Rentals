import React from 'react';
import { Car, Shield, MapPin, Clock, Users, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: 'Premium Fleet',
      description: 'Choose from our extensive collection of well-maintained luxury, economy, and SUV vehicles.',
      features: ['Latest Models', 'Regular Maintenance', 'Clean Interiors']
    },
    {
      icon: Shield,
      title: 'Full Insurance',
      description: 'Comprehensive insurance coverage included with every rental for your peace of mind.',
      features: ['Collision Coverage', 'Theft Protection', '24/7 Roadside']
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Convenient pickup and drop-off locations across the city and airport.',
      features: ['Airport Pickup', 'City Center', 'Hotel Delivery']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you whenever you need help.',
      features: ['Emergency Support', 'Live Chat', 'Phone Support']
    },
    {
      icon: Users,
      title: 'Easy Booking',
      description: 'Simple online booking process with instant confirmation and flexible cancellation.',
      features: ['Online Booking', 'Instant Confirm', 'Free Cancellation']
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'All vehicles undergo regular maintenance and safety inspections.',
      features: ['Safety Certified', 'Regular Service', 'Quality Assured']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive car rental services designed to meet all your transportation needs 
            with unmatched quality and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;