// // let a=Number(prompt("nhap can nang:"))
// // let b=Number(prompt("nhap chieu cao: "))
// // let BMI;
// // BMI = a/b;
// // if (BMI<17) {
// //     document.write("nhe can");
// // } else if (BMI>18.5 && BMI <=23) {
// //     document.write("binh thuong ");
// // } else {
// //     document.write("beo phi ");
// // }

// // for(let num=1; num<=10; num++) {
// //     if( num % 2 == 0) {
// //         document.write(num);
// //     }
// // }

// let num = "";
// let i = 1;
// while (i <= 200) {
//   num +=  + i;
//   i++;
// }
// document.write(num);

// let x = 101;
// let y = -10;
// // x <0 || x >100
// // y <0 || y >100
// // x > y

// while ((x <=0 || x >=100 ) || (y <0 || y >100)|| (x>y)){
//     x = Number(prompt("nhập x"));
//     y = Number(prompt("nhập y"));
// }
// while (x<=y) {
//     console.log('x:' , x);
//     console.log('y:' , y);
//     x++;
//     y--;
// }
// let x =10;
// let y= 5;
// do {
//     document.write("ok");
// } while (x<y);

// function tinhGiaiThua(n) {
//     let giaiThua = 1;
//     for (let i = 1; i <= n; i++) {
//       giaiThua *= i;
//     }
//     return giaiThua;
//   }
  
//   let n = Number(prompt("nhap n"));
//   let giaiThua = tinhGiaiThua(n);
//   document.write( giaiThua);

//bai 5
function findSmallestNumber() {
    let a = parseInt(document.getElementById("input-a").value);
    let b = parseInt(document.getElementById("input-b").value);
    let x = parseInt(document.getElementById("input-x").value);

    let smallestNumber = null;

    for (let i = a; i <= b; i++) {
        if (i % x === 0) {
            smallestNumber = i;
            break;
        }
    }

    if (smallestNumber !== null) {
        document.getElementById("result").innerHTML = "Số nhỏ nhất chia hết cho " + x + " trong khoảng từ " + a + " đến " + b + " là " + smallestNumber + ".";
    } else {
        document.getElementById("result").innerHTML = "Không có số nào chia hết cho " + x + " trong khoảng từ " + a + " đến " + b + ".";
    }
}