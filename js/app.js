'use strict';


//how many people saw horror movies?
function horrorTickets(moviesArray){

    //get all the horror films
    var horrorMoviesArray = moviesArray.filter(function(movieObj){
        //return should we keep it?
        return (movieObj.genre === "Horror");
    });

    console.log(horrorMoviesArray);

    //total the tickets for those films
    // var totalNum = 0;
    // horrorMoviesArray.forEach(function(movieObj){
    //     totalNum += movieObj.tickets;
    // });

    var totalNum = horrorMoviesArray.reduce(function(currTotal, movieObj){
        return currTotal + movieObj.tickets;
    }, 0)

    console.log("Total horror tickets:", totalNum);
}

function genreSales(moviesArray){

    /*
    {
        "horror": {
            "totalSales": #,
            "totalTickets": #,
            "totalMovies": #
            },
        "action": {
            },
        ... 
    }
    */

    var data = moviesArray.reduce(function(currObject, movieObj){
        var genreStr = movieObj.genre; //for example, "Horror"

        if(currObject[genreStr] === undefined){
            currObject[genreStr] = {
                totalSales: 0, 
                totalTickets: 0,
                totalMovies: 0
            };
        }
        currObject[genreStr].totalTickets += movieObj.tickets;
        currObject[genreStr].totalSales += movieObj.sales;
        currObject[genreStr].totalMovies += 1;
        
        return currObject;

    }, {}) //start with an empty object

    console.log(data);

    return data;
}

function main() {
    console.log("hello world");

    fetch('data/movies-2006-2015.json')
        .then(function(response){
            return response.json();
        })
        .then(genreSales); //pass the json data into it
}
main();

