document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');

    const products = [
        { name: 'Ibuprofen', category: 'medication', price: '$10.00', img:'../resources/images/medicene/ibuprofen.jpg' },
        { name: 'Ibuprofen', category: 'medication', price: '$10.00', img:'../resources/images/medicene/ibuprofen.jpg' },
        { name: 'Ibuprofen', category: 'medication', price: '$10.00', img:'../resources/images/medicene/ibuprofen.jpg' },
        { name: 'Vitamin C', category: 'supplements', price: '$8.00', img:'../resources/images/medicene/vitaminc.jpg' },
        { name: 'Blood Pressure Monitor', category: 'equipment', price: '$45.00', img:'../resources/images/medicene/bloodmonitor.jpg' },
        // Add more products as needed
    ];

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category.toLowerCase());

            const productImg = document.createElement('img');
            productImg.src = product.img;
            productImg.style.width = "100%";
            productCard.appendChild(productImg);

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productCard.appendChild(productName);

            const productPrice = document.createElement('button');
            productPrice.textContent = product.price;
            productCard.appendChild(productPrice);

            const productBtn = document.createElement('button');
            productBtn.textContent = "ADD";
            productBtn.className = "buy-button";
            productBtn.addEventListener('click', () => addToCart(product));
            productCard.appendChild(productBtn);

            productList.appendChild(productCard);
            productList.appendChild(productCard);
        });
        
        const emptyp = document.createElement('p');
        emptyp.textContent = "No such product";
        emptyp.style.color = "white";
        products.length === 0 ? productList.appendChild(emptyp) : none;
    }

    // Function to add product to cart
    function addToCart(product) {
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
        console.log('Product added to cart:', product);
    }

    function filterProducts() {
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;

        const filteredProducts = products.filter(product => {
            const productName = product.name.toLowerCase();
            const productCategory = product.category.toLowerCase();
            const matchesSearch = productName.includes(searchValue);
            const matchesCategory =  productCategory === categoryValue.toLowerCase();

            return matchesSearch && matchesCategory;
        });
        displayProducts(filteredProducts);
    }

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);

    // Initial display of products
    filterProducts();
});