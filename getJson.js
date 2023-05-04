async function getJson() {
  const res = await fetch("./data.json");
  const data = await res.json();
  const type = data.map((e) => e.type);
  const content = data.map((e) => e.content);
  const src = data.map((e) => e.src);
  const slides = document.querySelector(".slides");

  const slide___size = 330 * data.length - 30;
  slides.style.width = slide___size + "px";

  for (let i = 0; i < data.length; i++) {
    const dataType = document.createElement("p");
    const dataImage = document.createElement("img");
    const dataContent = document.createElement("p");
    const list = document.createElement("li");
    slides.appendChild(list);
    dataType.innerText = type[i];
    dataImage.src = src[i];
    dataContent.innerText = content[i];
    list.appendChild(dataType);
    list.appendChild(dataImage);
    list.appendChild(dataContent);
  }
}

getJson();
