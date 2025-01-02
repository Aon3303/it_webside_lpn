import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <h4>ติดต่อเรา</h4>
          <p>
            ที่อยู่: 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300
          </p>
          <p>โทร: 053 213 061, 053 213 344</p>
          <p>อีเมล: <a href="mailto:lannapoly@lannapoly.ac.th">lannapoly@lannapoly.ac.th</a></p>
        </div>

        <div className="quick-links">
          <h4>เมนู</h4>
          <ul>
            <li><a href="/">หน้าหลัก</a></li>
            <li><a href="/about">เกี่ยวกับเรา</a></li>
            <li><a href="/courses">หลักสูตร</a></li>
            <li><a href="/contact">ติดต่อเรา</a></li>
          </ul>
        </div>

        <div className="social-media">
          <h4>ติดตามเรา</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png" alt="Facebook" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png" alt="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw" alt="TikTok" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Lanna Polytechnic. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
