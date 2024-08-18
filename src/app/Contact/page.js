import React from 'react';

const Contact = () => (
  <>
    <br /><br /><br />
    <div style={{ backgroundColor: '#e3f2fd', padding: '40px 0' }}> {/* เปลี่ยนสีพื้นหลัง */}
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <h1 className="mb-4 text-center" style={{ color: '#003c8f' }}>Contact </h1> {/* เปลี่ยนสีข้อความ */}
            <div className="row">
              <div className="col-md-12 mb-4">
                <h3 className="mb-5" style={{ color: '#003c8f' }}></h3> {/* เปลี่ยนสีข้อความ */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ color: '#003c8f' }}>Name</label> {/* เปลี่ยนสีข้อความ */}
                    <input type="text" className="form-control" id="name" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: '#003c8f' }}>Email address</label> {/* เปลี่ยนสีข้อความ */}
                    <input type="email" className="form-control" id="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label" style={{ color: '#003c8f' }}>Message</label> {/* เปลี่ยนสีข้อความ */}
                    <textarea className="form-control" id="message" rows="4" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
              <div className="col-md-12 mb-4">
                <h3 className="mb-3" style={{ color: '#003c8f' }}>Contact Information</h3> {/* เปลี่ยนสีข้อความ */}
                <p style={{ color: '#003c8f' }}>If you have any questions, feel free to reach out to us:</p> {/* เปลี่ยนสีข้อความ */}
                <ul className="list-unstyled">
                  <li><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, Cityville</li>
                  <li><i className="bi bi-envelope-fill me-2"></i><a href="mailto:info@example.com" style={{ color: '#003c8f' }}>info@example.com</a></li> {/* เปลี่ยนสีข้อความ */}
                  <li><i className="bi bi-telephone-fill me-2"></i><a href="tel:+1234567890" style={{ color: '#003c8f' }}>+123 456 7890</a></li> {/* เปลี่ยนสีข้อความ */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Contact;
