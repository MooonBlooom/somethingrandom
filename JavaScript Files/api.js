var request_button = document.getElementById("requestButton");
request_button.addEventListener("click", sendRequest);

function sendRequest()
{
    if(request_button.classList.contains("clicked"))
    {
        alert("You are only allowed to click this button once! (It is best to not overwhelm the API)");
    }
    else
    {
        const url = 'https://movies-api14.p.rapidapi.com/search?query=animation';
        //const url = 'https://pokeapi.co/api/v2/pokemon/';
        const options = {
	        method: 'GET',
	        headers: {
		        'X-RapidAPI-Key': '2c9c607a59msh87de8d5c9c56b8fp1b43dejsnaeacfdf27281',
		        'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
	        }
        };

        try {
            fetch(url, options)
                .then(response => {
                    return response.json(); //return data as json file
                })
                .then(data => {
                    // read in the data we just got
                    console.log(data);

                    // now I can let you try this part:
                    // get the contents array and get access to the data
                    const movies = data.contents;
                    movies.forEach(media => {
                        console.log(media.original_title);
                        const markup = `<li>Title: ${media.original_title}</li>`;
                        const markup2 = `<li class="sub_list">Original release date: ${media.release_date}</li>`;
                        const markup3 = `<li class="sub_list"><a href="${media.youtube_trailer}" target="_blank">YouTube trailer</a></li>`;

                        document.querySelector("#api_results").insertAdjacentHTML('beforeend', markup);
                        document.querySelector("#api_results").insertAdjacentHTML('beforeend', markup2);
                        document.querySelector("#api_results").insertAdjacentHTML('beforeend', markup3);
                    })
                })
        }
        catch (error) {
	        console.error(error);
        }
        request_button.classList.add("clicked");
    }
}