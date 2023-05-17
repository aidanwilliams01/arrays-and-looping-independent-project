Describe: beepBoop()

Test: "It should return a string with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: '0'

Test: "It should return a string with all integers from 0 to the input number"
Code: beepBoop(9);
Expected Output: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'

Test: "It should return a string with all integers containing 1 replaced with 'Beep!'"
Code: beepBoop(9);
Expected Output: '0, Beep!, 2, 3, 4, 5, 6, 7, 8, 9'

Test: "It should return a string with all integers containing 2 (except for those containing 3) replaced with 'Boop!' and all integers containing 3 replaced with 'Won't you be my neighbor?'"
Code: beepBoop(9);
Expected Output: '0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9'

Describe: beepBoopReverse()

Test: "It should follow the logic of beepBoop, but the returned string should be in reverse order."
Code: beepBoop(30);
Expected Output: 'Won't you be my neightbor?, 29, 28, 27...Won't you be my neighbor?, Boop!, Beep!, 0'