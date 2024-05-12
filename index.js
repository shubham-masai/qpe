
document.getElementById('hamburger-icon').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-50%') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-50%';
    }
});

document.getElementById('close-sidebar').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-50%';
});


const causaldata = [
    {
        id: 1,
        desc: "This mug does everything it claims and I couldn't be more pleased! I was so happy that I immediately purchased another one.",
        para: "I am beyond thrilled to finally have a mug that steeps on the",
        name: "KATELYNN",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Travel_Mug_green_forest.jpg?v=1712090852&width=2048"
    },
    {
        id: 2,
        desc: "After Dinner Mint tea is such a treasure. It's my go-to nighttimeritual when I need to unwind andget a great sleep. My Oura Ringsleep scores are noticeablybetter when I have this after 7",
        para: "More importantly, it just tastes phenomenal.",
        name: "SHANE",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/ADM_closeup.jpg?v=1711044548&width=2048"
    },
    {
        id: 3,
        desc: "It's easy to tell that these teas are incredibly high quality. They look beautiful, smell fresh, and taste flavourful and well balanced. Will definitely be ordering again.",
        para: "",
        name: "KATIA",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/good-root_b1380d67-591d-4f69-9b63-bff5c91c653d.jpg?v=1712090825&width=2048"
    },
    {
        id: 4,
        desc: "This is a super simple way to make iced tea (beats leaving the jar in the sun for hours) and the tea tastes great.",
        para: "",
        name: "TARAH",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/iced-tea_aefb0644-e0e9-4b27-80fa-1f966143d28c.jpg?v=1712090795&width=2048"
    },
    {
        id: 5,
        desc: "I can't go back to what I was drinking before now.",
        para: "",
        name: "RORY",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Yuzu.jpg?v=1712090773&width=2048"
    }
]

const carouselContainer = document.querySelector('.carousel-container');
const carouselItem = document.querySelector('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

const preBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentIndex = 0;

function renderCarouselItem(index) {
    const item = causaldata[index];
    carouselItem.innerHTML = `
        <div class="left-desc">
        <p>${item.desc}</p>
        <p>${item.para}</p>
        <h5>${item.name}</h5>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
        </div>
        </div>
        <div class="right-img">
            <img src="${item.image}" alt="Carousel Item Image">
        </div>
    `;

    const prevIndex = (index - 1 + causaldata.length) % causaldata.length;
    const nextIndex = (index + 1) % causaldata.length;

    const prevItem = causaldata[prevIndex];
    const nextItem = causaldata[nextIndex];

    carouselPrev.innerHTML = `
        <div class="left-desc">
        <p>${prevItem.desc}</p>
        <p>${prevItem.para}</p>
        <h5>${prevItem.name}</h5>
        </div>
        <div class="right-img">
            <img src="${prevItem.image}" alt="Carousel Item Image">
        </div>
    `;

    carouselNext.innerHTML = `
        <div class="left-desc">
        <p>${nextItem.desc}</p>
        <p>${nextItem.para}</p>
        <h5>${nextItem.name}</h5>
        <div class="stars">
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
        </div>
        </div>
        <div class="right-img">
            <img src="${nextItem.image}" alt="Carousel Item Image">
        </div>
    `;
}

renderCarouselItem(currentIndex);

preBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

function showPrev() {
    currentIndex = (currentIndex - 1 + causaldata.length) % causaldata.length;
    renderCarouselItem(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % causaldata.length;
    renderCarouselItem(currentIndex);
}



const populardata = [
    {
        id: 1,
        title: "ENERGY & FOCUS",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Firebelly_Afternoon_5834e75d-bfe4-44ac-8b5d-7890acf2b066.jpg?v=1712091426&width=2048",
    },
    {
        id: 2,
        title: "SLEEP QUALITY",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Firebelly_Evening_37997fdf-5fe9-4432-9828-1250d766972b.jpg?v=1712091445&width=2048"
    },
    {
        id: 3,
        title: "IMMUNE SUPPORT",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Firebelly_Evening2.jpg?v=1712091469&width=2048"
    },
    {
        id: 4,
        title: "DIGESTIVE SUPPORT",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Firebelly_Morning_2_d2b53439-c749-4815-8c0e-a9c1e70355de.jpg?v=1712091489&width=2048"
    }
]


const popular = document.querySelector(".popular-container");

populardata.forEach(item => {

    const newDiv = document.createElement('div');
    newDiv.classList.add('popular-item');

    const titleDiv = document.createElement('div');
    const titleP = document.createElement('p');
    titleP.textContent = item.title;
    titleDiv.appendChild(titleP);

    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    imageDiv.appendChild(image);

    const browseDiv = document.createElement("div");
    browseDiv.classList.add('popular-browse');
    browseP = document.createElement("p");
    browseP.textContent = "BROWSE COLLECTION"

    browseDiv.appendChild(browseP);

    titleDiv.classList.add('popular-title');
    imageDiv.classList.add('popular-image');
    newDiv.appendChild(titleDiv);
    newDiv.appendChild(imageDiv);
    newDiv.appendChild(browseDiv);
    popular.appendChild(newDiv);
});
