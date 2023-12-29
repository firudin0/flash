const product = document.getElementById("product");
const cartz = document.getElementById("cartz");
const loadMoreBtn=document.getElementById("load")
const button=document.getElementById("btn")
const input=document.getElementById("inp")

const limit = 4;
let page = 1;

async function get() {
  const skip = (page - 1) * limit;
  const res = await axios.get(
    `https://655c844f25b76d9884fd70a7.mockapi.io/products?limit=${limit}&page=${page}`
  );
  const data = await res.data;
  db = data;
  db.map((item) => {
    const box = document.createElement("div");
    box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
    box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>
    <button onclick="addToCart(${item.id})">Sebete Ekle</button>
            </div>
        `;
    product.appendChild(box);
  });

  page++
}

function addToCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find(item => item.id == index));
  localStorage.setItem("cart", JSON.stringify(cart));

}


loadMoreBtn.addEventListener("click", get)

function getSearch(){
  product.innerHTML=""
  axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
  .then(res=>{
    db=res.data
    const filterData=db.filter(item=>item.title.toLowerCase().startsWith(input.value.toLowerCase()))
    console.log(filterData);
    filterData.map(item=>{
      const box = document.createElement("div");
      box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
      box.innerHTML = `
          <div class="divz">
          <img src="${item.image}" alt="">
          <div class="divc">
              <p>${item.title}</p>
          </div>
          <p>$ ${item.price}</p>
          <button onclick="addToCart(${item.id})">Sebete Ekle</button>
              </div>
              <button onclick="addToCart(${item})
          `;
      product.appendChild(box);
    })
  })
}

button.addEventListener("click", getSearch)


get();




function getSearch(){
  product.innerHTML=""
  axios.get("https://655c844f25b76d9884fd70a7.mockapi.io/products")
  .then(res=>{
    db=res.data
    const filterData=db.filter(item=>item.title.toLowerCase().startsWith(input.value.toLowerCase()))
    console.log(filterData);
    filterData.map(item=>{
      const box = document.createElement("div");
      box.className = "boxs col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12";
      box.innerHTML = `
          <div class="divz">
          <img src="${item.image}" alt="">
          <div class="divc">
              <p>${item.title}</p>
          </div>
          <p>$ ${item.price}</p>
          <button onclick="addToCart(${item.id})">Sebete Ekle</button>
              </div>
          `;
      product.appendChild(box);
    })
  })
}

button.addEventListener("click", getSearch)


get();