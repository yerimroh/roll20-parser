
// resets every input boxes
function clearArea() {
    document.getElementById('box').value = "";   
    document.getElementById('oldurl').value = "";
    document.getElementById('newurl').value = "";  
   } // convert


function copy() {
    var copyText = document.getElementById("box");
    copyText.select();
    //copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied on clipboard!");
} // copy



function convert() {
    result = document.getElementById('box').value; // obtain the input that user provided
    result = changeColor(result); // change background color to gray
    result = changeWidth(result); // change dice width so that it fits on screen
    
    if(document.getElementById('oldurl').value != "" || document.getElementById('newurl').value != "") {
        result = imageConvert(result); // convert image depending on the availability of the url

    } // if
  
    document.getElementById('box').value = result;
   

   } // convert


function changeColor(input) {
    result = input;
    result = result.replaceAll("d3e5f5", "f1f1f1");
    result = result.replaceAll("b1d9fa", "e1e1e1");
    
    result = result.replaceAll("rgb(211, 229, 245)", "rgb(241, 241, 241)");
    result = result.replaceAll("rgb(177, 217, 250)", "rgb(225, 225, 225)");

    return result;
} // changecolor


function changeWidth(input) {
    result = input;

    if(result.indexOf("background: rgb(255, 255, 255); width:") != -1) {
        index = result.indexOf("background: rgb(255, 255, 255); width:") + 38
        
        endindex = result.indexOf("px", index) + 2;

        width = result.substring(index, endindex);
        result = result.replaceAll(width, "100%")
    } // if
    return result;    
} // changeWidth



function imageConvert(input) {
    result = input;

    if(document.getElementById('oldurl').value == "" || document.getElementById('newurl').value == "") {
        alert("Provide both old and new image url!");
    } else {
        result = result.replaceAll(document.getElementById('oldurl').value, document.getElementById('newurl').value);
    } // if-else

    return result;

}