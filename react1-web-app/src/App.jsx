import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "ก้อง", gender: "Male" },
    { id: 2, name: "น้ำ", gender: "Female" },
    { id: 3, name: "โจ้", gender: "Male" },
    { id: 4, name: "พลอย", gender: "Female" }
  ])

  const [theme, setTheme] = useState("light")
  const [show, setShow] = useState(true) // 1. นำ State สำหรับปุ่มซ่อนกลับมา

  function deleteStudent(id) {
    setStudents(students.filter(item => item.id !== id))
  }

  return (
    <div className={"App " + theme}>
      <div className="container">
        
        <Header theme={theme} setTheme={setTheme} />
        
        <AddForm students={students} setStudents={setStudents} />

        {/* 2. สร้างกรอบ (Frame) คลุมส่วนเนื้อหา */}
        <div className="content-card">
            
            {/* 3. ส่วนหัวของกรอบ: ข้อความซ้าย - ปุ่มซ่อนขวา */}
            <div className="card-header">
                <h3>จำนวนประชากร {students.length} คน</h3>
                <button className="btn-toggle-show" onClick={() => setShow(!show)}>
                    {show ? "ซ่อน" : "แสดง"}
                </button>
            </div>

            {/* 4. แสดงรายชื่อ (ถ้า show เป็น true) */}
            {show && (
                <div className="student-list">
                    {students.map((item) => (
                        <Item key={item.id} data={item} deleteStudent={deleteStudent} />
                    ))}
                </div>
            )}
        
        </div>

      </div>
    </div>
  )
}

export default App