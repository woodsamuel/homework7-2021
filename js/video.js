
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down")
	video.playbackRate *= 0.95
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /= 0.95
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 15
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Mute")
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		console.log("Unmute")
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}	
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Change Volume")
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change Style")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Change Back")
	video.classList.remove("oldSchool")
});