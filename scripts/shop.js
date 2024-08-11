document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    const productList = document.getElementById('product-list');

    const products = [
        // Medications
        { name: 'Ibuprofen', category: 'medication', price: '100 ETB', img: '../resources/images/medicene/ibuprofen.jpg', perscription="false" },
        { name: 'Paracetamol', category: 'medication', price: '80 ETB', img: '../resources/images/medicene/paracetamol.jpg', perscription="false" },
        { name: 'Amoxicillin', category: 'medication', price: '150 ETB', img: '../resources/images/medicene/amoxicillin.jpg', perscription="false" },
        { name: 'Loratadine', category: 'medication', price: '120 ETB', img: '../resources/images/medicene/loratadine.jpg', perscription="true" },
        { name: 'Omeprazole', category: 'medication', price: '200 ETB', img: '../resources/images/medicene/omeprazole.jpg', perscription="false" },
        { name: 'Metformin', category: 'medication', price: '180 ETB', img: '../resources/images/medicene/metformin.jpg', perscription="false" },
        { name: 'Albuterol', category: 'medication', price: '250 ETB', img: '../resources/images/medicene/albuterol.jpg', perscription="true" },
        { name: 'Levothyroxine', category: 'medication', price: '150 ETB', img: '../resources/images/medicene/levothyroxine.jpg', perscription="true" },
        { name: 'Famotidine', category: 'medication', price: '120 ETB', img: '../resources/images/medicene/famotidine.jpg', perscription="true" },
        { name: 'Fluticasone', category: 'medication', price: '200 ETB', img: '../resources/images/medicene/fluticasone.jpg', perscription="true" },
      
        // Supplements
        { name: 'Vitamin C', category: 'supplements', price: '80 ETB', img: '../resources/images/medicene/vitaminc.jpg', perscription="false" },
        { name: 'Vitamin D3', category: 'supplements', price: '100 ETB', img: '../resources/images/medicene/vitamind3.jpg', perscription="false" },
        { name: 'Omega-3 Fish Oil', category: 'supplements', price: '150 ETB', img: '../resources/images/medicene/omega3.jpg', perscription="false" },
        { name: 'Multivitamins', category: 'supplements', price: '120 ETB', img: '../resources/images/medicene/multivitamins.jpg', perscription="false" },
        { name: 'Magnesium', category: 'supplements', price: '90 ETB', img: '../resources/images/medicene/magnesium.jpg', perscription="false" },
        { name: 'Zinc', category: 'supplements', price: '110 ETB', img: '../resources/images/medicene/zinc.jpg', perscription="false" },
        { name: 'Coenzyme Q10', category: 'supplements', price: '180 ETB', img: '../resources/images/medicene/coq10.jpg', perscription="true" },
        { name: 'Probiotics', category: 'supplements', price: '150 ETB', img: '../resources/images/medicene/probiotics.jpg', perscription="false" },
        { name: 'Glucosamine', category: 'supplements', price: '120 ETB', img: '../resources/images/medicene/glucosamine.jpg', perscription="true" },
        { name: 'Melatonin', category: 'supplements', price: '100 ETB', img: '../resources/images/medicene/melatonin.jpg', perscription="true" },
      
        // Medical Equipment
        { name: 'Blood Pressure Monitor', category: 'equipment', price: '450 ETB', img: '../resources/images/medicene/bloodmonitor.jpg', perscription="false" },
        { name: 'Thermometer', category: 'equipment', price: '150 ETB', img: '../resources/images/medicene/thermometer.jpg', perscription="false" },
        { name: 'Pulse Oximeter', category: 'equipment', price: '300 ETB', img: '../resources/images/medicene/pulseoximeter.jpg', perscription="false" },
        { name: 'Nebulizer', category: 'equipment', price: '600 ETB', img: '../resources/images/medicene/nebulizer.jpg', perscription="false" },
        { name: 'First Aid Kit', category: 'equipment', price: '250 ETB', img: '../resources/images/medicene/firstaidkit.jpg', perscription="false" },
        { name: 'Wheelchair', category: 'equipment', price: '2000 ETB', img: '../resources/images/medicene/wheelchair.jpg', perscription="false" },
        { name: 'Crutches', category: 'equipment', price: '400 ETB', img: '../resources/images/medicene/crutches.jpg', perscription="false" },
        { name: 'Walker', category: 'equipment', price: '500 ETB', img: '../resources/images/medicene/walker.jpg', perscription="false" },
        { name: 'Blood Glucose Monitor', category: 'equipment', price: '350 ETB', img: '../resources/images/medicene/bloodglucosemonitor.jpg', perscription="false" },
        { name: 'Stethoscope', category: 'equipment', price: '200 ETB', img: '../resources/images/medicene/stethoscope.jpg', perscription="false" }
      ];
      

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.setAttribute('data-category', product.category.toLowerCase());

            if(product.perscription == "true"){
                const productIcon = document.createElement('img');
                productIcon.id = "rx-icon";
                productIcon.src = "../resources/images/icons/rxicon.png";
                productIcon.style.width = "100%";
                productCard.appendChild(productIcon);
            }

            const productBox = document.createElement('div');
            productBox.id = 'product-box';

            const productImg = document.createElement('img');
            productImg.id = "prod-img";
            productImg.src = product.img;
            productBox.appendChild(productImg);
            
            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productBox.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = product.price;
            productBox.appendChild(productPrice);

            const productBtn = document.createElement('button');
            productBtn.textContent = "ADD TO CART";
            productBtn.className = "buy-button";
            productBtn.addEventListener('click', () => addToCart(product));
            productBox.appendChild(productBtn);

            productCard.appendChild(productBox);
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