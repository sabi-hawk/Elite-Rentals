import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Economy',
      price: '$35',
      period: 'per day',
      description: 'Perfect for city driving and short trips',
      features: [
        'Compact & fuel-efficient cars',
        'Basic insurance included',
        'Up to 200km/day',
        'Standard support',
        'Manual transmission'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$75',
      period: 'per day',
      description: 'Ideal for business and comfort travel',
      features: [
        'Mid-size & luxury vehicles',
        'Comprehensive insurance',
        'Unlimited mileage',
        'Priority support',
        'Automatic transmission',
        'GPS navigation included'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '$150',
      period: 'per day',
      description: 'Ultimate comfort and prestige',
      features: [
        'High-end luxury vehicles',
        'Premium insurance package',
        'Unlimited mileage',
        '24/7 concierge service',
        'Automatic transmission',
        'Premium features included',
        'Complimentary delivery'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our flexible pricing options designed to fit your budget and travel needs. 
            No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular ? 'border-blue-600 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Pricing Info */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Special Offers & Discounts
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-semibold text-blue-600">Weekly Rentals</div>
              <div className="text-gray-600">Save 15% on 7+ day rentals</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-blue-600">Monthly Rentals</div>
              <div className="text-gray-600">Save 25% on 30+ day rentals</div>
            </div>
            <div className="space-y-2">
              <div className="font-semibold text-blue-600">Corporate Rates</div>
              <div className="text-gray-600">Special pricing for businesses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;