// const listStudent = [
//     {
//         name: "Student",
//         gender:'male',
//     },
//     {
//         name : 'Trần thị B',
//         gender:'female',
//         skill:['C++', 'python']
//     },
// ];
// console.log(listStudent[1].skill[1]);
// const arr1 = [1,2,3];
// const arr2 = [...arr1];
// for (let element of arr1) {
//     arr2.push(element);
// }
// arr1[2]=33;
// console.log('arr1:', arr1);
// console.log('arr2:', arr2);

// function tinhTong(A, N) {
//     let S=0;
//     for (let i=A; i<=N; i++) {
//         S +=i;
//     }
//     return S;
// }
// let A = Number(prompt("Nhap A"));
// let N = Number(prompt("Nhap N"));
// let S = tinhTong(A, N);
// console.log(S);

// function helloworld(name) {
//     console.log("Hello world, " + name);
//   }
//   const myName = "John";
//   helloworld(myName);
//   function tinh(a, b) {
//     const sum = a + b;
//     const tich = sum * sum;
//     return tich;
//   }
  
//   const userInput1 = parseFloat(prompt("Nhập số a:"));
//   const userInput2 = parseFloat(prompt("Nhập số b:"));
  
//   const result = tinh(userInput1, userInput2);
//   console.log(result);
  
//   function getInput() {
//     let x = 0;
  
//     while (x <= 0) {
//       x = parseInt(prompt('Nhập giá trị x:'));
//     }
  
//     return x;
//   }
  
//   // Gọi function để nhập giá trị a
//   const value = getInput();
//   console.log('Giá trị vừa nhập:', value);
  
// function A() {
//     console.log('function A');
// }

// function B(callback) {
//     callback();
//     console.log('function B');

//  }
//  B(A);

// function logger () {
//     console.log('time out');
// }
// setTimeout(function () {
//     console.log('in ra sau 3 giây')
// }, 3000);
// setInterval(logger, 7000);
let users = [
	{
		id: 1,
		first_name: 'Kenton',
		last_name: 'Samples',
		email: 'ksamples0@washingtonpost.com',
		gender: 'Male',
		age: 35,
		job: 'Worker',
		country: 'UK',
		is_married: false,
	},
	{
		id: 2,
		first_name: 'Marc',
		last_name: 'Jurries',
		email: 'mjurries1@flavors.me',
		gender: 'Female',
		age: 54,
		job: 'Teacher',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 3,
		first_name: 'Bruis',
		last_name: 'McBeath',
		email: 'bmcbeath2@cam.ac.uk',
		gender: 'Female',
		age: 59,
		job: 'Developer',
		country: 'UK',
		is_married: false,
	},
	{
		id: 4,
		first_name: 'Kennett',
		last_name: 'Lammert',
		email: 'klammert3@sun.com',
		gender: 'Female',
		age: 22,
		job: 'Dentist',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 5,
		first_name: 'Feodora',
		last_name: 'Clemot',
		email: 'fclemot4@craigslist.org',
		gender: 'Female',
		age: 46,
		job: 'Dentist',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 6,
		first_name: 'Betta',
		last_name: 'Bittlestone',
		email: 'bbittlestone5@digg.com',
		gender: 'Female',
		age: 15,
		job: 'Project Manager',
		country: 'Russia',
		is_married: false,
	},
	{
		id: 7,
		first_name: 'Tedda',
		last_name: 'Surfleet',
		email: 'tsurfleet6@shutterfly.com',
		gender: 'Male',
		age: 19,
		job: 'Farmer',
		country: 'US',
		is_married: true,
	},
	{
		id: 8,
		first_name: 'Alva',
		last_name: 'Cathcart',
		email: 'acathcart7@twitter.com',
		gender: 'Female',
		age: 28,
		job: 'Developer',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 9,
		first_name: 'Francesca',
		last_name: 'Sprionghall',
		email: 'fsprionghall8@tumblr.com',
		gender: 'Female',
		age: 32,
		job: 'Farmer',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 10,
		first_name: 'Stanfield',
		last_name: 'Huc',
		email: 'shuc9@amazon.co.jp',
		gender: 'Genderfluid',
		age: 60,
		job: 'Doctor',
		country: 'US',
		is_married: false,
	},
	{
		id: 11,
		first_name: 'Drugi',
		last_name: 'Hatliff',
		email: 'dhatliffa@php.net',
		gender: 'Female',
		age: 42,
		job: 'Project Manager',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 12,
		first_name: 'Farica',
		last_name: 'Rutley',
		email: 'frutleyb@moonfruit.com',
		gender: 'Female',
		age: 28,
		job: 'Developer',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 13,
		first_name: 'Ania',
		last_name: 'Perllman',
		email: 'aperllmanc@virginia.edu',
		gender: 'Female',
		age: 57,
		job: 'Project Manager',
		country: 'UK',
		is_married: false,
	},
	{
		id: 14,
		first_name: 'Dallas',
		last_name: 'Hans',
		email: 'dhansd@photobucket.com',
		gender: 'Female',
		age: 53,
		job: 'Farmer',
		country: 'UK',
		is_married: true,
	},
	{
		id: 15,
		first_name: 'Lissie',
		last_name: 'Lebreton',
		email: 'llebretone@fc2.com',
		gender: 'Female',
		age: 36,
		job: 'Developer',
		country: 'UK',
		is_married: false,
	},
	{
		id: 16,
		first_name: 'Casandra',
		last_name: 'World',
		email: 'cworldf@columbia.edu',
		gender: 'Female',
		age: 19,
		job: 'Worker',
		country: 'US',
		is_married: true,
	},
	{
		id: 17,
		first_name: 'Alane',
		last_name: "O'Kelly",
		email: 'aokellyg@deliciousdays.com',
		gender: 'Polygender',
		age: 48,
		job: 'Farmer',
		country: 'Russia',
		is_married: false,
	},
	{
		id: 18,
		first_name: 'Ethan',
		last_name: 'Revill',
		email: 'erevillh@photobucket.com',
		gender: 'Female',
		age: 15,
		job: 'Teacher',
		country: 'Russia',
		is_married: false,
	},
	{
		id: 19,
		first_name: 'Kellina',
		last_name: 'Kleinmintz',
		email: 'kkleinmintzi@chron.com',
		gender: 'Female',
		age: 34,
		job: 'Developer',
		country: 'US',
		is_married: false,
	},
	{
		id: 20,
		first_name: 'Reagan',
		last_name: 'Bamlett',
		email: 'rbamlettj@timesonline.co.uk',
		gender: 'Female',
		age: 32,
		job: 'Project Manager',
		country: 'US',
		is_married: false,
	},
	{
		id: 21,
		first_name: 'Sena',
		last_name: 'Teck',
		email: 'steckk@omniture.com',
		gender: 'Male',
		age: 31,
		job: 'Farmer',
		country: 'US',
		is_married: false,
	},
	{
		id: 22,
		first_name: 'Ugo',
		last_name: 'Knivett',
		email: 'uknivettl@typepad.com',
		gender: 'Male',
		age: 44,
		job: 'Developer',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 23,
		first_name: 'Lenora',
		last_name: 'Trower',
		email: 'ltrowerm@latimes.com',
		gender: 'Female',
		age: 26,
		job: 'Doctor',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 24,
		first_name: 'Nickola',
		last_name: 'Di Boldi',
		email: 'ndiboldin@devhub.com',
		gender: 'Male',
		age: 44,
		job: 'Teacher',
		country: 'US',
		is_married: false,
	},
	{
		id: 25,
		first_name: 'Melissa',
		last_name: 'Davenhall',
		email: 'mdavenhallo@google.co.jp',
		gender: 'Female',
		age: 19,
		job: 'Teacher',
		country: 'Russia',
		is_married: true,
	},
	{
		id: 26,
		first_name: 'Daron',
		last_name: 'Nias',
		email: 'dniasp@flavors.me',
		gender: 'Female',
		age: 16,
		job: 'Developer',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 27,
		first_name: 'Osbert',
		last_name: 'Bevens',
		email: 'obevensq@github.com',
		gender: 'Female',
		age: 43,
		job: 'Developer',
		country: 'Russia',
		is_married: false,
	},
	{
		id: 28,
		first_name: 'Nicolle',
		last_name: 'Tanby',
		email: 'ntanbyr@rediff.com',
		gender: 'Female',
		age: 23,
		job: 'Farmer',
		country: 'US',
		is_married: false,
	},
	{
		id: 29,
		first_name: 'Kiley',
		last_name: 'Le - Count',
		email: 'klecounts@aboutads.info',
		gender: 'Female',
		age: 24,
		job: 'Developer',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 30,
		first_name: 'Wynnie',
		last_name: 'Damper',
		email: 'wdampert@springer.com',
		gender: 'Non-binary',
		age: 47,
		job: 'Teacher',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 31,
		first_name: 'Raimund',
		last_name: 'Cobbledick',
		email: 'rcobbledicku@surveymonkey.com',
		gender: 'Male',
		age: 31,
		job: 'Teacher',
		country: 'US',
		is_married: false,
	},
	{
		id: 32,
		first_name: 'Shaylyn',
		last_name: 'Chadderton',
		email: 'schaddertonv@amazon.co.jp',
		gender: 'Female',
		age: 28,
		job: 'Doctor',
		country: 'Russia',
		is_married: false,
	},
	{
		id: 33,
		first_name: 'Hilary',
		last_name: 'Moine',
		email: 'hmoinew@nasa.gov',
		gender: 'Male',
		age: 21,
		job: 'Farmer',
		country: 'Japan',
		is_married: true,
	},
	{
		id: 34,
		first_name: 'Fleming',
		last_name: 'Fredi',
		email: 'ffredix@berkeley.edu',
		gender: 'Male',
		age: 26,
		job: 'Teacher',
		country: 'Vietnam',
		is_married: false,
	},
	{
		id: 35,
		first_name: 'Cherye',
		last_name: 'Huckerby',
		email: 'chuckerbyy@dmoz.org',
		gender: 'Male',
		age: 59,
		job: 'Developer',
		country: 'US',
		is_married: false,
	},
	{
		id: 36,
		first_name: 'Mindy',
		last_name: 'Campany',
		email: 'mcampanyz@theglobeandmail.com',
		gender: 'Female',
		age: 55,
		job: 'Worker',
		country: 'UK',
		is_married: true,
	},
	{
		id: 37,
		first_name: 'Esta',
		last_name: 'Craythorn',
		email: 'ecraythorn10@timesonline.co.uk',
		gender: 'Male',
		age: 39,
		job: 'Farmer',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 38,
		first_name: 'Burty',
		last_name: 'Stobbes',
		email: 'bstobbes11@latimes.com',
		gender: 'Male',
		age: 32,
		job: 'Doctor',
		country: 'Japan',
		is_married: true,
	},
	{
		id: 39,
		first_name: 'Ofelia',
		last_name: 'de Almeida',
		email: 'odealmeida12@booking.com',
		gender: 'Male',
		age: 56,
		job: 'Doctor',
		country: 'US',
		is_married: true,
	},
	{
		id: 40,
		first_name: 'Debor',
		last_name: 'Wrettum',
		email: 'dwrettum13@desdev.cn',
		gender: 'Female',
		age: 31,
		job: 'Teacher',
		country: 'Japan',
		is_married: true,
	},
	{
		id: 41,
		first_name: 'Archibald',
		last_name: 'Dufaur',
		email: 'adufaur14@pinterest.com',
		gender: 'Female',
		age: 15,
		job: 'Developer',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 42,
		first_name: 'Susanetta',
		last_name: 'Ratnege',
		email: 'sratnege15@reverbnation.com',
		gender: 'Male',
		age: 30,
		job: 'Dentist',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 43,
		first_name: 'Opalina',
		last_name: 'Nann',
		email: 'onann16@tinyurl.com',
		gender: 'Female',
		age: 47,
		job: 'Developer',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 44,
		first_name: 'Wiley',
		last_name: 'MacGuigan',
		email: 'wmacguigan17@go.com',
		gender: 'Female',
		age: 19,
		job: 'Teacher',
		country: 'UK',
		is_married: false,
	},
	{
		id: 45,
		first_name: 'Johnathan',
		last_name: 'McGown',
		email: 'jmcgown18@ezinearticles.com',
		gender: 'Male',
		age: 49,
		job: 'Dentist',
		country: 'Japan',
		is_married: false,
	},
	{
		id: 46,
		first_name: 'Analise',
		last_name: 'Davenall',
		email: 'adavenall19@earthlink.net',
		gender: 'Female',
		age: 23,
		job: 'Developer',
		country: 'Vietnam',
		is_married: true,
	},
	{
		id: 47,
		first_name: 'Ulrika',
		last_name: 'Kobsch',
		email: 'ukobsch1a@blogspot.com',
		gender: 'Female',
		age: 32,
		job: 'Dentist',
		country: 'Japan',
		is_married: true,
	},
	{
		id: 48,
		first_name: 'Esther',
		last_name: 'Aldie',
		email: 'ealdie1b@virginia.edu',
		gender: 'Male',
		age: 35,
		job: 'Project Manager',
		country: 'UK',
		is_married: true,
	},
	{
		id: 49,
		first_name: 'Lemmie',
		last_name: 'Guidotti',
		email: 'lguidotti1c@elpais.com',
		gender: 'Bigender',
		age: 20,
		job: 'Worker',
		country: 'Russia',
		is_married: true,
	},
	{
		id: 50,
		first_name: 'Nolana',
		last_name: 'Ivory',
		email: 'nivory1d@cbsnews.com',
		gender: 'Female',
		age: 32,
		job: 'Doctor',
		country: 'Russia',
		is_married: false,
	},{
		id: 51,
		first_name: 'siuu',
		last_name: 'ronaldo',
		email: 'messi@gmail.com',
		gender: 'male',
		age: 21,
		job: 'player soccer',
		country : 'argentina',
		is_married: true,
	},
];
function findUserById(n) {
    return users.find(user => user.id === n);
}
console.log(findUserById(1));
// let n = Number(prompt('Nhập N'));
// let isExit = false;
// for ( user of users ) {
//     if ( user.id === n) {
//         console.log(user);
//         isExit = true;
//     }
// } if ( isExit===false ) {

//     alert('không có người dùng tồn tại');

// }

function getEmailsByKeyword(keyword) {
    return users.filter(user =>
        (user.first_name + ' ' + user.last_name).includes(keyword)
    ).map(user => user.email);
}
console.log(getEmailsByKeyword('Ivory'));
function countUsersAboveAge(age) {
    return users.filter(user => user.age > age).length;
}
console.log(countUsersAboveAge(50));
// Đếm số lượng user đã kết hôn và chưa kết hôn
function countMarriedUsers() {
    let marriedCount = users.filter(user => user.is_married).length;
    let unmarriedCount = users.length - marriedCount;
    return {
        married: marriedCount,
        unmarried: unmarriedCount
    };
}
console.log(countMarriedUsers());
// Đếm số lượng user theo từng ngành nghề tương ứng
function countUsersByJob() {
    let jobCount = {};
    users.forEach(user => {
        if (jobCount[user.job]) {
            jobCount[user.job]++;
        } else {
            jobCount[user.job] = 1;
        }
    });
    return jobCount;
}

console.log(countUsersByJob());
