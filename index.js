
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



slidertitle = [
    {
        id: 1,
        title: "Beautiful tea accessories and its high-quality, organic tea",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/treehugger-logo_bea7c5c7-eb21-4c15-9b4f-08a2d144064f.png?v=1710880899&width=2048"
    },
    {
        id: 2,
        title: "A premium loose leaf tea and steepware brand that elevates the drinkin ex erience",
        image: "https://andytown-public.s3.us-west-1.amazonaws.com/templates/component-templates/bite%20hp/forbes.webp%3Fv%3D1706761922"
    },
    {
        id: 3,
        title: "The difference shines through in the flavor",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/the-spruce-eats.png?v=1710880706&width=2048"
    },
    {
        id: 4,
        title: "A new and exciting entrant into the tea landscape",
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/goodhousekeeping_86a0f8e7-f854-47f2-8e5b-f8b0e0d7e5f4.png?v=1709931564&width=2048"
    }
]


let sliderIndex = 0;
const sliderText = document.getElementById('slider-text');
const sliderImage = document.getElementById('slider-image');

function showNextSlide() {
    sliderIndex = (sliderIndex + 1) % slidertitle.length;
    const currentItem = slidertitle[sliderIndex];

    sliderImage.src = currentItem.image;
    sliderImage.alt = currentItem.title;
    sliderText.textContent = currentItem.title;
}

showNextSlide();
setInterval(showNextSlide, 5000);


const imagesData = [
    {
        id: 1,
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/sustainability_icons-01.png?v=1711042986&width=2048",
        title: "Compostable Packaging"
    },
    {
        id: 2,
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/sustainability_icons-02.png?v=1711043017&width=2048",
        title: "Climate Neutral Certified"
    },
    {
        id: 3,
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/sustainability_icons-03.png?v=1711043038&width=2048",
        title: "Carbon Neutral Shipping"
    },
    {
        id: 4,
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/sustainability_icons-05.png?v=1711043060&width=2048",
        title: "Responsibly Sourced"
    },
    {
        id: 5,
        image: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/sustainability_icons-04.png?v=1711043083&width=2048",
        title: "Certified Organic"
    }
]

const imageSection = document.getElementById('imageSection');


imagesData.forEach(item => {
    const imageDIVSection = document.createElement("div");
    imageDIVSection.classList.add("imageDIVSection");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("imgContainer");
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    imgDiv.appendChild(img);


    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleContainer');
    title = document.createElement("p");
    title.classList.add('title');
    title.textContent = item.title;
    titleDiv.appendChild(title);

    imageDIVSection.appendChild(imgDiv);
    imageDIVSection.appendChild(titleDiv);
    imageSection.appendChild(imageDIVSection);
});




const footerData = {
    about: [
        "ABOUT US",
        "CONTACT US",
        "SUSTAINABILITY",
        "FAQ",
        "GIVE $10, GET $10",
        "STORE LOCATOR"
    ],
    follow: [
        "INSTAGRAM",
        "TIKTOK",
        "FACEBOOK",
        "YOUTUBE",
        "PINTEREST",
        "X"
    ],
    info: [
        "SHIPPING & RETURNS",
        "PR ENQUIRIES",
        "WHOLESALE",
        "CORPORATE GIFTING",
        "AMBASSADOR TEAM",
        "CAREERS"
    ]
};

const footer = document.querySelector('.footer-container');

// Function to create list items for each section
function createListItems(items) {
    return items.map(item => `<li>${item}</li>`).join('');
}

// Populate About section
const aboutSection = footer.querySelector('.footer-section:nth-child(1) ul');
aboutSection.innerHTML = createListItems(footerData.about);

// Populate Follow section
const followSection = footer.querySelector('.footer-section:nth-child(2) ul');
followSection.innerHTML = createListItems(footerData.follow);

// Populate Info section
const infoSection = footer.querySelector('.footer-section:nth-child(3) ul');
infoSection.innerHTML = createListItems(footerData.info);





// video section 
videosData = [
    {
        id: 1,
        media: "https://cdn.shopify.com/videos/c/o/v/c9c72d1cab674b09b5cb270b973b0e49.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-99.jpg?v=1710951733"
    },
    {
        id: 2,
        media: "https://cdn.shopify.com/videos/c/o/v/77657cd42ef945a1a0f615ca2fff7497.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-54.jpg?v=1710941321"
    },
    {
        id: 3,
        media: "https://cdn.shopify.com/videos/c/o/v/d3adf36aee3841a29f6db4328d4bb688.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-70.jpg?v=1710951395"
    },
    {
        id: 4,
        media: "https://cdn.shopify.com/videos/c/o/v/48d74709132f452387bcb6615c27c44f.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-6.jpg?v=1710952830"
    },
    {
        id: 5,
        media: "https://cdn.shopify.com/videos/c/o/v/36183179fb894d8eae91b781c93cf1dd.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-41.jpg?v=1710941247"
    },
    {
        id: 6,
        media: "https://cdn.shopify.com/videos/c/o/v/4659acded9634860b5df36540272771a.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-88.jpg?v=1710952329"
    },
    {
        id: 7,
        media: "https://cdn.shopify.com/videos/c/o/v/e92e3b61eb8f4d84bf542bed37ab8194.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-64.jpg?v=1710952566"
    },
    {
        id: 8,
        media: "https://cdn.shopify.com/videos/c/o/v/49c69958cce545cd820f4dd71d87b26e.mp4",
        thumbnail: "https://cdn.shopify.com/s/files/1/0573/8502/5710/files/Video-6.jpg?v=1710952830"
    }
]
 
function showThumbnails() {
    const videoThumbnailWrapper = document.querySelector('.video-thumbnail-wrapper');

    videosData.forEach(video => {
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('video-thumbnail');
        thumbnailContainer.innerHTML = `<img src="${video.thumbnail}" alt="Thumbnail">`;

        let videoElement;

        thumbnailContainer.addEventListener('click', () => {
            if (!videoElement) {
                videoElement = document.createElement('video');
                videoElement.src = video.media;
                videoElement.controls = true;
                videoElement.autoplay = true;
                videoElement.classList.add('videoplayer');

                // Remove thumbnail image
                thumbnailContainer.innerHTML = '';

                // Append video element
                thumbnailContainer.appendChild(videoElement);
            }
        });

        thumbnailContainer.addEventListener('click', (event) => {
            if (videoElement && event.target === videoElement) {
                thumbnailContainer.innerHTML = `<img src="${video.thumbnail}" alt="Thumbnail">`;
                videoElement = null;
            }
        });

        videoThumbnailWrapper.appendChild(thumbnailContainer);
    });
}

window.onload = showThumbnails;
