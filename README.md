# _Mr. Roboger's Neighborhood_

#### By _**Aidan Williams**_

#### _A page that returns a string of numbers with certain substitutions._

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_

## Description

_A page that takes a name and number from the user and returns a string of integers up to the input number. Some integers are replaced with text according to the following logic._

_From most to least important:_
* _Integers containing a 3 are replaced with the input name followed by ", won't you be my neighbor?"._
* _Integers containing a 2 are replaced with "Boop!"._
* _Integers containing a 1 are replaced with "Beep!"._

_Results can also be returned in reverse order following the same logic._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open index.html in your browser._

## Known Bugs

* _No known bugs._

## License

_[GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License)_

Copyright (c) _2023_ _Aidan Williams_

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
Expected Output: 'Won't you be my neightbor?, Boop!, Boop!, Boop!...Won't you be my neighbor?, Boop!, Beep!, 0'