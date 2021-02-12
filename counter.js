 $(document).ready(function() {
    $('.slogan_main').slogan_main();
    $('.slogan_social').slogan_social();
    $('#social_media').social_media();
});

$.fn.extend({
    social_media: function() {
            return this.each(function() {

				var counter=7;

                var $this = $(this);
                var html = '';
				if (facebook == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
                html 	+= '<a href="'+facebook+'"><img src="countdown_files/img/social_media/facebook_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/facebook_out.png" alt="" class="out">';
				html    += '</div>';
				}

				if (twitter == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+twitter+'"><img src="countdown_files/img/social_media/twitter_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/twitter_out.png" alt="" class="out">';
				html    += '</div>';
				}

				if (rss == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+rss+'"><img src="countdown_files/img/social_media/rss_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/rss_out.png" alt="" class="out">';
				html    += '</div>';
				}

				if (deviantart == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+deviantart+'"><img src="countdown_files/img/social_media/deviantart_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/deviantart_out.png" alt="" class="out">';
				html    += '</div>';
				}

				if (myspace == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+myspace+'"><img src="countdown_files/img/social_media/myspace_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/myspace_out.png" alt="" class="out">';
				html    += '</div>';
				}


				if (lastfm == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+lastfm+'"><img src="countdown_files/img/social_media/lastfm_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/lastfm_out.png" alt="" class="out">';
				html    += '</div>';
				}


				if (flikr == 'hide'){var counter = counter-1}
				else{
				html    += '<div class="social_box">';
				html    += '<a href="'+rss+'"><img src="countdown_files/img/social_media/flikr_in.png" alt="" class="in"></a>';
				html    += '<img src="countdown_files/img/social_media/flikr_out.png" alt="" class="out">';
				html    += '</div>';
				}

				$this.html(html);
				if(counter==1){$("#social_media").css('width', "40px"); }
				else if(counter==2){$("#social_media").css('width', "80px"); }
				else if(counter==3){$("#social_media").css('width', "120px"); }
				else if(counter==4){$("#social_media").css('width', "160px"); }
				else if(counter==5){$("#social_media").css('width', "200px"); }
				else if(counter==6){$("#social_media").css('width', "240px"); }
				else if(counter==7){$("#social_media").css('width', "280px"); }

            });
        }
});

$.fn.extend({
  slogan_main: function() {
            return this.each(function() {

                var $this = $(this);
                var html = '<div id="main_titel">' + main_titel + '<span>' + sub_titel + '</span></div>';

                $this.html(html);
            });
        }
});

$.fn.extend({

	slogan_social: function() {
            return this.each(function() {

                var $this = $(this);
                var html = '<div id="main_titel"><span>' + social_network_titel + '</span></div>';
                $this.html(html);
            });
        }
});


$(document).ready(function(){
	$("img.in").hover(
	function() {
	$(this).stop().animate({"opacity": "0"}, "slow");
	},
	function() {
	$(this).stop().animate({"opacity": "1"}, "slow");
	});
});

function create_countdown(date_details_object, output_element_id) {

	const time_remaining = get_amount_of_time_remaining(date_details_object);

	if(time_remaining <= 0) {
		set_timer(output_element_id, 0, 0, 0, 0);
		return;
	}

	const display_date_values = get_display_date_values(time_remaining);

	set_timer(output_element_id, display_date_values.days, display_date_values.hours, display_date_values.mins, display_date_values.sex);

}

function get_amount_of_time_remaining(date_details_object) {
	const dateNow = new Date();
	const countdownEndData = new Date(date_details_object.year, date_details_object.month, date_details_object.day, date_details_object.hour, date_details_object.min, date_details_object.sec);

	return countdownEndData.getTime() - dateNow.getTime()+5;
}

function set_timer(element_id, days, hours, mins, sex){
	$('#' + element_id).html(get_timer_html());

	$('#' + element_id + ' .days .value-span').text(days);
	$('#' + element_id + ' .hours .value-span').text(hours);
	$('#' + element_id + ' .mins .value-span').text(mins);
	$('#' + element_id + ' .secs .value-span').text(sex);
}

function get_timer_html() {

	return "<div class='days'><span class='value-span'></span><div class='days_text'></div></div>" +
	"<div class='hours'><span class='value-span'></span><div class='hours_text'></div></div>" +
	"<div class='mins'><span class='value-span'></span><div class='mins_text'></div></div>" +
	"<div class='secs'><span class='value-span'></span><div class='secs_text'></div></div>" ;
}

function get_display_date_values(time_remaining) {
	var days, hours, mins, sex;

	time_remaining = Math.floor(time_remaining/1000); /* kill the milliseconds */

	days=Math.floor(time_remaining/86400); /* days */
	time_remaining=time_remaining%86400;

	hours=Math.floor(time_remaining/3600); /* hours */
	time_remaining=time_remaining%3600;

	mins=Math.floor(time_remaining/60); /* minutes */
	time_remaining=time_remaining%60;


	sex=Math.floor(time_remaining); /* seconds */

	return {days: days, hours: hours, mins: mins, sex: sex}
}


