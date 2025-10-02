let arr = [];

const btnNhap = document.getElementById("btnNhap");
btnNhap.onclick = function () {
  let input = document.getElementById("arr").value;
  console.log(typeof input);
  arr = input.split(",").map(Number);
  console.log(typeof arr);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    document.getElementById("showResult1").innerHTML =
      "Mảng của bạn là: " + arr;
  }
};

// Bài 1 Tổng các số dương trong mảng
document.getElementById("btnTongDuong").onclick = function () {
  let content = "";
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] === arr[arr.length - 1]) {
        content += `${arr[i]}`;
      } else {
        content += `${arr[i]} + `;
      }
      sum += arr[i];
    }
  }
  document.getElementById("showResult2").innerHTML = content + ` = ${sum}`;
  document.getElementById(
    "showResult3"
  ).innerHTML = `Có ${count} số dương trong mảng.`;
};
// Bài 2 Đếm số dương trong mảng
document.getElementById("btnSoDuong").onclick = function () {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  document.getElementById(
    "showResult3"
  ).innerHTML = `Có ${count} số dương trong mảng.`;
};

//  Bài 3 Tìm số nhỏ nhất trong mảng
document.getElementById("btnSoMin").onclick = function () {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  document.getElementById(
    "showResult4"
  ).innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
};
// Bài 4 Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnSoDuongMin").onclick = function () {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= 0) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  document.getElementById(
    "showResult5"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là: ${min}`;
};

// Bài 5 Tìm số chẵn cuối cùng của mảng
document.getElementById("btnSoChanCC").onclick = function () {
  let odd = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      odd = arr[i];
    }
  }
  if (odd != -1) {
    document.getElementById(
      "showResult6"
    ).innerHTML = `Số chẵn cuối cùng trong mảng là: ${odd}`;
  } else {
    document.getElementById(
      "showResult6"
    ).innerHTML = `Trong mảng không có số chẵn`;
  }
};
// Bài 6 Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById("btnChange").onclick = function () {
  let index1 = document.getElementById("index1").value * 1;
  let index2 = document.getElementById("index2").value * 1;
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  document.getElementById(
    "showResult7"
  ).innerHTML = `Mảng sau khi đổi là: ${arr}`;
};
// Bài 7 Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btnArrange").onclick = function () {
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let tam = arr[i];
            arr[i]=arr[j];
            arr[j]=tam;
        }
    }
    document.getElementById("showResult8").innerHTML = `Mảng sau khi sắp xếp là: ${arr}`;
  }
};
// Bài 8 Tìm số nguyên tố đầu tiên trong mảng
document.getElementById("btnPrime").onclick = function(){
    let result =-1;
    for(let i =0;i<arr.length;i++){
      if(KiemTraSoNT(arr[i])){
        result =0;
        document.getElementById("showResult9").innerHTML = `Số nguyên tố đầu tiên của mảng là: ${arr[i]}`;
        break;
      }
    }
    if(result==-1){
         document.getElementById("showResult9").innerHTML = `Mảng không có số nguyên tố`;
    }
}

const KiemTraSoNT = function(a){

      if(a<=1){
            return false;
        }else if(a==2){
            return true;
        }else{
           for(let i =2; i<= a/2;i++){
            if(a % i ==0){
                return false;
            }
           }
        }
        return true;
}
// Bài 9 Nhập thêm một mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
let arr2 = [];
const btnNhap2 = document.getElementById("btnNhap2");
btnNhap2.onclick = function(){
  let count =0;
    let input2 = document.getElementById("arr2").value;
    arr2 = input2.split(",").map(Number);
    console.log(arr2);
    for(let i =0;i<arr2.length;i++){
      if(Number.isInteger(arr2[i])){
        count++;
      }
    }
    document.getElementById("showResult10").innerHTML = `Mảng vừa nhập ${arr2} có ${count} số nguyên`
}

// Bài 10 so sánh số lượng số dương và số âm xem số nào nhiều hơn
document.getElementById("btnSSAD").onclick = function(){
  let am =0;
  let duong =0;

  for(let i =0; i<arr2.length;i++){
    if(arr2[i]<0){
      am++;
    }else{
      duong++;
    }
  }
  if(am>duong){
    document.getElementById("showResult11").innerHTML = `Số âm nhiều hơn số dương ( ${am} > ${duong})`;
  }else if(duong>am){
      document.getElementById("showResult11").innerHTML = `Số dương nhiều hơn số âm ( ${duong} > ${am})`;
  }else{
      document.getElementById("showResult11").innerHTML = `Số dương và số âm có số lượng bằng nhau ( ${duong} = ${am})`;
  }
}