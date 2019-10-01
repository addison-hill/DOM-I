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

// --------------Start my work ------------------------

const Links = document.getElementsByTagName('a');
Array.from(Links).forEach((link) => {
  link.textContent = "Services";
  link.style.color = 'green';
})

Links[1].textContent = "Product";
Links[2].textContent = "Vision";
Links[3].textContent = "Features";
Links[4].textContent = "About";
Links[5].textContent = "Contact";

const newLink = document.createElement('append');
newLink.textContent = 'Append Link';
newLink.style.color = 'green';

const secondaryLink = document.querySelector('nav');
secondaryLink.appendChild(newLink);

const newNewLink = document.createElement('prepend');
newNewLink.textContent = 'Prepend Link';
newNewLink.style.color = 'green';

const thirdLink = document.querySelector('nav');
thirdLink.prepend(newNewLink);

//------------------ CTA ---------------------------------

const title = document.querySelector('h1');
title.textContent = 'DOM Is Awesome';

const button = document.querySelector('button');
button.textContent = "Get Started";

const image = document.getElementById('cta-img');
image.src = "img/header-img.png";

//----------------- Top-Content --------------------------

const topH4s = document.querySelectorAll('.top-content h4');
Array.from(topH4s).forEach((element) => {
  element.textContent = "Features";
})
topH4s[1].textContent = "About";


const topPara = document.querySelectorAll('.top-content p');
Array.from(topPara).forEach((element) => {
  element.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
})
topPara[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const midImage = document.getElementById('middle-img');
midImage.src = "img/mid-page-accent.jpg";

//---------------- Bottom-Content -----------------------------

const bottomH4s = document.querySelectorAll('.bottom-content h4');
Array.from(bottomH4s).forEach((element) => {
  element.textContent = "Services";
})
bottomH4s[1].textContent = "Product";
bottomH4s[2].textContent = "Vision";

const bottomPara = document.querySelectorAll('.bottom-content p');
Array.from(bottomPara).forEach((element) => {
  element.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
})
bottomPara[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomPara[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//------------------------- Contact -----------------------------

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

const contactPara = document.querySelectorAll('.contact p');
Array.from(contactPara).forEach((element) => {
  element.textContent = "123 Way 456 Street Somewhere, USA";
})
contactPara[1].textContent = "1 (888) 888-8888";
contactPara[2].textContent = "sales@greatidea.io";

//----------------------------- Footer ------------------------------

const footer = document.querySelector('footer p');
footer.textContent = "Copyright Great Idea! 2018";