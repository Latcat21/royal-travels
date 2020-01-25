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

      if(results == undefined){
        let textBox = document.querySelector('.text-box');
        let div =  document.createElement('div');
        div.setAttribute( 'name','error');
        div.style.backgroundColor = 'red';
        div.style.padding = '20px';
        div.style.fontSize = '16px';
        div.style.textAlign = 'center';
        div.innerHTML = 'Country Not Found';
        textBox.appendChild(div);

        
      }else
      
        //show results
        ui.paint(results)
       

      })
    .catch(err => console.log(err))
}

 



