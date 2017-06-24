/*****************************************************************************************************Buttons*/
var appName = "Literary Terms Question Bank";
var os = "";

function isMac() { // Returns platform
	return navigator.platform.indexOf("Mac") != -1;
}

function isWindows() {
	return navigator.platform.indexOf("Win") != -1;
}

function isLinux() {
	return navigator.platform.indexOf("Linux") != -1 || navigator.platform.indexOf("X11") != -1;
}

function is64bit() { // Returns whether the device is 64-bit
	var agent = navigator.userAgent;
 	
	if (isMac()) {   			
		var regex = /Mac OS X (\d+)[\.\_](\d+)[\.\_]?(\d*)/g;
		var myArray = regex.exec(agent);

		if (myArray.length == 3) {
			if (myArray[1] > 10) 
				return true;
			if (myArray[1] == 10 && myArray[2] > 7) 
				return true;
		} else if (myArray.length == 4) {
			if (myArray[1] > 10)
				return true;
			if (myArray[1] == 10 && myArray[2] > 7)
				return true;
			if (myArray[1] == 10 && myArray[2] > 7 && myArray[3] >= 3)
				return true;
		} 
		return false;
	}

	if (agent.indexOf("WOW64") != -1 || agent.indexOf("Win64") != -1 || agent.indexOf("x86_64") != -1) {
		return true;
	}

	if (navigator.cpuClass != null && navigator.cpuClass.indexOf("64") != -1)
		return true;

	return false;
}

function getURL() { // Returns the correct URL depending on operating system
	if (isMac()) {
		os = " for Mac";
		return "download/" + appName + "-macos" + (is64bit() ? 64 : 32) + "-offline.dmg";
	} else if (isWindows()) {
		os = " for Windows";
		return "download/" + appName + "-windows" + (is64bit() ? 64 : 32) + "-offline.exe";
	} else if (isLinux()) {
		os = " for Linux";
		return "download/" + appName + "-linux" + (is64bit() ? 64 : 32) + "-offline.tar";
	} else {
		return "download/" + appName + ".zip";
	}
}

function showButtons() { // Modify the links depending on the operating system
	var downloadButton = document.getElementById("downloadBtn");
	downloadButton.href = getURL();
	downloadButton.innerHTML = "Download" + os;
}

showButtons();

/*****************************************************************************************************Modal*/
var modal = document.getElementById('modal');
var showButton = document.getElementById('showAllBtn');
var span = document.getElementById("close");

showButton.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}