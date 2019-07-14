//Init storage
const storage = new Storage();

// Get stored country data
const countryLocation = storage.getLocationData();

// init country object
const country = new Country(countryLocation.country)

//init ui
const ui = new UI();

// Get country on dom load

document.addEventListener('DOMContentLoaded', getCountry )

//Search New country
document.getElementById('search').addEventListener('click', (e) => {
  
const searchedCountry = document.getElementById('country').value

  //Change Location
  country.changeLocation(searchedCountry)

  //set Location in Ls
  storage.setLocationData(searchedCountry)

  //get and display country info
  getCountry()
})

  //make http call
function getCountry(){
  country.getCountry()
    .then(results => {
        //show results
        ui.paint(results)
      })
    .catch(err => console.log(err))
}

 



