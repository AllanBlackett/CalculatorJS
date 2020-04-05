let inp1 = Number(document.getElementById("input1").value);
let inp2 = Number(document.getElementById("input2").value);
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");

let oneAdd = addition === false;

// Addition
// document.getElementById("addition").addEventListener("click", function(){
//     let finalResults = Number(inp1) + Number(inp2);  
//       console.log(finalResults);
//   document.getElementById("result").innerHTML = finalResults;
//     // return finalResults;
// });

addition.onclick = function(){
  let finalResults = Number(inp1) + Number(inp2);  
        console.log(finalResults);
    document.getElementById("result").innerHTML = finalResults;
};

subtraction.onclick = function(){
  let finalResults = Number(inp1) - Number(inp2);  
        console.log(finalResults);
    document.getElementById("result").innerHTML = finalResults;
};

// Clear/Reset
document.getElementById("clear").addEventListener("click", function(){
  // // document.getElementById("input1").innerHTML = '';
  // document.getElementById("input1").value = '';
  // // document.getElementById("input2").innerHTML = '';
  // document.getElementById("input2").value = '';

  //   document.getElementById("myForm").reset();
    // window.location.reload();

  // console.log();

  // return finalResults;

});
