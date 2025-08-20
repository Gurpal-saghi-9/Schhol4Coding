// Bitwise Operator : super useful in certain situations — especially when you're working at a low level (like with individual bits of data)

// Bitwise AND(&): Compares each bit of two numbers and returns a new number with bits set to 1 where both bits are 1
let a = 5; // 0101 in binary
let b = 3; // 0011 in binary
let andResult = a & b; // 0001 in binary, which is 1 in decimal
console.log(`Bitwise AND of ${a} and ${b} is: ${andResult}`); // Output: 1
console.log(4&7); // Output: 4 (0100 & 0111 = 0100 in binary)
console.log(26&15); // Output: 10 (11010 & 01111 = 001010 in binary)


// Bitwise OR(|): Compares each bit of two numbers and returns a new number with bits set to 1 where at least one bit is 1
let orResult = a | b; // 0111 in binary, which is 7
console.log(`Bitwise OR of ${a} and ${b} is: ${orResult}`); // Output: 7
console.log(8|11); // Output: 15 (1000 | 1011 = 1111 in binary)
console.log(26|15); // Output: 31 (11010 | 01111 = 11111 in binary)


// Bitwise XOR(^): Compares each bit of two numbers and returns a new number with bits set to 1 where the bits are different
let xorResult = a ^ b; // 0110 in binary, which is 6
console.log(`Bitwise XOR of ${a} and ${b} is: ${xorResult}`); // Output: 6
console.log(4^7); // Output: 3 (0100 ^ 0111 = 0011 in binary)
console.log(26^15); // Output: 21 (11010 ^ 01111 = 10101 in binary)

// Bitwise NOT(~): Inverts all bits of a number
let notResult = ~a; // Inverts bits of 5 (0101) to 1010, which is -6 in decimal
console.log(`Bitwise NOT of ${a} is: ${notResult}`); // Output: -6
console.log(~4); // Output: -5 (inverts 0100 to 1011 in binary)
console.log(~26); // Output: -27 (inverts 11010 to 00101 in binary)

// Bitwise Left Shift(<<): Shifts bits to the left, filling with zeros from the right
let leftShiftResult = a << 1; // 1010 in binary, which is 10 in decimal
console.log(`Bitwise Left Shift of ${a} by 1 is: ${leftShiftResult}`); // Output: 10
console.log(4<<1); // Output: 8 (0100 << 1 = 1000 in binary)
console.log(26<<2); // Output: 104 (11010 << 2 = 1101000 in binary)
console.log(26<<1); // Output: 52 (11010 << 1 = 110100 in binary)

// Bitwise Right Shift(>>): Shifts bits to the right, discarding bits on the right
let rightShiftResult = a >> 1; // 0010 in binary, which is 2 in decimal
console.log(`Bitwise Right Shift of ${a} by 1 is: ${rightShiftResult}`); // Output: 2
console.log(4>>1); // Output: 2 (0100 >> 1 = 0010 in binary)
console.log(26>>1); // Output: 13 (11010 >> 1 = 01101 in binary)
console.log(26>>2); // Output: 6 (11010 >> 2 = 00110 in binary)

