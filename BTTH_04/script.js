
//xacs dinh cac ptu bi tac dong

var jFruit     =document.getElementById('txtFruit');// ô nhập
var jShowFruit =document.getElementById('btnShowFruit');// nút
var jImgFruit  =document.getElementById('imgFruit');// vùng chứa ả

//bat su kien
jShowFruit.addEventListener('click',showResult);
//khai bao chi tiet ham xu ly su kien
function showResult (){
    var getFruit =jFruit.value;// biến để ả thay đổi, biến đk khai báo chưa đk dùng thì nhạt
    jImgFruit.setAttribute('src','images/'+getFruit+'.jpg')
}

