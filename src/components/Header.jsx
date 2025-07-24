import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, GraduationCap, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCompany } from '@/contexts/CompanyContext';
import { useAuth } from '@/contexts/AuthContext.jsx';

const Header = ({ onJobClick, onInternshipClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { companyData } = useCompany();
  const { isAuthenticated } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            {companyData.name}
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Contacto
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={onJobClick}
              variant="outline"
              className="glass-effect"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Trabajar con nosotros
            </Button>
            <Button
              onClick={onInternshipClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              Pasantías
            </Button>
            <Link to={isAuthenticated ? "/admin" : "/login"}>
              <Button variant="ghost" size="icon">
                <LogIn className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('equipo')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-blue-400 transition-colors text-left"
              >
                Contacto
              </button>
              <div className="pt-4 border-t border-gray-600 space-y-2">
                <Button
                  onClick={onJobClick}
                  variant="outline"
                  className="w-full glass-effect"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Trabajar con nosotros
                </Button>
                <Button
                  onClick={onInternshipClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Pasantías
                </Button>
                <Link to={isAuthenticated ? "/admin" : "/login"} className="block">
                  <Button variant="ghost" className="w-full">
                    <LogIn className="w-4 h-4 mr-2" />
                    Admin Login
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;