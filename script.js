const html = document.querySelector('html');
const themeToggler = document.querySelector('div.toggle');
let bool = true;
themeToggler.addEventListener('click', e => {
    if(bool){
        html.attributes[1].value = 'light';
        themeToggler.children[0].style.color = 'black';
        bool = false;
    }else{
        html.attributes[1].value = 'dark';
        themeToggler.children[0].style.color = 'white';
        bool = true;
    };
});