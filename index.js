console.log('funguju!');

const createMovieDetail = (movies) => {
    let movieListElm = document.querySelector('.movie-list')
    movieListElm.innerHTML = movies
        .map((movie) => `
            <li class="movie-detail">
            <div class="movie-poster">
                <img
                    src=${movie.posterUrl}
                    alt=${movie.title}
                />
            </div>
            <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <div class="movie-year">Rok vydání: ${movie.year}</div>
                <div class="movie-link">
                    <a href=${movie.url} target="_blank">Odkaz na CSFD</a>
                </div>
            </div>
            </li>
            `
        )
        .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        createMovieDetail(data)
    })

const createListGenres = (listGenre) => {
    let selectGenreElm = document.querySelector('#select-genre')
    selectGenreElm.innerHTML = listGenre
        .map(genre =>
            `<option value=${String(genre[0]).toUpperCase()}${String(genre).substring(1)}>
            ${String(genre[0]).toUpperCase()}${String(genre).substring(1)}</option>`
        )
        .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        createListGenres(data)
    })

document.querySelector('.filters').addEventListener('submit', (event) => {
    event.preventDefault()
    let selectElmValue = document.querySelector('#select-genre').value
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=' + `${selectElmValue} `)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            createMovieDetail(data)
        })
})


