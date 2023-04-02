const cursor = document.getElementById("myCursor");
const button = document.querySelector('.btn');

const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const upBtn=document.getElementById("up-btn");
const downBtn=document.getElementById("down-btn");
const pressBtn=document.getElementById("press");

let cursorPosX = 300; // начальная позиция курсора
let cursorPosY = 300;

// const screenWidth = window.screenWidth;
// const screenHeight = window.innerHeight0;

leftBtn.addEventListener("click", () => {
    if(cursorPosX>0) {
        cursorPosX -= 15;                       // перемещаем курсор на 15 пикселей
        cursor.style.left = cursorPosX + "px"; // задаем новую позицию курсора
    }
});
rightBtn.addEventListener("click", () => {
    cursorPosX += 15;
    cursor.style.left = cursorPosX + "px";

});
upBtn.addEventListener("click", () => {
    if(cursorPosY>0) {
        cursorPosY -= 15;
        cursor.style.top = cursorPosY + "px";
    }
});
downBtn.addEventListener("click", () => {
    cursorPosY += 15;
    cursor.style.top = cursorPosY + "px";
});

/*cursor.addEventListener('mousemove', function(e) {
    // Получаем координаты курсора на изображении
    const x = e.clientX - cursor.getBoundingClientRect().left;
    const y = e.clientY - cursor.getBoundingClientRect().top;

    // Размеры изображения-кусора
    const width = cursor.clientWidth;
    const height = cursor.clientHeight;

    // Проверяем, находится ли курсор внутри кнопки
    if (x > 0 && y > 0 && x < width && y < height) {
        // Если да, то вызываем событие наведения на кнопку
        pressBtn.addEventListener('click', () => {
            window.location.href = 'https://www.udemy.com/';
        });
    }
});
 */

cursor.addEventListener("mousemove", function(e) {

});

// Обработчик события для проверки совпадения координат
function checkIntersection(event) {
    // Получаем координаты курсора
    const x =cursorPosX;
    const y = cursorPosY;

    // Получаем координаты кнопки
    const buttonRect = button.getBoundingClientRect();
    const buttonLeft = buttonRect.left;
    const buttonTop = buttonRect.top;
    const buttonRight = buttonRect.right;
    const buttonBottom = buttonRect.bottom;

    // Проверяем, находится ли курсор над кнопкой
    if (x >= buttonLeft && x <= buttonRight && y >= buttonTop && y <= buttonBottom) {
        // Вызываем обработчик нажатия на кнопку
        console.log("Над кнопкой");
    }
}

// Добавляем слушатель события на перемещение курсора
document.addEventListener("mousemove", checkIntersection);

