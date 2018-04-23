
var daysUntilMyBirthday = 80;

for (var days = daysUntilMyBirthday; days >=0; days--){
	if(days > 30){
		console.log(days + "days until my birthday! ...  :(")
	}
	if(days <30 && days >= 5){
		console.log(days + "days until my birthday!... :)")
	}
	if(days < 5 && days > 1){
		console.log(days + "DAYS UNTIL MY B-DAY!!!")
	}
	if(days == 1){
		console.log("TOMORROW IS MY BIRTHDAY!!")
	}
	if(days == 0){
		console.log(
		"♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*•\n" +
 		"♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪•\n" +
 		"*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«"
			)
	}
}
