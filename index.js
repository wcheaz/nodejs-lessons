"use strict";

var date = new Date(),
  limit = 50,
  product = 0,
  iteration,
  arrayOfIterations = [ 2, 7, 8, 5 ];

console.log("The current date is " + date + ".");

for (let j = 0; j < arrayOfIterations.length; ) {
  iteration = arrayOfIterations[j++];
  console.log("Multiples of " + iteration + " from "
    + iteration + "-" + limit);
  let i = 1;
  while ((product = i++*iteration) <= limit) {
      console.log("A multiple is " + product);
  }
}

console.log("The operations have finished.");
