// import hotels as myHotel, import misc, import promotionPercentCalc from hotel.js
import myHotel, { misc, promotionPercentCalc } from './hotel.js';

// assign for each hotel a random emoji
myHotel.forEach(hotel => {
  hotel.emoji = misc.emojis[Math.floor(Math.random() * misc.emojis.length)];
});

// calculate promotionPercentCalc for all hotel in myHotel
myHotel.forEach(hotel => {
  const price = parseFloat(hotel.price.replace('$', '').replace(',', ''));
  const promotionPrice = parseFloat(hotel.promotionPrice.replace('$', '').replace(',', ''));
  hotel.promotionPercent = promotionPercentCalc(price, promotionPrice);
});

// assign proper tag for each hotel
let cheapestHotel = myHotel[0];
let bestPriceHotel = myHotel[0];
let lowestCleanFeeHotel = myHotel[0];

myHotel.forEach(hotel => {
  const promotionPrice = parseFloat(hotel.promotionPrice.replace('$', '').replace(',', ''));
  const cleaningFee = parseFloat(hotel.cleaningFee.replace('$', '').replace(',', ''));

  if (promotionPrice < parseFloat(cheapestHotel.promotionPrice.replace('$', '').replace(',', ''))) {
    cheapestHotel = hotel;
  }

  if (hotel.promotionPercent < bestPriceHotel.promotionPercent) {
    bestPriceHotel = hotel;
  }

  if (cleaningFee < parseFloat(lowestCleanFeeHotel.cleaningFee.replace('$', '').replace(',', ''))) {
    lowestCleanFeeHotel = hotel;
  }
});

cheapestHotel.tag = misc.tags[0];
bestPriceHotel.tag = misc.tags[1];
lowestCleanFeeHotel.tag = misc.tags[2];

console.log(myHotel);
