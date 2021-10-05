const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
       if (mixedArray.length >= 0 ) {
         const LowerFilteredNonStrings =
           mixedArray.filter((str) => typeof str === "string").map(item=>item.toLowerCase());

         resolve(LowerFilteredNonStrings);
    } else {
      reject("Invalid array");
    }
  });
};
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
  .then((value) =>
    console.log(value)
  )
  .catch((error) =>
    console.log(error)
  );