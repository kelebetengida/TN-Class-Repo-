// //////////////////////////////////Getting Element//////////////////////////////////
/////// Getting elements by tag name
// getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements. The length property provides the size of the collection. Whenever we use this method we access the individual elements using index or after loop through each individual items. An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.

// general syntax
document.getElementsByTagName('tagname')



/////// Getting elements by class name
// getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements. See the example below

//syntax
document.getElementsByClassName('classname')



/////// Getting an element by id
// getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
document.getElementById('id')


/////// Getting elements by using querySelector methods
// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.
// querySelector: can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.


// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

//////////////////////////////////// Adding attribute/////////////////////////////////////

/////// Adding attribute using setAttribute
/////// Adding attribute without setAttribute
/////// Adding class using classList
/////// Removing class using remove
///////////////////////////////// Adding Text to HTML element/////////////////
/////// Adding Text content using textContent
///////// Adding Text Content using innerHTML
////////////// Text Content
////////////// Inner HTML
//////////////////////////////////////// Adding style/////////////////////////////
/////// Adding Style Color
/////// Adding Style Background Color
/////// Adding Style Font Size