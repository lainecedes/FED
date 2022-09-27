// JavaScript Document

var menuButton = document.querySelector("header nav button:nth-last-child(2)");
menuButton.addEventListener("click", openMenu);

function openMenu() {
    var headerNav = document.querySelector("header nav");
    headerNav.classList.toggle("buttonOpen");
}

// search bar
var searchButton = document.querySelector("header nav button:nth-of-type(1)");
searchButton.addEventListener("click", openSearch);

function openSearch() {
    var searchNav = document.querySelector("header nav");
    searchNav.classList.toggle("searchOpen");
}

////////////////////////////////////////////////////////////////////
function kijkCarousel () {
    // Intersection observer 😭 😭 😭  HET WERKTTTTTT

    const slides = document.querySelectorAll("section:nth-of-type(4) ul li"); // defineer de "slides" van carousel
    var slideDatum = document.querySelector("section:nth-of-type(4) h3") // tekst van h3, data events

    // observer maken, maak een class als een element telkens word geobserveerd
    const observer = new IntersectionObserver(entries => {
            console.log(entries);

            entries.forEach(entry => {
                    entry.target.classList.toggle("show", entry.isIntersecting);
                    
                    if (entry.target === slides[0]) {
                        slideDatum.textContent = "22/09"
                        console.log("Dit is slide 1");
                    }

                    else if (entry.target === slides[1]) {
                        slideDatum.textContent = "15/09"
                        console.log("Dit is slide 2");
                    }

                    else if (entry.target === slides[2]) {
                        slideDatum.textContent = "14/09"
                        console.log("Dit is slide 3");
                    }

                    else if (entry.target === slides[3]) {
                        slideDatum.textContent = "14/09"
                        console.log("Dit is slide 4");
                    }

                    else if (entry.target === slides[4]) {
                        slideDatum.textContent = "13/09"
                        console.log("Dit is slide 5");
            
                    } 
                    
                }
            );
        },
        { // Hoeveel percent van li laten zien voordat het veranderd (100%)
            threshold: 1,
        }
    )

    // observeer elke carousel slide 
    slides.forEach(slide => {
        observer.observe(slide)
    })

    // observer.observe(slides[0]);

}


kijkCarousel();

