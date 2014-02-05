Eyeport.js
=======

jQuery plugin to check if element is in viewport. It provides two functions:

```javascript
eyeportIn
```
and
```javascript
eyeportOut
```

These functions are called when the element enters and leaves the viewport area.

Simple usage:
--------------------------------------

If your element has an ID:

```javascript
$('#your_element_id').eyeport({
	eyeportIn: function() {
		//to access element use 'this'
		console.log("visible");
	},
	eyeportOut: function() {
      //to access element use 'this'
		console.log("not_visible");
	}
});
```

If you want to attach it to a set of elements with a class:

```javascript
$('.your_elements_class').each(function(){
	$(this).eyeport({
		eyeportIn: function() {
		  //to access element use 'this'
			console.log("visible");
		},
		eyeportOut: function() {
		  //to access element use 'this'
			console.log("not_visible");
		}
	});
});
```

With Eyeport.js you can implement some cool animation, please send me your sample links if you found Eyeport.js useful, I will list them here!

Eyeport.js is in its experimental phase and may not work in all situations or may need some tricks to work properly but it does it job ;-)
