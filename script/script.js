const menu = document.querySelector(".nav")

const connectDrop = document.querySelector("#connect-dropdown")
const companyDrop = document.querySelector("#company-dropdown")
const productDrop = document.querySelector("#product-dropdown")

const companyButton = document.querySelector("#company-link")
const connectButton = document.querySelector("#connect-link")
const productButton = document.querySelector("#product-link")

const connectArrow = document.querySelector("#connect-link i")
const companyArrow = document.querySelector("#company-link i")
const productArrow = document.querySelector("#product-link i")

function closeDrop() {

  const dropDown = document.getElementsByClassName("dropdown")
  for (let i = 0; i < dropDown.length; i++) {
    if (dropDown[i].classList.contains("show")) {
      dropDown[i].classList.remove("show")
    }
    
  }

  connectArrow.style = "transform: rotate(0deg);";
  companyArrow.style = "transform: rotate(0deg);";
  productArrow.style = "transform: rotate(0deg);";

}

function mostrarConnect() {

  if (connectDrop.classList.contains("show")) {
      closeDrop()
  }
  else {
    closeDrop()
    connectDrop.classList.add("show")
    connectArrow.style = "transform: rotate(180deg);";
  }

}

function mostrarCompany() {

  if (companyDrop.classList.contains("show")) {
   closeDrop()
  }
  else {
    closeDrop()
    companyDrop.classList.add("show")
    companyArrow.style = "transform: rotate(180deg);"
   }

}

function mostrarProduct() {
  if (productDrop.classList.contains("show")) {
        closeDrop()
}
  else {
    closeDrop()
    productDrop.classList.add("show")
    productArrow.style = "transform: rotate(180deg);"
}

}

function openMenu() {
  menu.classList.toggle("show")
}




window.onclick = function (event) {
  if (!event.target.matches('.title-drop')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
       closeDrop()
      }
    }
  }

}