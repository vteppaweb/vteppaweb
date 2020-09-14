		
		function description(msg){   // Show Description Details on Div 'description'
			if (msg=="Summary") {
				document.getElementById('description').innerHTML = "Cover Letter - Professional Summary";
			} 
			if (msg=="Experience") {
				document.getElementById('description').innerHTML = "Employment Details";
			} 
			if (msg=="Education") {
				document.getElementById('description').innerHTML = "Academic Achievements Details";
			} 
			if (msg=="Skills") {
				document.getElementById('description').innerHTML = "Soft and Hard Skills Details";			
			} 
			
		}

		function clear_description(){  // Do not show nothing on Div 'description'
			   document.getElementById('description').innerHTML = "";
		}
