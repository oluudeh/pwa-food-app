var app = {};

app.bindNavbar = function(){
	document.addEventListener('DOMContentLoaded', function () {
	  	var $navBtn = document.querySelector('.navbar-burger');
	  	$navBtn.addEventListener('click', function(){
	  		$navBtn.classList.toggle('is-active');
	  		$navId = $navBtn.dataset.target;
	  		$navMenu = document.getElementById($navId);
	  		$navMenu.classList.toggle('is-active');
	  	})

	});	
}

app.bindNavbar();

app.requestNotifPermission = function(){
	document.addEventListener('DOMContentLoaded', () => {

		if (!('Notification' in window)) {
			alert('Your browser does not support notifications');
		}
		else if (Notification.permission === 'denied') {
			alert('Notification permission was denied');
			Notification.requestPermission();
		}
		else if (Notification.permission === 'granted') {
			alert('Thanks for granting notification permission');
		}
		else{
			Notification.requestPermission();
		}

		

	});
}

app.requestNotifPermission();

app.sendNotification = function(title, message){
	if (Notification.permission === 'granted') {
		var options = {
			body: message,
			icon: 'icons/favicon.ico'
		};

		var notif = new Notification(title, options);
	}
	else {
		console.log('User has not granted notification permission');
	}
};

//app.sendNotification('testing', 'we are testing notifications');

app.sendSWNotification = function(title, message) {
	if (Notification.permission === 'granted') {
		var options = {
			body: message,
			icon: 'icons/favicon.ico'
		};

		navigator.serviceWorker.ready.then((sw) => {
			sw.showNotification(title, options);
		});
	}
	else {
		console.log('User has not granted notification permission');
	}	
}

//app.sendSWNotification('SW Notif Test', 'Testing SW notification');

