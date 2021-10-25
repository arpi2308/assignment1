const rawData = '[{"id":"harry","image":"images/harry.jpg","price":"Rs.322.00"},{"id":"dan","image":"images/dan.jpg","price":"Rs.330.00"},{"id":"kite","image":"images/kite.jpg","price":"Rs.351.00"},{"id":"gentleman","image":"images/gentleman.jpg","price":"Rs.259.00"},{"id":"obama","image":"images/obama.jpg","price":"Rs.1099.00"},{"id":"kalam","image":"images/kalam.jpg","price":"Rs.232.00"},{"id":"sachi","image":"images/sachi.jpg","price":"Rs.299.00"},{"id":"trevor","image":"images/trevor.jpg","price":"Rs.310.00"},{"id":"habits","image":"images/habits.jpg","price":"Rs.699.00"},{"id":"rich","image":"images/rich.jpg","price":"Rs.267.00"},{"id":"atomichabit","image":"images/atomichabit.jpg","price":"Rs.423.00"},{"id":"ikiagi","image":"images/ikiagi.jpg","price":"Rs.269.00"},{"id":"crochet","image":"images/crochet.jpg","price":"Rs.423.00"},{"id":"scrap","image":"images/scrap.jpg","price":"Rs.355.00"},{"id":"seeds","image":"images/seeds.jpg","price":"Rs.243.00"},{"id":"crafts","image":"images/crafts.jpg","price":"Rs.534.00"},{"id":"harrypotterset","image":"images/harrypotterset.jpg","price":"Rs.2337.00"},{"id":"got","image":"images/got.jpg","price":"Rs.2429.00"},{"id":"narnia","image":"images/narnia.jpg","price":"Rs.1015.00"},{"id":"danset","image":"images/danset.jpg","price":"Rs.3250.00"}]';
const data = JSON.parse(rawData);

const container = document.querySelector('.container');

const template = (item) => `
<section class="container content-section">
    <div class="shop-items">
    <div class="shop-item item">
    <img class="shop-item-image" src="${item.image}">
    <div class="shop-item-details">
    <span class="shop-item-price">${item.price}</span>
    <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
    </div> 
    </div> 
  </div>
`;

const populate = (arr) => {
  let content = "";
  arr.forEach((item) => {
    content += template(item);
  });
  container.innerHTML += content;
};



document.addEventListener('DOMContentLoaded', () => {
  populate(data);
});    