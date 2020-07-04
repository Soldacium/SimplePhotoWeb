
window.onload = main();

function main(){
    
    let burger = document.getElementById('bur')
    let nav = document.getElementById('nav')
    console.log(nav)
    let active = false;
    
    burger.addEventListener('click', (e) => {
        if(active == false){
            burger.classList.add('active');
            nav.classList.add('active');
            active = !active;
        }else{
            burger.classList.remove('active');
            nav.classList.remove('active');
            active = !active;
        }
    })
}