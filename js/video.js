var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


window.onload = function(){
	var video = document.querySelector("#player1"); 
	var currentspeed = 1;
	var mutestatus = false;
	var currentvolume = 100;
	var playbtn = document.getElementById("play");
	var pausebtn = document.getElementById("pause");
	var slowerbtn = document.getElementById("slower");
	var fasterbtn = document.getElementById("faster");
	var skipbtn = document.getElementById("skip");
	var mutebtn = document.getElementById("mute");
	var vslider = document.getElementById("slider");
	var vintagebtn = document.getElementById("vintage");
	var origbtn = document.getElementById("orig")

	playbtn.onclick = function(){
		video.play();
		console.log("Play Video");
		// document.querySelector("#volume").innerHTML = volumePercent + "%";
	}

	pausebtn.onclick = function(){
		video.pause();
		console.log("Pause Video");
	}

	slowerbtn.onclick = function(){
		currentspeed = currentspeed * 0.95;
		video.playbackRate = currentspeed;
		console.log("New speed is" + currentspeed);
	}

	fasterbtn.onclick = function(){
		currentspeed = currentspeed / 0.95;
		video.playbackRate = currentspeed;
		console.log("New speed is" + currentspeed);
	}

	skipbtn.onclick = function(){
		console.log("Original location" + video.currentTime);
		let newtime = video.currentTime + 15;
		if(newtime > video.duration){
			video.currentTime = 0;
			newtime = 0;
			console.log("Going back to beginning ");

		}
		console.log("New location" + newtime);

	}

	mutebtn.onclick = function(){
		if(mutestatus == true){
			mutestatus = false;
			video.muted = false;
			mutebtn.innerHTML = "Mute";
			// console.log("Unmuted");
		}
		else{
			mutestatus = true;
			video.muted = true;
			mutebtn.innerHTML = "Unmute";
			// console.log("Muted");

		}

	}

	vslider.oninput=function(){
		currentvolume = document.getElementById("slider").value;
		video.volume = currentvolume * 0.01;
		document.getElementById("volume").innerHTML = currentvolume + "%";
		console.log(video.volume);
		
	}

	vintagebtn.onclick = function(){
		video.classList.add("oldSchool");

	}

	origbtn.onclick = function(){
		video.classList.remove("oldSchool");
	}


	
}
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

