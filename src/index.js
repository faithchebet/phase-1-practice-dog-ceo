console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function () {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const imagesContainer = document.getElementById("dog-image-container");
  
        data.message.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imagesContainer.appendChild(imgElement);
        });
      });
  
    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breedsList = document.getElementById("dog-breeds");
  
        for (const breed in data.message) {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          breedsList.appendChild(liElement);
        }
      });
  

    document.getElementById("dog-breeds").addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        event.target.style.color = "green"; 
      }
    });
  
    
    const filterDropdown = document.getElementById("breed-filter");
  
    filterDropdown.addEventListener("change", function () {
      const selectedLetter = filterDropdown.value.toLowerCase();
      const breedListItems = document.querySelectorAll("#dog-breeds li");
  
      breedListItems.forEach((li) => {
        const breedName = li.textContent.toLowerCase();
        li.style.display = breedName.startsWith(selectedLetter) ? "block" : "none";
      });
    });
  });
  