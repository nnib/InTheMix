// global heightObjs for computed heights
var heightObjs = new Array(  );

// find computed height and set all to zero
function setHeight(objName) {
   var obj = document.getElementById(objName);
   var height = aaGetStyle(obj,'height');
   heightObjs[objName] = Math.round(parseFloat(height.substr(0,height.length-2)));
   obj.style.height="0";
}

function aaGetStyle(obj, styleName) {
   if (obj.currentStyle) 
      return obj.currentStyle[styleName];
   else if (document.defaultView && document.defaultView.getComputedStyle) 
      return document.defaultView.getComputedStyle(obj,null).getPropertyValue(styleName);
   return undefined;
} 

// set up panels
aaManageEvent(window,"load", function() {

   setHeight('one');
   setHeight('two');
   setHeight('three');
   setHeight('one2');
   setHeight('two2');
   setHeight('three2');
   setHeight('one3');
   setHeight('two3');
   setHeight('three3');
   setHeight('one4');
   setHeight('two4');
   setHeight('three4');
   setHeight('one5');
   setHeight('two5');
   setHeight('three5');
   setHeight('one6');
   setHeight('two6');
   setHeight('three6');

   document.getElementById('oneplus').style.display='block';
   document.getElementById('twoplus').style.display='block';
   document.getElementById('threeplus').style.display='block';
   document.getElementById('one2plus').style.display='block';
   document.getElementById('two2plus').style.display='block';
   document.getElementById('three2plus').style.display='block';
   document.getElementById('one3plus').style.display='block';
   document.getElementById('two3plus').style.display='block';
   document.getElementById('three3plus').style.display='block';
   document.getElementById('one4plus').style.display='block';
   document.getElementById('two4plus').style.display='block';
   document.getElementById('three4plus').style.display='block';
   document.getElementById('one5plus').style.display='block';
   document.getElementById('two5plus').style.display='block';
   document.getElementById('three5plus').style.display='block';
   document.getElementById('one6plus').style.display='block';
   document.getElementById('two6plus').style.display='block';
   document.getElementById('three6plus').style.display='block';
});

// transitionally expand the item
function expand(newItem) {

  
   document.getElementById(newItem + 'plus').style.display='none';
   document.getElementById(newItem + 'negative').style.display='block';
   var currentItem = document.getElementById(newItem);

   // find increment based on computed height divided by loop count of 20
   var incr = heightObjs[newItem] / 20;
   for (var i=0; i < 20; i++) {
      var val = (i+1) * incr;
      var func = "adjustItem("+val+",'"+newItem+"')";
      setTimeout(func,(i+1)*30);
   }
}
// transitionally collapse the item
function collapse(newItem) {
   document.getElementById(newItem + 'plus').style.display='block';
   document.getElementById(newItem + 'negative').style.display='none';
   var currentItem = document.getElementById(newItem);

   // find decrement based on computed height divided by a loop count of 20
   var decr = heightObjs[newItem] / 20;
   for (var i=0; i<20; i++) {
      var val = heightObjs[newItem]-(decr*(i+1));
      var func = "adjustItem("+val+",'"+newItem+"')";
      setTimeout(func,(i+1)*30);
   }
}

// individual adjustment
function adjustItem(val, newItem) {
    document.getElementById(newItem).style.height=val + "px";
}


