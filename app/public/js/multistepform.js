var choose = {};

$(document).ready(function()
{
	console.log('jquery rdy');

	$("input[value='ma']").prop('checked',true);
	//jQuery time
	var current_fs, next_fs, previous_fs; //fieldsets
	var left, opacity, scale; //fieldset properties which we will animate
	var animating = false; //flag to prevent quick multi-click glitches

	$(".next").click(function()
	{
		if(animating)
		{
			animating = false;
			return false;
		}
		animating = true;

		current_fs = $(this).parent();
		next_fs = $(this).parent().next();


		if (!($('input[type=text]').val()))
		{
	  		$('input[type=text]').effect("shake");
				return false;
		}


		if(!($('input[type=email]').val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)))
		{
			$('input[type=email]').effect("shake");
			return false;
		}


		//activate next step on progressbar using the index of next_fs
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

		//show the next fieldset
			next_fs.show();
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			},
			duration: 800,
			complete: function(){
				current_fs.hide();
				animating = false;
			},
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});

	$(".previous").click(function(){
		if(animating) return false;
		animating = true;

		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();

		//de-activate current step on progressbar
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

		//show the previous fieldset
		previous_fs.show();
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale previous_fs from 80% to 100%
				scale = 0.8 + (1 - now) * 0.2;
				//2. take current_fs to the right(50%) - from 0%
				left = ((1-now) * 50)+"%";
				//3. increase opacity of previous_fs to 1 as it moves in
				opacity = 1 - now;
				current_fs.css({'left': left});
				previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
			},
			duration: 800,
			complete: function(){
				current_fs.hide();
				animating = false;
			},
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
	});


	choose = function()
	{
		var ma = $("input[value='ma']")[0].checked;
		var mp = $("input[value='mp']")[0].checked;

		if(mp)
		{
			$('.ma').hide();
			$('.mp').show();
		}
		else
		{
			$('.mp').hide();
			$('.ma').show();
		}
	}

	$('form').on('submit', function(e)
	{
			if (!($('input[name=sector]').val()))
			{
				$('input[name=sector]').effect("shake");
				e.preventDefault();
				return false;
			}
	});

});
