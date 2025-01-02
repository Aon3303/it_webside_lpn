import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* ส่วนข้อมูลทั่วไปของสาขา */}
      <section className="intro-section">
        <h2>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h2>
        <p>
          สาขาเทคโนโลยีสารสนเทศเป็นแหล่งรวมความรู้เกี่ยวกับการพัฒนาเทคโนโลยีเพื่อสนับสนุนธุรกิจ
          และสร้างนวัตกรรมใหม่สำหรับอนาคต
        </p>
      </section>

      {/* ส่วนภาพกิจกรรม */}
      <section className="activities-section">
        <h3>กิจกรรมที่เกี่ยวข้อง</h3>
        <div className="activities-gallery">
          <img src="https://www.lannapoly.ac.th/web/gallery/20241111-025044.jpg" alt="กิจกรรม 1" />
          <img src="https://www.lannapoly.ac.th/web/gallery/20241119-111604.jpg" alt="กิจกรรม 2" />
          <img src="https://www.lannapoly.ac.th/web/gallery/20241119-111746.jpg" alt="กิจกรรม 3" />
          <img src="https://www.lannapoly.ac.th/web/gallery/20241111-024942.jpg" alt="กิจกรรม 4" />
        </div>
      </section>

      {/* ส่วนเป้าหมายของสาขา */}
      <section className="mission-section">
        <h3>เป้าหมายของสาขา</h3>
        <p>
          สร้างบุคลากรที่มีความรู้และทักษะด้านเทคโนโลยีสารสนเทศที่พร้อมทำงานในโลกดิจิทัล
          และสามารถปรับตัวกับความเปลี่ยนแปลงได้อย่างรวดเร็ว
        </p>
      </section>
    </div>
  );
}

export default Home;
