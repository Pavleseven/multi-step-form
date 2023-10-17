'use strict';
// Object
const selectedPackage = {
  name: 'pavle',
  price: 9,
  servicePrice: 0,
  storagePrice: 0,
  profilePrice: 0,
};

// elements

const stepContainer = document.querySelector('.steps-display');
const slider = document.querySelector('.slider');
const checkbox = document.getElementById('switch');
const label = document.querySelector('.label');
const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const display3 = document.querySelector('.display3');
const display4 = document.querySelector('.display4');
const display5 = document.querySelector('.display5');
const display = document.querySelectorAll('.display');
// Step 1 dis5la45
const step1Input = document.getElementById('#step1');
const step2Input = document.getElementById('#step2');
const step3Input = document.getElementById('#step3');

const errorParagraph1 = document.querySelector('.error-p1');
const errorParagraph2 = document.querySelector('.error-p2');
const errorParagraph3 = document.querySelector('.error-p3');

const toHighLight1 = document.querySelector('.to-highlight1');
const toHighLight2 = document.querySelector('.to-highlight2');
const toHighLight3 = document.querySelector('.to-highlight3');
const toHighLight4 = document.querySelector('.to-highlight4');

// Display 2
//
//
//
const step2PriceArcade = document.querySelector('.step2-price-arcade');
const step2PriceAdvanced = document.querySelector('.step2-price-advanced');
const step2PricePro = document.querySelector('.step2-price-pro');

const monthsDisplay1 = document.querySelector('.months-display1');
const monthsDisplay2 = document.querySelector('.months-display2');
const monthsDisplay3 = document.querySelector('.months-display3');

const monthly = document.querySelector('.monthly-p');
const yearly = document.querySelector('.yearly-p');

const planPick = document.querySelector('.plan-flex');

const arcade = document.querySelector('.arcade');
const advanced = document.querySelector('.advanced');
const pro = document.querySelector('.pro');

const backButton1 = document.querySelector('.go-back1');
const nextButton1 = document.querySelector('.go-next1');
//
// Display 3 var

const input3price1 = document.querySelector('.input-3-price1');
const input3price2 = document.querySelector('.input-3-price2');
const input3price3 = document.querySelector('.input-3-price3');

const checkboxService = document.querySelector('.checkbox-service');
const checkboxStorage = document.querySelector('.checkbox-storage');
const checkboxProfile = document.querySelector('.checkbox-profile');

const checker1 = document.querySelector('input[name=checker1]');
const checker2 = document.querySelector('input[name=checker2]');
const checker3 = document.querySelector('input[name=checker3]');

const backButton2 = document.querySelector('.go-back2');
const nextButton2 = document.querySelector('.go-next2');

//
// Display 4
const input4 = document.querySelector('.input-4');
const selectedPlan = document.querySelector('.finish-plan');
const planP = document.querySelector('.special-p');

const serviceP = document.querySelector('.service-p');
const storageP = document.querySelector('.storage-p');
const profileP = document.querySelector('.profile-p');
const totalPP = document.querySelector('.total-p');
const totalPDisplay = document.querySelector('.totalPriceDisplay');

const backButton3 = document.querySelector('.go-back3');
const confirmButton = document.querySelector('.next4');
const changePlan = document.querySelector('.change-plan');
//
stepContainer.addEventListener('click', function (e) {
  const clicked = e.target.classList.contains('step-1-next');
  if (!clicked) return;
  if (step1Input.value === '')
    return errorParagraph1.classList.remove('hidden');
  if (step2Input.value === '' || !step2Input.value.includes('@'))
    return errorParagraph2.classList.remove('hidden');
  if (step3Input.value === '')
    return errorParagraph3.classList.remove('hidden');
  let screenWidth = window.matchMedia('(max-width: 800px)');
  let displayWidth = window.matchMedia('(min-width: 900px)');

  if (screenWidth.matches && clicked) {
    display1.style.transform = 'translateY(-105%)';
    display2.style.transform = 'translateY(-100%)';
    display3.style.transform = 'translateY(-105%)';
    display4.style.transform = 'translateY(-105%)';
    display5.style.transform = 'translateY(-105%)';
    toHighLight1.classList.remove('step-highlight');
    toHighLight2.classList.add('step-highlight');
  }

  if (clicked && displayWidth.matches) {
    display1.style.transform = 'translateY(-110%)';
    display2.style.transform = 'translateY(-110%)';
    display3.style.transform = 'translateY(-110%)';
    display4.style.transform = 'translateY(-110%)';
    display5.style.transform = 'translateY(-110%)';
    toHighLight1.classList.remove('step-highlight');
    toHighLight2.classList.add('step-highlight');
  }
});

label.addEventListener('click', function (e) {
  label.classList.toggle('active');
  monthly.classList.toggle('year-month-p');
  yearly.classList.toggle('year-month-p');
  const container = label.classList.contains('active');

  if (container) {
    step2PriceArcade.innerHTML = '$90/yr';
    step2PriceAdvanced.innerHTML = '$120/yr';
    step2PricePro.innerHTML = '$150/yr';
    monthsDisplay1.classList.remove('hidden');
    monthsDisplay2.classList.remove('hidden');
    monthsDisplay3.classList.remove('hidden');
    input3price1.innerHTML = '+$10/yr';
    input3price2.innerHTML = '+$20/yr';
    input3price3.innerHTML = '+$20/yr';
  } else {
    step2PriceArcade.innerHTML = '$9/mo';
    step2PriceAdvanced.innerHTML = '$12/mo';
    step2PricePro.innerHTML = '$15/mo';
    monthsDisplay1.classList.add('hidden');
    monthsDisplay2.classList.add('hidden');
    monthsDisplay3.classList.add('hidden');
    input3price1.innerHTML = '+$1/mo';
    input3price2.innerHTML = '+$2/mo';
    input3price3.innerHTML = '+$2/mo';
  }
  arcade.classList.remove('plan-selector');
  advanced.classList.remove('plan-selector');
  pro.classList.remove('plan-selector');
});

planPick.addEventListener('click', function (e) {
  console.log(e.target.closest('.input-2'));
  const click = e.target.closest('.input-2');
  if (!click) return;
  arcade.classList.remove('plan-selector');
  advanced.classList.remove('plan-selector');
  pro.classList.remove('plan-selector');

  click.classList.add('plan-selector');

  if (arcade.classList.contains('plan-selector')) {
    selectedPackage.name = 'Arcade';
    selectedPackage.type = label.classList.contains('active')
      ? 'Yearly'
      : 'Monthly';
    selectedPackage.price = step2PriceArcade.innerHTML;
    selectedPackage.totalPrice = !label.classList.contains('active') ? 9 : 90;
  }
  if (advanced.classList.contains('plan-selector')) {
    selectedPackage.name = 'Advanced';
    selectedPackage.type = label.classList.contains('active')
      ? 'Yearly'
      : 'Monthly';
    selectedPackage.price = step2PriceAdvanced.innerHTML;
    selectedPackage.totalPrice = !label.classList.contains('active') ? 12 : 120;
  }
  if (pro.classList.contains('plan-selector')) {
    selectedPackage.name = 'Pro';
    selectedPackage.type = label.classList.contains('active')
      ? 'Yearly'
      : 'Monthly';
    selectedPackage.price = step2PricePro.innerHTML;
    selectedPackage.totalPrice = !label.classList.contains('active') ? 15 : 150;
  }
  console.log(selectedPackage);
});

backButton1.addEventListener('click', function (e) {
  display1.style.transform = 'translateY(0)';
  display2.style.transform = 'translateY(0)';
  display3.style.transform = 'translateY(0)';
  display4.style.transform = 'translateY(0)';
  display5.style.transform = 'translateY(0)';
  toHighLight1.classList.add('step-highlight');
  toHighLight2.classList.remove('step-highlight');
});

nextButton1.addEventListener('click', function (e) {
  if (
    arcade.classList.contains('plan-selector') ||
    advanced.classList.contains('plan-selector') ||
    pro.classList.contains('plan-selector')
  ) {
    let screenWidth = window.matchMedia('(max-width: 800px)');
    let displayWidth = window.matchMedia('(min-width: 900px)');
    if (screenWidth.matches) {
      display1.style.transform = 'translateY(-220%)';
      display2.style.transform = 'translateY(-220%)';
      display3.style.transform = 'translateY(-225%)';
      display4.style.transform = 'translateY(-220%)';
      display5.style.transform = 'translateY(-220%)';
      toHighLight3.classList.add('step-highlight');
      toHighLight2.classList.remove('step-highlight');
    }
    if (displayWidth.matches) {
      display1.style.transform = 'translateY(-210%)';
      display2.style.transform = 'translateY(-210%)';
      display3.style.transform = 'translateY(-210%)';
      display4.style.transform = 'translateY(-210%)';
      display5.style.transform = 'translateY(-210%)';
      toHighLight3.classList.add('step-highlight');
      toHighLight2.classList.remove('step-highlight');
    }
  } else {
    planPick.classList.add('border-error');
    setTimeout(() => planPick.classList.remove('border-error'), 2000);
  }
});

display3.addEventListener('change', function (e) {
  const clicked = e.target.classList.contains('checkbox');
  const target = e.target.closest('.input-3');
  if (!clicked) return;
  console.log(target);

  target.classList.toggle('plan-selector');
  if (checker1.checked || checker2.checked || checker3.checked) {
    // target.classList.add('plan-selector');

    if (checker1.checked) {
      selectedPackage.service = input3price1.innerHTML;
      if (input3price1.innerHTML.includes('yr')) {
        selectedPackage.servicePrice = 10;
      } else if (input3price1.innerHTML.includes('mo')) {
        selectedPackage.servicePrice = 1;
      }
    }
    if (checker2.checked) {
      selectedPackage.storage = input3price2.innerHTML;
      if (input3price2.innerHTML.includes('yr')) {
        selectedPackage.storagePrice = 20;
      } else if (input3price2.innerHTML.includes('mo')) {
        selectedPackage.storagePrice = 2;
      }
    }
    if (checker3.checked) {
      selectedPackage.profile = input3price3.innerHTML;
      if (input3price3.innerHTML.includes('yr')) {
        selectedPackage.profilePrice = 20;
      } else if (input3price3.innerHTML.includes('mo')) {
        selectedPackage.profilePrice = 2;
      }
    }
  } else {
    if (!checker1.checked) {
      selectedPackage.service = 0;
      selectedPackage.servicePrice = 0;
      // target.classList.remove('plan-selector');
    }

    if (!checker2.checked) {
      selectedPackage.storage = 0;
      selectedPackage.storagePrice = 0;
      // target.classList.remove('plan-selector');
    }

    if (!checker3.checked) {
      selectedPackage.profile = 0;
      selectedPackage.profilePrice = 0;
      // target.classList.remove('plan-selector');
    }
  }
  console.log(selectedPackage);
});

backButton2.addEventListener('click', function (e) {
  let screenWidth = window.matchMedia('(max-width: 800px)');
  let displayWidth = window.matchMedia('(min-width: 900px)');
  if (screenWidth.matches) {
    display1.style.transform = 'translateY(-120%)';
    display2.style.transform = 'translateY(-100%)';
    display3.style.transform = 'translateY(-115%)';
    display4.style.transform = 'translateY(-120%)';
    display5.style.transform = 'translateY(-120%)';
    toHighLight2.classList.add('step-highlight');
    toHighLight3.classList.remove('step-highlight');
  }
  if (displayWidth.matches) {
    display1.style.transform = 'translateY(-110%)';
    display2.style.transform = 'translateY(-110%)';
    display3.style.transform = 'translateY(-110%)';
    display4.style.transform = 'translateY(-110%)';
    display5.style.transform = 'translateY(-110%)';
    toHighLight2.classList.add('step-highlight');
    toHighLight3.classList.remove('step-highlight');
  }
});

nextButton2.addEventListener('click', function (e) {
  let screenWidth = window.matchMedia('(max-width: 800px)');
  let displayWidth = window.matchMedia('(min-width: 900px)');
  if (screenWidth.matches) {
    display1.style.transform = 'translateY(-352%)';
    display2.style.transform = 'translateY(-352%)';
    display3.style.transform = 'translateY(-352%)';
    display4.style.transform = 'translateY(-362%)';
    display5.style.transform = 'translateY(-352%)';
    toHighLight4.classList.add('step-highlight');
    toHighLight3.classList.remove('step-highlight');
  }
  if (displayWidth.matches) {
    display1.style.transform = 'translateY(-312%)';
    display2.style.transform = 'translateY(-312%)';
    display3.style.transform = 'translateY(-312%)';
    display4.style.transform = 'translateY(-312%)';
    display5.style.transform = 'translateY(-312%)';
    toHighLight4.classList.add('step-highlight');
    toHighLight3.classList.remove('step-highlight');
  }

  selectedPlan.innerHTML = `${selectedPackage.name}(${selectedPackage.type})`;
  planP.innerHTML = selectedPackage.price;
  serviceP.innerHTML = selectedPackage?.service ?? 0;
  storageP.innerHTML = selectedPackage?.storage ?? 0;
  profileP.innerHTML = selectedPackage?.profile ?? 0;
  totalPP.innerHTML = `Total(per ${
    selectedPackage.type === 'Yearly' ? 'year' : 'month'
  })`;
  totalPDisplay.innerHTML = `+$${
    selectedPackage.totalPrice +
    selectedPackage.servicePrice +
    selectedPackage.storagePrice +
    selectedPackage.profilePrice
  }${selectedPackage.type === 'Yearly' ? 'yo' : 'mo'}`;
  console.log(selectedPackage);
});

// console.log(selectedPlan, planP, serviceP, storageP, profileP, totalPP);
//

backButton3.addEventListener('click', function (e) {
  let screenWidth = window.matchMedia('(max-width: 800px)');
  let displayWidth = window.matchMedia('(min-width: 900px)');
  if (screenWidth.matches) {
    display1.style.transform = 'translateY(-212%)';
    display2.style.transform = 'translateY(-212%)';
    display3.style.transform = 'translateY(-222%)';
    display4.style.transform = 'translateY(-212%)';
    display5.style.transform = 'translateY(-212%)';
    toHighLight3.classList.add('step-highlight');
    toHighLight4.classList.remove('step-highlight');
  }
  if (displayWidth.matches) {
    display1.style.transform = 'translateY(-212%)';
    display2.style.transform = 'translateY(-212%)';
    display3.style.transform = 'translateY(-212%)';
    display4.style.transform = 'translateY(-212%)';
    display5.style.transform = 'translateY(-212%)';
    toHighLight3.classList.add('step-highlight');
    toHighLight4.classList.remove('step-highlight');
  }
});

confirmButton.addEventListener('click', function (e) {
  let screenWidth = window.matchMedia('(max-width: 800px)');
  let displayWidth = window.matchMedia('(min-width: 900px)');
  if (screenWidth.matches) {
    display1.style.transform = 'translateY(-670%)';
    display2.style.transform = 'translateY(-670%)';
    display3.style.transform = 'translateY(-670%)';
    display4.style.transform = 'translateY(-670%)';
    display5.style.transform = 'translateY(-670%)';
  }
  if (displayWidth.matches) {
    display1.style.transform = 'translateY(-912%)';
    display2.style.transform = 'translateY(-912%)';
    display3.style.transform = 'translateY(-912%)';
    display4.style.transform = 'translateY(-912%)';
    display5.style.transform = 'translateY(-912%)';
  }
  toHighLight4.classList.remove('step-highlight');
});

changePlan.addEventListener('click', function (e) {
  display1.style.transform = 'translateY(-110%)';
  display2.style.transform = 'translateY(-110%)';
  display3.style.transform = 'translateY(-110%)';
  display4.style.transform = 'translateY(-110%)';
  display5.style.transform = 'translateY(-110%)';
  toHighLight2.classList.add('step-highlight');
  toHighLight4.classList.remove('step-highlight');
});
