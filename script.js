
//-----API-----//

	async function getCovidapi(){
		const jsondata= await fetch('https://api.covid19api.com/summary');

		const jsdata= await jsondata.json();
				const globaldata = jsdata.Global;
				//console.log(jsdata);

				const date = jsdata.Date;

				document.getElementById("api-date").innerHTML = "Updated Date: " + date;
				//console.log(date);

				document.getElementById("api-new-con").innerHTML = "New Confirmed: " + globaldata.NewConfirmed;
				document.getElementById("api-new-death").innerHTML = "New Deaths: "+ globaldata.NewDeaths;
				document.getElementById("api-new-rec").innerHTML = "New Recovered: "+ globaldata.NewRecovered;
				document.getElementById("api-total-con").innerHTML = "Total Confirmed: "+ globaldata.TotalConfirmed;
				document.getElementById("api-total-death").innerHTML = "Total Deaths: "+ globaldata.TotalDeaths;
				document.getElementById("api-total-rec").innerHTML = "Total Recovered: " + globaldata.TotalRecovered;

	}

getCovidapi();

//-----API ENDS-----//



//-----NAVBAR-----//
$(document).on('click', 'ul li', function() {
	$(this).addClass('active').siblings().removeClass('active')
})

//----- ENDS NAVBAR-----//



//-----VIDEO-----//
function toggle(){
	var videoplay= document.querySelector(".videoplay")
	var video= document.querySelector(".video")
	videoplay.classList.toggle("active");
	$('#vid').get(0).pause();
	video.currentTime= 0;
}


$(document).on('click', 'video, #btnplay', function (e) {
        var video = $('video').get(0);  
        if (video.paused === false) {
            video.pause();
            } else {
            video.play();
        }
        return false;
    });


//-----ENDS VIDEO-----//