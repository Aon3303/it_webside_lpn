import './Courses.css';

function Courses() {
  const courses = [
    {
      name: 'การเขียนโปรแกรม (Programming)',
      description: 'ศึกษาการบำรุงรักษาและซ่อมแซมยานยนต์ทั้งระบบ.',
    },
    {
      name: 'การพัฒนาเว็บไซต์และแอปพลิเคชัน (Web and App Development)',
      description: 'เรียนรู้เทคโนโลยีเกี่ยวกับระบบพลังงานไฟฟ้า.',
    },
    {
      name: 'การจัดการฐานข้อมูล (Database Management)',
      description: 'ศึกษาการออกแบบและดูแลระบบอิเล็กทรอนิกส์.',
    },
    {
      name: 'การวิเคราะห์และออกแบบระบบ (System Analysis and Design)',
      description: 'เน้นการออกแบบโครงสร้างสถาปัตยกรรม.',
    },
    {
      name: 'ระบบเครือข่ายคอมพิวเตอร์ (Computer Networking)',
      description: 'พัฒนาความเชี่ยวชาญด้านการเงินและบัญชี.',
    },
    {
      name: 'ความปลอดภัยทางไซเบอร์ (Cybersecurity)',
      description: 'ศึกษาเกี่ยวกับการจัดการงานโรงแรมและการบริการ.',
    },
  ];

  return (
    <div className="courses-container">
      <h2>หลักสูตรที่เปิดสอน</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
