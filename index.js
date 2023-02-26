let added = async (inputValue) => {
  let added = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
  );
  let data = await added.json();
  added1(data.data);
};

let added1 = (phone) => {
  let mainDiv = document.getElementById("mainDiv");
  let showMore = document.getElementById("showMore");
  mainDiv.innerText = "";
  if (phone.length > 10) {
    phone = phone.slice(0, 10);
    showMore.style.display = "block";
  } else {
    showMore.style.display = "none";
  }
  if (phone.length === 0) {
    let NoFound = document.getElementById("noFound");
    NoFound.style.display = "block";
  } else {
    let NoFound = document.getElementById("noFound");
    NoFound.style.display = "none";
  }
  for (let i of phone) {
    // console.log(i.slug);
    let newDiv = document.createElement("div");
    newDiv.classList.add("col-6");
    newDiv.innerHTML = `
        <div class="card mt-5">
      <div class="card-body">
        <h5 class="card-title">${i.phone_name}</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <img src = '${i.image}' class ="img-fluid d-block">
       <button id="modalPage"
          onclick="showDetails('${i.slug}')"
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Details
        </button>
      </div>
    </div>

    
    
        `;

    mainDiv.appendChild(newDiv);
  }
  spinner(false);
};

document.getElementById("search").addEventListener("click", function (event) {
  // if (event.key === "Enter")
  // {
  spinner(true);
  let input = document.getElementById("input1");
  let inputValue = input.value;
  added(inputValue);
  // }
});

document.getElementById("input1").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    spinner(true);
    let input = document.getElementById("input1");
    let inputValue = input.value;
    added(inputValue);
  }
});

let spinner = (loading) => {
  let spinBtn = document.getElementById("spinner");
  if (loading) {
    spinBtn.style.display = "block";
  } else {
    spinBtn.style.display = "none";
  }
};

let showDetails = async (id) => {
  let url = `https://openapi.programming-hero.com/api/phone/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  popUp(data);
};
let staticBackdropLabel = document.getElementById("staticBackdropLabel");
let popUp = Device =>{
  
  
    console.log(Device.data.slug);
    
  staticBackdropLabel.innerText = Device.data.slug;
        
      
  
  
}

added('apple');
