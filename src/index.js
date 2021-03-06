// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.

// 1. What is the unknown?
// returns an array of permutations of those integers in no particular OverconstrainedError

// 2. What are the data inputs?
// an array of unique integers

// 3. Can you restate the problem in your own words?

// 4. Can the unknown be determined from the data inputs?
// yes

// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// sufficient

// 6. How should I label important pieces of data input that are a part of the problem?
// array

// 7. Draw a figure. Introduce suitable notation.

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?

// 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// recursion
// do we need a helper function?

// 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?
// see notes

// 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
// negative integers

// 12. Progress to more complex examples. What is your updated plan here to find a solution?
// 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 14.  Can you see clearly that the step is correct?

// see pseudocode below

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
// 3 pointers in place and swapping

// 21.   How have other people solved this problem?

// function getPermutations(array) {
//   let perms = [];
//   // write helper function with arr, perm and perms
//   // concat all the newly created perm arrays into 1 big array perms
//   helper(array, [], perms) {
//     return perms;
//   }

//   function helper(array, perm, perms){
//     if (!array.length && perm.length) {
//       perms.append(perm);
//     } else {
//       for (let i = 0; i < array.length; i++){
//         let newArr = array.slice(0, i).concat(array.slice(i + 1);
//         let newPerm = perm + array[i];
//         helper(newArr, newPerm, perms);
//       }
//     }
//   }

function getPermutations(array) {
  let perms = [];
  helper(0, array, perms);
  return perms;
}

function helper(i, array, perms) {
  if (i === array.length - 1) {
    perms.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      helper(i + 1, array, perms);
      swap(i, j, array);
    }
  }
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
