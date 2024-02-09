// header
// Log in menu 
const loginBtn = document.getElementById('logInBtn');
const loginMenu = document.getElementById('logInMenu');
const logInArrow = document.getElementById('login-arrow');

loginBtn.addEventListener('click', toggleLogInMenu);

function toggleLogInMenu() {
    loginMenu.classList.toggle('hidden');
    logInArrow.classList.toggle('fa-fade');
}
// hamburger
const hamburgerIcon = document.getElementById('hamburger-icon');
const hamburgerContainer = document.getElementById('hamburger-cont');

hamburgerIcon.addEventListener('click', () => {
    if (hamburgerContainer.style.display === "none" || hamburgerContainer.style.display === "") {
        hamburgerContainer.style.display = "block";
    }
    else {
        hamburgerContainer.style.display = "none";
    }
});
// searchInput
const searchBtn = document.getElementById('search');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block";
    }
    else {
        searchInput.style.display = "none";
    }
});

// hero-icon-btn
const heroBuildBtn = document.getElementById('hero-build-btn');
const heroBuildIcon = document.getElementById('hero-build-icon');

heroBuildBtn.addEventListener('mouseover', () => {
    heroBuildIcon.classList.add('fa-bounce');
});

heroBuildBtn.addEventListener('mouseout', () => {
    heroBuildIcon.classList.remove('fa-bounce');
});

// login
localStorage.setItem("Username", "ppp@example.com");
localStorage.setItem("Password", "ppp@123");


const logInNow = document.getElementById('logIn');

logInNow.addEventListener('click', () => {

    const userName = document.getElementById('username').value;
    const password = document.getElementById('userPassword').value;
    if (localStorage.getItem("Username") === userName && localStorage.getItem("Password") === password) {
        document.getElementById('logInAlert').innerHTML = "Loged In Successfully";
    }
    else {
        document.getElementById('logInAlert').innerHTML = "Invalid Username or Password";
    }
})

// animation
window.addEventListener('load', () => {
    const transXList = document.querySelectorAll(".transX");
    const transNegativeXList = document.querySelectorAll(".transNegativeX");

    // Iterate through each element in the NodeList
    transXList.forEach(transXElement => {
        transXElement.style.opacity = 1;
        transXElement.style.transform = "translateX(0px)";
    });
    
    transNegativeXList.forEach(transNegativeXElement => {
        transNegativeXElement.style.opacity = 1;
        transNegativeXElement.style.transform = "translateX(0px)";
    });
});
// scroll animation reveal
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function revealOnScroll() {
    var elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(function(element, index) {
        if (!element.classList.contains('revealed') && isInViewport(element)) {
            setTimeout(function() {
                element.classList.add('revealed');
            }, index * 200);
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// cards
const cards = document.querySelectorAll(".cards");
const fp_image = document.querySelectorAll(".fp-img");
const view_product_btn = document.querySelectorAll(".view_product_btn");
// console.log(fp_image);
// console.log(cards);
cards.forEach((card,index) => {
    card.addEventListener('mouseover', () => {
        fp_image[index].style.transform = "translateY(-15px)";
    })
    card.addEventListener('mouseout', () => {
        fp_image[index].style.transform = "translateY(0px)";
    })
    // on click products kay page pr lay jao
});

// email receiver
const submit_email_btn = document.getElementById('submit_email');
submit_email_btn.addEventListener('click', () => {
    const user_email = document.getElementById('user_email').value;
    if(user_email){
        alert(`${user_email}`);
    }
});

// open Email
function open_email() {
    let send_email = document.createElement('a');
    let email = "pcpartpicker@example.com";
    send_email.setAttribute('href', `mailto:${email}`);
    document.body.appendChild(send_email);
    // console.log("Appended");
    send_email.click();
    document.body.removeChild(send_email);
    // console.log("Removed");
}

// hero Build btn
const hero_build_btn = document.getElementById('hero-build-btn');
hero_build_btn.addEventListener('click', () => {
    let navigate_to_builder = document.createElement('a');
    let builder_reference = `builder.html`;
    navigate_to_builder.setAttribute('href', `${builder_reference}`);
    document.body.appendChild(navigate_to_builder);
    navigate_to_builder.click();
    document.body.removeChild(navigate_to_builder);
})