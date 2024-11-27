import React from 'react';
// import img1 from './assets/technology-engineering.jpg';
// import img2 from './assets/marketing-business.jpg';
// import img3 from './assets/languages-communication.jpg';
// import img4 from './assets/design-creativity.jpg';
// import img5 from './assets/computer-science-programming.jpg';
// import img6 from './assets/health-fitness.jpg';

const Categories = () => {
  const categories = [
    {
      title: 'Technology & Engineering',
      // image: img1
    },
    {
      title: 'Marketing & Business',
      // image: img2
    },
    {
      title: 'Languages & Communication',
      // image: img3
    },
    {
      title: 'Design & Creativity',
      // image: img4
    },
    {
      title: 'Computer Science & Programming',
      // image: img5
    },
    {
      title: 'Health & Fitness',
      // image: img6
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              {/* <img src={category.image} alt={category.title} className="h-48 w-full object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{category.title}</h3>
                <a href="#" className="text-purple-500 font-medium hover:underline">
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;