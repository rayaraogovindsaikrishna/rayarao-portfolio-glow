
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase, Code, Database, Globe, User, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Backend Developer | Python, Django & Automation Enthusiast";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skills = [
    'Python', 'Java', 'SQL', 'HTML', 'CSS', 'Django', 'MySQL', 
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'BeautifulSoup'
  ];

  const projects = [
    {
      title: "Fake News Detection Using Machine Learning",
      description: "Built using SVM, TF-IDF, and n-grams to detect fake news accurately with custom dataset trained for high accuracy in false-positive detection.",
      tech: ["Python", "Machine Learning", "SVM", "TF-IDF"],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Hospital Management System",
      description: "Django full-stack web app for patient, doctor, and admin roles with user authentication, feedback system, and role-based access.",
      tech: ["Django", "Python", "MySQL", "HTML/CSS"],
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const experiences = [
    {
      role: "Project Intern",
      company: "BHEL",
      period: "2024",
      description: "Built automation pipeline using web scraping + OCR (requests, BeautifulSoup, OpenCV, pytesseract). Reduced manual document processing effort by 80%.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      role: "Student Ambassador & Team Lead",
      company: "Mass Coders Community",
      period: "2024–2025",
      description: "Boosted membership by 30% and led data analysis projects using Pandas, SQL, Matplotlib.",
      icon: <User className="w-5 h-5" />
    }
  ];

  const education = [
    {
      degree: "B.Tech – CSE & Data Science",
      institution: "Malla Reddy Engineering College",
      year: "2025",
      grade: "CGPA: 6.9"
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      year: "2021",
      grade: "CGPA: 70.8%"
    },
    {
      degree: "Schooling",
      institution: "Vidya Bharathi High School",
      year: "2019",
      grade: "CGPA: 7.2"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${darkMode ? 'bg-black/20' : 'bg-white/20'} border-b ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Govind Sai Krishna
            </motion.div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} transition-all duration-200`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-3xl p-8 md:p-12 border ${darkMode ? 'border-white/10' : 'border-white/30'}`}
          >
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Govind Sai Krishna
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Rayarao
              </span>
            </motion.h1>
            
            <motion.div
              className={`text-xl md:text-2xl mb-6 h-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.div>
            
            <motion.p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "Transforming ideas into efficient backend systems with clean code, APIs, and automation."
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className={`px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/10'}`}>
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <ChevronDown className={`w-8 h-8 mx-auto animate-bounce ${darkMode ? 'text-white/50' : 'text-black/50'}`} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <motion.div
            className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-3xl p-8 md:p-12 border ${darkMode ? 'border-white/10' : 'border-white/30'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Passionate Backend Developer
                </h3>
                <div className={`space-y-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>
                    Fresher software developer experienced in building full-stack Django web applications and automating workflows using Python.
                  </p>
                  <p>
                    Proficient in web scraping, OCR, and structured JSON pipelines with a strong foundation in backend development.
                  </p>
                  <p>
                    Passionate about backend development and solving real-world problems through automation and efficient system design.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className={`w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center ${darkMode ? 'shadow-2xl shadow-blue-500/20' : 'shadow-2xl shadow-blue-500/30'}`}>
                  <Code className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills & Tech Stack
          </motion.h2>
          
          <motion.div
            className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-3xl p-8 md:p-12 border ${darkMode ? 'border-white/10' : 'border-white/30'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'SQL', 'HTML', 'CSS'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-500/20 text-blue-700'}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'MySQL'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-500/20 text-purple-700'}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-green-500/20 text-green-300' : 'bg-green-500/20 text-green-700'}`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-md ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white/20 hover:bg-white/30'} rounded-3xl p-8 border ${darkMode ? 'border-white/10' : 'border-white/30'} transition-all duration-300 hover:scale-105 cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/20'} mr-4`}>
                    {project.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                </div>
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`${darkMode ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-3xl p-8 border ${darkMode ? 'border-white/10' : 'border-white/30'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-purple-500/20' : 'bg-purple-500/20'} w-fit`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      {exp.company} • {exp.period}
                    </p>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-2xl p-6 border ${darkMode ? 'border-white/10' : 'border-white/30'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      {edu.year}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {edu.grade}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className={`backdrop-blur-md ${darkMode ? 'bg-white/5' : 'bg-white/20'} rounded-3xl p-8 md:p-12 border ${darkMode ? 'border-white/10' : 'border-white/30'} text-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <a
                href="mailto:govindsaikrishnarayarao@gmail.com"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} transition-all duration-300 hover:scale-105`}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              
              <a
                href="tel:+919676296780"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} transition-all duration-300 hover:scale-105`}
              >
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </a>
              
              <a
                href="https://linkedin.com/in/govind-sai-krishna-rayarao-1425b1344"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/10 hover:bg-black/20 text-black'} transition-all duration-300 hover:scale-105`}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-white/10 bg-black/20' : 'border-black/10 bg-white/20'} backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Govind Sai Krishna Rayarao. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
