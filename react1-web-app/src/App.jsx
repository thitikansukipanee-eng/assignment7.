import { useState } from "react"
import Header from "./components/Header"
function App() {
  const name = "Suphaphon"
  const [age,setAge] = useState(20)
  const [data,setData]= useState([
    {id:1,name:"เฮง",gender:"ชาย"},
    {id:2,name:"เสก",gender:"ชาย"}
  ])
  const [show,setShow]= useState(true)

  console.table(data)
  
  function add(){
    setAge(age+1)
  }

  function Subtract(){
    setAge(age-1)
  }
  

  return(
  <>
  <Header/>

    <h1> Say hello! = {name}</h1>
  <p>Lorem ipsum dolor sit amet consectetur</p>
  <h3>อายุ = {age}</h3>

  <button onClick={add}>เพิ่ม</button>
  <button onClick={Subtract}>ลด</button>
  <h1>จำนวนประชากร {data.length}</h1>
  <button onClick={()=>setShow(!show)}>{show? "ซ่อน":"แสดง"}</button>

  <ul>
    {show && data.map((item) => (
      <li key={item.id}>{item.id} | {item.name} | {item.gender}</li>
    ))}
  </ul>

  </>
  );
}

export default App
