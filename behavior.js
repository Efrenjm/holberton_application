document.addEventListener("DOMContentLoaded",(event)=>{
    let thumb = document.getElementById('smart_thumbnail');

    thumb.addEventListener('click', ()=>{
        // thumb.classList.toggle('small');
        if(thumb.className == ''){
            thumb.className = 'small';
        }else{
            thumb.className = ''
        }
    })

})