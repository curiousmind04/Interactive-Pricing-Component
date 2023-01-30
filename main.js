const toggle = document.querySelector(".toggle");

const slider = document.getElementById("slider");
const min = slider.min;
const max = slider.max;
const value = slider.value;

const viewsNumber = document.querySelector(".views-number");
const priceAmount = document.querySelector(".price-amount");
const priceDuration = document.querySelector(".price-duration");

let duration = "monthly";

const monthlyCalculation = () => {
  if (slider.value === "0") {
    priceAmount.innerHTML = "$8.00";
    viewsNumber.innerHTML = "10K ";
    priceDuration.innerHTML = " / monthly";
  }
  if (slider.value === "1") {
    priceAmount.innerHTML = "$12.00";
    viewsNumber.innerHTML = "50K ";
    priceDuration.innerHTML = " / monthly";
  }
  if (slider.value === "2") {
    priceAmount.innerHTML = "$16.00";
    viewsNumber.innerHTML = "100K ";
    priceDuration.innerHTML = " / monthly";
  }
  if (slider.value === "3") {
    priceAmount.innerHTML = "$24.00";
    viewsNumber.innerHTML = "500K ";
    priceDuration.innerHTML = " / monthly";
  }
  if (slider.value === "4") {
    priceAmount.innerHTML = "$36.00";
    viewsNumber.innerHTML = "1M ";
    priceDuration.innerHTML = " / monthly";
  }
};

const yearlyCalculation = () => {
  if (slider.value === "0") {
    priceAmount.innerHTML = "$72.00";
    viewsNumber.innerHTML = "10K ";
    priceDuration.innerHTML = " / year";
  }
  if (slider.value === "1") {
    priceAmount.innerHTML = "$108.00";
    viewsNumber.innerHTML = "50K ";
    priceDuration.innerHTML = " / year";
  }
  if (slider.value === "2") {
    priceAmount.innerHTML = "$144.00";
    viewsNumber.innerHTML = "100K ";
    priceDuration.innerHTML = " / year";
  }
  if (slider.value === "3") {
    priceAmount.innerHTML = "$216.00";
    viewsNumber.innerHTML = "500K ";
    priceDuration.innerHTML = " / year";
  }
  if (slider.value === "4") {
    priceAmount.innerHTML = "$324.00";
    viewsNumber.innerHTML = "1M ";
    priceDuration.innerHTML = " / year";
  }
};

toggle.addEventListener("click", () => {
  if (duration === "monthly") {
    duration = "yearly";
    yearlyCalculation();
  } else {
    duration = "monthly";
    monthlyCalculation();
  }
});

slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
  ((value - min) / (max - min)) * 100
}%, hsl(224, 65%, 95%) ${
  ((value - min) / (max - min)) * 100
}%, hsl(224, 65%, 95%) 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, hsl(224, 65%, 95%) ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, hsl(224, 65%, 95%) 100%)`;

  if (duration === "monthly") {
    monthlyCalculation();
  }
  if (duration === "yearly") {
    yearlyCalculation();
  }
};
