let input = 105;
let month = 0;
let day = 0;

if (input <= 31) {
    month = 1
    day = input;
    console.log('day :', day, 'month :', month);

} else if (31 < input && input<= 62) {
    month = 2
    day = input - 31;
    console.log('day :', day, 'month :', month);

} else if (62 < input && input<= 93) {
    month = 3
    day = input - 62;
    console.log('day :', day, 'month :', month);

} else if (93 < input && input<= 124) {
    month = 4
    day = input - 93;
    console.log('day :', day, 'month :', month);

} else if (124 < input && input<= 155) {
    month = 5
    day = input - 124;
    console.log('day :', day, 'month :', month);

} else if (155 < input && input<= 186) {
    month = 6
    day = input - 155;
    console.log('day :', day, 'month :', month);

} else if (186 < input && input<= 216) {
    month = 7
    day = input - 186;
    console.log('day :', day, 'month :', month);

} else if (216 < input && input<= 246) {
    month = 8
    day = input - 216;
    console.log('day :', day, 'month :', month);

} else if (246 < input && input<= 276) {
    month = 9
    day = input - 246;
    console.log('day :', day, 'month :', month);

} else if (276 < input && input<= 306) {
    month = 10
    day = input - 276;
    console.log('day :', day, 'month :', month);

} else if (306 < input && input<= 336) {
    month = 11
    day = input - 306;
    console.log('day :', day, 'month :', month);

} else if (336 < input && input<= 365) {
    month = 12
    day = input - 336;
    console.log('day :', day, 'month :', month);

}