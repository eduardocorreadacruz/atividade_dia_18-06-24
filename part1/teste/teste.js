const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

btn1.addEventListener('click', function() {
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';
});

btn2.addEventListener('click', function() {
    page1.style.display = 'none';
    page2.style.display = 'block';
    page3.style.display = 'none';
});

btn3.addEventListener('click', function() {
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'block';
});