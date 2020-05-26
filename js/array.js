// Declare array
var footerContent = [];

// Initialize array elements
footerContent[0] = "\u00A9 Copyright 2020, ";
footerContent[1] = "T";
footerContent[2] = "y";
footerContent[3] = "l";
footerContent[4] = "e";
footerContent[5] = "r";
footerContent[6] = " ";
footerContent[7] = "N";
footerContent[8] = "e";
footerContent[9] = "l";
footerContent[10] = "s";
footerContent[11] = "o";
footerContent[12] = "n";
footerContent[13] = "-";
footerContent[14] = "S";
footerContent[15] = "c";
footerContent[16] = "h";
footerContent[17] = "u";
footerContent[18] = "p";
footerContent[19] = "p";
footerContent[20] = "e";
footerContent[21] = "r";
footerContent[22] = "t";

// Create function to iterate array, concatinate array elements into a String, identify destination parent elements, and create and apply child elements

function applyContent() {
    content = "";
    for(i = 0; i < footerContent.length; i++) {
        content += footerContent[i];
    }
    var divElement = document.getElementById("footer");
    var pElement = document.createElement("p");
    var pData = document.createTextNode(content);
    pElement.setAttribute("class", "footerparagraph");
    divElement.appendChild(pElement);
    pElement.appendChild(pData);
}

// Running the function

applyContent();