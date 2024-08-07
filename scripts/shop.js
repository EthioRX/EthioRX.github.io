document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');

    const products = [
        // Medications
        { name: 'Ibuprofen', category: 'medication', price: '100 ETB', img: '../resources/images/medicene/ibuprofen.jpg' },
        { name: 'Paracetamol', category: 'medication', price: '80 ETB', img: '../resources/images/medicene/paracetamol.jpg' },
        { name: 'Amoxicillin', category: 'medication', price: '150 ETB', img: '../resources/images/medicene/amoxicillin.jpg' },
        { name: 'Loratadine', category: 'medication', price: '120 ETB', img: '../resources/images/medicene/loratadine.jpg' },
        { name: 'Omeprazole', category: 'medication', price: '200 ETB', img: '../resources/images/medicene/omeprazole.jpg' },
        { name: 'Metformin', category: 'medication', price: '180 ETB', img: '../resources/images/medicene/metformin.jpg' },
        { name: 'Albuterol', category: 'medication', price: '250 ETB', img: '../resources/images/medicene/albuterol.jpg' },
        { name: 'Levothyroxine', category: 'medication', price: '150 ETB', img: '../resources/images/medicene/levothyroxine.jpg' },
        { name: 'Famotidine', category: 'medication', price: '120 ETB', img: '../resources/images/medicene/famotidine.jpg' },
        { name: 'Fluticasone', category: 'medication', price: '200 ETB', img: '../resources/images/medicene/fluticasone.jpg' },
      
        // Supplements
        { name: 'Vitamin C', category: 'supplements', price: '80 ETB', img: '../resources/images/medicene/vitaminc.jpg' },
        { name: 'Vitamin D3', category: 'supplements', price: '100 ETB', img: '../resources/images/medicene/vitamind3.jpg' },
        { name: 'Omega-3 Fish Oil', category: 'supplements', price: '150 ETB', img: '../resources/images/medicene/omega3.jpg' },
        { name: 'Multivitamins', category: 'supplements', price: '120 ETB', img: '../resources/images/medicene/multivitamins.jpg' },
        { name: 'Magnesium', category: 'supplements', price: '90 ETB', img: '../resources/images/medicene/magnesium.jpg' },
        { name: 'Zinc', category: 'supplements', price: '110 ETB', img: '../resources/images/medicene/zinc.jpg' },
        { name: 'Coenzyme Q10', category: 'supplements', price: '180 ETB', img: '../resources/images/medicene/coq10.jpg' },
        { name: 'Probiotics', category: 'supplements', price: '150 ETB', img: '../resources/images/medicene/probiotics.jpg' },
        { name: 'Glucosamine', category: 'supplements', price: '120 ETB', img: '../resources/images/medicene/glucosamine.jpg' },
        { name: 'Melatonin', category: 'supplements', price: '100 ETB', img: '../resources/images/medicene/melatonin.jpg' },
      
        // Medical Equipment
        { name: 'Blood Pressure Monitor', category: 'equipment', price: '450 ETB', img: '../resources/images/medicene/bloodmonitor.jpg' },
        { name: 'Thermometer', category: 'equipment', price: '150 ETB', img: '../resources/images/medicene/thermometer.jpg' },
        { name: 'Pulse Oximeter', category: 'equipment', price: '300 ETB', img: '../resources/images/medicene/pulseoximeter.jpg' },
        { name: 'Nebulizer', category: 'equipment', price: '600 ETB', img: '../resources/images/medicene/nebulizer.jpg' },
        { name: 'First Aid Kit', category: 'equipment', price: '250 ETB', img: '../resources/images/medicene/firstaidkit.jpg' },
        { name: 'Wheelchair', category: 'equipment', price: '2000 ETB', img: '../resources/images/medicene/wheelchair.jpg' },
        { name: 'Crutches', category: 'equipment', price: '400 ETB', img: '../resources/images/medicene/crutches.jpg' },
        { name: 'Walker', category: 'equipment', price: '500 ETB', img: '../resources/images/medicene/walker.jpg' },
        { name: 'Blood Glucose Monitor', category: 'equipment', price: '350 ETB', img: '../resources/images/medicene/bloodglucosemonitor.jpg' },
        { name: 'Stethoscope', category: 'equipment', price: '200 ETB', img: '../resources/images/medicene/stethoscope.jpg' }
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