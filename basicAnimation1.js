/* The code mentioned below is Html code which should be saved in a different file for the code to run seemlessly*/

/*<!DOCTYPE html>
<html>
    <head>
        <title>
            basic animation using Js
        </title>
        <script type="text/javascript" src="basicAnimation1.js"></script>
    </head>
    <body onload="animate_string('target')">
        <pre id = "target">Ladro Resumen</pre>
    </body>
</html>*/


animate_string =(id)=>{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;


    setInterval(function(){
        text = text[text.length - 1]+text.substring(0, text.length - 1);
    textNode.data = text;
    }, 100);

}