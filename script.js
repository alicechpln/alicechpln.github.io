


// Function to make an Array of Colors
function interpolateColor(color1, color2, factor) {
   if (arguments.length < 3) { 
       factor = 0.5; 
   }
   var result = color1.slice();
   for (var i = 0; i < 3; i++) {
       result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
   }
   return result;
};

function interpolateColors(color1, color2, steps) {
   var stepFactor = 1 / (steps - 1),
       interpolatedColorArray = [];

   color1 = color1.match(/\d+/g).map(Number);
   color2 = color2.match(/\d+/g).map(Number);

   for(var i = 0; i < steps; i++) {
       interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
   }

   return interpolatedColorArray;
}

// Array of Characters
let allChars = String.fromCharCode(...Array(127).keys());
let arrayAllChars = allChars.split('');

let arrayAlphabet = arrayAllChars.slice(97,123);
let arrayAlphabetUpper = arrayAllChars.slice(65, 91);
let arrayNumbers = arrayAllChars.slice(48, 58);
let arrayControl = arrayAllChars.slice(1, 31);


console.log(arrayAlphabet)

let specialChars1 = arrayAllChars.slice(32, 48);
let specialChars2 = arrayAllChars.slice(58, 65);
let specialChars3 = arrayAllChars.slice(91, 97);
let specialChars4 = arrayAllChars.slice(123, 127);

let arraySpecialChars = specialChars1.concat(specialChars2, specialChars3, specialChars4);







var fontSize = 60;

$("#fontSize").on('input', function(){
   fontSize = $("#fontSize").val();
   $('#textContent').trigger( "keyup" );
});


$('#textContent').on('keyup', function(e) {
   e.preventDefault();

   let inputText = $('#textContent').val();   
   inputText = inputText.split('');
   
   var newArray = inputText.map((char) => {


      if(arrayAlphabet.includes(char)){
         var indexChar = arrayAlphabet.indexOf(char);         
         return `<span style='color: rgb(${colorArray[indexChar]});font-size: ${fontSize}px;'>${char}</span>`;         
      } else if(arrayAlphabetUpper.includes(char)){
         var indexChar = arrayAlphabetUpper.indexOf(char);         
         return `<span style='color: rgb(${colorArray[indexChar]});font-size: ${fontSize}px;'>${char}</span>`;         
      } else if(arrayNumbers.includes(char)){
         var indexChar = arrayNumbers.indexOf(char);         
         return `<span style='color: rgb(${colorArrayNumbers[indexChar]});font-size: ${fontSize}px;'>${char}</span>`;         
      } else if(arraySpecialChars.includes(char)){
         var indexChar = arraySpecialChars.indexOf(char);         
         return `<span style='color: rgb(${colorArraySpecialChars[indexChar]});font-size: ${fontSize}px;'>${char}</span>`;     
      } else if (allChars[13]){
         return '<br>';
      }

   });

   $('#showArea').empty().append(newArray);


});


// GET COLOR 
let colorChange1 = $("#colorChange1");
let colorChange2 = $("#colorChange2");
var divColor = $("#divColor");


//  Hex to RG
function hexTorgb(hex) {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

// Set Colors
var promise = ["rgb(57,255,31)", "rgb(255,149,0)"];

colorArray = interpolateColors(promise[0], promise[1], 26);
colorArrayNumbers = interpolateColors(promise[0], promise[1], 10);
colorArraySpecialChars = interpolateColors(promise[0], promise[1], 34);

// Random Colors
$("#col1").on("click", function(){
   $("#colorChange1").val('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
   $(colorChange1).trigger("change");
});

$("#col2").on("click", function(){
   $("#colorChange2").val('#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'));
   $(colorChange2).trigger( "change" );
});


$(colorChange1).on("change", function(){
   var thisValue = $(this).val();
   var rgbValue = hexTorgb(thisValue);
   var rgbString = `rgb(${rgbValue})`;
   
   promise[0] = rgbString;

   colorArray = interpolateColors(promise[0], promise[1], 26);
   colorArrayNumbers = interpolateColors(promise[0], promise[1], 10);
   colorArraySpecialChars = interpolateColors(promise[0], promise[1], 34);

   $('#textContent').trigger( "keyup" );
   exampleAlph();
});

$(colorChange2).on("change", function(){
   var thisValue = $(this).val();
   var rgbValue = hexTorgb(thisValue);
   var rgbString = `rgb(${rgbValue})`;

   promise[1] = rgbString;

   colorArray = interpolateColors(promise[0], promise[1], 26);
   colorArrayNumbers = interpolateColors(promise[0], promise[1], 10);
   colorArraySpecialChars = interpolateColors(promise[0], promise[1], 34);

   $('#textContent').trigger( "keyup" );
   exampleAlph();
});

exampleAlph();



function exampleAlph(){
   $("#example").empty();
for (i = 0; i < arrayAlphabet.length; i++){
   console.log(arrayAlphabet[i]);
   var indexChar = arrayAlphabet.indexOf(arrayAlphabet[i]); 
   $("#example").append(`<span style='color: rgb(${colorArray[indexChar]});font-size: 30px;'>${arrayAlphabet[i]}</span>`)
}
}



$("#optionsTypo").change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
    $( "#showArea" ).css("font-family", str );
});



// var doc = new jsPDF();

//  function saveDiv(divId, title) {
//  doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
//  doc.save('div.pdf');
// }

// function printDiv(divId,
//   title) {

//   let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

//   mywindow.document.write(`<html><head><title>${title}</title>`);
//   mywindow.document.write('</head><body >');
//   mywindow.document.write(document.getElementById(divId).innerHTML);
//   mywindow.document.write('</body></html>');

//   mywindow.document.close(); // necessary for IE >= 10
//   mywindow.focus(); // necessary for IE >= 10*/

//   mywindow.print();
//   mywindow.close();

//   return true;
// }

// var doc = new jsPDF();

//  function saveDiv(divId, title) {
//  doc.fromHTML(`<html><head><title>${title}</title></head><body>` + document.getElementById(divId).innerHTML + `</body></html>`);
//  doc.save('div.pdf');
// }

// function printDiv(divId,
//   title) {

//   let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

//   mywindow.document.write(`<html><head><title>${title}</title>`);
//   mywindow.document.write('</head><body >');
//   mywindow.document.write(document.getElementById(divId).innerHTML);
//   mywindow.document.write('</body></html>');

//   mywindow.document.close(); // necessary for IE >= 10
//   mywindow.focus(); // necessary for IE >= 10*/

//   mywindow.print();
//   mywindow.close();

//   return true;
// }

// window.jsPDF = window.jspdf.jsPDF;

// $(function () {

//    $('#btnPdf').on("click", function () {
//      var doc = new jsPDF();
//      doc.html($('#output')[0], 15, 15, {
//        'background': '#fff',
//      }, function() {
//        doc.save('sample-file.pdf');
//      });
//    });
//  });

// $(function () {

//    var specialElementHandlers = {
//        '#editor': function (element,renderer) {
//            return true;
//        }
//    };
// $('#btnPdf').click(function () {
//        var doc = new jsPDF();
//        doc.html(document.body, {
//          'x': 15,
//          'y': 15,
//          'width': 200,
//          'elementHandlers': handleElement
//        });
//       //  doc.html(
//       //      $('#output').html(), 15, 15, 
//       //      { 'width': 170, 'elementHandlers': specialElementHandlers }, 
//       //      function(){ doc.save('sample-file.pdf'); }
//       //  );

//    });  
// });

// ------------------------
// window.jsPDF = window.jspdf.jsPDF
// window.html2canvas = html2canvas;

// var doc = new jsPDF();

// var specialElementHandlers = {
//    '#bypassme': function (element, renderer) {
//        return true;
//    }
// };

// var divEx = $('#top-part');

// $('#btnPDF').click(function () {
//    doc.html(divEx.innerHTML, {
//       'x': 15,
//       'y': 15,
//       'width': 200,
//       'elementHandlers': specialElementHandlers
//     });
   
//    doc.save('sample_file.pdf');
// });

// ------------------------

function generatePDF() {
   var doc = new jsPDF();  //create jsPDF object
    doc.fromHTML(document.getElementById("showArea"), // page element which you want to print as PDF
    15,
    15, 
    {
      'width': 170  //set width
    },
    function(a) 
     {
      doc.save("colors.pdf"); 
    });
  }