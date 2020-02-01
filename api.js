class Country {
  constructor(country){
     this.country = country
  }

  //Fetch country from api
  async getCountry(){
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.country}?fullText=true`)

    const responseData = await response.json();
    return responseData[0];
}

changeLocation(country){
    this.country = country
  }

}
