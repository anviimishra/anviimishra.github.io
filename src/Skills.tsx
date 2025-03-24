import { useState, useEffect } from 'react';
import { Code, Brain, Database, Layout } from 'lucide-react';

interface AnimatedSkillsProps {
    isDarkMode: boolean;
  }
  const AnimatedSkills: React.FC<AnimatedSkillsProps> = ({ isDarkMode } ) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C", "C++", 'Assembly x86-64', "Python", "JavaScript", "MATLAB", "TypeScript", "JAVA", "Kotlin", "CSS", "HTML", "Flutter"],
      color: "text-blue-500",
      bgColor: isDarkMode ? "bg-blue-500/10" : "bg-blue-50",
      borderColor: "border-blue-500/50"
    },
    {
      title: "Machine Learning",
      icon: Brain,
       skills: [
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "NLP",
        "Matplotlib",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "OpenCV",
        "Keras",
        "Data Visualization",
        "Deep Learning"
      ],      
      color: "text-purple-500",
      bgColor: isDarkMode ? "bg-purple-500/10" : "bg-purple-50",
      borderColor: "border-purple-500/50"
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["Git", "Docker", "MongoDB", "PostgreSQL", "AWS", "Google Firebase", "CI/CD", "Agile", "Heroku", "Figma", "IntelliJ", "VSCode"],
      color: "text-amber-500",
      bgColor: isDarkMode ? "bg-amber-500/10" : "bg-amber-50",
      borderColor: "border-amber-500/50"
    },
    {
      title: "Websites",
      icon: Layout,
      skills: ["Spring Boot", "Tailwind CSS", "RESTful APIs", "GraphQL", "Chart/d3/Plotly", "Material UI", "Flask", "Django", "Express", "Angular", "React-Native", "Vue"],
      color: "text-emerald-500",
      bgColor: isDarkMode ? "bg-emerald-500/10" : "bg-emerald-50",
      borderColor: "border-emerald-500/50"
    }
  ];

  return (
    <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Technical Skills
      </h3>

      {/* Category Selector */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === index 
                ? `${category.color} ${category.bgColor} border-2 ${category.borderColor}` 
                : `${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`
            }`}
          >
            <category.icon size={20} className={activeCategory === index ? 'animate-pulse' : ''} />
            <span className="whitespace-nowrap">{category.title}</span>
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="relative h-64">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`absolute inset-0 transition-all duration-500 transform ${
              activeCategory === categoryIndex
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}
          >
            <div className={`h-full rounded-xl p-6 ${category.bgColor} border ${category.borderColor}`}>
              {/* Floating Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute ${category.color} opacity-10 rounded-full
                      animate-float-slow`}
                    style={{
                      width: `${Math.random() * 100 + 50}px`,
                      height: `${Math.random() * 100 + 50}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${Math.random() * 10 + 10}s`
                    }}
                  />
                ))}
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`transform transition-all duration-500 ${
                      activeCategory === categoryIndex ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${skillIndex * 100}ms` }}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'} 
                        backdrop-blur-sm hover:scale-105 transition-transform duration-300
                        border ${category.borderColor} ${category.color}`}
                    >
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSkills;