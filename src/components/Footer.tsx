import React from 'react';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Elite Rentals</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium car rental services. Experience the difference 
              with our exceptional fleet and customer service.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cars')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Vehicle Fleet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Economy Car Rental</li>
              <li>Luxury Vehicle Rental</li>
              <li>SUV & Van Rental</li>
              <li>Corporate Services</li>
              <li>Long-term Rentals</li>
              <li>Airport Pickup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm">24/7 Support Line</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">info@eliterentals.com</p>
                  <p className="text-gray-400 text-sm">Quick Email Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">123 Main Street</p>
                  <p className="text-gray-400 text-sm">Downtown, City 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Elite Rentals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button className="hover:text-white transition-colors duration-200">Privacy Policy</button>
            <button className="hover:text-white transition-colors duration-200">Terms of Service</button>
            <button className="hover:text-white transition-colors duration-200">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;