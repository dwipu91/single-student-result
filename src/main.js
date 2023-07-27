
const form = document.getElementById("userForm");
const msg = document.querySelector(".box .msg")

form.onsubmit = (e) =>{
    e.preventDefault();

    const firm_Data = new FormData(e.target);
    const data = Object.fromEntries(firm_Data)
    

    if(!data.Subject || !data.Marks ){
        msg.innerHTML = createAlert("All fields are not required" )
    }else{
        const {gpa, gread} = getResult(data.Marks);
        
        msg.innerHTML =     createAlert(`
        Subject : ${data.Subject} / Marks : ${data.Marks} / GPA : ${gpa} / Gread : ${gread}
    `, "info")
    }

    e.target.reset()
}