//write a JavaScript function to get the HREF attribute of the link when you click the button



	
	
//Select the class of the button using teh querySelectors(selects one elements )
document.querySelector('.button1').onclick = function() {
//Declare a variable for the href attribute.     
    const link = document.querySelector('a').getAttribute('href');
//Display the link as text on the web page.     
    alert(link);
}