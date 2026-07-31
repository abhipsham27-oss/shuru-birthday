/* ==========================================
   FOR MY SHURU BABYY
   SCRIPT.JS
========================================== */

const loader = document.getElementById("loader");
const landing = document.getElementById("landing");

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("fade-out");

        setTimeout(() => {

            loader.style.display = "none";

            landing.classList.remove("hidden");

        },900);

    },2500);

});

const gift = document.querySelector(".gift");
const button = document.getElementById("giftButton");
const landingPage = document.getElementById("landing");
const envelopeSection = document.getElementById("envelopeSection");
const envelope = document.querySelector(".envelope");
const bgMusic = document.getElementById("bgMusic");

button.addEventListener("click", openGift);

gift.addEventListener("click", openGift);

function openGift(){

    if(gift.classList.contains("opened")) return;

    gift.classList.add("opened");

    gift.classList.add("open");

    createHearts();

    setTimeout(()=>{

        showEnvelope();

    },1800);

}

function createHearts(){

    for(let i=0;i<22;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML=Math.random()>.5?"🤍":"💗";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=
        (3+Math.random()*2)+"s";

        heart.style.fontSize=
        (18+Math.random()*18)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}

function showEnvelope(){

    landingPage.style.opacity = "0";

    landingPage.style.transition = ".8s";

    setTimeout(()=>{

        landingPage.style.display="none";

        envelopeSection.classList.add("show");

    },800);

}
const letterSection = document.getElementById("letterSection");
const letterContent = document.getElementById("letterContent");

envelope.addEventListener("click",()=>{

    document.querySelector(".envelope-flap").style.transform="rotateX(180deg)";

    document.querySelector(".envelope-letter").style.transform="translateY(-120px)";

    setTimeout(()=>{

    console.log("Envelope clicked");

    envelopeSection.classList.remove("show");

    letterSection.classList.remove("hidden");
    letterSection.classList.add("show");

    console.log(letterSection);

    startLetter();

    },1200);

});
function typeWriter(html, speed = 28) {

    letterContent.innerHTML = "";

    const temp = document.createElement("div");
    temp.innerHTML = html;

    const paragraphs = temp.querySelectorAll("p");

    let current = 0;

    function writeParagraph() {

        if (current >= paragraphs.length) return;

        const p = document.createElement("p");
        letterContent.appendChild(p);

        const text = paragraphs[current].textContent;

        let i = 0;

        function type() {

            if (i < text.length) {

                p.textContent += text.charAt(i);
                i++;

                setTimeout(type, speed);

            } else {

                current++;

                if (current < paragraphs.length) {

                    setTimeout(writeParagraph, 400);

                } else {

                    const btn = document.getElementById("nextMemoryBtn");
                    btn.classList.remove("hidden");
                    btn.classList.add("show");

                }

            }

        }

        type();

    }

    writeParagraph();

}
// ====================================
// SCRAPBOOK DATA
// ====================================

const scrapbookPages = [

{
title:"The Day I Met My Beautiful Baby 🤍",

note:"The day a random seat beside me became the safest place I'd ever know.",

photos:[

{
file:"THE DAY I MET MY BEAUTIFUL BABY.jpeg",
caption:"The first picture... the first memory... the beginning of my favourite chapter."
},

{
file:"2nd day of you in my life.jpeg",
caption:"Only been three days... and somehow it already felt like I'd known you forever."
}

]

},

{
title:"Before I Even Knew You 👶",

note:"Before I knew you, there was already a little girl growing up to become my favourite person.",

photos:[

{
file:"absolute diva since a baby.jpeg",
caption:"An absolute diva since day one."
},

{
file:"cutest baby shuru pic.jpeg",
caption:"The cutest little baby ever."
},

{
file:"my fav baby shuru pic.jpeg",
caption:"My favourite baby picture of you."
},

{
file:"cant get enough of baby shuru pics.jpeg",
caption:"I'll never get enough of baby Shuru pictures."
},

{
file:"so cute evil baby shuru look.jpeg",
caption:"Already looking mischievous. 😂"
}

]

},

{
title:"My Favourite Girl 🌸",

note:"You still don't see yourself the way I see you... and I wish you could.",

photos:[

{
file:"my cutiee.jpeg",
caption:"My cutie. Always."
},

{
file:"my fav pic of you.jpeg",
caption:"One of my favourite pictures ever."
},

{
file:"you said you didnt look good.jpeg",
caption:"You really thought you didn't look good?"
},

{
file:"shuru so cute.jpeg",
caption:"Being this adorable should honestly be illegal."
},

{
file:"shuru flowerr.jpeg",
caption:"My pretty Shirly flower. 🌸"
},

{
file:"you in my cam roll is the best.jpeg",
caption:"My gallery's favorites is filled with you."
},

{
file:"a golden retriever and a black cat.jpeg",
caption:"A golden retriever and a black cat... somehow a perfect match."
}

]

},

{
title:"One Shared Brain Cell 😂",

note:"Proof that we probably share one brain cell... and somehow it always works.",

photos:[

{
file:"goofy us.jpeg",
caption:"One unforgettable friendship."
},

{
file:"goofy us 2.jpeg",
caption:"You're so adorable when you goof around at times."
},

{
file:"goofy us 3.jpeg",
caption:"This is just so cutee."
}

],

video:"goofy us again.mp4"

},

{
title:"Our Love Language 💋",

note:"Looking back... I completely understand why everyone questioned our friendship.",

photos:[

{
file:"my fav random kisses.jpeg",
caption:"Apparently this wasn't considered 'normal best friend behaviour.'"
},

{
file:"random kisses 2.jpeg",
caption:"We never really cared what anyone thought."
},

{
file:"ok slut kiss me-.jpeg",
caption:"This video still makes me laugh every single time."
},

{
file:"no lips shuru.jpeg",
caption:"I still don't know what was happening here... but you are lip-lessly cute."
}

]

},
{
title:"Tiny Moments I'll Never Forget 🌼",

note:"Some memories aren't grand. They're just... us.",

photos:[

{
file:"watching obsession together.jpeg",
caption:"Watching everything together somehow became our thing."
},
{
file:"watching obsession together 2.jpeg",
caption:"Apparently one obsession wasn't enough. 🤍"
},

{
file:"feeding me again.jpeg",
caption:"You always made sure I was taken care of."
},

{
file:"you smiling at me even when i'm so weird.jpeg",
caption:"Thank you for smiling at me... even when I'm being the weirdest person alive."
},

{
file:"love how you always kept your head on my shoulder.jpeg",
caption:"My favourite place for your head will always be my shoulder."
},

{
file:"unconsciously holding my hand no matter what.jpeg",
caption:"You'd hold my hand without even realizing it."
},

{
file:"rare footage of you eating genuinely.jpeg",
caption:"Proof that you actually eat."
}

]

},

{
title:"My Safe Place 🤍",

note:"Every picture here reminds me how peaceful it feels to be around you.",

photos:[

{
file:"effortlessly safe and happy around you.jpeg",
caption:"You make life feel lighter."
},

{
file:"genuine pic of us.jpeg",
caption:"One of the most genuine pictures of us."
},

{
file:"us in maroons.jpeg",
caption:"Matching the vibe without trying."
},

{
file:"so cute us.jpeg",
caption:"You + me = comfort."
}

]

},

{
title:"The Little Things 💌",

note:"The tiny things you do always stay with me.",

photos:[

{
file:"i think food tasted better from your hand.jpeg",
caption:"Everything tasted better when it came from you."
},

{
file:"pampering my crying ass.jpeg",
caption:"Always taking care of me."
},

{
file:"held me back cursing that rude human.jpeg",
caption:"Stopping me from committing crimes."
},

{
file:"smilies.jpeg",
caption:"Your smile fixes everything."
}

]

},
,

{
title:"Our Adventures Together 🎵",

note:"Some days became unforgettable simply because you were there.",

photos:[

{
file:"our first concert together.jpeg",
caption:"Our first concert together... definitely not our last."
},

{
file:"trying our first reel together.jpeg",
caption:"Our very first reel together."
},

{
file:"love how we always sync.jpeg",
caption:"We somehow always end up doing the same thing."
},

{
file:"sync again.jpeg",
caption:"Even when we don't try... we're in sync."
}

],

video:"my fav.mp4"

},

{
title:"Sleepyhead 🤍",

note:"You're the cutest when you're sleepy... and I'll never stop teasing you for it.",

photos:[

{
file:"2 sleepyheads.jpeg",
caption:"Two sleepyheads pretending we weren't tired."
},

{
file:"another fav pic of my sleepyhead.jpeg",
caption:"One of my favourite sleepy Shuru pictures."
},

{
file:"love how your bonehead ass made you laugh.jpeg",
caption:"You laugh at the dumbest things... and I love that."
},

{
file:"couldnt even get one good pic on our first photobooth.jpeg",
caption:"Not a single normal picture... exactly how it should be."
}

]

},

{
title:"Certified Soulmates 😂",

note:"We genuinely share one brain cell at times.",

photos:[

{
file:"random.jpeg",
caption:"Randomly but still pretty."
},

{
file:"random 2.jpeg",
caption:"I can't just stop admiring you."
},

{
file:"i love to make you laugh.jpeg",
caption:"Making you laugh will always be my favourite hobby."
},

{
file:"two opposite personalities.jpeg",
caption:"Complete opposites... somehow perfect."
},
{
file:"goofy us 5.jpeg",
caption:"We're never beating the weird allegations."
},

{
file:"goofy us 6.jpeg",
caption:"Two idiots. Infinite memories."
},

{
file:"weird together.jpeg",
caption:"Normal was never really our thing."
},

{
file:"goofy syncing.jpeg",
caption:"Even our stupidity is synchronized."
}

],

video:"goofy us again.mp4"

},

{
title:"Days I'll Never Forget 🤍",

note:"Some days became unforgettable simply because they happened with you.",

photos:[

{
file:"fav day together.jpeg",
caption:"One of my favourite days ever."
},

{
file:"nice pic of us.jpeg",
caption:"A picture I'll never get tired of."
},

{
file:"we are meant for each other.jpeg",
caption:"I really think life knew what it was doing when it made us meet."
},

{
file:"you trusted me to cut ur hair.jpeg",
caption:"I still can't believe you trusted me with your hair 😂"
}

],

videos:[

{
file:"another one of my fav days with you.mp4",
caption:"A day I'll always remember."
}

]

},

{
title:"The Things I Secretly Love About You 🤍",

note:"These are the little moments you probably don't even remember... but I always will.",

photos:[

{
file:"love how you kept our first photobooth strip.jpeg",
caption:"Our very first photobooth strip in your phonecase. I'll never forget that, makes me the most happiest everytime i see it."
},

{
file:"my fav pic of us.jpeg",
caption:"One of my favourite pictures of us ever."
},

{
file:"so proud that you my bsf.jpeg",
caption:"I'll always be proud to call you my best friend."
},

{
file:"me your baby.jpeg",
caption:"Forever your baby."
}

],

video:"me your baby.mp4"

},

{
title:"The Softest Version Of Us ☁️",

note:"Home isn't a place anymore. It's wherever you are.",

photos:[

{
file:"my fav random kisses.jpeg",
caption:"Every random little kiss meant the world."
},

{
file:"random kisses 2.jpeg",
caption:"One more because one could never be enough."
},

{
file:"watching obsession together.jpeg",
caption:"I'd watch anything if it meant spending time with you."
},

{
file:"love how we always sync.jpeg",
caption:"Our favourite coincidence—always syncing."
}

],

video:"you scolding me.mp4"

},

{
title:"Until We Make More Memories... 🤍",

note:"This scrapbook isn't the end. It's just the beginning of all the memories we're still going to make together.",

photos:[

{
file:"my fav pic of you.jpeg",
caption:"The girl I'll always admire."
},

{
file:"my cutiee.jpeg",
caption:"My favourite smile."
},

{
file:"THE DAY I MET MY BEAUTIFUL BABY.jpeg",
caption:"The picture that started everything."
},

{
file:"us in maroons.jpeg",
caption:"No matter where life takes us... it'll always be you."
},

{
    file:"the most precious thing you did.jpeg",
    caption:"The most precious thing. I'll cherish forever. 🤍"
}

],
videos:[

{
file:"i feel so happy with you.mp4",
caption:"I don't think any caption could explain how much this means to me."
}

],

endButton:true

}
];
function startLetter(){

const letter = `

<div id="musicPlayer" style="text-align:center; margin-bottom:25px;">
    <audio controls autoplay loop>
        <source src="music/our-song.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <p style="font-size:14px; color:#8b5e6b; margin-top:8px;">
        🎵 Press play if it doesn't start automatically.
    </p>
</div>

<p>Happy 19th Birthday My babyy!! 🤍</p>

<p>I don't even know where to begin because no matter how much I write, it'll never be enough to tell you how much you mean to me.</p>

<p>It's crazy to think that all of this started on the very first day of our first semester. You walked into class wearing that green full-sleeve top with blue jeans, sat beside me, smiled at me, and somehow changed my entire college life without either of us knowing it. I still remember thinking how unbelievably gorgeous you looked. Your beautiful black hair, your pretty doe eyes, and that smile... I genuinely don't think I've ever forgotten that moment.</p>

<p>If someone had told me that the girl who randomly sat beside me would become my safest place, I would've laughed.</p>

<p>But here we are. One whole year later. A whole year of laughter, crying, drama, stupid fights, late conversations, hugs, chaos, assignments, stress, happiness, and memories that I'll carry forever.</p>

<p>When I think about my favourite memory with you, I can't choose just one.</p>

<p>My favourite memory is every little moment that made us *us*.</p>

<p>It's every time you've laughed at my terrible jokes, every time you've laughed at my clumsiness instead of making me feel embarrassed. Every warm hug that somehow fixed everything without you saying a single word. Every time you held me back before i could curse and break someone's bones, before i could create a mess..but did you notice i actually reacted without thought most of the times for you, i can never tolerate anyone who disrespects you but you so kind you calmly let things go, i can never be as good as you. Every time you kissed me... or made everyone around us question our friendship because we thought it was funny. Every single time you reached for my hand without even thinking. Whether we were in a crowd or simply walking somewhere, you always held my hand as if your first instinct was to make sure I was safe. You probably don't even realize you do it, but I do. And I love it. Those little things might seem ordinary to you, but to me, they're everything.</p>

<p>They're the moments that make me feel the safest, the most loved, and the most cared for. They're the memories I replay in my head whenever life gets a little too heavy, because somehow, every tiny thing you do has a way of making the world feel softer.</p>

<p>You've always treated me like your baby, not just because you call me "my baby" but because you actually take care of me like one.</p>

<p>You know how difficult my relationship with food is, yet you've never once given up on me. You make sure I eat, you scold me when I'm stubborn, and honestly... I can't even remember the last time I ate with my own hands when I was with you because somehow you're always feeding me before I even think about it.</p>

<p>You love me in the quietest, most natural ways. The kind of love that doesn't ask for attention, The kind that simply shows up every single day. You became my safe place without ever trying to be one, Home was never a place, It was always you.</p>

<p>There was one day that hurt me more than I can explain. We were blamed for something that was never your fault. Watching you get scolded because of me, watching tears roll down your face while I couldn't do anything to stop them... I don't think I'll ever forget that feeling. My heart broke because someone who has only ever tried to help me was made to feel like she was doing the opposite. You have never dragged me down.. You've only ever tried to lift me up. Even now, you still believe in me more than I believe in myself. You still encourage me, push me to do better, celebrate every tiny achievement, and never stop reminding me that I can do it. I know I haven't always been able to prove your faith in me through my grades, but please know this.. Every little improvement I try to make carries a piece of your encouragement with it.</p>

<p>There's something else I've carried with me that I've always wished I could put into words.</p>

<p>We weren't always perfect, were we?</p>

<p>My jealousy, my possessiveness, my overthinking... they led us into some of our biggest fights. There were times I was so consumed by my own hurt that I ended up making you feel like you were the reason for it. I kept blaming you when, in reality, you were only ever trying to love me the best way you knew how. I know there were moments when you genuinely believed you weren't a good friend because of me, that thought breaks my heart. What hurt even more was watching people misunderstand you. They saw me crying because I'm expressive, but they never saw the way you were hurting too. They didn't see the guilt you carried, the tears you cried when no one was paying attention, or how much you questioned yourself. Somehow, the person who loved me the most ended up feeling like she had failed me. You never failed me.. If anything, I failed to see how much my words could hurt the person who has always protected me the most. We even tried staying away from each other because we thought maybe it would hurt less but it didn't, it only made me realize how empty my days felt without you beside me.</p>

<p>Thank you for forgiving me. Thank you for choosing to stay even after all the times I made it difficult.</p>

<p>And I'm sorry.. Not because I think those words can erase the past, but because you deserved so much better from me, and I hope that every day after those moments has shown you just how grateful I am that you never gave up on us.</p>

<p>I honestly don't know what I did to deserve someone like you.. You're beautiful. You're intelligent. You're kind. You're patient. You're caring. You're loving. You're the type of person who would sacrifice your own happiness just to make someone else smile, and while that's one of the many reasons I admire you... It's also my biggest wish for you, I hope this year you start choosing yourself too, I hope you learn to love yourself the way everyone who loves you already does. I wish you could see yourself through my eyes, because then you'd finally understand just how unbelievably beautiful you are—your smile, your kindness, you and your soul. Maybe then you'd realize what everyone who loves you already knows.</p>

<p>I know you'll do incredible things in life. Not because you're smart enough to but because your heart is one of the purest hearts I've ever known.</p>

<p>Also...</p>

<p>No matter how much you compare me to Nikki... I still think it's funny, Maybe I really am your Nikki (Okay, maybe equally dramatic).</p>

<p>Thank you for putting up with my jealousy, my overthinking, my mood swings, my endless nonsense, and every version of me you've met this past year. Thank you for loving me through all of it. Thank you for making college feel like home. Thank you for becoming my home.</p>

<p>Sometimes I still look at you and wonder how I got so lucky. You're so beautiful, so smart, so caring, and somehow, out of everyone in this world, I get to call you my best friend. That will always be one of the greatest blessings of my life.</p>

<p>I don't really have one perfect sentence to end this letter because you already know everything I could ever say.</p>

<p>So instead...</p>

<p>If I could ask you for one thing... I'd ask you to hold me the way you always do. Like I'm your baby. Because that's where I've always felt the safest.</p>

<p>Happy 19th Birthday Babyy.</p>

<p>Thank you for existing.</p>

<p>Thank you for finding me on the very first day of college.</p>

<p>If I had to relive my first year of college all over again... I'd still choose the seat beside you.</p>

<p>I love you more than words could ever explain.</p>

<p>Always and forever,</p>

<p>Your baby. 🤍</p>

`;

typeWriter(letter,25);

}
// ====================================
// LETTER → SCRAPBOOK
// ====================================

const nextBtn = document.getElementById("nextMemoryBtn");

nextBtn.addEventListener("click", () => {

    letterSection.classList.remove("show");
    letterSection.classList.add("hidden");

    const scrapbook = document.getElementById("scrapbookSection");

    scrapbook.classList.remove("hidden");
    scrapbook.classList.add("show");

    createScrapbook();
    bgMusic.volume = 0;

bgMusic.play().catch(() => {});

let volume = 0;

const fadeMusic = setInterval(() => {

    volume += 0.02;

    if (volume >= 0.18) {

        volume = 0.18;

        clearInterval(fadeMusic);

    }

    bgMusic.volume = volume;

}, 200);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


function createScrapbook() {

    const container = document.getElementById("scrapbookPages");
    container.innerHTML = "";

    scrapbookPages.forEach(page => {

        const memory = document.createElement("div");
        memory.className = "memory-page";

        let html = `
            <h2 class="memory-title">${page.title}</h2>
            <p class="memory-note">${page.note}</p>
            <div class="photo-grid">
        `;

        // Photos
        if (page.photos) {

            page.photos.forEach(photo => {

                html += `
                    <div class="polaroid">
                        <img src="images/${photo.file}" alt="">
                        <p>${photo.caption}</p>
                    </div>
                `;

            });

        }

        // Videos
        if (page.videos) {

            page.videos.forEach(video => {

                html += `
                    <div class="polaroid">
                        <video controls preload="metadata">
                            <source src="videos/${video.file}" type="video/mp4">
                        </video>
                        <p>${video.caption}</p>
                    </div>
                `;

            });

        }

        html += `</div>`;

        // 👇 Add the celebration button ONLY on the last page
        if(page.endButton){

            html += `
                <div style="text-align:center;margin-top:60px;">
                    <button class="next-btn" onclick="openBirthdayPage()">
                        Celebrate Your Birthday 🎉
                    </button>
                </div>
            `;

        }
        console.log(page.title, page.endButton);

        memory.innerHTML = html;

        container.appendChild(memory);

    });

}
function celebrateBirthday(){
    const finalLetter = document.getElementById("finalLetterContent");

    // Fade music
    const fade = setInterval(() => {

        if(bgMusic.volume > 0.02){

            bgMusic.volume -= 0.02;

        }else{

            bgMusic.pause();
            clearInterval(fade);

        }

    },150);

    // Confetti
    confetti({
        particleCount:250,
        spread:150,
        origin:{ y:0.6 }
    });
    document.getElementById("finalLetterSection").classList.remove("hidden");
    document.getElementById("finalLetterSection").classList.add("show");

    setTimeout(()=>{

        finalLetter.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:#fffaf5;
padding:40px;
text-align:center;
font-family:'Poppins',sans-serif;
">

<h1 style="
font-family:'Great Vibes',cursive;
font-size:80px;
color:#9b6a6c;
margin-bottom:25px;
">

Happy 19th Birthday
My Beautiful Shuru 🤍

</h1>

<p style="
max-width:800px;
font-size:23px;
line-height:2;
color:#6b4c4c;
">

If this little website made you smile even once...

then it has done its job.

Thank you for giving me memories
I'll treasure forever.

Thank you for being my safest place.

Thank you for simply existing.

I hope your 19th year is filled with
all the happiness you deserve.

I love you endlessly.

🤍

<br><br>

— Your baby

</p>

<div style="
margin-top:50px;
font-size:18px;
color:#b48d8d;
">

Made with all my love,
just for you.

🌸

</div>

`;

    },2500);

}
function openBirthdayPage(){

    document.getElementById("scrapbookSection").classList.remove("show");
    document.getElementById("scrapbookSection").style.display="none";

    const birthday=document.getElementById("birthdaySection");

    birthday.classList.remove("hidden");
    birthday.classList.add("show");

}
const wishBtn = document.getElementById("wishBtn");

wishBtn.addEventListener("click", () => {

    document.getElementById("birthdaySection").classList.add("hidden");

    document.getElementById("friendsVideoSection").classList.remove("hidden");
    document.getElementById("friendsVideoSection").classList.add("show");

    document.getElementById("friendsVideo").play().catch(() => {});

});

const endBtn = document.getElementById("endBtn");

endBtn.addEventListener("click", () => {
    console.log("END BUTTON CLICKED");

    document.getElementById("preciousSection").classList.remove("show");
    document.getElementById("preciousSection").classList.add("hidden");

    document.getElementById("finalLetterSection").classList.remove("hidden");
    document.getElementById("finalLetterSection").classList.add("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const finishBtn = document.getElementById("finishBtn");

finishBtn.addEventListener("click", () => {
    document.getElementById("friendsVideoSection").classList.remove("show");
    document.getElementById("friendsVideoSection").classList.add("hidden");

    const precious = document.getElementById("preciousSection");

    precious.classList.remove("hidden");
    precious.classList.add("show");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
