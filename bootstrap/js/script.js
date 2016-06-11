jQuery(document).ready(function(){
    var chash=window.location.hash;
    if(chash!=="")
    {
        jQuery("div[data-role='page']").hide();
        jQuery("html, body").animate({scrollTop: 0 });
        jQuery(chash).fadeIn();
    }
    
    jQuery("div[data-role='page'] a").click(function(){
        if(jQuery(jQuery(this).attr('href')).length===1)
        {
            jQuery(this).parents("div[data-role='page']").hide();
            jQuery("html, body").animate({scrollTop: 0 });
            jQuery(jQuery(this).attr('href')).fadeIn();
        }
    });
    
    /*custom multiselect control*/    
    jQuery('body').on('keyup','.search-field',function(){
	var target=jQuery(this).parents().next('.search-control');
	var $rows = jQuery(target).find('li');
	var val = jQuery.trim(jQuery(this).val()).replace(/ +/g, ' ').toLowerCase();
	$rows.show().filter(function() {
	    var text = jQuery(this).text().replace(/\s+/g, ' ').toLowerCase();
	    return !~text.indexOf(val);
	}).hide();
    });
    /*custom multiselect control*/
});