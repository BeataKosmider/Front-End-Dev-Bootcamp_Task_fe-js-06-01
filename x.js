const btn = document.querySelector("#searchKitty");
const imageContainer = document.querySelector("#image");
const apiUrl = "https://api.thecatapi.com/v1/images/search";
const fetchCatImage = () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      const CatImage = json[0];
      const img = document.createElement("img");
      img.setAttribute("src", CatImage.url);
      img.setAttribute("data-test", "img-kitty");
      imageContainer.appendChild(img);
    });
};
btn.addEventListener("click", fetchCatImage);
