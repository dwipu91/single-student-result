/**
 *          CRIEAT ALERT 
 */
const createAlert = (msg, type="danger") => {
    return  `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`
    
}


/**
 *      isMobile checkig
 */
const isMobile = (mobile)   =>{
    const partten = /^(01|8801|\+8801)[0-9]{9}$/
    return partten.test(mobile)
}
/**
 *      isEmile checkig
 */
const isEmile = (mobile)   =>{
    const partten = /^[a-z0-9\._]*@[a-z0-9]{1,}\.[a-z0-9]{1,9}$/;
    return partten.test(mobile)
}



/**
 *          GET GPA AND GREAD
 */

const getResult = (mark) =>{
    let gpa;
    let gread;
    if(mark >= 0 && mark <33){
        gpa = 0;
        gread = 0;
    }else if(mark >= 33 && mark <40){
        gpa = 1;
        gread = "D"
    }else if(mark >= 40 && mark <50){
        gpa = 2;
        gread = "C"
    }else if(mark >= 50 && mark <60){
        gpa = 3;
        gread = "B"
    }else if(mark >= 60 && mark <70){
        gpa = 3.5;
        gread = "A-"
    }else if(mark >= 70 && mark <80){
        gpa = 4;
        gread = "A"
    }else if(mark >= 80 && mark <=100){
        gpa = 5;
        gread = "A+"
    }

    return {gpa,gread}
}