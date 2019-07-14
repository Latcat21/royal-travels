class Storage {
  constructor() {
    this.country;
    this.defaultCountry= 'brazil';
   
  }

  getLocationData() {
    if(localStorage.getItem('country') === null) {
      this.country= this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

   return {
      country: this.country
    }
  }
setLocationData(country) {
    localStorage.setItem('country', country);
    
  }
}