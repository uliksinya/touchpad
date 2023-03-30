const cursor = document.getElementById("cursor");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const upBtn=document.getElementById("up-btn");
const downBtn=document.getElementById("down-btn");

let cursorPosX = 300; // начальная позиция курсора
let cursorPosY = 300;

const screenWidth = window.screenWidth;
const screenHeight = window.innerHeight;

leftBtn.addEventListener("click", () => {
    if(cursorPosX>0) {
        cursorPosX -= 15; // перемещаем курсор на 5 пикселей вправо влево
        cursor.style.left = cursorPosX + "px"; // задаем новую позицию курсора
    }
});
rightBtn.addEventListener("click", () => {
    cursorPosX += 15;
    cursor.style.left = cursorPosX + "px"; // задаем новую позицию курсора

});
upBtn.addEventListener("click", () => {
    if(cursorPosY>0) {
        cursorPosY -= 15;
        cursor.style.top = cursorPosY + "px"; // задаем новую позицию курсора
    }
});
downBtn.addEventListener("click", () => {
    cursorPosY += 15;
    cursor.style.top = cursorPosY + "px"; // задаем новую позицию курсора
});

/*const button = document.querySelector('.btn');

button.addEventListener('mouseover', function() {
    // Выполняем нужное действие при наведении картинки на кнопку
    console.log('Картинка находится над кнопкой!');
});

const button = document.querySelector('.btn');

button.addEventListener('mouseover', function() {
    // Выполняем нужное действие при наведении картинки на кнопку
    console.log('Курсор находится внутри кнопки!');
});

cursor.addEventListener('mousemove', function(e) {
    // Получаем координаты курсора на изображении
    const x = e.clientX - cursor.getBoundingClientRect().left;
    const y = e.clientY - cursor.getBoundingClientRect().top;

    // Размеры изображения-кусора
    const width = cursor.clientWidth;
    const height = cursor.clientHeight;

    // Проверяем, находится ли курсор внутри кнопки
    if (x > 0 && y > 0 && x < width && y < height) {
        // Если да, то вызываем событие наведения на кнопку
        button.dispatchEvent(new Event('mouseover'));
    }
});
 */
