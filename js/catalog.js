hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const cars = [
    {
      model: "Tesla Model S",
      dateOfManifacture: "2023",
      power: 541,
      batteryCapacity: 72,
      run: 634,
      price: 10000,
      image:
        "https://service.tesla.com/docs/Public/diy/images/GUID-5543BA62-932F-46C5-B1EF-44707D4726B2-online-en-US.png",
      description:
        "Неговият просторен интериор е оборудван с голям сензорен интерфейс, който контролира повечето функции на автомобила, включително развлечения, навигация и климатичен контрол.",
    },
    {
      model: "Tesla Model X",
      dateOfManifacture: "2023",
      power: 420,
      batteryCapacity: 75,
      run: 540,
      price: 12000,
      image: "../images/cars/tesla model xx.avif",
      description:
        "Model X предлага впечатляваща производителност, с двойни електрически мотори, осигуряващи задвижване на всички колела и ускорение, което съперничи на някои спортни автомобили .",
    },
    {
      model: "Mercedes EQS",
      dateOfManifacture: "2022",
      power: 333,
      batteryCapacity: 120,
      run: 770,
      price: 10000,
      image: "../images/cars/mercedes eqs red.webp",
      description:
        "EQS разполага с просторен и футуристичен интериор с усъвършенствани информационно-развлекателни системи и системи за подпомагане на водача.",
    },
    {
      model: "BMW iX",
      dateOfManifacture: "2023",
      power: 326,
      batteryCapacity: 71,
      run: 511,
      price: 11000,
      image: "../images/cars/bmw iX.webp",
      description:
        "iX предлага впечатляващ обхват с едно зареждане, заедно с възможност за бързо зареждане за допълнително удобство.",
    },
    {
      model: "BMW i8",
      dateOfManifacture: "2017",
      power: 375,
      batteryCapacity: 72,
      run: 700,
      price: 15000,
      image: "../images/cars/bmw i8 black.webp",
      description:
        "i8 разполага с комбинация от електрически мотор и бензинов двигател с турбокомпресор, осигурявайки впечатляваща производителност и ефективност.",
    },
    {
      model: "BMW i4",
      dateOfManifacture: "2022",
      power: 544,
      batteryCapacity: 83.9,
      run: 450,
      price: 17000,
      image: "../images/cars/bmw i4.png",
      description:
        "Неговият елегантен дизайн включва аеродинамични елементи за ефективност, като същевременно запазва естетическата привлекателност на BMW.",
    },
    {
      model: "Skoda Enyaq Rs Coupe",
      dateOfManifacture: "2023",
      power: 300,
      batteryCapacity: 82,
      run: 630,
      price: 10000,
      image: "../images/cars/skoda rs.png",
      description:
        "Непринудената елегантност на Enyaq Coupe RS се подчертава от детайли, характерни за нашите спортни модели.",
    },
    {
      model: "Porsche Taycan",
      dateOfManifacture: "2023",
      power: 680,
      batteryCapacity: 93.4,
      run: 510,
      price: 18000,
      image: "../images/cars/Porsche-Taycan-Turbo.png",
      description:
        "Taycan предлага невероятно ускорение и рязко управление, благодарение на своите мощни електрически двигатели и усъвършенствана технология на шасито.",
    },
    {
      model: "Audi E-tron GT",
      dateOfManifacture: "2021",
      power: 530,
      batteryCapacity: 93,
      run: 450,
      price: 14000,
      image: "../images/cars/AudietronGT.webp",
      description:
        "E-tron GT може да се похвали с поразителни дизайнерски елементи, с елегантен силует и аеродинамични характеристики, които подобряват неговата ефективност и естетика.",
    },
    {
      model: "Audi Q8 E-Tron",
      dateOfManifacture: "2023",
      power: 408,
      batteryCapacity: 114,
      run: 547,
      price: 13000,
      image: "../images/cars/Audi Q8.png",
      description:
        "Oчаквайте повече от просто изобилие от пространство. Подбрани материали, първокласно покритие и модерни дигитални функции превръщат всяко пътуване в Audi Q8 e-tron¹ в премиум изживяване.",
    },
  ];

  const carList = document.getElementById("car-list");
  const cartItems = document.getElementById("cart-items");

  cars.forEach((car) => {
    const carItem = document.createElement("div");
    carItem.className = "car-item";
    carItem.innerHTML = `
              
              <img src="${car.image}" alt="${car.model}">
              
              <div class="container">

              <h2>${car.model}</h2>
              <div class="line"></div>
              <p> Дата на производство: ${car.dateOfManifacture}</p>
              
              <p> Мощност: ${car.power} к.с.</p>
              
              <p> Капацитет на батерия: ${car.batteryCapacity} kWh </p>
              
              <p> Пробег с едно зараждане ${car.run} км. </p>
              
              <p>${car.description}</p>
              
              <p>${car.price.toLocaleString("en-US", {
                style: "currency",
                currency: "BGN",
              })}</p>
              
             </div>
          `;
    carList.appendChild(carItem);
  });

  function addToCart(event) {
    const model = event.target.getAttribute("data-model");
    const price = parseFloat(event.target.getAttribute("data-price"));

    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${model} - ${price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`;

    cartItems.appendChild(cartItem);
  }
});
