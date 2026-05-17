fetch("http://localhost:5000/products")
.then(response => response.json())
.then(data => {

    const productsDiv = document.getElementById("products");

    data.forEach(product => {

        productsDiv.innerHTML += `
        <div class="card">
            <h2>${product.name}</h2>
            <p>Price: ₹${product.price}</p>
            <button>Add to Cart</button>
        </div>
        `;

    });

})
.catch(error => console.log(error));