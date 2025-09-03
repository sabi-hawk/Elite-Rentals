import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Fuel, Settings } from 'lucide-react';

const CarShowcase: React.FC = () => {
  const cars = [
    {
      id: 1,
      name: 'BMW 3 Series',
      category: 'Luxury',
      price: '$89',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: { passengers: 5, fuel: 'Petrol', transmission: 'Automatic' }
    },
    {
      id: 2,
      name: 'Toyota RAV4',
      category: 'SUV',
      price: '$65',
      image: 'https://images.pexels.com/photos/2676531/pexels-photo-2676531.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: { passengers: 7, fuel: 'Hybrid', transmission: 'Automatic' }
    },
    {
      id: 3,
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: '$120',
      image: 'https://images.pexels.com/photos/3566194/pexels-photo-3566194.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: { passengers: 5, fuel: 'Petrol', transmission: 'Automatic' }
    },
    {
      id: 4,
      name: 'Honda Civic',
      category: 'Economy',
      price: '$45',
      image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: { passengers: 5, fuel: 'Petrol', transmission: 'Manual' }
    },
    {
      id: 5,
      name: 'Tesla Model 3',
      category: 'Electric',
      price: '$95',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      specs: { passengers: 5, fuel: 'Electric', transmission: 'Auto' }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => {
    setCurrentIndex((prev) => (prev + 1) % cars.length);
  };

  const prevCar = () => {
    setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const currentCar = cars[currentIndex];

  return (
    <section id="cars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of vehicles, from fuel-efficient economy cars 
            to luxurious premium models.
          </p>
        </div>

        {/* Featured Car Carousel */}
        <div className="relative bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Car Image */}
            <div className="relative">
              <img
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              {/* Navigation Buttons */}
              <button
                onClick={prevCar}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextCar}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentCar.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{currentCar.name}</h3>
                <div className="text-3xl font-bold text-blue-600">
                  {currentCar.price}
                  <span className="text-lg text-gray-600 font-normal">/day</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <Users className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Passengers</div>
                  <div className="font-semibold text-gray-900">{currentCar.specs.passengers}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <Fuel className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Fuel</div>
                  <div className="font-semibold text-gray-900">{currentCar.specs.fuel}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                  <Settings className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Transmission</div>
                  <div className="font-semibold text-gray-900">{currentCar.specs.transmission}</div>
                </div>
              </div>

              {/* Book Button */}
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Book This Car
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8 lg:col-span-2">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {cars.map((car, index) => (
            <div 
              key={car.id}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 ${
                index === currentIndex ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{car.name}</h4>
                  <span className="text-blue-600 font-bold">{car.price}/day</span>
                </div>
                <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-3">
                  {car.category}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{car.specs.passengers} seats</span>
                  <span>{car.specs.fuel}</span>
                  <span>{car.specs.transmission}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;