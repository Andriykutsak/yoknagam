jQuery(document).ready(function() {
    //responsive menu
 

    if ($(window).width() < 825) {
        $('#responsive-menu').hide();
        $('#responsive-btn').on('click',  function(event) {
        	event.preventDefault();
        	$('#responsive-menu').toggle(400);
        });

    }
     //user actions
    $('#dropdown-btn').on('click', function(event) {
        event.preventDefault();
        console.log('hello')
        $('#dropdown-menu').toggleClass('hide');
    });
});