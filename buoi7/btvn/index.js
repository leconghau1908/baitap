// bài6
// function tinhtong (n) {
//     let S=0;
//     for (let i=1; i<n; i++) {
//         if (n>=2) {
//             S = S + ( 1/(i * (i+1)));
//             break;
//         }
//     }
//     return S;
// }
// let n = Number(prompt("Nhap n"));
// let S= tinhtong(n);
// document.write(S);
// 7. Nhập vào số n. Hãy in ra số ước của n.
// let n = parseInt(prompt("Nhập số n:")); 

// let count = 0;

// let i = 1; 

// while (i <= n) {
//   if (n % i === 0) {
//     count++; 
//   }
//   i++;
// }

// document.write("Số ước của"+ n+ "là"+ count);
// 8.Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
// let n = parseInt(prompt('Hãy nhập số n: '));
// let songuyento = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     songuyento = false;
//     break;
//   }
// }
// if (songuyento && n > 1) {
//   document.write(n, "là số nguyên tố");
// } else {
//   document.write(n, "không là số nguyên tố");
// }
// Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.
// let n = parseInt(prompt("Nhập số n")); 

// if (n >= 2) {
//   for (let i = 0; i < n; i++) {
//     let row = ""; 
//     for (let j = 0; j < n; j++) {
//       row += "* ";
//     }

//     document.write(row + "<br>");
//   }
// } else {
//   document.write("Vui lòng nhập số n lớn hơn hoặc bằng 2.");
// }
