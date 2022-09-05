const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
document.addEventListener('DOMContentLoaded',()=>{
    fetch(imgUrl)
    .then((resp)=>resp.json())
    .then((data)=>data.message.forEach((element)=>{
       const imgTag=document.createElement("img")
       imgTag.src=element
       const darkness= document.getElementById("dog-image-container")
       darkness.append(imgTag)
    }))
    const ul = document.getElementById("dog-breeds")
    let whoLetTheDogsIn= []
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then((request)=>request.json())
    .then((data)=>{
         
        whoLetTheDogsIn= Object.keys(data.message)
        renderAllDogBreeds(whoLetTheDogsIn)
       
        })
       function renderAllDogBreeds(dogs){
        console.log('dogs',dogs)
        ul.innerHTML=""
        for(const dog of dogs){
            const li=document.createElement("li")
             li.textContent= dog 
             ul.append(li)      
        }
       }

        const options=document.getElementById("breed-dropdown")
             options.addEventListener('change',(event)=>{
        dogsOut(event.target.value)

    function dogsOut(firstLetter){
        const arrayOfDogs = whoLetTheDogsIn.filter((dogName)=>dogName[0]===firstLetter)
      renderAllDogBreeds(arrayOfDogs)

    }
    
})})