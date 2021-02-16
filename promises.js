const fetch = require ('node-fetch');
const fetch2 = require('node-fetch')

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => res.json())
//     .then((json) => {
//         console.log('\t', json.name, json.homeworld)
//         return json.homeworld})
//     .then((planet) => {
//         fetch(planet)
//             .then((res) => res.json())
//             .then((json) => {
//                 console.log(json.name)
//             })

//     })
   //new Promise (res, rej) 

    

    function getPerson(id) {
        return fetch(`https://swapi.dev/api/people/${id}`)
                .then((res) => res.json())

    }

    function homeworld(person) {
        return fetch(person.homeworld)
                    .then((res) => res.json())
                    .then((homeworld) => console.log(homeworld.name))
    }

    // function getFilms(person) {
    //     return fetch (person.films)
    //                 .then((res) => res.json())
    //                 .then((films) => { 
    //                     // console.log(films.name)
    //                     //pass each film url into a fetch
    //                     //
                        
                        

    //                     // Promise.all(films).then ((values) => {
    //                     //     return films.name
    //                    // })
                        
    //                 })
                        
    // }

    // getPerson(1)
    //     .then((person) => {
    //         console.log(person.homeworld)
    //         console.log(person.name)
    //     })

    // getPerson(1)
    //     .then((person) => homeworld(person))

    // getPerson(2)
    //     .then((person) => getFilms(person))

    function getFilms(person) {
        const filmPromises = person.films.map(url => {
             return fetch(url).then((responseObj) => responseObj.json())
        })
        return Promise.all(filmPromises)
     }
     getPerson(1)
         .then((person) => getFilms(person))
         .then((films) => films.forEach(film => console.log(film.title)))


    Promise.all( 
        [fetch ('https://swapi.dev/api/films/1/'),
        fetch ('https://swapi.dev/api/films/2/'),
        fetch ('https://swapi.dev/api/films/3/'),
        fetch ('https://swapi.dev/api/films/4/'),
        fetch ('https://swapi.dev/api/films/5/'),
        fetch ('https://swapi.dev/api/films/6/')]  )           
        .then((arrOfResponsesReturnByFetch) => {
            return arrOfResponsesReturnByFetch.map(res => res.json())
            
        })
        .then((arrofPromisesReturnbyJson) => Promise.all(arrofPromisesReturnbyJson))
        .then((films) => films.forEach(film => console.log(film.title)))