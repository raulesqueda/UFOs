// Initialize the function
function wordCount(myString){


  // Convert string to an array of words
  var stringArray = myString.split("");

  // An object to hold word frequency
  var wordFrequency={}

  // Iterate through the array and count the occurrence of each word
  stringArray.forEach((currWord)=>{
    if(Object.keys(wordFrequency).includes(currWord)){
      wordFrequency[currWord]+=1;
    } else {
      wordFrequency[currWord]=1; 
    }
  })
  return wordFrequency
}
//  Call the function with the string as a parameter.
let freq=wordCount("I yam what I wam and always will be what I yam")