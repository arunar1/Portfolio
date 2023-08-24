const workEle=document.querySelector('.work1');
workEle.addEventListener('click',()=>{
    
    document.querySelector('.viewswork').classList.toggle("workviewall")
    // document.querySelector('.work1').style.display="none"
    workEle.innerHTML="view Less"
})

const writingEle=document.querySelector('.writing1');
workEle.addEventListener('click',()=>{
    document.querySelector(".workviewall").style.display = "block";
    // document.querySelector('.work1').style.display="none"
    workEle.innerHTML="view Less"
})