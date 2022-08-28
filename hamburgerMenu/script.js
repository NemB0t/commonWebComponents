const menubtn = document.querySelector('.menubtn');
const hiddenMenu = document.querySelector('.hiddenMenu');

menubtn.addEventListener('click',() =>{   
    hiddenMenu.style.display = "flex";
    menubtn.style.display = "none";
    const closeBtn = document.createElement('div');
    closeBtn.classList.add('closebtn');
    closeBtn.textContent = "✕";
    hiddenMenu.insertBefore(closeBtn,hiddenMenu.firstChild);
    closeBtn.addEventListener('click',() => {
        hiddenMenu.style.display = "none";
        menubtn.style.display = "block";
        hiddenMenu.firstChild.remove();
    })
})

