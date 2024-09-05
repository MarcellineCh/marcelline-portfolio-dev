let text = document.getElementById('text');
let nuages = document.getElementById('nuages1');
let nuages2 = document.getElementById('nuages2');
let nuages3 = document.getElementById('nuages3');
let nuages4 = document.getElementById('nuages4');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginTop = value * 0.9 + 'px';

    nuages1.style.transform = 'scale(' + (1 + value * 0.00015) + ') translateY(' + (value * 0.4) + 'px)';
    nuages2.style.transform = 'scale(' + (1 + value * 0.00015) + ') translateY(' + (value * 1.5) + 'px)';
    nuages3.style.transform = 'scale(' + (1 + value * 0.00015) + ') translateY(' + (value * 3) + 'px)';
    nuages4.style.left = value * 1.5 + 'px'; 
});

