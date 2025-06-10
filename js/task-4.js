// Функція для визначення вартості доставки у залежності від країни
function getShippingCost(country) {
  let price; // Змінна для зберігання вартості доставки

  // Використовуємо конструкцію switch для перевірки країни
  switch (country) {
    case "China":
      price = 100;
      break;
    case "Chile":
      price = 250;
      break;
    case "Australia":
      price = 170;
      break;
    case "Jamaica":
      price = 120;
      break;
    default:
      // Якщо країна відсутня в списку — повертаємо повідомлення про недоступність
      return "Sorry, there is no delivery to your country";
  }

  // Формуємо повідомлення про вартість доставки
  return `Shipping to ${country} will cost ${price} credits`;
}

// Тестові виклики функції
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
