class UI {
  constructor(){
    
    this.flag = document.getElementById('flag')
    this.capital = document.getElementById('capital')
    this.currency = document.getElementById('currency')
    this.region = document.getElementById('region')
    this.language = document.getElementById('language')
    this.population = document.getElementById('population')
    this.gini = document.getElementById('gini')
  }
  
  paint(country){
  
    this.flag.src = country.flag
    this.capital.textContent += country.capital
    this.currency.textContent += country.currencies[0].name
    this.region.textContent += country.region
    this.language.textContent += country.languages[0].name
    this.population.textContent += country.population
    this.gini.textContent = country.gini
    
  }
 

  
}
