import { useState, useEffect } from 'react';
import { Github, Linkedin, Youtube, Mail, MapPin, Sparkles, GraduationCap, 
  Download, ChevronRight, ExternalLink, Code, Brain, Phone, Sun, Moon, Book, Send, Donut } from 'lucide-react';
import myPic from "./mypicture.png";
import AnimatedSkills from './Skills';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messageStatus, setMessageStatus] = useState('');
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [isMessageSending, setIsMessageSending] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsMessageSending(true);
    setMessageStatus('sending');
    
    // Simulate sending message
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setMessageStatus('sent');
    setIsMessageSending(false);
    e.target.reset();
    
    // Reset status after 3 seconds
    setTimeout(() => setMessageStatus(''), 3000);
  };

  const projects = [
    {
      title: "Plate-Pal",
      description: "An ML-powered preparation tool for interview training and feedback",
      tech: ["React", "Node", "Generative AI", "mySQL"],
      github: "https://devpost.com/software/plate-pal",
      icon: Book,
      gradient: "from-pink-600 to-red-600"
    },
    {
      title: "Interview Wizard",
      description: "An ML-powered preparation tool for interview training and feedback",
      tech: ["Python", "Machine Learning", "Computer Vision", "Django"],
      github: "https://devpost.com/software/interview-wizard",
      icon: Book,
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "DocVigilance",
      description: "An ML-powered monitoring system for monitoring patient safety protocols",
      tech: ["Python", "Machine Learning", "Computer Vision"],
      github: "https://devpost.com/software/doctorvigilance",
      icon: Brain,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "ASL Detector",
      description: "Real-time sign language detection using computer vision techniques",
      tech: ["Computer Vision", "TensorFlow", "OpenCV"],
      github: "https://github.com/anviimishra/ASL_detector",
      icon: Code,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Todo List App",
      description: "A modern, responsive task management application",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/anviimishra/ToDoListApp",
      icon: Phone,
      gradient: "from-pink-600 to-red-600"
    },
    {
      title: "CricNews",
      description: "Mobile app for real-time cricket updates and statistics",
      tech: ["React Native", "Node.js", "REST API"],
      github: "https://github.com/anviimishra/CricNews",
      icon: ExternalLink,
      gradient: "from-red-600 to-orange-600"
    }
  ];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 right-4 p-3 rounded-full transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100 shadow-lg'
        }`}
      >
        {isDarkMode ? (
          <Sun className="text-yellow-400" size={24} />
        ) : (
          <Moon className="text-gray-600" size={24} />
        )}
      </button>

      {/* Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {['home', 'projects', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              activeSection === section 
                ? 'bg-purple-700 text-white' 
                : isDarkMode 
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-lg'
            }`}
          >
            {section === 'home' && <ChevronRight size={20} />}
            {section === 'projects' && <Github size={20} />}
            {section === 'contact' && <Mail size={20} />}
          </button>
        ))}
      </nav>

      {/* Home Section */}
      <section className={`min-h-screen flex items-center ${activeSection === 'home' ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            {/* Image container with reduced size */}
            <div className="relative z-10 p-4 max-w-md mx-auto">
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 rounded-3xl opacity-75 group-hover:opacity-90 transition-all duration-300 animate-gradient-xy`}></div>
              
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-400 via-pink-300 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300`}></div>
              
              <img 
                src={myPic}
                alt="Profile" 
                className="relative z-10 w-64 h-64 mx-auto rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl font-bold ${isTyping ? 'animate-pulse' : ''}`}>
                Hi, I'm{' '}
                <span className="relative">
                  <span className="text-purple-500">Anvii Mishra</span>
                  <Sparkles className="absolute -top-6 -right-6 text-yellow-400 animate-spin-slow" size={24} />
                </span>
              </h1>
              <p className={`text-xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A Junior studying{' '}
                <span className="text-purple-600 font-semibold">Computer Science</span> and{' '}
                <span className="text-pink-600 font-semibold">Cognitive Science</span> at Johns Hopkins University.
                Passionate about machine learning, human cognition, and software development.
              </p>
            </div>

            {/* Skills section */}
 <AnimatedSkills isDarkMode={isDarkMode} />

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://docs.google.com/document/d/1PrvX_LZIn79EkCBrsTRbE90lofIV3Sk2ERMrUO_LkAQ/edit?usp=sharing"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
              <a 
                href="#contact"
                onClick={() => setActiveSection('contact')}
                className={`inline-flex items-center px-6 py-3 border-2 border-purple-500 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode ? 'hover:bg-purple-500/20' : 'hover:bg-purple-50'
                }`}
              >
                <Mail className="mr-2" size={20} />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`min-h-screen py-20 ${activeSection === 'projects' ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-4">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center mb-12 max-w-2xl mx-auto`}>
            A collection of my work in machine learning, web development, and mobile applications.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative p-1 rounded-2xl transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  background: `linear-gradient(135deg, ${hoveredProject === index ? '#ffffff20' : '#ffffff10'} 0%, transparent 100%)`
                }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                
                <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl h-full shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}>
                        <project.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold ml-4">{project.title}</h3>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        className={`p-2 rounded-lg ${
                          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        } transition-colors`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                  
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`min-h-screen py-20 ${activeSection === 'contact' ? 'block' : 'hidden'}`}>
    <div className="container mx-auto px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Get In <span className="text-purple-500">Touch</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Existing contact info cards with animation */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Location", content: "Baltimore, Maryland" },
              { icon: Mail, title: "Email", content: "mishraanvii@gmail.com" },
              { icon: GraduationCap, title: "Education", content: "Johns Hopkins University" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${isDarkMode ? '#ffffff10' : '#ffffff'} 0%, transparent 100%)`
                }}
              >
                <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fun interaction section */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Buy me a Donut 🍩</h3>
              <button
                onClick={() => setCoffeeCount(prev => prev + 1)}
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
              >
                <Donut className="text-white" size={20} />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[...Array(Math.min(coffeeCount, 5))].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center transform transition-all duration-300"
                    style={{ transform: `translateX(${i * 5}px) rotate(${i * 10}deg)` }}
                  >
                   🍩
                  </div>
                ))}
              </div>
              <span className={`ml-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {coffeeCount > 5 ? `+${coffeeCount - 5} more` : ''}
              </span>
            </div>
          </div>

          {/* Social links with hover effects */}
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/anviimishra", color: "hover:text-purple-500" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/anvii-mishra-9a82b5270/", color: "hover:text-blue-500" },
              { icon: Youtube, href: "https://www.youtube.com/channel/UCBimXHKXsDxTlhhDY8y5-ow", color: "hover:text-red-500" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-100 shadow-lg'
                } ${social.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced contact form with animations */}
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              required
              className={`w-full p-4 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-white placeholder-gray-400' 
                  : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200'
              } transform hover:scale-105`}
            />
            <input 
              type="email" 
              placeholder="Email" 
              required
              className={`w-full p-4 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-white placeholder-gray-400' 
                  : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200'
              } transform hover:scale-105`}
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            required
            className={`w-full p-4 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-white placeholder-gray-400' 
                : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200'
            } transform hover:scale-105`}
          />
          <textarea 
            placeholder="Message" 
            rows={5}
            required
            className={`w-full p-4 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 text-white placeholder-gray-400' 
                : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-200'
            } transform hover:scale-105`}
          ></textarea>
          
          <button 
            type="submit"
            disabled={isMessageSending}
            className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg 
              hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-semibold 
              shadow-lg transform hover:scale-105 flex items-center justify-center space-x-2
              ${isMessageSending ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            <span>{isMessageSending ? 'Sending...' : 'Send Message'}</span>
            <Send size={20} className={`transition-transform duration-300 ${isMessageSending ? 'animate-pulse' : ''}`} />
          </button>

          {/* Success/Error message */}
          {messageStatus && (
            <div 
              className={`absolute bottom-full left-0 right-0 mb-4 p-4 rounded-lg text-white text-center transform transition-all duration-300 ${
                messageStatus === 'sent' 
                  ? 'bg-green-500' 
                  : messageStatus === 'error' 
                    ? 'bg-red-500' 
                    : 'bg-purple-500'
              }`}
            >
              {messageStatus === 'sent' 
                ? '✨ Message sent successfully!' 
                : messageStatus === 'error' 
                  ? '❌ Error sending message' 
                  : '📤 Sending message...'}
            </div>
          )}
        </form>
      </div>
    </div>
  </section>
    </div>
  );
};

export default Portfolio;