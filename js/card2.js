import jsonData from "./data/animes2.json" with { type: "json" };

var divsCard = document.querySelectorAll(".empty");
//console.log(divsCard);
var divs_len = document.getElementsByClassName("empty").length;

for (let i = 0; i < divs_len; i++) {
  var card = `
  <div class="card">
    <img
      src=${jsonData.animes[i].img}
      class="card-img-top"
      height="300px"
      alt="Sunset Over the Sea"
    />
    <div class="card-body text-center">
      <h5 class="card-title">${jsonData.animes[i].name}</h5>
      <a
        href=${jsonData.animes[i].desc_link}
        target="_blank"
        class="btn btn-primary"
      >
        Learn More
      </a>
      <a
        href=${jsonData.animes[i].utube_link}
        target="_blank"
        class="btn btn-primary"
      >
        Favourite OST
      </a>
    </div>
  </div>
`;

  var doc = document.createElement("div");
  doc.id = "id_" + i;
  doc.innerHTML = card;
  //console.log(divsCard[i]);
  divsCard[i].appendChild(doc);
}
