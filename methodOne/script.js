// Javascript Document

// Globals 
var i;
var theNode = 0;
var theID = 0;
var parse = 
 document.getElementById("parse");

// Function called in html.
function parse3ListItems(xmlFile, remote) {
 if (remote == undefined) remote = 0;
 // AJAX call - change file.xml with your xml.
 var xmlhttps = new XMLHttpRequest();
 xmlhttps.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   var storeXML, xmlSection, xmlSectionLen;
   if (remote == 0) {
    storeXML = this.responseXML;
    xmlSection = storeXML.getElementsByTagName("section");
    xmlSectionLen = xmlSection.length;
    for (i = 0; i < xmlSectionLen; i++) {
     noteFunction(this);
    }
   } else {
    var remoteStoreXML, remoteXMLSection, remoteXMLSectionText, 
        remoteParser, remoteXMLSectionTextParser;
    console.log("-----Loaded-----");
    
    remoteStoreXML = this.responseXML;
    remoteXMLSection = storeXML.getElementsByTagName("pre")[0];
    remoteXMLSectionText - remoteXMLSection.innerText;
    remoteParser = new DOMParser();
    remoteXMLSectionTextParser = remoteParser.parseFromString(remoteXMLSectionText, "text/xml");
    // maybe
    xmlSection = remoteXMLSectionTextParser.getElementsByTagName("section");
    xmlSectionLen = xmlSection.length;
    for (i = 0; i < xmlSectionLen; i++) {
     noteFunction(this);
    }    
   }
  }
 };

 // CHANGE file.xml
 xmlhttps.open("GET", xmlFile, true);
 xmlhttps.send(); 

 var noteFunction = function(aCol) {
  // Returns the response from the XMLHttpRequest() as an XML DOM object
  var xmlDoc = aCol.responseXML; 
  var txt = "";
  var xTags = ["one", "two", "three"]
  var one, two;
  
  setTimeout(function() {
   for (i = 0; i < 3; i++) {
   // i is indexed value from Variable One
    one = xTags[i]; 
   // Global Variable theNode is used to transverse the DOM
    two = xmlDoc.getElementsByTagName(one)[theNode]; 
    txt += "-,-" + two.childNodes[0].nodeValue;
   }   

  var Txt, sectionBlock, sectionItem, sectionImg, 
      textList, textListID, liA, liB;

  // Clean txt variable so it can be array.
  txt = txt.replace("-,-",""); 
  // Used to parses XML string.
  Txt = txt.split("-,-"); 
  sectionBlock =  document.createElement("div");
  sectionItem = document.createElement("section");
  
  parse.appendChild(sectionBlock);
    
  sectionImg = document.createElement("img");  
  sectionImg.style.width = '390px'; 
  sectionImg.src = Txt[0];
  
  sectionBlock.appendChild(sectionItem);  

  textList = document.createElement("ol");

  // Global Variable theNode will be incremented in 
  // next set of functions. This will iterate the next 
  // row in the XML DOM.
  textList.id = "list" + theID;
  sectionItem.appendChild(textList);
  textListID = document.getElementById(textList.id);

  // Global Variable theID will be incremented in the next set of functions.
  liA = document.createElement("li")

  // Creates a new HTML element in this Javascript embedded script element.
  liA.innerHTML = Txt[1] 
  //Puts text from XML elements into the new HTML list item.
  liB = document.createElement("li")

  // Creates a new HTML element in Javascript 
  // variable from this embedded script element.
  liB.innerHTML = Txt[2]
  /* 
   Returns the 3rd Array item from Variable Txt, 
   which stores an Array in its value. 
   The array being stored consists of text strings. 
   These text strings are the values from the 
   XML elements on each row being parsed.
   Variable One, which is used in the For Loop 
   returns an index value that will return an item from Array xTags. 
   The Variable xTags stores an Array with strings 
   equal to the XML elements holding the content being parsed - as its value.
   These values in turn will be passed and 
   appended into Variable txt. 
   A Primitive String value is passed("-,-") at 
   the beginning of Variable txt during the For Loop. 
   This is to later split the final value from the 
   For Loop into a new array. 
   But the .replace(x, y) Method must be called on 
   the txt Variable first to remove the first
   Primitive String item that was passed during the For Loop.
   Then the .split(x) Method is called on Variable 
   txt, and is stored in Variable Txt which will be an Array. 
   The Array returning the last two items in the above list.
  */
  textListID.appendChild(liA);
  textListID.appendChild(liB);
  sectionItem.appendChild(sectionImg);
  
  // Increase Globals
  theNode++;
  theID++;
  }, 100);
 };
}
