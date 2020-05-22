
// Declare object array
var versions = [];

// Initialize array with empty key-value objects
versions[0] = {};
versions[1] = {};
versions[2] = {};
versions[3] = {};

// Initialize 2nd-dimension key-value data structures
versions[0] = {
    "OS": "Windows",
    "Chrome": "83.0.4103.61",
    "Firefox": "N/A",
    "IE / Edge": "N/A"
};
versions[1] = {
    "OS": "macOS",
    "Chrome": "81.0.4044.138",
    "Safari": "13.1 (15609.1.20.111.8)",
    "Firefox": "76.0.1"
};
versions[2] = {
    "OS": "iOS",
    "Safari": "N/A"
};
versions[3] = {
    "OS": "iPadOS",
    "Safari": "N/A"
};
  
function createTables() {
    var divElement = document.getElementById("versiontablediv")
    for ( i = 0; i < versions.length; i++ ) {
        var tblElement = document.createElement("table");
        var tblCaptionElement = document.createElement("caption");
        var tblCaptionData = document.createTextNode(Object.values(versions[i])[0]);
        var tblBodyElement = document.createElement("tbody");
        divElement.appendChild(tblElement);
        tblElement.appendChild(tblCaptionElement);
        tblCaptionElement.appendChild(tblCaptionData);
        tblElement.appendChild(tblBodyElement);
        for ( j = 1; j < [Object.keys(versions[i]).length]; j++ ) {
            var tblBodyTrElement = document.createElement("tr");
            var tblBodyTrTdElement1 = document.createElement("td");
            var tblBodyTrTdElement2 = document.createElement("td");
            var tblBodyTrTdElement1Data = document.createTextNode(Object.keys(versions[i])[j]);
            var tblBodyTrTdElement2Data = document.createTextNode(Object.values(versions[i])[j]);
            tblBodyElement.appendChild(tblBodyTrElement);
            tblBodyTrElement.appendChild(tblBodyTrTdElement1);
            tblBodyTrTdElement1.appendChild(tblBodyTrTdElement1Data);
            tblBodyTrElement.appendChild(tblBodyTrTdElement2);
            tblBodyTrTdElement2.appendChild(tblBodyTrTdElement2Data);
        };
    };
};

createTables();