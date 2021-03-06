import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const root = document.querySelector('.cards')
axios.get('https://api.github.com/users/thecodediver')
.then(results => {
  root.appendChild(contentComponent(results.data))
})
.catch(err => {
  console.log('There was an error', err)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/Criscosmoes',
  'https://api.github.com/users/BWSIEVERT',
  'https://api.github.com/users/CPower1248',
  'https://api.github.com/users/juancaruizc',
  'https://api.github.com/users/eg180',
  'https://api.github.com/users/Dudeicle'
];

followersArray.forEach(gh => {
  axios.get(gh)
  .then(results => {
    root.appendChild(contentComponent(results.data))
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function contentComponent(data) {
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')

  const cardImg = document.createElement('img')
  cardImg.src = data.avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const cardH3 = document.createElement('h3')
  cardH3.classList.add('name')
  cardH3.textContent = data.name

  const userName = document.createElement('p')
  userName.classList.add('username')
  userName.textContent = data.login

  const location = document.createElement('p')
  location.textContent = `Location: ${data.location}`

  const profile = document.createElement('p')
  profile.textContent = 'Profile:'

  const profileLink = document.createElement('a')
  profileLink.href = data.html_url
  profileLink.textContent = data.html_url
  profile.appendChild(profileLink)

  const followers = document.createElement('p')
  followers.textContent = `Followers: ${data.followers}`

  const following = document.createElement('p')
  following.textContent = `Following: ${data.following}`

  const bio = document.createElement('p')
  bio.textContent = `Bio: ${data.bio}`

  cardInfo.appendChild(cardH3)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  cardDiv.appendChild(cardImg)
  cardDiv.appendChild(cardInfo)

  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
