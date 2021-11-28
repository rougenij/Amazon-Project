// Array of carousel
const carousel = [
  {
    id: 0,
    img: "https://m.media-amazon.com/images/I/51ORjc5xesL._AC_SR160,160_.jpg",
    title:
      "Skytech Blaze ll Gaming PC Desktop – Ryzen 3 3100, GTX 1650 Super, 500GB SSD, 8G DD..",
    rating: 10,
    votes: 76,
    price: 949.99,
  },
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/41HPZpZ83dL._AC_SR160,160_.jpg",
    title:
      "Skytech Gaming Archangel Gaming Computer PC Desktop – Intel Core-i5 10400F..",
    rating: 10,
    votes: 30,
    price: 1249.99,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51LnnWyJkIL._AC_SR160,160_.jpg",
    title:
      "Skytech Blaze 3.0 Gaming PC Desktop – Intel i5-11400F, RX 6600, 1TB NVME, 16G...",
    rating: 10,
    votes: 38,
    price: 1399.99,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51zWwRM2dAL._AC_SR160,160_.jpg",
    title:
      "Skytech Chronos Gaming PC Desktop – Ryzen 3 3100, GTX 1660 Super, 500GB SSD, 16G DD",
    rating: 10,
    votes: 95,
    price: 1149.99,
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/I/51zWwRM2dAL._AC_SR160,160_.jpg",
    title:
      "Skytech Chronos Mini Gaming PC Desktop - AMD Ryzen 3 3100, NVIDIA GTX 1650...",
    rating: 10,
    votes: 21,
    price: 949.99,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/51Z+8zb711S._AC_SR160,160_.jpg",
    title:
      "Skytech Gaming Chromos Gaming PC Desktop - AMD Ryzen 5 5600X, RTX 3070 8G...",
    rating: 10,
    votes: 319,
    price: 1999.99,
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51dYAFZOj7S._AC_SR160,160_.jpg",
    title:
      "SkyTech Chronos Gaming Computer PC Desktop - AMD Ryzen 7 3700X 3.6GHz, RTX...",
    rating: 10,
    votes: 2,
    price: 2127.14,
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/I/51CLrF2IVmL._AC_SR160,160_.jpg",
    title:
      "SkyTech Chronos Mini Gaming Computer PC Desktop - Intel Core-i3 10100F 3.6GHz, GTX...",
    rating: 10,
    votes: 76,
    price: 759.99,
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/I/418SuFcDKfL._AC_SR160,160_.jpg",
    title:
      "SkyTech Archangel 3.0 Gaming Computer PC Desktop - Ryzen 5 3600 6-Core 3.6GHz, RTX...",
    rating: 10,
    votes: 199,
    price: 1432.69,
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/51nEdAXw4RL._AC_SR160,160_.jpg",
    title:
      "SkyTech Chronos Mini Gaming Computer PC Desktop - Intel Core-i5 10400F 2.9GHz, GTX...",
    rating: 10,
    votes: 21,
    price: 1149.99,
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/I/51CLrF2IVmL._AC_SR160,160_.jpg",
    title:
      "Lume Cube Video Conference Lighting Kit | Live Streaming, Video Conferencing, Remote...",
    rating: 10,
    votes: 5089,
    price: 49.99,
  },
  {
    id: 11,
    img: "https://m.media-amazon.com/images/I/313OxJ5nl6L._AC_SR160,160_.jpg",
    title:
      "Mini PC Intel Celeron J3455 6GB DDR4, 256GB SSD, Mini Desktop Computer, AWOW...",
    rating: 10,
    votes: 194,
    price: 239.99,
  },
  {
    id: 12,
    img: "https://m.media-amazon.com/images/I/41d+lDhdvrL._AC_SR160,160_.jpg",
    title:
      "Webcam with Microphone, Web Camera Full Hd 1080P Webcam with Cover...",
    rating: 10,
    votes: 129,
    price: 19.99,
  },
  {
    id: 13,
    img: "https://m.media-amazon.com/images/I/31fvxZMHaCL._AC_SR160,160_.jpg",
    title:
      "NETGEAR 8-Port Gigabit Ethernet Unmanaged Switch (GS208) - Desktop or Wall ",
    rating: 10,
    votes: 8364,
    price: 23.99,
  },
];
let uppervalue = 7;
let lowervalue = 0;
const slide = document.getElementsByClassName("carousel")[0];
const fillSlideShow = () => {
  slide.innerHTML = "";
  const prev = document.createElement("button");
  prev.addEventListener("click", () => {
    uppervalue -= 7;
    lowervalue -= 7;
    if (lowervalue < 0) {
      uppervalue = carousel.length;
      lowervalue = uppervalue - 7;
    }
    fillSlideShow();
  });
  slide.appendChild(prev);
  carousel.forEach((item, index) => {
    const productImg = document.createElement("img");
    const desc = document.createElement("p");
    const rating = document.createElement("img");
    const votes = document.createElement("span");
    const price = document.createElement("p");
    const container = document.createElement("div");
    const ratingandvotes = document.createElement("div");
    if (index >= lowervalue && index < uppervalue) {
      productImg.src = item.img;
      productImg.classList.add("smallimg");
      desc.textContent = item.title;
      desc.classList.add("carouseldesc");
      rating.src = "../Imgs/4-and-a-half-stars.png";
      rating.classList.add("carouselrating");
      votes.textContent = item.votes;
      votes.classList.add("carouselvotes");
      price.textContent = `$${item.price}`;
      price.classList.add("carouselprice");
      container.classList.add("container");
      ratingandvotes.classList.add("ratingandvotes");
      container.appendChild(productImg);
      container.appendChild(desc);
      ratingandvotes.appendChild(rating);
      ratingandvotes.appendChild(votes);
      container.appendChild(ratingandvotes);
      container.appendChild(price);
      slide.appendChild(container);
    }
  });
  const next = document.createElement("button");

  next.textContent = ">";
  prev.textContent = "<";
  next.addEventListener("click", () => {
    uppervalue += 7;
    lowervalue += 7;
    if (uppervalue > carousel.length) {
      uppervalue = 7;
      lowervalue = uppervalue - 7;
    }
    fillSlideShow();
  });

  slide.appendChild(next);
};
fillSlideShow();

// Expand More Button
function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Add to Cart Button
$(document).ready(function () {
  //create variable
  var counts = 0;
  $(".addtocart").click(function () {
    //to number and increase to 1 on each click
    counts += +1;
    $(".cart-counter").animate(
      {
        //show span with number
        opacity: 1,
      },
      300,
      function () {
        //write number of counts into span
        $(this).text(counts);
      }
    );
  });
});
/* Resize select width according to selected text */
$(document).ready(function () {
  $("#width_tmp_option").html($("#dropdown option:selected").text());
  $("#dropdown").width($("#width_tmp_select").width());

  $("#dropdown").change(function () {
    $("#width_tmp_option").html($("#dropdown option:selected").text());
    $(this).width($("#width_tmp_select").width());
  });
});
