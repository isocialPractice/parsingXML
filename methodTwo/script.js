// JavaScript Document

function parse3ListItems(doc) {
 var xmlhttps = new XMLHttpRequest();
 xmlhttps.onreadystatechange =
 function() {
  if (this.readyState == 4 && this.status == 200) {
   var curXML = this.responseXML;
   var curXMLSections = curXML.getElementsByTagName("section");
   var curXMLSectionsLen = curXMLSections.length;
   var i;
   for (i = 0; i < curXMLSectionsLen; i++) {
    noteFunction1(this, i);
   }   
  }
 };
 xmlhttps.open("GET", doc, true);
 xmlhttps.send();
}
var theID = 0;
var theNode = 0;
function noteFunction1(aCol, index) {
 var xmlDoc, xmlSection, txt, xTags;
 xmlDoc = aCol.responseXML;
 xmlSection = xmlDoc.getElementsByTagName("section");
 // Returns XMLHttpsRequest() as an XML DOM Object
 txt = "";
 // Prepares the Variable txt for the For Loop
 xTags = ["one", "two", "three"];
 
 // Creates Array with items equal to XML elements of each row
 var one, ONE;
 // Creates Local Variables to be used in the upcoming For Loop
 var One = 0;
 
 // Defines Inital Variable for upcoiming For Loop
 // and gives it an Initial Value.
 for (; One < 3; One++) {
 /* 
  For Loop Statement(s) with Initial Variable's value set, 
  omitting Statement 1 (Semicolon still needed for 
  Loop to execute sucessfully). Statement 2 defines a condition. 
  When this condition is met the loop is finished. 
  The third Statement executes after the code block in the 
  For Loop has executed. In this case the third Statement 
  increments the Variable being Looped (One) by 1 after the code
  block in the For Loop has completely executed. This results in a 
  new value that will then be passed into Statement 2 after the 
  For Loop's code block has executed until the condition set 
  in Statement 2 is no longer true.
 */
  ONE = xTags[One];

  // Gets the Array value from xTags using the 
  // Variable value defined by the For Loop.
  one = xmlSection[index].getElementsByTagName(ONE);

 /*
  Uses Variable one to store the content from the 
  XML Element returned from the first line of code. 
  The Argument ONE is used in the Document Properties 
  targeting the XML DOM by the tag name(s) used in the
  XML DOM. Variable ONE will return the name of the tag 
  being returned. The value from Variable theNode specifies 
  the index. This will return the value of esch tag at 
  their Indexed position in the XML DOM.
 */
  txt += "-,-" + one[0].childNodes[0].textContent;

 /*
  The result from the first two lines of the Loop's
  code block is appended to Variable txt. Variable txt had an 
  inital value of "". THe first execution of the code block is 
  appended to an empty variable. The end result will be 
  typeof string.
 */
 }
 
 txt = txt.replace("-,-","");
 
 /*
  The remaining process is the same as previous, creating HTML elements
  and appending them into the list item. Global variables for
  indexing purposes are being stored in HTML elements with
  display: none. These hidden elements will be used to get the 
  value of the Global Variables theID and theNode as 
  they are incremented and stored in the storage HTML elements.
 */ 
 
 var Txt = txt.split("-,-");
 var parse = document.getElementById("parse"); 
 var curList = document.createElement("ol");
 parse.appendChild(curList);
 
 var textList = parse.getElementsByTagName("ol")[theID];
 textList.id = "list" + theID;
 
 var liA = document.createElement("li");
 liA.innerHTML = Txt[1];
 var liB = document.createElement("li");
 liB.innerHTML = Txt[2];
 
 var textListID = document.getElementById(textList.id);
 textListID.appendChild(liA);
 textListID.appendChild(liB);
 
 // Add image after list.
 var curImg = document.createElement("img");
 curImg.style.width = "500px";
 curImg.src = Txt[0];
 parse.appendChild(curImg); 
 
 // Increments the Global Variables theID and
 // theNode so that XML can be iterated row by row
 theID++;
 theNode++;  
 }