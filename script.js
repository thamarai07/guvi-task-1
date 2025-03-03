let hamburger = document.getElementById("hamburger");
let line_1 = querySelector(".line_1");
let line_2 = querySelector(".line_2");
let line_3 = querySelector(".line_3");
let mobilemenu = querySelector(".mobile_menu");

function querySelector(cls) {
  let element = document.querySelector(`${cls}`);
  return element;
}

function addhideclassfirstElement(element, cls) {
  element.firstElementChild.classList.toggle(`${cls}`);
}

function addactiveclass(element, cls) {
  element.classList.toggle(`${cls}`);
}

function addrotateclass(element, cls) {
  element.forEach((element) => {
    element.classList.toggle(`${cls}`);
  });
}

hamburger.addEventListener("click", function () {
  addhideclassfirstElement(hamburger, "hide");
  addrotateclass([line_2, line_3], "rotate");
  addactiveclass(mobilemenu, "active");
});

// search section

let search_box_location = querySelector(".location");
let location_options = querySelector(".location_options");
const location_selected_value = querySelector(".location_selected_value");

search_box_location.addEventListener("click", function (event) {
  addactiveclass(location_options, "hide");
  addactiveclass(location_options, "active");
  location_selected_value.classList.add("hide");
});

const location_value = document.querySelectorAll(".location_value");

location_value.forEach((e) => {
  e.addEventListener("click", () => {
    addactiveclass(location_options, "active");
    addactiveclass(location_options, "hide");

    location_selected_value.innerHTML = e.dataset.location;
    location_selected_value.classList.remove("hide");
  });
});

const date_box = document.querySelector(".date_box");
const date_box_input = document.querySelector(".date_box_input");
const calendarPopup = document.getElementById("calendarPopup");
const currentMonthYear = document.getElementById("currentMonthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

let currentDate = new Date();

date_box.addEventListener("click", () => {
  calendarPopup.classList.remove("hide");
  renderCalendar(calendarPopup);
});

calendarPopup.addEventListener('click', ()=>{
  console.log(date_box_input)
})

document.addEventListener("click", (event) => {
  if (
    !calendarPopup.contains(event.target) &&
    !date_box.contains(event.target)
  ) {
    calendarPopup.classList.add("hide");
  }
});


function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  currentMonthYear.textContent = `${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date)} ${year}`;
  calendarDates.innerHTML = "";

  const firstDate = new Date(year, month, 1);
  const firstDayIndex = firstDate.getDay();

  const lastDate = new Date(year, month + 1, 0);
  const lastDateIndex = lastDate.getDay();

  for (let i = 0; i < firstDayIndex; i++) {
    calendarDates.innerHTML += `<div style="border:solid 1px black;"></div>`;
  }

  for (let i = 1; i <= lastDateIndex; i++) {
    const dateElement = document.createElement("div");
    dateElement.textContent = i;
    dateElement.addEventListener("click", () => {
      date_box_input.classList.remove("hide")
      date_box_input.value = `${year}-${String(month + 1).padStart(
        2,
        "0"
      )}-${String(i).padStart(2, "0")}`;
      calendarPopup.classList.add("hide");
    });
    dateElement.style.border = "solid 1px black";
    calendarDates.appendChild(dateElement);
  }
}

prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);


const guest_box = querySelector(".guest_box");
const guest_box_input = querySelector(".guest_box_input");
const worning = querySelector(".worning");

guest_box.addEventListener("click", ()=>{
  addactiveclass(guest_box_input, "hide");
})

function handleguest(){
  console.log(guest_box_input.value)
  if(guest_box_input.value <= 0 || guest_box_input.value >= 11){
    worning.classList.remove("hide");
    worning.innerHTML = "Please enter Blow 10"
  }else{
    worning.classList.add("hide");
  }
}


// carousel Next button
function nextBtn(nextBtn, item, width,gap){
  nextBtn.addEventListener("click", ()=>{
    item.forEach((ele,index)=>{
      let currentX = parseInt(ele.dataset.x) || 0;
      currentX += width+gap;
      ele.style.transform = `translateX(${currentX}px)`;
      ele.dataset.x = currentX;
    })
  })
}


// carousel prev button
function prevBtn(prevBtn, item, width,gap){
  prevBtn.addEventListener("click", ()=>{
    item.forEach((ele,index)=>{
      let currentX = parseInt(ele.dataset.x) || 0;
      currentX -= width+gap;
      ele.style.transform = `translateX(${currentX}px)`;
      ele.dataset.x = currentX;
    })
  })
}



const dd_carousel_btnnext = querySelector(".dd_carousel_btnnext");
const dd_carousel_btnprev = querySelector(".dd_carousel_btnprev");
const dd_carousel_item = document.querySelectorAll(".dd_carousel_item");

nextBtn(dd_carousel_btnnext,dd_carousel_item, 270, 40)
prevBtn(dd_carousel_btnprev,dd_carousel_item, 270, 40)


const vp_carousel_btnnext = querySelector(".vp_carousel_btnnext");
const vp_carousel_btnprev = querySelector(".vp_carousel_btnprev");
const vp_carousel_item = document.querySelectorAll(".vp_carousel_item");

nextBtn(vp_carousel_btnnext,vp_carousel_item, 369, 40)
prevBtn(vp_carousel_btnprev,vp_carousel_item, 369, 40)


  const about_us_carouselItems = document.querySelectorAll('.au_carousel_item');
  const nextButton = querySelector('.about_us_carousel_btnnext');
  const prevButton = querySelector('.about_us_carousel_btnprev');
  let currentIndex = 0;

  function updateCarousel() {
    about_us_carouselItems.forEach((item, index) => {
          if (index === currentIndex) {
              item.classList.add('active');
          } else {
              item.classList.remove('active');
          }
      });
  }

  nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % about_us_carouselItems.length;
      updateCarousel();
  });

  prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + about_us_carouselItems.length) % about_us_carouselItems.length;
      updateCarousel();
  });

  updateCarousel();

  
  const blog_carousel_btn = document.querySelector(".blog_carousel_btn");
const blog_carousel_items = document.querySelectorAll(".blog_carousel_item");

// Create indicators
blog_carousel_items.forEach((item, index) => {
    let indicator = document.createElement("span");
    indicator.className = "blog_navigator";
    indicator.addEventListener("click", () => {
        // Remove active class from all indicators and items
        document.querySelectorAll(".blog_navigator").forEach(ind => ind.classList.remove("active"));
        document.querySelectorAll(".blog_carousel_item").forEach(item => item.classList.remove("active"));

        // Add active class to the clicked indicator and corresponding item
        indicator.classList.add("active");
        blog_carousel_items[index].classList.add("active");
    });

    // Set the first indicator as active by default
    if (index === 0) {
        indicator.classList.add("active");
        blog_carousel_items[index].classList.add("active");
    }

    blog_carousel_btn.append(indicator);
});