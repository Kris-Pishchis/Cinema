document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');

    days.forEach(day => {
        day.addEventListener('click', function() {
            days.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
        const sits = document.querySelectorAll('.chair');
        const price = 800;
        let sum = 0;
        let count = 0;
        sits.forEach(sit => {
        sit.addEventListener('click', function(event) { 
            this.classList.toggle('enabled');
            if (this.classList.contains('enabled')) 
        {
            count++;
        } 
        else
        {
            count--;
        }
        sum = count * price;
        console.log(sum);
        document.querySelector('.cena').innerHTML =  sum +" ₽";
        });
         
    });
});


function video() {
    let a = document.getElementById("vidos");
    let elements = document.querySelectorAll('.splitImg')
        elements.forEach(element => {
            element.style.display = "none";
        })
            a.style.display = "block";
        }

const menuButton = document.querySelector('.bat-nav');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});

