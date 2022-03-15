const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (countries) => {

    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    console.log(country);
    const container = document.getElementById('country');
    container.innerHTML = allCountriesHTML.join(' ');


}
const getCountryHTML = ({ name, flags }) => {
    return `
    <div  class="countries"> 
        <h2>${name.common} </h2> 
        <img src="${flags.png}">
    </div>
    `
}
// const getCountryHTML = country => {
//     return `
//     <div  class="countries">
//         <h2>${country.name.common} </h2>
//         <img src="${country.flags.png}">
//     </div>
//     `
// }

// const getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//     <div  class="countries">
//         <h2>${name.common} </h2>
//         <img src="${flags.png}">
//     </div>
//     `
// }