import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddForm from './components/AddForm'
import Item from './components/Item'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "แมน", gender: "Male" },
    { id: 2, name: "ไอซ์", gender: "Female" },
    { id: 3, name: "บอย", gender: "Male" },
    { id: 4, name: "แพร", gender: "Female" }
  ])

  const [theme, setTheme] = useState("light")
  const [show, setShow] = useState(true)

  function deleteStudent(id) {
    setStudents(students.filter(item => item.id !== id))
  }

  return (
    <div className={"App " + theme}>
      <div className="container">
        
        <Header theme={theme} setTheme={setTheme} />
        <AddForm students={students} setStudents={setStudents} />

        <div className="content-card">
          <div className="card-header">
            <h3>จำนวนประชากร {students.length} คน</h3>
            <button
              className="btn-toggle-show"
              onClick={() => setShow(!show)}
            >
              {show ? "ซ่อน" : "แสดง"}
            </button>
          </div>

          {show && (
            <div className="student-list">
              {students.map(item => (
                <Item
                  key={item.id}
                  data={item}
                  deleteStudent={deleteStudent}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default App
