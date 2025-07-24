import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage.jsx';
import AdminPage from '@/pages/AdminPage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';
import { CompanyProvider } from '@/contexts/CompanyContext.jsx';
import { AuthProvider } from '@/contexts/AuthContext.jsx';

function App() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <Router>
          <Helmet>
            <title>JoSoftSolution - Soluciones Tecnológicas Innovadoras</title>
            <meta name="description" content="JoSoftSolution ofrece servicios de desarrollo de software, consultoría tecnológica y soluciones digitales innovadoras. Únete a nuestro equipo o solicita una pasantía." />
          </Helmet>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
            <Toaster />
          </div>
        </Router>
      </CompanyProvider>
    </AuthProvider>
  );
}

export default App;