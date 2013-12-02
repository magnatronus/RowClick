var expanded = false;

function reviewClick(e){
	//alert('Click'); //uncomment me so i work on iOS
	e.cancelBubble = true;
	expanded = !expanded;
	$.reviewText.height=(expanded)?Ti.UI.SIZE: '45dp';	
}
