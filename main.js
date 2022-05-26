var capitals=(word)=>word.split("").map((x,i)=> x == x.toUpperCase() ? x = i : false).filter(x=> x !== false)

/*
7kyu-Find the capitals


Instructions
Write a function that takes a single string (word) as argument.
 The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

BEST SOLUTİONS

------------------------------------------------------------------------
  [...word].map((el, i) => el === el.toUpperCase() ? i : -1).filter((e)=> e >= 0)

------------------------------------------------------------------------

const capitals = WORD => WORD.match(/[A-Z]/g).map(el => WORD.indexOf(el))

