import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>ติดต่อเรา</h2>
      
      {/* ข้อมูลติดต่อ */}
      <div className="contact-info">
        <p>
          <strong>ที่อยู่:</strong> 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300
        </p>
        <p>
          <strong>โทร:</strong> 053 213 061, 053 213 144, 053 213 175
        </p>
        <p>
          <strong>แฟกซ์:</strong> 053 408 223
        </p>
        <p>
          <strong>อีเมล:</strong> <a href="mailto:lannapoly@lannapoly.ac.th">lannapoly@lannapoly.ac.th</a>
        </p>
      </div>
      
      {/* Social Media */}
      <div className="contact-social">
        <h3>ติดตามเรา</h3>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-line"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>

      {/* แผนที่ Google Maps */}
      <div className="contact-map">
        <h3>แผนที่</h3>
        <iframe
          title="Lanna Polytechnic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.6068750270216!2d99.0086!3d18.805399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2f2f2677b2ff%3A0xabcdef1234567890!2sวิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา!5e0!3m2!1sth!2sth!4v1234567890123"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
