// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = Array.from(moviesArray)
    let allDirector = newArr.map((movie) => {
        return movie.director;
    })
    //console.log(allDirector.length)
    return allDirector;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray == 0) return 0; 
    let stevenSp = moviesArray.filter((movie) => {
/*         if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return stevenSp
        } */
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    })
    return stevenSp.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == 0) return 0;
    let sumTotal = moviesArray.reduce((acumulator, puntos) => {
        if (!puntos.score) return acumulator;
        return acumulator + puntos.score;
    }, 0)
    let final = (sumTotal / moviesArray.length) 
    return (Math.round(final*100))/100;
    //number(sumTotal.Math.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let arrDrama = moviesArray.filter((movie) =>{
        return movie.genre.includes('Drama')
        })
    if (!arrDrama.length) return 0;
    let sumTotal = arrDrama.reduce((acumulator, puntos) => {
        if (!puntos.score) return acumulator;
        return acumulator + puntos.score;
    }, 0)
    let final = (sumTotal / arrDrama.length) 
    return (Math.round(final*100))/100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    //let newArr = Array.from(moviesArray)
    let newArr = Array.from(moviesArray)
    newArr.sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
  /*               newArr.sort((a, b) => {
                    return a.title - b.title
                }) */
        } else {
            return a.year - b.year
        }
    })
   // console.log(newArr)
    return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphaArr = Array.from(moviesArray);
    let titlesArr = [];
    alphaArr.forEach((title) => {
        titlesArr.push(title.title);
    })
    return titlesArr.sort().slice(0, 20);
/*     let menorVeinte = [];
    alphaArr.sort((a,b) => {
        return a.title.localeCompare(b.title);
    });
    titlesArr = alphaArr.map((movie) => {
        return movie.title;
    });
    return titlesArr; */
/*     let newArr = [...moviesArray]
    let titlesArr = []
    newArr.sort((a,b) => {
        return a.title.localeCompare(b.title) ;
    });
    console.log(newArr)
    return newArr;*/
} 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
