'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ใช้ Next.js Router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SignUp() {
  // States for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for card animation
  const [animateCard, setAnimateCard] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Router instance for navigation
  const router = useRouter();

  // Function to handle navigation to Sign In page
  const navigateToSignIn = () => {
    router.push('/signin'); // เปลี่ยน URL ไปที่หน้า Sign In
  };

  // Use effect to trigger animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateCard(true);
    }, 100); // Small delay to ensure animation starts after render

    return () => clearTimeout(timer);
  }, []);

  // Styles for the card
  const cardStyles = {
    transform: animateCard ? 'translateY(0)' : 'translateY(-50px)',
    opacity: animateCard ? 1 : 0,
    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for card
    borderRadius: '8px', // Rounded corners
    padding: '20px', // Padding inside the card
    width: '100%', // Full width within the container
    maxWidth: '400px' // Max width for the card
  };

  return (
    <>
      <div style={{ 
        background: '#1b2838', // Dark background similar to Steam
        padding: '40px 0', 
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column align-items-center">
            <div 
              className="card" 
              style={cardStyles}
            >
              <h5 className="card-header text-center" style={{ fontWeight: 'bold', backgroundColor: '#171a21', color: '#ffffff' }}>Sign Up</h5>
              <div className="card-body">
                <form className="row g-3">
                  <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label text-light">Username</label>
                    <div className="input-group">
                      <div className="input-group-text bg-secondary text-light">
                        <i className="bi bi-person-fill"></i>
                      </div>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="inputUsername" 
                        placeholder="Username" 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label text-light">Email</label>
                    <div className="input-group">
                      <div className="input-group-text bg-secondary text-light">
                        <i className="bi bi-envelope-fill"></i>
                      </div>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="inputEmail" 
                        placeholder="Email" 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label text-light">Password</label>
                    <div className="input-group">
                      <div className="input-group-text bg-secondary text-light">
                        <i className="bi bi-lock-fill"></i>
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        id="inputPassword"
                        placeholder="Password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={togglePasswordVisibility}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputConfirmPassword" className="form-label text-light">Confirm Password</label>
                    <div className="input-group">
                      <div className="input-group-text bg-secondary text-light">
                        <i className="bi bi-lock-fill"></i>
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="form-control"
                        id="inputConfirmPassword"
                        placeholder="Confirm Password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        <i className={`bi ${showConfirmPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button 
                      type="submit" 
                      className="btn btn-success"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <p className="mb-0">
                Already have an account? <a href="/SignIn" className="text-primary">Sign In</a>
                  <button 
                    type="button"   
                    className="btn btn-link text-success" 
                    onClick={navigateToSignIn}
                  >
                    
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" style={{ backgroundColor: '#1b2838', padding: '10px 0', position: 'absolute', width: '100%', bottom: 0, textAlign: 'center', color: '#ffffff' }}>
          <p className="mb-0">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
}
