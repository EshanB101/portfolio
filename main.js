//JS TO TOGGLE LIGHT ON OFF
let select = document.querySelector('.chkbox')
let text = document.querySelector('.about');
select.addEventListener('change', ()=>{
    if(select.checked){
        document.querySelector('.img-holder').classList.add("newBg")
        setTimeout(()=>text.style.display="block",500)
    }else{
        document.querySelector('.img-holder').classList.remove("newBg")
        text.style.display="none"
    }
})
