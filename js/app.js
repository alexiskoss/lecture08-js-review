'use strict';

function getName(){
    return "Joel";
}

function main() {


    // console.log( getName() );

    // array.forEach( getName );



    fetch('data/movies-2006-2015.json')
        .then(function(response){
            return response.json();
        })
        .then( calculateGenreStats )

}
main();

//How many people see horror movies?
function countHorrorSales(moviesArray){

    var horrorMoviesArray = moviesArray.filter(function(movieObj){
        //return whether or not the movieObj is acceptable!
        return (movieObj.genre === "Horror");
    });

    console.log(horrorMoviesArray);

    var totalNum = horrorMoviesArray.reduce(function(prevTotal, movieObj){
        var newTotal = prevTotal + movieObj.tickets;
        return newTotal;
    }, 0);

    console.log("Total horror tickets:", totalNum);
}

//what genre do people see the most?
function calculateGenreStats(moviesArray){

    /*
    {
        "horror" : {
            sales: #
            tickets: #
            count: #
        }
        "action" : {}
        ...
        "genreStr"
    }
    */

    var dataObj = moviesArray.reduce(function(prevDataObj, movieObj){
        var genreStr = movieObj.genre; //e.g. "Horror"

        if( prevDataObj[genreStr] === undefined ){ //never seen
            prevDataObj[genreStr] = {
                sales: 0, 
                tickets: 0, 
                count: 0 
            }; 
        }

        prevDataObj[genreStr].tickets += movieObj.tickets;
        prevDataObj[genreStr].sales += movieObj.sales;
        prevDataObj[genreStr].count += 1;

        return prevDataObj;   
    }, {});

    console.log(dataObj);

}







