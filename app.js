const products = [
    {
      "id": 4,
      "title": "Gaming Keyboard",
      "price": 205,
      "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7-Color RGB LED Back-lighting for smart functionality",
      "image_url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71iDGXTqcUL._AC_UL400_.jpg",
    },
    {
      "id": 7,
      "title": "Ergonomic Wooden Tuna",
      "price": 2000,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "image_url": "https://i.imgur.com/mp3rUty.jpeg",
    },
    {
      "id": 9,
      "title": "Electronic Bronze Chips",
      "price": "1,000,000",
      "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four-wheel drive",
      "image_url": "https://chipscapes.com/cdn/shop/products/A_3b711ee2-a484-4e8f-8af8-0dc443134c18_800x.jpg?v=1637756967",
    },
    {
      "id": 11,
      "title": "Awesome Bronze Car",
      "price": 300,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "image_url": "https://i.imgur.com/cBuLvBi.jpeg",
    },
    {
      "id": 12,
      "title": "Dell XPS 13 9370",
      "price": 30000,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "image_url": "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61JBVg+AIKL._AC_SX679_.jpg",
    },
  ];
  
  const cardsContainer = document.getElementById("cards-container");
  cardsContainer.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const cardHTML = `
      <div class="card" style="width: 18rem;">
          <img src="${product.image_url}" class="card-img-top" alt="....">
          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">${product.description}</p>
              ${product.price}
              <a href="#" class="btn btn-primary">${product.product_order}</a>
          </div>
      </div>
    `;
    cardsContainer.innerHTML += cardHTML;
    console.log(`Product Array ${i + 1}:`, product);
  }
  