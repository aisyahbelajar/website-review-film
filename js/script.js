const movies = [
  {
    title: "Aladdin",
    description:
      "A street-smart young man named Aladdin embarks on an adventure.",
    imageUrl:
      "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4AA8F0FEAB87B35590266566C7B3B5422E7A9C7E2A20F8E028620E13FB86E26C/scale?aspectRatio=1.78&format=jpeg",
    detailsUrl: "https://www.imdb.com/title/tt0103639/?ref_=fn_al_tt_2",
  },
  {
    title: "Moana",
    description:
      "Moana, the strong-willed daughter of a Polynesian village chief.",
    imageUrl: "https://wallpapercave.com/wp/wp8562142.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt3521164/?ref_=nv_sr_srsg_1_tt_5_nm_2_in_0_q_moana",
  },
  {
    title: "Beauty and the Beast",
    description:
      "Belle is imprisoned by a beast in his enchanted castle but learns to check details beyond his appearance and discovers his kind heart.",
    imageUrl:
      "https://image.tmdb.org/t/p/original/fW4ZCoEZRBqLAJGFQ2g5AdAfPQR.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt2771200/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_beauty%2520and%2520the",
  },
  {
    title: "The Lion King",
    description:
      "Simba, a young lion prince, learns the true meaning of responsibility and bravery as he embarks on a journey to reclaim his kingdom.",
    imageUrl:
      "https://www.intofilm.org/intofilm-production/1079/scaledcropped/3000x1688/resources/1079/the-lion-king-image.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt0110357/?ref_=nv_sr_srsg_1_tt_7_nm_0_in_0_q_the%2520lion%2520king",
  },
  {
    title: "Spider-Man: No Way Home",
    description:
      "  Peter Parker's identity is revealed, bringing his Super Hero responsibilities into conflict with his normal life.",
    imageUrl:
      "https://th.bing.com/th/id/OIP.Za986M4a_NUKtLOqOuHapgHaEK?rs=1&pid=ImgDetMain",
    detailsUrl:
      "https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Spider-Man%253A%2520No%2520Way%2520Home",
  },
  {
    title: "Frozen",
    description:
      "Elsa, the Snow Queen, has a gift — the power to create ice and snow. But she struggles with controlling it.",
    imageUrl: "https://wallpapercave.com/wp/wp11075610.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt2294629/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_frozen",
  },
  {
    title: "Coco",
    description:
      "  A young boy named Miguel dreams of becoming a musician and embarks on a journey through the Land of the Dead.",
    imageUrl:
      "https://assets.rappler.com/550B7FA5408643A990562C71AB8D0F5A/img/C44FDA3974E64407AEB5A15E1FF0E6DA/June_09_2017-coco-001.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt2380307/?ref_=nv_sr_srsg_2_tt_2_nm_4_in_0_q_coco",
  },
  {
    title: "Zootopia",
    description:
      "In a city of animals, a rabbit cop and a cynical con artist fox must work together to uncover a conspiracy.",
    imageUrl:
      "https://wallpapers.com/images/hd/knockout-zootopia-tandem-vlrb7cnhhvi9zwwe.jpg",
    detailsUrl: "https://www.imdb.com/title/tt2948356/fullcredits",
  },
];

const movielatest = [
  {
    title: "Elemental",
    description:
      "A fiery young woman and a go-with-the-flow guy discover something elemental: how much they have in common.",
    imageUrl:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/Pixars-Elemental.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt15789038/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_elemental",
  },
  {
    title: "Nimona",
    description:
      "A shapeshifter teams up with a knight accused of a crime he didn't commit to prove his innocence and uncover a hidden conspiracy.",
    imageUrl: "https://img.ecartelera.com/noticias/73800/73879-h2.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt19500164/?ref_=nv_sr_srsg_2_tt_2_nm_4_in_0_q_nimona",
  },
  {
    title: "Mutant Mayhem",
    description:
      "The Teenage Mutant Ninja Turtles must face new challenges in their quest to be accepted as normal teenagers.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/3692c3c8-78b6-4fb4-8867-a701b350a6a5/teenage-mutant-ninja-turtles-mutant-mayhem-is-now-available-to-watch-at-home.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt8589698/?ref_=nv_sr_srsg_0_tt_5_nm_0_in_0_q_Mutant%2520Mayhem",
  },
  {
    title: "Puss in Boots",
    description:
      "Puss in Boots sets off on an epic quest to restore his nine lives and face new, action-packed adventures.",
    imageUrl:
      "https://www.cinemovie.tv/images/stories/Movie%20Pics/puss-in-boots-last-wish-movie.jpg",
    detailsUrl:
      "https://www.imdb.com/title/tt3915174/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Puss%2520in%2520Boots",
  },
];

function renderMovies(movieList) {
  const container = document.getElementById("trending-container");
  container.innerHTML = "";

  movieList.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("swiper-slide");

    movieDiv.innerHTML = `
  <img class="box" src="${movie.imageUrl}" alt="${movie.title}">
  <div class="content">
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
    <br />
    <a href="${movie.detailsUrl}" class="btn">Check details</a>
  </div>
`;

    container.appendChild(movieDiv);
  });
}

renderMovies(movies);

function renderLatest(movieList) {
  const container = document.getElementById("latest-container");
  container.innerHTML = "";

  movieList.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("swiper-slide");

    movieDiv.innerHTML = `
  <img class="box" src="${movie.imageUrl}" alt="${movie.title}">
  <div class="content">
    <h3>${movie.title}</h3>
    <p>${movie.description}</p>
    <br />
    <a href="${movie.detailsUrl}" class="btn">Check details</a>
  </div>
`;

    container.appendChild(movieDiv);
  });
}
renderLatest(movielatest);

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onload = function () {
  var swiper1 = new Swiper(".home-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper2 = new Swiper(".trending-slide", {
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper3 = new Swiper(".latest-slide", {
    spaceBetween: 30,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};

const searchInput = document.getElementById("search-input");
const movieCards = document.querySelectorAll(
  ".swiper-slide.card, .swiper-slide"
);
const heading = document.querySelector(".trending .heading");
const latest = document.querySelector(".latest .heading");
const footer = document.querySelector("footer");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  movieCards.forEach((card) => {
    card.style.display = "none";
    const title = card.querySelector(".content h3").textContent.toLowerCase();

    if (title.includes(searchTerm) && searchTerm !== "") {
      card.style.display = "block";
      heading.style.color = "#181818";
      latest.style.color = "#181818";
    } else {
      footer.style.position = "fixed";
    }

    if (searchTerm === "") {
      movieCards.forEach((card) => {
        card.style.display = "block";
      });
      heading.style.color = "";
      latest.style.color = "";
      footer.style.position = "";
    }
  });
});

const clearIcon = document.getElementById("clear-icon");

searchInput.addEventListener("input", function () {
  if (searchInput.value.length > 0) {
    clearIcon.style.display = "block";
  } else {
    clearIcon.style.display = "none";
  }
});

// Hapus teks ketika ikon clear diklik
clearIcon.addEventListener("click", function () {
  searchInput.value = "";
  clearIcon.style.display = "none";
  searchInput.focus();
  movieCards.forEach((card) => {
    card.style.display = "block";
    heading.style.color = "#e50914";
    latest.style.color = "#e50914";
    footer.style.position = "";
  });
});
