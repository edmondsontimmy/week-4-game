$(document).ready(function(){

	var number = Math.floor((Math.random() * 102) + 1);
	var userTotal = 0;
	var wins = 0;
	var losses = 0;


	$(".randomNumber").html(number);
	$(".userScore").html(userTotal);

	game();

	function game() {

		var redValue = Math.floor((Math.random() * 12) + 1);
		var blueValue = Math.floor((Math.random() * 12) + 1);
		var yellowValue = Math.floor((Math.random() * 12) + 1);
		var greenValue = Math.floor((Math.random() * 12) + 1);

		$(".redcrystal").on('click', function() {
			redValue += $(this).val();
             $(".redcrystal").html(redValue);
             userTotal += parseFloat(redValue); 
             $(".userScore").html(userTotal);           
             console.log(redValue);
		});
	
		$(".bluecrystal").on('click', function() {
			blueValue += $(this).val();
             $(".bluecrystal").html(blueValue);
             userTotal += parseFloat(blueValue);
             $(".userScore").html(userTotal); 
             console.log(blueValue);
		});
	
		$(".yellowcrystal").on('click', function() {
			yellowValue += $(this).val();
             $(".yellowcrystal").html(yellowValue);
             userTotal += parseFloat(yellowValue);
             $(".userScore").html(userTotal); 
             console.log(yellowValue);
		});
		$(".greencrystal").on('click', function() {
			greenValue += $(this).val();
             $(".greencrystal").html(greenValue);
             userTotal += parseFloat(greenValue);
             $(".userScore").html(userTotal); 
             console.log(greenValue);
		});	
		
		if (userTotal > number) {
			
			alert("You Lose!");

			losses++;
			
			$(".losses").html(losses);
			
			reset();
			
		} else if (userTotal == number) {
			
			alert("You Win!!");

			wins++;
			
			$(".wins").html(wins);
			
			reset();
			
		};
	};

	function reset() {
		
		number = Math.floor((Math.random() * 102) + 1);
		
		redValue = Math.floor((Math.random() * 12) + 1);
		blueValue = Math.floor((Math.random() * 12) + 1);
		yellowValue = Math.floor((Math.random() * 12) + 1);
		greenValue = Math.floor((Math.random() * 12) + 1);
		
		userTotal = 0;
		
	};

});


