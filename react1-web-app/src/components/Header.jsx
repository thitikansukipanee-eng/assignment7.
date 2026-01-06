import "./Header.css"; 

export default function Header({theme, setTheme}) {
  
  function ToggleTheme(){
    if(theme === "light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  return (
    <header className={theme === "light" ? "header-light" : "header-dark"}>
        <div className="logo">
            {/* ข้อความชื่อแอพ */}
            <span>My Application</span>
        </div>
        
        <div className="theme-container">
            <button className="toggle-btn" onClick={ToggleTheme}>
                Light/Dark
            </button>
        </div>
    </header>
  )
}