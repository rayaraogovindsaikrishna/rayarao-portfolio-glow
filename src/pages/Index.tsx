import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Github, Linkedin, ExternalLink, MapPin, Calendar, GraduationCap, Briefcase, Code, Database, Globe, User, Award, ChevronDown, Terminal, Cpu, Zap } from 'lucide-react';
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
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-black' : 'bg-gray-50'} relative overflow-hidden`}>
      {/* Futuristic Background Elements */}
      <div className="fixed inset-0 z-0">
        {/* Animated Grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] ${darkMode ? 'opacity-20' : 'opacity-10'}`} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${darkMode ? 'bg-cyan-400' : 'bg-blue-400'} rounded-full`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Neon Glow Effects */}
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${darkMode ? 'bg-cyan-500/10' : 'bg-blue-500/5'} rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${darkMode ? 'bg-purple-500/10' : 'bg-indigo-500/5'} rounded-full blur-3xl`} />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl ${darkMode ? 'bg-black/40 border-cyan-500/20' : 'bg-white/40 border-blue-500/20'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}
            >
              <Terminal className="w-5 h-5" />
              Govind Sai Krishna
            </motion.div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600'} transition-colors duration-200 relative group`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-cyan-400' : 'bg-blue-600'} transition-all duration-300 group-hover:w-full`} />
                  </a>
                ))}
              </nav>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-xl ${darkMode ? 'bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 border border-cyan-500/30' : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 border border-blue-500/30'} transition-all duration-200`}
              >
                {darkMode ? <Zap className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-3xl p-8 md:p-12 border shadow-2xl relative overflow-hidden`}
          >
            {/* Inner glow effect */}
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl`} />
            
            <motion.h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Govind Sai Krishna
              <span className={`block text-transparent bg-clip-text ${darkMode ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'}`}>
                Rayarao
              </span>
            </motion.h1>
            
            <motion.div
              className={`text-xl md:text-2xl mb-6 h-8 ${darkMode ? 'text-cyan-300' : 'text-blue-600'} relative z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {typedText}
              <span className={`animate-pulse ${darkMode ? 'text-cyan-400' : 'text-blue-500'}`}>|</span>
            </motion.div>
            
            <motion.p
              className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "Transforming ideas into efficient backend systems with clean code, APIs, and automation."
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button className={`${darkMode ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'} text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" className={`px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 ${darkMode ? 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 shadow-lg hover:shadow-cyan-400/20' : 'border-blue-500/30 text-blue-600 hover:bg-blue-500/10 shadow-lg hover:shadow-blue-500/20'}`}>
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
            <ChevronDown className={`w-8 h-8 mx-auto animate-bounce ${darkMode ? 'text-cyan-400/60' : 'text-blue-500/60'}`} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
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
            className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-3xl p-8 md:p-12 border shadow-2xl relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl`} />
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
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
                <div className={`w-64 h-64 rounded-full ${darkMode ? 'bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border-2 border-cyan-400/30' : 'bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border-2 border-blue-400/30'} flex items-center justify-center shadow-2xl relative`}>
                  <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-cyan-400/10' : 'bg-blue-400/10'} blur-xl`} />
                  <Code className={`w-24 h-24 ${darkMode ? 'text-cyan-400' : 'text-blue-600'} relative z-10`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
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
            className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-3xl p-8 md:p-12 border shadow-2xl relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl`} />
            
            <div className="grid gap-8 md:grid-cols-3 relative z-10">
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Java', 'SQL', 'HTML', 'CSS'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'} hover:scale-105 transition-transform`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'MySQL'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-500/20 text-purple-700 border border-purple-500/30'} hover:scale-105 transition-transform`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'].map((skill) => (
                    <Badge key={skill} variant="secondary" className={`px-3 py-1 ${darkMode ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-green-500/20 text-green-700 border border-green-500/30'} hover:scale-105 transition-transform`}>
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
      <section id="projects" className="py-20 px-4 relative z-10">
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
                className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 hover:bg-black/30 border-cyan-500/20 hover:border-cyan-500/40' : 'bg-white/20 hover:bg-white/30 border-blue-500/20 hover:border-blue-500/40'} rounded-3xl p-8 border transition-all duration-300 hover:scale-105 cursor-pointer shadow-2xl relative overflow-hidden group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex items-center mb-4 relative z-10">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-cyan-500/20 border border-cyan-500/30' : 'bg-blue-500/20 border border-blue-500/30'} mr-4`}>
                    {project.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                </div>
                <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className={`${darkMode ? 'border-cyan-400/30 text-cyan-300' : 'border-blue-500/30 text-blue-600'} hover:scale-105 transition-transform`}>
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
      <section id="experience" className="py-20 px-4 relative z-10">
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
                className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-3xl p-8 border shadow-2xl relative overflow-hidden`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl`} />
                <div className="flex flex-col md:flex-row md:items-center gap-4 relative z-10">
                  <div className={`p-3 rounded-xl ${darkMode ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-purple-500/20 border border-purple-500/30'} w-fit`}>
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
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
      <section className="py-20 px-4 relative z-10">
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
                className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-2xl p-6 border shadow-2xl relative overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-2xl`} />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${darkMode ? 'text-cyan-300' : 'text-blue-600'}`}>
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
      <section id="contact" className="py-20 px-4 relative z-10">
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
            className={`backdrop-blur-xl ${darkMode ? 'bg-black/20 border-cyan-500/20' : 'bg-white/20 border-blue-500/20'} rounded-3xl p-8 md:p-12 border shadow-2xl text-center relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-cyan-500/5 to-purple-500/5' : 'bg-gradient-to-br from-blue-500/5 to-indigo-500/5'} rounded-3xl`} />
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}>
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8 relative z-10">
              <a
                href="mailto:govindsaikrishnarayarao@gmail.com"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400' : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-600'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/20`}
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              
              <a
                href="tel:+919676296780"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400' : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-600'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/20`}
              >
                <Phone className="w-5 h-5" />
                <span>Phone</span>
              </a>
              
              <a
                href="https://linkedin.com/in/govind-sai-krishna-rayarao-1425b1344"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 p-4 rounded-xl ${darkMode ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400' : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-600'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/20`}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative z-10">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-cyan-500/20 bg-black/40' : 'border-blue-500/20 bg-white/40'} backdrop-blur-xl relative z-10`}>
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
