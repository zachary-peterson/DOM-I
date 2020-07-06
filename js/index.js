const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logoImage = document.querySelector('#logo-img');
logoImage.src = "img/logo.png"

let ctaImage = document.querySelector('#cta-img');
ctaImage.src = "img/header-img.png"

let midImage = document.querySelector('#middle-img');
midImage.src = "img/mid-page-accent.jpg"

let navItems = document.querySelectorAll('header nav a');
console.log(navItems);

navItems[0].textContent = siteContent.nav['nav-item-1'];
navItems[1].textContent = siteContent.nav['nav-item-2'];
navItems[2].textContent = siteContent.nav['nav-item-3'];
navItems[3].textContent = siteContent.nav['nav-item-4'];
navItems[4].textContent = siteContent.nav['nav-item-5'];
navItems[5].textContent = siteContent.nav['nav-item-6'];

let ctaTextOne = document.querySelector('.cta-text h1');
ctaTextOne.textContent = siteContent.cta['h1'];

let ctaTextTwo = document.querySelector('.cta-text button');
ctaTextTwo.textContent =siteContent.cta['button'];

let mainHead = document.querySelectorAll('.text-content h4');
mainHead[0].textContent = siteContent["main-content"]["features-h4"];
mainHead[1].textContent = siteContent["main-content"]["about-h4"];
mainHead[2].textContent = siteContent["main-content"]["services-h4"];
mainHead[3].textContent = siteContent["main-content"]["product-h4"];
mainHead[4].textContent = siteContent["main-content"]["vision-h4"];

let mainText = document.querySelectorAll('.text-content p');
mainText[0].textContent = siteContent["main-content"]["features-content"];
mainText[1].textContent = siteContent["main-content"]["about-content"];
mainText[2].textContent = siteContent["main-content"]["services-content"];
mainText[3].textContent = siteContent["main-content"]["product-content"];
mainText[4].textContent = siteContent["main-content"]["vision-content"];

let contHead = document.querySelector('.contact h4');
contHead.textContent = siteContent.contact["contact-h4"];

let contBody = document.querySelectorAll('.contact p');
contBody[0].textContent = siteContent.contact['address'];
contBody[1].textContent = siteContent.contact['phone'];
contBody[2].textContent = siteContent.contact['email'];

let footText = document.querySelector('footer p');
footText.textContent = siteContent.footer['copyright'];

// Add new content section from README.md ---

navItems.forEach(item => {
  item.style.color = "green";
});

let justNav = document.querySelector('nav');

let newNavOne = document.createElement('a');
let newNavTwo = document.createElement('a');

newNavOne.textContent = "One";
newNavTwo.textContent = "Two";

newNavOne.href ="#";
newNavTwo.href ="#";

justNav.appendChild(newNavOne);
justNav.appendChild(newNavTwo);