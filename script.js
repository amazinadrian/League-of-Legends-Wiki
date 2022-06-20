const fetchData = document.querySelector("#searchButton");
const champion = document.querySelector(".champion");
let img = document.querySelector("img")



// gets data from API and sets the content of div
const getData = function (event) {
  event.preventDefault()
  let textInput = document.querySelector('#inputBar').value
  let requested = textInput.charAt(0).toUpperCase() + textInput.substr(1).toLowerCase();
 
  
  fetch("https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data[requested])
      
      //Add image to requested champion
      img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.data[requested].name}_1.jpg`
      
      //Add selected data to div from requested champion
      champion.innerHTML = `
        <div>
          <h1>${data.data[requested].name}</h1>
          <p> ${data.data[requested].title}</p>
          <p>Background : ${data.data[requested].blurb}</p>

        <h2>Stats</h2>
        
          <ul>
            <li> HP: ${data.data[requested].stats.hp}</li>
            <li> Armor: ${data.data[requested].stats.armor}</li>
            <li> Damage: ${data.data[requested].stats.attackdamage}</li>
            <li> Speed: ${data.data[requested].stats.attackspeed}</li>
          </ul>
        </div>
      `
    })

    
    //If no known champion is searched, add error text
    .catch((error) => console.log(error));
    img.src = 'https://cdn.mos.cms.futurecdn.net/h9EEKxRwhMauUUtKKfy6Ze.jpg'
    champion.innerHTML = 
    `<div class="error">
    Champion does not exist, try again
    </div> `

};
// add event listener for #fetchdata button
fetchData.addEventListener("click", getData);
