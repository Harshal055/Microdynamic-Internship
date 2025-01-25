import React, { useState } from 'react';
import Navbar from './Navbar';  // Adjust path if necessary

const LanguageSelectionPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const languages = [
    { 
        name: 'Python', 
        description: 'From basics to advanced', 
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' 
      },
    { name: 'JavaScript', description: 'Ideal for web development', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Java', description: 'Great for OOP', icon: 'https://images.javatpoint.com/core/images/java-logo1.png' },
    { name: 'C++', description: 'Powerful and efficient', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/683px-ISO_C%2B%2B_Logo.svg.png' },
    { name: 'C', description: 'Low-level system programming', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKZdbmTKy7h3cd-gxj7dKBQpTUJkt5tpmtQ&s' },
    { name: 'Ruby', description: 'Great for web development', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg' },
    { name: 'PHP', description: 'Used for server-side scripting', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png' },
    { name: 'Swift', description: 'Used for iOS and macOS development', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPoi0fALopQqvBEMq6A4-EETjJ_WjVhycJg&s' },
    { name: 'Go (Golang)', description: 'Great for concurrent programming', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4W4k4zseh-AKurUNiz98TiScprGtQNykdQ&s' },
    { name: 'Kotlin', description: 'Modern alternative to Java', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png' },
    { name: 'TypeScript', description: 'JavaScript with type safety', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'R', description: 'Great for statistical computing', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2qZtlwg2rXiGn-rdXAaKv7p15mEl7kwjtA&s' },
    { name: 'Rust', description: 'Memory-safe system programming', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg' },
    { name: 'SQL', description: 'Used for database management', icon: 'https://banner2.cleanpng.com/20180526/oqt/avq6683ud.webp' },
    { name: 'Objective-C', description: 'Used for macOS and iOS apps', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uNin_p1OOe9DFjHY-jcd7SoMhWc-qv_-Yw&s' },
    { name: 'Perl', description: 'Great for text processing', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIPMPYO9iO5wnPGGi3xq26J63xLs3hI94BQ&s' },
    { name: 'HTML', description: 'Markup language for web pages', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s' },
    { name: 'CSS', description: 'Style sheets for web design', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    { name: 'Assembly', description: 'Low-level programming language', icon: 'https://img.icons8.com/color/600w/assembly.png' },
    { name: 'Lua', description: 'Lightweight scripting language', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png' },
    { name: 'Haskell', description: 'Functional programming language', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRami_6HZTnAXIJjtjC7tsLnPb0QomAEIzwCQ&s' },
    { name: 'MATLAB', description: 'Numerical computing environment', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfKBFe2e0Wn3-ql7VotceUKoCa14NtXcGzw&s' },
    { name: 'Dart', description: 'Optimized for building mobile apps', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/dart-programming-language-icon.png' },
    { name: 'Scala', description: 'Combines functional and object-oriented programming', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGO3P6suSZJz4UUk4wIL14WFMaQyRpFTM9w&s' },
    { name: 'Elixir', description: 'Concurrent, functional programming', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Official_Elixir_logo.png/800px-Official_Elixir_logo.png' },
    { name: 'Groovy', description: 'Scripting language for the JVM', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Groovy-logo.svg/2560px-Groovy-logo.svg.png' },
    { name: 'C#', description: 'Modern, object-oriented language', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
    { name: 'VHDL', description: 'Hardware description language', icon: 'https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/638a61921edcd66afc20a239_XrbJ07KiqWOBrxBtkJGoAUdyjwynYp-eC0MPmL1RoQU.png' },
    { name: 'Fortran', description: 'For scientific and numerical computing', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/2048px-Fortran_logo.svg.png' },
    { name: 'Shell Scripting (Bash)', description: 'Command line scripting', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2XOHuRidAitUaaEfkehZ7QN9xcub-4r0eg&s' },
  ];

  const handleSelectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      {/* Navbar Component */}
   

      {/* Language Selection Section */}
      <div className="min-h-screen flex justify-center items-center bg-gray-400" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png)', backgroundAttachment: 'fixed' }}>
        <div className="w-full max-w-4xl p-6">
          <h1 className="text-4xl text-white font-bold mb-6 text-center">Select a Programming Language</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((language, index) => (
              <div
                key={index}
                className="relative group cursor-pointer bg-gray-300 shadow-lg rounded-lg p-6 transform transition-all duration-300 ease-in-out hover:bg-gray-800 hover:shadow-2xl"
                onClick={() => handleSelectLanguage(language)}
              >
                <div className="text-4xl mb-3 text-center">
                  <img src={language.icon} alt={`${language.name} logo`} className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-center">{language.name}</h3>
                <p className="text-black text-center">{language.description}</p>

                {/* Hover Effect: Show "Start Quiz" Button */}
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-600">
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
