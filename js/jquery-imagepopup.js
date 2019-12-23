(funtion($){
 $.fn.imagepopup=function () {
  return this.each(function(){

  	var $overlay; 
  	setoverlayproperties();
  	$(this).find("a").on("click",function(event){


  		event.prebentDefault();
  		$overlay.show();
  	})

  	function setoverlayproperties(){

  		$overlay=$('<div></div>');
  		$overlay.css({

  				"background":'rgba(0, 0, 0, 0.5)',
  				"position":"absolute",
  				"top":"0px",
  				"left":"0px",
  				"display":"none",
  				"text-align":"center",
  				"width":"100%",
  				"padding-top":"5%"


  		});
  		$("body").append($overlay);
  	}
  })
 }



}(jQuery));