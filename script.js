/*Навигация*/
document.querySelector('.selection-tour__item').addEventListener('click', function(e){
    if(e.target.tagName === 'A'){
        e.preventDefault();
        this.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
    }
});

/*Очистка формы*/
document.querySelector('.form-tour__button-clear').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('form-tour').reset();
});

/*Валидация email*/
document.querySelector('input[type="email"]').addEventListener('blur', function(e){
    if(this.value.includes('@') && this.value.includes('.')){
        this.style.color = '';
    }
    else{
        this.style.color = 'red';
    }
});

/*Минимальная дата для выбора*/
document.querySelectorAll('input[type="date"]').forEach(input => {
    input.min =  new Date().toISOString().split('T')[0];
});

/*Маска на телефон*/
document.querySelector('.mask').addEventListener('focus', function(e){
    if(!e.target.value){
        e.target.value = '+ 7 ';
    }
});
document.querySelector('.mask').addEventListener('blur', function(e){
    if(e.target.value === '+ 7 '){
        e.target.value = '';
    }
});
document.querySelector('.mask').addEventListener('keydown', function(e){
    if((e.key === 'Backspace' || e.key === 'Delete') && 
        e.target.selectionStart <= 4 && 
        e.target.value.startsWith('+ 7 ')){
        e.preventDefault();
    }
});

/*Фиксированное меню*/
window.addEventListener('scroll', function(){
    if(window.scrollY > 450){
        document.querySelector('.header__container').classList.add('fixed');        
    }
    else{
        document.querySelector('.header__container').classList.remove('fixed');        
    }
});

/*Валидация полей*/
document.querySelector('.form-tour__button-find').addEventListener('click', function(e) {
    e.preventDefault();
    const form = document.getElementById('form-tour');
    const input = form.querySelectorAll('input, select');
    let flag = true;
    
    input.forEach(input => {
        if (input.type === 'email') {
            if (!input.value.includes('@') || !input.value.includes('.')) 
                flag = false;
        } else 
        if (input.type === 'tel') {
            if (input.value.length < 10) 
                flag = false;
        } else 
        if (input.type === 'checkbox') {
            if (!input.checked) 
                flag = false;
        } else 
        if (input.type === 'radio') {
            if (!form.querySelector('input[name="var"]:checked')) 
                flag = false;
        } else 
        if (input.value.trim() === '') {
            flag = false;
        }
    });
    
    if (flag) {
        form.reset();
        document.getElementById('selection-tour').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('Поля должны быть заполнены!');
    }
});