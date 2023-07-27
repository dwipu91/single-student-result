
const form = document.getElementById("userForm");
const msg = document.querySelector(".box .msg")
const loader = document.getElementById("loader")
console.log(loader);

form.onsubmit = (e) =>{
    e.preventDefault();

    const firm_Data = new FormData(e.target);
    const data = Object.fromEntries(firm_Data)
    
    loader.style.display = "block";
    
    setTimeout(function(){
        loader.style.display = "none";
        if(!data.Subject || !data.Marks ){
            msg.innerHTML = createAlert("All fields are not required" )
        }else{
            const {gpa, gread} = getResult(data.Marks);
            
            msg.innerHTML =     createAlert(`
            Subject : ${data.Subject} / Marks : ${data.Marks} / GPA : ${gpa} / Gread : ${gread}
        `, "info")
        }
    
        e.target.reset()
    }, 3000)

    
}