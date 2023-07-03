// x = true, y = true, z = false

// x && y && z → false
// x && y && !z → true
// (x && y) || z → true
// (x && y) || !z → true
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false
// name = ‘AAA’, age = 20, isGood = true

// age + 10 = 30
// age % 3 = 2
// name + ‘ BBB’ = AAA BBB
// !isGood = false

// name == ‘aaa’ && age >= 20 → false
// name != ‘aaa’ && isGood → true
// !(age < 10) && !isGood → false
// a = 10, b = 20, c = 30, d = '40'

// a + b + c =  10 + 20 + 30 = 60
// a - b / c =  10 - 20 / 30 = 9.3333
// a - (b * c) =  10 - (20 * 30) = -590
// d - (a * b) - c = '40' - (10 * 20)-30 = 40 - 200 - 30 = -190
// a + b + c + d = 10 + 20 + 30 + '40' = 60 + '40' = '6040'
// d + a + b + c = '40' + 10 + 20 + 30 = '4010' + 20 + 30 = '40102030'
// d + a - b + c = '40' + 10 - 20 + 30 = '4010' - 20 + 30 = 4020
// a - b + d - c = 10 - 20 + '40' - 30 = -10 + '40' - 30 
// = '-1040' - 30 = -1070
// d - c + a - b = '40' - 30 + 10 - 20 = 0
// a * b + d * c = 1400
// x = true, y = false, z = 10

// x && y → false
// x && !y → true
// x && z == 10 → true
// (x && z == 10) → true
// !(x && z == 10) → false
// !(x && z == 50) → false

// x && y && z == 10 → false
// x && !y && z == 10 → true
// x || y || z == 10 → true
// (x && y) || z != 10 → true
// !(x && z == 10) || y → false
