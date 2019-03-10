let listOfMovies=[];
let favMovieList=[];

function getMovies() {
	return fetch('http://localhost:3000/movies').then(response =>{		 
		if(response.ok){         
			return response.json();          
		}
		else if(response.status == 404){
			return Promise.reject(new Error('Invalid URL'))
		}		  
		else{
			return Promise.reject(new Error('Some internal error occured...'));
		}
	}).then(movieList =>{		  
	  listOfMovies = movieList;  
	  displayMovieList(movieList);
	  return listOfMovies;
	}).catch(error =>{		 
	   document.getElementById('error').innerHTML = `<h2 style='color:red'>${error.message}</h2>`;		  
	});
}

function displayMovieList(movieList){
  let tableBodyHTMLString = '';
  const elements = document.getElementById('moviesList');

  movieList.forEach(movie => {
      tableBodyHTMLString += `
        <tr>
            <td>${movie.id}</td>
            <td><img src="${movie.posterPath}" alt="movie pic" border=3 height=100 width=100</td>
            <td>${movie.title}</td>
            <td><button class='btn btn-primary' onclick='addFavourite(${movie.id})'>update</button></td>
            <td><i class='fa fa-trash' style='color:red;font-size:1.2em;cursor:pointer' onclick='removeContact(${movie.id})'></i></td>
        </tr>
      
      `
  });
  elements.innerHTML = tableBodyHTMLString;
}

function getFavourites() {
	return fetch('http://localhost:3000/favourites').then(response =>{		 
		if(response.ok){         
			return response.json();          
		}
		else if(response.status == 404){
			return Promise.reject(new Error('Invalid URL'))
		}		  
		else{
			return Promise.reject(new Error('Some internal error occured...'));
		}
	}).then(movieList =>{		  
		favMovieList = movieList;  
	  displayFavMovieList(movieList);
	  return favMovieList;
	}).catch(error =>{		 
	   document.getElementById('error').innerHTML = `<h2 style='color:red'>${error.message}</h2>`;		  
	});
}

function displayFavMovieList(favMovieList){
  const elemen =  document.getElementById('favouritesList');
  let tableBodyHTMLString = '';
  favMovieList.forEach(movie => {
      tableBodyHTMLString += `
        <tr>
            <td>${movie.id}</td>
			
			<td><img src="${movie.posterPath}" alt="movie pic" border=3 height=100 width=100</td>
            <td>${movie.title}</td>
            
        </tr>
      
      `
  });
  elemen.innerHTML = tableBodyHTMLString;
}

function addFavourite(id) {
	const index = listOfMovies.findIndex(movie => movie.id === id);
	let favMoviee=favMovieList.find((favMovie)=>{
		return favMovie.id===id;
	});
	if(favMoviee){
		return Promise.reject(new Error('Movie is already added to favourites'));
	}
	//Fetch POST
    return fetch('http://localhost:3000/favourites',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(listOfMovies[index])
    }).then(response =>{
        if(response.ok){
            return response.json();
        }
    }).then(addedFavMovie =>{
		favMovieList.push(addedFavMovie);
		displayFavMovieList(favMovieList);
		return Promise.resolve(favMovieList);
	})
}
module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};
