console.log('funguju!');

document.querySelector('.filters').addEventListener('submit', (event) => {
    event.preventDefault()
    let selectElmValue = document.querySelector('#select-genre').value
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=' + `${selectElmValue}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            createMovieDetail(data)
        })
})

const createMovieDetail = (movies) => {
    let movieList = document.querySelector('.movie-list')
    movieList.innerHTML = movies
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
        .map(genre => `
            <option value=${genre}>${genre}</option>
            `
        )
        .join('')
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        createListGenres(data)
    })
