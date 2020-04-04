let inp1 = document.getElementById("input1").value;
let inp2 = document.getElementById("input2").value;
// let plus = document.getElementById("addition");
// let result = document.getElementById("equal");

// function equal(e) {
//   let finalResults = Number(inp1) + Number(inp2);  
//   e.preventDefault();
//   return finalResults;
// }

let finalResults;

document.getElementById("equal").addEventListener("click", function(event){
    let finalResults = Number(inp1) + Number(inp2);  
  event.preventDefault();
    return finalResults;

});
console.log(finalResults);
// document.getElementById("result").innerHTML = finalResults;

// function clear() {
//   inp1 = 0;
//   inp2 = 0;


// }