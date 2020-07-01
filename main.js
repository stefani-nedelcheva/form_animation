function formAnimate() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const next = parent.nextElementSibling;

            if (input.type === 'text' && validateUser(input)) {
                nextInput(parent, next);
            } else if (input.type === 'email' && validateEmail(input)) {
                nextInput(parent, next);
            } else if (input.type === 'password' && validateUser(input)) {
                nextInput(parent, next);
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        error('rgb(189, 87, 87)');
    } else {
        success('rgb(87, 189, 130)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        success('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189, 87, 87)');
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}

function success(color) {
    document.body.style.backgroundColor = color;
}

function nextInput(parent, next) {
    parent.classList.add('nonactive');
    parent.classList.remove('active');
    next.classList.add('active');
}

formAnimate();