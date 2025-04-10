document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.querySelector('form');
  
    orderForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const food = document.getElementById('food').value;
  
      if (!name || !address || !food) {
        alert('Please fill in all the fields.');
        return;
      }
  
      const foodName = {
        'margherita': 'Margherita Pizza',
        'veggie-burger': 'Veggie Burger',
        'chicken-pasta': 'Chicken Pasta'
      }[food];
  
      alert(`Thank you, ${name}! Your order for ${foodName} will be delivered to ${address} shortly.`);
  
      orderForm.reset();
    });
  
    const orderButtons = document.querySelectorAll('.menu-item button');
  
    orderButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const foodItem = event.target.parentElement.querySelector('h3').innerText;
        const selectElement = document.getElementById('food');
  
        for (let option of selectElement.options) {
          if (option.text === foodItem) {
            selectElement.value = option.value;
            break;
          }
        }
  
        window.location.href = '#order';
      });
    });
  
    // Adding images to menu items using external sources with styling
    const menuItems = document.querySelectorAll('.menu-item');
  
    const images = {
      'Margherita Pizza': 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
      'Veggie Burger': 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
      'Chicken Pasta': 'https://cdn.pixabay.com/photo/2017/12/10/14/47/spaghetti-3010062_1280.jpg'
    };
  
    menuItems.forEach(item => {
      const foodName = item.querySelector('h3').innerText;
      const img = document.createElement('img');
      img.src = images[foodName];
      img.alt = foodName;
      img.style.width = '100%';
      img.style.borderRadius = '10px';
      img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      img.style.marginBottom = '15px';
      item.insertBefore(img, item.querySelector('p'));
    });
  
    // Adding an aesthetic food-related background with gradient overlay
    const sections = document.querySelectorAll('.section');
    const foodBackgrounds = [
      'https://cdn.pixabay.com/photo/2020/03/31/16/33/food-4988633_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/08/30/07/51/fruit-2697308_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/05/11/16/32/food-2308608_1280.jpg'
    ];
  
    sections.forEach((section, index) => {
      const bgImage = foodBackgrounds[index % foodBackgrounds.length];
      section.style.background = ` no-repeat center center/cover`;
      section.style.color = '#fff';
      section.style.padding = '80px 20px';
    });
  
    // Enhance button appearance
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = '#ff5722';
      button.style.color = '#fff';
      button.style.border = 'none';
      button.style.padding = '10px 20px';
      button.style.borderRadius = '8px';
      button.style.cursor = 'pointer';
      button.style.transition = 'background-color 0.3s';
  
      button.addEventListener('mouseenter', () => button.style.backgroundColor = '#e64a19');
      button.addEventListener('mouseleave', () => button.style.backgroundColor = '#ff5722');
    });
  });
  