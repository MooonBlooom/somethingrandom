let colorArray = colorCSS.split("/");
console.log("Color Array: " + colorArray);
let colorFileName = colorArray[-2] + colorArray[-1];
console.log("Full file name: "+ colorFileName); // default.css
let pageName = colorFileName.substr(0, colorFileName.indexOf(".")); // default
console.log("File name - the .css: " + pageName);
let newColors = pageName.substr(0, pageName.indexOf("_dark"));
newColors = newColors + ".css";
let newPath = colorArray[0] + "/" + colorArray[1] + "/" + newColors;
console.log("New file path: " + newPath);
document.getElementById("colors").href = newPath;

newColors = pageName + "_dark.css";