
const animateWords = () => {
    const paragraph = document.querySelector(".animate-words");
    const words = paragraph.textContent.split(" ");
    paragraph.textContent = "";
  
    words.forEach((word, index) => {
      setTimeout(() => {
        paragraph.textContent += word + " ";
      }, index * 500);
        });
  };
  
  animateWords();


function toggleInfo(section) {
    const info = document.querySelector(`.${section}-info`);
    const icons = document.querySelectorAll(`.${section}-button i`);
    
    info.classList.toggle("hidden");
    icons.forEach(icon => {
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    });
}

let titleIndex = 0;
const titles = ["Full-Stack", "Back-End", "Front-End"];

function changeTitle() {
    const titleElement = document.querySelector(".profil");
    titleIndex = (titleIndex + 1) % titles.length;
    titleElement.textContent = titles[titleIndex];
}

setInterval(changeTitle, 2000);




/////////////
document.getElementById('openPdfLink').addEventListener('click', function(e) {
    e.preventDefault();
    var pdfUrl = 'CV.pdf'; 
    var newWindow = window.open(pdfUrl, '_blank');
    if (newWindow) {
        newWindow.focus();
    }
});


////////////
const skillBars = document.querySelectorAll(".skill-bar"); // Sélectionnez toutes les barres de compétences

skillBars.forEach((bar) => {
    let width = 0;
    const targetWidth = 60; 
    function animateSkillBar() {
        if (width < targetWidth) {
            width++;
            bar.querySelector(".skill-level").style.width = width + "%";
            requestAnimationFrame(animateSkillBar);
        }
    }
    animateSkillBar();
});

function captureVideo() {
    alert("Vidéo en cours...");
}


/////////////up and down
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        scrollToBottomBtn.style.display = "none";
    } else {
        scrollToBottomBtn.style.display = "block";
    }
};

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0
    });
});

scrollToBottomBtn.addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
    });
});


