function toast({title = '', 
                content = '', 
                type = 'infor', 
                duration = 3000}){
    const main = document.getElementById("toast");
    if(main){
        const toast = document.createElement("div");

        toast.onclick = function(e){
            if(e.target.closest('.fa-solid')){
                main.removeChild(toast);
                clearTimeout(timeOut);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            infor: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation'
        }
        const icon = icons[type];
        const delay = (duration/1000).toFixed(2);
        toast.classList.add("toast", `toast__${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon">
            <i class='${icon}'></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__content">${content}</div>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        main.appendChild(toast);

        const timeOut = setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000);
    }
}

toast({
    title: "Infor",
    content: "Anyone with access can view your invited visitor.",
    type: "infor",
    duration: 1000
});

function showSuccessToast(){
    toast({
        title: "Success",
        content: "Anyone with access can view your invited visitor.",
        type: "success",
        duration: 2000
    });
}

function showInforToast(){
    toast({
        title: "Infor",
        content: "Anyone with access can view your invited visitor.",
        type: "infor",
        duration: 3000
    });
}

function showWanringToast(){
    toast({
        title: "Warning",
        content: "Anyone with access can view your invited visitor.",
        type: "warning",
        duration: 3000
    });
}
