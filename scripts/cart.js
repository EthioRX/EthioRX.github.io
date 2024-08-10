document.addEventListener('DOMContentLoaded', () => {
    // Function to display products in the cart
    function displayCart() {
      const productList = document.getElementById('cart-products');
      productList.innerHTML = '';

      const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

      cart.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';

        const productImg = document.createElement('img');
        productImg.src = product.img;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        productElement.appendChild(productImg);
        productElement.appendChild(productName);
        productElement.appendChild(productPrice);
        productList.appendChild(productElement);
      });
    }

    displayCart();
});

function clearCart() {
  sessionStorage.removeItem('cart');
  location.reload();
}

function validateForm() {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');
    const cityInput = document.getElementById('city');
    const houseNumberInput = document.getElementById('house-number');
    const prescriptionInput = document.getElementById('prescription');
  
    if (nameInput.value.trim() === '' || ageInput.value.trim() === '' || phoneInput.value.trim() === '' || cityInput.value.trim() === '' || houseNumberInput.value.trim() === '' || prescriptionInput.value.trim() === '') {
      alert('Please fill in all the required fields.');
      return;
    }

    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/;
    if (!namePattern.test(nameInput.value)) {
      alert('Please enter your full name.');
      return;
    }

    if (parseInt(ageInput.value) < 18) {
      alert('You must be 18 years of age or older to place an order.');
      return;
    }
  
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    const houseNumberPattern = /^[0-9]{4}$/;
    if (!houseNumberPattern.test(houseNumberInput.value)) {
      alert('Please enter a valid 4-digit house number.');
      return;
    }
  
    if (!checkPrescriptionExists(prescriptionInput.value)) {
      alert('The entered prescription code does not exist. Please check and try again.');
      return;
    }

    alert('Proceeding to payment...');
}

function checkPrescriptionExists(prescriptionCode) {
    return prescriptionCode === '1234567890';
}


function getLocation() {
  const locationBtn = document.getElementById('location-btn');

  // Check if the browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        alert('Location: ', latitude, longitude);
        locationBtn.innerText = 'GPS Location set';
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Unable to access your location. Please enter a location manually.');
      }
    );
  } else {
    locationBtn.style.display = 'none';
  }
}