const isMobile =
window.matchMedia("(max-width:768px)").matches;

function showAlert()
    {
    alert("꧁ 🕵️ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮, 𝓔𝔁𝓹𝓵𝓸𝓻𝓮𝓻! ꧂                                         𝓔𝓿𝓮𝓻𝔂 𝓬𝓪𝓻𝓭 𝓱𝓲𝓭𝓮𝓼 𝓪 𝓶𝔂𝓼𝓽𝓮𝓻𝔂. 𝓒𝓵𝓲𝓬𝓴 𝓽𝓸 𝓾𝓷𝓬𝓸𝓿𝓮𝓻!𝓕𝓸𝓻 𝓮𝓷𝓽𝓮𝓻𝓽𝓪𝓲𝓷𝓶𝓮𝓷𝓽 𝓸𝓷𝓵𝔂 - 𝓝𝓞𝓣 𝓐 𝓢𝓒𝓐𝓜!!                                     The symbols 𒋻𒁇𒐕 𒁀𒋻𒁀𒋻'𒔼 𐏓𒋻𐎏𒀼 aren't decoration, Decode 🤫");
    } 
    const randomSites=[

        "https://onlinesequencer.net/",

        "https://mrdoob.com/projects/chromeexperiments/google-gravity/index.html",

        "https://scaleofuniverse.com/en",

        "https://zoomquilt.org/",

        "https://elgoog.im/batman/",

        "https://this-person-does-not-exist.com/en",

        "https://pointerpointer.com/",

        "https://you.regettingold.com/",

        "https://90s.myretrotvs.com/",

        "https://clicktheredbutton.com/",

        "https://theuselessweb.com/",

        "https://findtheinvisiblecow.com/",

        "https://geekprank.com/hacker/",

        "http://weavesilk.com/",

        "https://stellarium-web.org/",
        
        "https://www.flightradar24.com/" ,

        "https://liveuamap.com/",

        "https://boredhumans.com/falling_sand.php",

        "https://stars.chromeexperiments.com/",

        "https://emojikitchen.dev/",

        "https://web.archive.org/",

        "https://littlealchemy2.com/",

        "https://quickdraw.withgoogle.com/",

        "https://patatap.com/",

        "https://www.boredbutton.com/random",

        "https://experiments.withgoogle.com/collection/chrome" ,

        "https://dinosaurpictures.org/ancient-earth#400",

        "https://www.marinetraffic.com/en/ais/home/centerx:-118.1/centery:32.6/zoom:2",

        "https://www.pixelthoughts.co/",

        "https://quickdraw.withgoogle.com/",

        "https://en.akinator.com/game",

        "https://neal.fun/deep-sea/",

        "https://neal.fun/logos-from-memory/", 

        "https://neal.fun/speed/"


    ];

    function searchCards()
    {
        let input = document.getElementById("search").value.toLowerCase().trim();
        // Secret code
        if(input === "open sesame")
        {
            document.getElementById("search").value="";
            startNightfall();
            return;
        }
        // Normal search
        let cards=document.querySelectorAll(".col");
        cards.forEach(card=>{
            let text=card.innerText.toLowerCase();
            card.style.display=text.includes(input)?"block":"none";
        });

    }














    // Scroll Progress Bar
        const progress=document.createElement("div");

        progress.style.position="fixed";
        progress.style.top="0";
        progress.style.left="0";
        progress.style.height="5px";
        progress.style.background="#ff7eb3";
        progress.style.zIndex="9999";
        progress.style.width="0%";

        document.body.appendChild(progress);
        window.addEventListener("scroll",()=>{
        const total=document.documentElement.scrollHeight-window.innerHeight;
        const percent=(window.scrollY/total)*100;
        progress.style.width=percent+"%";
        });

        // Fade cards in while scrolling
        const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
        if(entry.isIntersecting){
        entry.target.style.opacity=1;
        entry.target.style.transform="translateY(0)";
        }
        });
        });

        document.querySelectorAll(".col").forEach(card=>{
        card.style.opacity=0;
        card.style.transform="translateY(40px)";
        card.style.transition=".6s";
        observer.observe(card);
        });

        // DARK MODE
        const darkBtn = document.getElementById("darkModeBtn");
        darkBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            if(document.body.classList.contains("dark")){
                darkBtn.textContent = "☀️";
            }else{
                darkBtn.textContent = "🌙";
            }
        });

       function randomSite()
{
    const random =
        Math.floor(Math.random() * randomSites.length);

    window.open(randomSites[random], "_blank");
}
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        function toggleFavorite(event, heart)
        {
            event.preventDefault();
            event.stopPropagation();
            const card = heart.closest("a");
            const id = card.href;   
            if(favorites.includes(id)){
                favorites = favorites.filter(item => item !== id);
                heart.innerHTML = "🤍";
            }
            else{
                favorites.push(id);
                heart.innerHTML = "❤️";
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));

            updateFavoriteCount();
        }

            function updateFavoriteCount()
            {
                document.getElementById("favCount").textContent = favorites.length;
            }
            updateFavoriteCount();
    
            document.querySelectorAll(".favorite").forEach(heart=>{
                const id = heart.closest("a").href;
                if(favorites.includes(id)){
                    heart.innerHTML = "❤️";
                }
            });

        const music = document.getElementById("bgMusic");
        const musicBtn = document.getElementById("musicBtn");

      musicBtn.onclick = function()
{

    if(music.paused)
    {
        music.play().catch(() => {

            console.log("Autoplay blocked until user interaction.");

        });

        musicBtn.innerHTML = "🔊";
    }
    else
    {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }

};
        const stars = document.getElementById("stars");

        const colors = [
        "#ffffff", // white
        "#a5d8ff", // light blue
        "#d0bfff", // purple
        "#ffb3c6", // pink
        "#ffd6a5"  // soft gold
        ];

        const starCount =
isMobile ? 60 : 150;

for(let i=0;i<starCount;i++)
        {

            const star=document.createElement("div");
            star.classList.add("star");

            star.style.left=Math.random()*100+"vw";
            star.style.top=Math.random()*100+"vh";

            const size=Math.random()*3+1;
            star.style.width=size+"px";
            star.style.height=size+"px";

            // random color
            const color = colors[Math.floor(Math.random()*colors.length)];
            star.style.background = color;
            star.style.color = color;

            // random speed (more natural movement)
            star.style.animationDuration =
                (4 + Math.random()*10) + "s, " +
                (10 + Math.random()*20) + "s";

            stars.appendChild(star);
        }

        function createShootingStar()
        {
            const star=document.createElement("div");
            star.classList.add("shooting-star");
            star.style.top=Math.random()*40+"vh";
            star.style.left="-150px";
            document.body.appendChild(star);
            setTimeout(()=>{
                star.remove();
            },2000);
        }

    // Create a shooting star every 8–18 seconds

    setInterval(()=>{

        createShootingStar();

    },8000+Math.random()*10000);
     document.querySelectorAll(".cloud").forEach(cloud=>{
    cloud.innerHTML="<span></span>";
    });
 
 // ================= CARD FIREFLIES =================

const cards=document.querySelectorAll(".col");

cards.forEach(card=>{

    if(Math.random()>0.25) return;


    card.style.position="relative";

    // 1 or 2 fireflies per card
const count =
isMobile
?
2
:
Math.floor(Math.random()*3)+3;

    for(let i=0;i<count;i++){

        const fly=document.createElement("div");

        fly.className="card-firefly";

        fly.style.left=(20+Math.random()*160)+"px";
        fly.style.top=(20+Math.random()*240)+"px";

        fly.style.animationDelay=
            (Math.random()*4)+"s";

        card.appendChild(fly);

    }

});
// ================= MAGIC BUTTERFLY =================

const butterflyContainer = document.getElementById("butterflies");

function createButterfly(){

    if(!document.body.classList.contains("dark")) return;

    const butterfly = document.createElement("div");

    butterfly.className = "butterfly";

    butterfly.innerHTML = `
<div class="butterfly-body">
    <div class="wing left"></div>
    <div class="body"></div>
    <div class="wing right"></div>
</div>
`;

    butterfly.style.top = (20 + Math.random()*60) + "%";

    butterfly.style.animationDuration =
        (14 + Math.random()*6) + "s";

    butterfly.style.fontSize =
        (28 + Math.random()*14) + "px";

    butterfly.style.animation +=
        ", flap .25s infinite";

    butterflyContainer.appendChild(butterfly);

    setTimeout(()=>{
        butterfly.remove();
    },20000);

}

/* First butterfly after 5 seconds */
setTimeout(createButterfly,5000);

const butterflySpeed =
isMobile ? 9000 : 5000;

setInterval(createButterfly,butterflySpeed);


const searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("input", searchCards);
}

function typeWriter(text, speed){

    const box = document.getElementById("nightfallText");

    box.innerHTML="";

    let i=0;

    const timer=setInterval(()=>{

        box.innerHTML += text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(timer);

        }

    },speed);

}

function startNightfall() {

    const intro = document.getElementById("nightfallIntro");
    intro.classList.add("active");

    const text = `How did you find me?

I was watching every search you made.

You were never supposed to type those words.

Connection Accepted...

Welcome to NIGHTFALL.`;

    typeWriter(text, 45);

    const totalTime = text.length * 45;

    setTimeout(() => {
        document.body.classList.add("glitch");
    }, totalTime + 500);

    setTimeout(() => {
    window.location.href = "nightfall.html";
}, totalTime + 2500);

}



// ================= SECRET VAULT =================

const vaultBtn = document.getElementById("vaultBtn");

console.log("vaultUnlocked =", localStorage.getItem("vaultUnlocked"));

if (vaultBtn && localStorage.getItem("vaultUnlocked") === "true") {

    setTimeout(() => {
        vaultBtn.style.display = "inline-block";
        vaultBtn.style.opacity = "0";

        setTimeout(() => {
            vaultBtn.style.opacity = "1";
        },100);

    },3000);

}

