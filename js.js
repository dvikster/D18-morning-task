/**
 * Created by StudentGoIT on 17.05.2017.
 */

// Задание 1. Выведите координаты мыши относительно блока в момент движения
// курсора мыши внутри блока. Координаты выводить под блоком.

var blockMove = document.querySelector('.block1');

blockMove.addEventListener('mousemove', coordinatesXY);
// var out='';
function coordinatesXY(event){
    var x = event.offsetX;
    var y = event.offsetY;
    out = 'X - '+ x + '; Y - '+y;
    document.querySelector('.out1').innerHTML = out;
}


//Задание 2. Создайте блок div, в качестве изображения фона установите ему
// изображение закрытой папки. Добавьте событие, которое выполняется при
// двойном клике на блоке и заменяет фон блока на изображение открытой папки.
var changeImg = document.querySelector('.folder');
changeImg.addEventListener('dblclick', folderDoubleClick);
var key=0;
function folderDoubleClick() {
   if(key==0){
        changeImg.style.backgroundImage = 'url("img/opened_folder.png")';
    }
    else{
        changeImg.style.backgroundImage = 'url("img/folder-closed.png")';
        key=-1;
    }
    key++;
}

// Задание 3. Добавьте в документ 300-400 блоков div квадратной формы с
// размерами сторон 30px, и цветом фона. Добавление элементов выполните с
// помощью цикла.  Добавьте событие при наведении мыши, которое будет скруглять
// данные блоки с помощью border-radius до круга.
// (Для замедления эффекта скругления в CSS можно добавить transition).

var bigDiv = document.querySelector('.task3');
for (var i=0; i < 300; i++){
    var div300 = document.createElement('div');
    div300.className = 'div_300';
    var out = bigDiv.appendChild(div300);
}

// bigDiv.addEventListener('mouseover',borderCircle);

var div300Circle = document.querySelectorAll('.div_300');

for (var a=0; a < div300Circle.length; a++) {
    div300Circle[a].onmouseover = borderCircle;
}
function borderCircle() {
    this.style.borderRadius = '50%';
    this.style.background = 'orange';
}
// Задание 4. Создайте div размерами ширина – 100%, высота 250px. Ниже добавьте
// 4-5 изображений с одинаковыми классами, разного размера. Добавьте событие,
// которое будет при клике на изображении устанавливать его фоном блока div со
// свойством background-size: contain.

var imgForBg = document.querySelectorAll('.imgs_box img');
// console.log(imgForBg);

for (var j=0; j<imgForBg.length; j++){
    // console.log(imgForBg[j]);
    // imgForBg[j].style.border = '1px solid red';
    imgForBg[j].onclick = fShowBg;
}

var imgBox = document.querySelector('.img_box_bg');
function fShowBg(){
    var img = this.src;
    console.log(img);
    imgBox.style.backgroundImage = 'url('+img+')';
    imgBox.style.backgroundSize =  'contain';
}

// Задание 5. Создайте блок размерами 50x50px. Добавьте событие клик, так,
// что при каждом клике на блоке он отодвигается на 100px вниз от предыдущего положения.

var boxTask5 = document.querySelector('.block-task5');
boxTask5.addEventListener('click', boxPos);
var x = 0;
function boxPos() {
    x += 50;
    console.log(x);
    this.style.marginTop = x+'px';

}