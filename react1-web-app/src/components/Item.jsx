import "./Item.css";

export default function Item({data, deleteStudent}) {
    
    // เลือกรูปตามเพศ (ใช้ API รูปการ์ตูนฟรี)
    const avatarUrl = data.gender === "Male" 
        ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}&gender=male`
        : `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}&gender=female&hair=long`;

    return (
        <div className="list-item">
            {/* 1. รูปภาพทางซ้าย */}
            <img src={avatarUrl} alt={data.name} className="avatar" />

            {/* 2. ชื่ออยู่ตรงกลาง */}
            <span className="name">{data.name}</span>

            {/* 3. ปุ่มลบทางขวา */}
            <button className="btn-delete" onClick={()=>deleteStudent(data.id)}>
                ลบ
            </button>
        </div>
    );
}