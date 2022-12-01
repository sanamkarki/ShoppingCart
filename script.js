// create array of data

import shopItemsData from "./data.json" assert { type: "json" };

let clothingShop = document.getElementById("clothingShop");
let basket = [
  {
    id: "testing1",
    item: 1,
  },
];
let shopFunction = () => {
  return (clothingShop.innerHTML = shopItemsData
    .map((arg) => {
      return `
      <div id="product-id-${arg.id}" class="clothingItem">
      <img
    class="clothingItemImage"
    src="${arg.img}"
    width="300px"
    height="300px"
  />
  <div class="itemTextSection">
    <h2>${arg.name}</h2>
    <p>
      ${arg.desc}
    </p>

    <div class="buttonsAndQty">
      <div class="priceOfItems">${arg.price}</div>
      <i id="plusSign-${arg.id}" class="bi bi-plus"></i>
      <div id="${arg.id}" class="quantityOfItem">0</div>
      <i id="minusSign-${arg.id}" class="bi bi-dash"></i>
     </div>
    </div>
    </div>`;
    })
    .join(""));
};
shopFunction();
//extract the buttons and counter.

for (let i = 0; i < shopItemsData.length; i++) {
  //   console.log(shopItemsData[i].img);
  //   console.log(shopItemsData[i].id);
  let plusElement = document.getElementById(
    `product-id-${shopItemsData[i].id}`
  );
  //   console.log(`${shopItemsData[i].id}`);

  //from here
  plusElement.addEventListener("click", indexFunction);

  function indexFunction() {
    let indexValue = basket.findIndex((x) => x.id === `${shopItemsData[i].id}`);
    if (indexValue === -1) {
      basket.push({
        id: `${shopItemsData[i].id}`,
        item: 1,
      });
    } else {
      basket[indexValue].item += 1;
    }
    console.log(basket);
    let counterElement = document.getElementById(`${shopItemsData[i].id}`);
    console.log("This is the counter", counterElement);
    counterElement.innerText = basket[indexValue].item;
  }
  // now work with the minus Button.
  let minusElement = document.getElementById(
    `minusSign-${shopItemsData[i].id}`
  );
  // add event listener to the minus button
  minusElement.addEventListener("click", minusFunction);
  function minusFunction() {
    console.log("hey minus");
    let minusIndex = basket.findIndex((x) => x.id === `${shopItemsData[i].id}`);
    if (minusIndex != -1) {
      // {
      //   basket[minusIndex].item = 0;
      // }
      basket[minusIndex].item -= 1;
    }
  }
  console.log("This minus" + minusElement);
}
