


//lets generate a few rows
var rows = [];
var i=0;
for(var i=0; i<5; i++){
	var row = Alloy.createWidget('com.test.ExpandingRow').getView();
	rows.push(row);	
}

$.list.setData(rows);

// now show index
$.index.open();
