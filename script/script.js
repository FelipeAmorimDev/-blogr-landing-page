const connect = document.getElementById("myDropdown")
const company = document.getElementById("myDropdown1")
const product= document.getElementById("myDropdown2")

const productLink = document.getElementById("product-link")
const companyLink = document.getElementById("company-link")
const connectLink = document.getElementById("connect-link")

const arrowItem2 = document.querySelector("#company-link + img")
const arrowItem = document.querySelector("#product-link + img")
const arrowItem1 = document.querySelector("#connect-link + img")

productLink.addEventListener("click",productDrop)
companyLink.addEventListener("click",companyDrop)
connectLink.addEventListener("click",connectDrop)


function connectDrop() {
  if(product.classList.contains("show") || company.classList.contains("show")){
    product.classList.remove("show")
    company.classList.remove("show")
    arrowItem1.style = "transform: rotate(0deg);"
    arrowItem.style = "transform: rotate(0deg);"
    arrowItem2.style = "transform: rotate(0deg);"

  } 
 
  document.getElementById("myDropdown").classList.toggle("show");
  arrowItem1.style = "transform: rotate(180deg);"
  
}

function companyDrop() {
  if(connect.classList.contains("show") || product.classList.contains("show")){
    product.classList.remove("show")
    connect.classList.remove("show")
    arrowItem1.style = "transform: rotate(0deg);"
    arrowItem.style = "transform: rotate(0deg);"
  }
  document.getElementById("myDropdown1").classList.toggle("show");
  arrowItem2.style = "transform: rotate(180deg);"
   

}

function productDrop() {
  if(connect.classList.contains("show") || company.classList.contains("show")){
    connect.classList.remove("show")
    company.classList.remove("show")
    arrowItem1.style = "transform: rotate(0deg);"
    arrowItem2.style = "transform: rotate(0deg);"
  }
  document.getElementById("myDropdown2").classList.toggle("show");
  arrowItem.style = "transform: rotate(180deg);"
}
  


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-item > span')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        arrowItem1.style = "transform: rotate(0deg);"
        arrowItem.style = "transform: rotate(0deg);"
        arrowItem2.style = "transform: rotate(0deg);"

      }
    }
  }
  
}