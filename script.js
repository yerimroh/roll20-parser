
// resets every input boxes
function clearArea() {
    document.getElementById('summernote').value = "";  
    $('#summernote').summernote('code', '')
    $('.note-codable')[0].value = "";

    document.getElementById('oldurl').value = "";
    document.getElementById('newurl').value = "";  

    alert("Clear");
   } // convert



function copy() {
var copyText = document.getElementsByClassName('note-codable')[0];
copyText.select();
document.execCommand("copy");
alert("복사 완료!");
} // copy


function convert() {
    result = document.getElementsByClassName('note-codable')[0].value; // obtain the input that user provided
    result = changeColor(result); // change background color to gray
    result = changeWidth(result); // change dice width so that it fits on screen
    
    document.getElementsByClassName('note-codable')[0].value = result;
   
    alert("변환 완료!");
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

    firstindex = result.indexOf('sheet-rolltemplate-coc-1') + 137;
    endindex = result.indexOf('border: 1px solid black; color: black;"><');
    width = result.substring(firstindex, endindex);

    // convert the width of dice roll components 
    if(width != -1) {
        result = result.replaceAll(width, "100%; ")
    } // if
    
    return result;    
} // changeWidth




function imageConvert(input) {
    result = document.getElementsByClassName('note-codable')[0].value; // obtain the input that user provided

    oldurl = document.getElementById('oldurl');
    newurl = document.getElementById('newurl');

    if(oldurl.value == "" || newurl.value == "") {
        alert("Provide both old and new image url!");
    } else {
        result = result.replaceAll(oldurl.value, newurl.value);
    } // if-else

    // replace the box 
    document.getElementsByClassName('note-codable')[0].value = result;

    // clear out the box
    oldurl.value = "";
    newurl.value = "";  

    alert("Converted Image!");
}