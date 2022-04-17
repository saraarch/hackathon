let input = document.createElement('input')
input.setAttribute('type', 'text');
input.setAttribute('class','form-control');
input.style.maxWidth="200px"
input.style.display="inline"

let button = document.createElement('button')
button.setAttribute('id', 'myBtn');
button.setAttribute('class','btn btn-outline-primary');
let searchIcon=document.createElement('i');
searchIcon.setAttribute('class','fa fa-search ')
button.append(searchIcon)
button.innerHTML+= ' search'

let results = document.createElement('div')
results.setAttribute('id', 'results');
results.style.marginTop="16px";
const search = async () => {
    try{
    let value = input.value
    
    console.log('value', value);
    const response = await fetch(`https://api.nationalize.io?name=${value}`)
    .then(response => response.json())
   
  .then(json=> {
    
      let div = document.createElement('div')
     div.innerHTML+=`<div class="d-grid gap-2 col-6">
     

        <div class="card text-dark bg-info mb-3 " style="max-width: 18rem;background:linear-gradient(#e66465, #9198e5);">
          <div class="card-header fs-3"><b>Person details<b/></div>
          <div class="card-body">
          <h5 class="card-title"><mark>Name:${json.name}</mark></h5>

            <h5 class="card-title">country1:${json.country[0].country_id}</h5>
            <h5 class="card-title">Probability1:${json.country[0].probability}</h5>
            <h5 class="card-title">country2:${json.country[1].country_id}</h5>
            <h5 class="card-title">Probability2:${json.country[1].probability}</h5>
            <p class="card-text"></p>
          </div>`
          document.getElementById("container")
      let country = document.createElement('div')
      country.innerHTML = json.country[0].country_id;
      let country1 = document.createElement('div')
      country1.innerHTML = json.country[1].country_id;

      let probability = document.createElement('div')
      probability.innerHTML = json.country[0].probability;

      let probability1 = document.createElement('div')
      probability1.innerHTML = json.country[1].probability;
      results.innerHTML="";
      results.appendChild(div)

      
      // results.appendChild(country)
      // results.appendChild(country1)
      // results.appendChild(probability)
      // results.appendChild(probability1)
    //   })
  })
}
catch(err){
    console.error(err); 
    
    alert(err);
    
}
}

button.addEventListener('click', search)

let container = document.getElementById('container')

container.appendChild(input)
container.appendChild(button)
container.appendChild(results)