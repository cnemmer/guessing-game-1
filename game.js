var correct = 0;

function ques1(){
	var question1 = prompt("Are you afraid of the dark?");
	if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
	  alert('You are a Halloweenie');
	  correct++;
	} else {
	  alert('Hmmm... this is going to be harder than I thought');
	}
}

function ques2(){
	var question2 = prompt("Do you believe in Haunted Houses?");
	if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
	  alert('You are a giant Halloweenie');
	  correct++;
	} else {
	  alert('You are a tough one to scare!');
	}
}

function ques3(){
	var question3 = prompt("Do you avoid watching scary movies and tv shows?");
	if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
	  alert('You are a mini Halloweenie');
	  correct++;
	} else {
	  alert('You are ready for Hallowen!');
}

ques1();
ques2();
ques3();

alert('You are finished! You were afraid of ' + correct + ' out of three scary scenarios right... sleep with the lights on!');

