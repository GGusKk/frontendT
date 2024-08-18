import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  // กำหนด style สำหรับ navbar
  const navbarStyle = {
    backgroundColor: '#003366', // สีน้ำเงินเข้ม
    backdropFilter: 'blur(10px)', // เบลอพื้นหลัง
    border: 'none', // ไม่มีขอบ
    borderRadius: '0', // ไม่มีมุมโค้งมน
    boxShadow: 'none', // ไม่มีเงา
    transition: 'background-color 0.3s ease', // การเปลี่ยนสีพื้นหลังเรียบๆ
    zIndex: 1000, // ให้แน่ใจว่า navbar อยู่ด้านบน
  };

  // กำหนด style สำหรับลิงก์และปุ่ม
  const linkStyle = {
    color: '#FFFFFF', // สีของลิงก์
    fontSize: '1.25rem', // ขนาดตัวอักษร
    fontFamily: 'Orbitron, sans-serif' // ใช้ฟอนต์ Orbitron
  };

  const buttonStyle = {
    fontSize: '1.25rem', // ขนาดตัวอักษร
    color: '#FFFFFF', // สีของตัวอักษรในปุ่ม
    borderColor: '#FFFFFF', // สีของขอบปุ่ม
    fontFamily: 'Oswald, sans-serif' // ใช้ฟอนต์ Oswald
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/assets/img/110.png" alt="..." width={197} height={40} className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-2" style={linkStyle} aria-current="page" href="/">
                  <i className="bi bi-house-fill"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" style={linkStyle} href="/About">
                  <i className="bi bi-exclamation-circle-fill"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" style={linkStyle} href="/Service">
                  <i className="bi bi-briefcase-fill"></i> Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-2" style={linkStyle} href="/Contact">
                  <i className="bi bi-telephone-fill"></i> Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/SignUp" className="btn btn-outline-primary mx-2" style={buttonStyle}>
                Sign Up
              </Link>
              <Link href="/SignIn" className="btn btn-outline-success mx-2" style={buttonStyle}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
