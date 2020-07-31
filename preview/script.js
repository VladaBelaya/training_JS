const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('mouseenter', (e) => {
//     console.log('Click');
// });
let i = 0;
const del = (e) => {
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('mouseenter', del);
    // }
};

// btn.addEventListener('click', del);
// overlay.addEventListener('click', del);

btns.forEach(btn => {
    btn.addEventListener('click', del, {
        once: true
    });
});

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});