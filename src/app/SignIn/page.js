'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ใช้ Next.js Router
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SignIn() {
  // States for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Router instance for navigation
  const router = useRouter();

  // Function to handle navigation to Sign Up page
  const navigateToSignUp = () => {
    router.push('/signup'); // เปลี่ยน URL ไปที่หน้า Sign Up
  };

  return (
    <>
      <div style={{ 
        background: '#171a21', // สีพื้นหลังที่คล้ายกับ Steam
        padding: '20px', 
        minHeight: '100vh',
        position: 'relative'
      }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mb-4" style={{ color: '#fff', fontWeight: 'bold' }}>Sign In</h1>
            <div 
              className="card"
              style={{
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for card
                borderRadius: '8px', // Rounded corners
                padding: '20px', // Padding inside the card
                width: '100%', // Full width within the container
                maxWidth: '400px', // Max width for the card
                backgroundColor: '#fff' // Background color of the card
              }}
            >
              <form>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="inputEmail" 
                      placeholder="Enter your email" 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">Password</label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="bi bi-lock-fill"></i>
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="inputPassword"
                      placeholder="Enter your password"
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
                <div className="d-grid gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                </div>
                <p className="text-center mt-3">
                  Don't have an account?  <a href="/SignUp" className="text-success">Sign Up</a>
                  <button 
                    type="button" 
                    className="btn btn-link text-primary" 
                    onClick={navigateToSignUp}
                  >
                  
                  </button>
                </p>
              </form>
            </div>
            <div className="mt-4 text-center">
              <h5 style={{ color: '#fff' }}>Scan QR Code to Sign In</h5>
              <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                {/* Add a sample QR code image */}
                <Image 
                  src="/assets/img/112.png" 
                  alt="QR Code" 
                  width={200} 
                  height={200} 
                  layout="responsive"
                />
              </div>
              <p style={{ color: '#fff' }}>Scan the QR code with your mobile device to sign in quickly.</p>
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
