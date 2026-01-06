import "./AddForm.css";
import { useState } from "react";

export default function AddForm({students, setStudents}) {
  const [name,setName] = useState("")
  const [gender,setGender] = useState("Male")

  function saveStudent(e){
      e.preventDefault();
      if(!name){
          alert("กรุณาป้อนข้อมูลให้ครบ");
          return;
      }
      const newStudent = {
          id: Math.floor(Math.random()*1000),
          name: name,
          gender: gender
      }
      setStudents([...students, newStudent])
      setName("")
      setGender("Male")
  }
}