const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //Create a div w/ a card class
            const card = document.createElement('div');
            card.setAttribute('class','card');

            //create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //create a p and set the text content to film's description
            const p = document.createElement('p');
            p.textContent = `${movie.description}`; 

            //append cards to container element
            container.appendChild(card);

            //each card will have an h1 & p
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('h1')
        errorMessage.textContent = `:( :( aw it's not work :( :(`;
        app.appendChild(errorMessage);
    }
}

// Send request
request.send();