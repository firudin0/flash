const product = document.getElementById('productz')


function get() {
    product.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
 
    cart.map((item, index) => {
        console.log(item);
        const box = document.createElement('div')
        box.innerHTML = `
        <div class="divz">
        <img src="${item.image}" alt="">
        <div class="divc">
            <p>${item.title}</p>
        </div>
        <p>$ ${item.price}</p>

    <button onclick="removeCart(${index})">Remove</button>
            </div>
        `
        product.appendChild(box)
    })
}

function removeCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    get()
}
get()

