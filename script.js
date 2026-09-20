// =====================================================
// SUPABASE
// =====================================================

const SUPABASE_URL =
    "https://dbnfpaidubmubodztbwg.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_AM5nnqCQoaX-yZh-XzqKEA_4SNdXyu1";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

// =====================================================
// ELEMENT
// =====================================================

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const againBtn = document.getElementById("againBtn");

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

const letter = document.getElementById("letter");
const question = document.getElementById("question");
const ending = document.getElementById("ending");

const typing = document.getElementById("typing");
const endingText = document.getElementById("endingText");

const userMessage =
    document.getElementById("userMessage");

const sendMessage =
    document.getElementById("sendMessage");

const sendStatus =
    document.getElementById("sendStatus");

    sendStatus.textContent =
    "Pesan lu sudah terkirim ♡";
    

const messagesList =
    document.getElementById("messagesList");

// =====================================================
// PESAN
// =====================================================

const message = `Jujur gua malu mau ngomong, gua mau beraniin diri ke lu bina.

Mungkin ini kedengerannya agak cringe agak goblok ya,
tapi akhir-akhir ini gua sering ngerasa
kalau lu suka lihat ke arah gua.

Terus setiap gua lihat balik,
lu malah suka buang muka.

Awalnya gua kira cuma kebetulan.

Tapi kok makin sering ya? 😭

Makanya gua jadi penasaran.

Gua nggak tahu ini cuma perasaan gua aja
atau emang ada sesuatu.

Daripada gua terus-terusan nebak sendiri...

Gua akhirnya memberanikan diri buat nanya langsung.

yang waktu gua cf in lu yang postingan nya yang gua pake lekbong lu ko sukai postingan gua?

jujur kaget,jujur kaget gua..kirain gua ga di sukain anjrit

Jujur ya...

Lu suka sama gua, kan? ♡`;

// =====================================================
// STATE
// =====================================================

let typingTimer = null;
let typingIndex = 0;
let isTyping = false;
let musicStarted = false;

// =====================================================
// HELPER SHOW
// =====================================================

function show(element) {
if (!element) return;


element.classList.remove("hidden");

requestAnimationFrame(() => {
    setTimeout(() => {
        element.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});


}

// =====================================================
// TYPING EFFECT
// =====================================================

function typeText(text, speed = 25) {
if (!typing) return;


clearInterval(typingTimer);

typing.textContent = "";
typingIndex = 0;
isTyping = true;

typingTimer = setInterval(() => {

    if (typingIndex >= text.length) {

        clearInterval(typingTimer);
        typingTimer = null;
        isTyping = false;

        addTypingCursor(false);

        return;
    }

    typing.textContent += text.charAt(typingIndex);

    typingIndex++;

    // Scroll kecil kalau layar HP
    if (window.innerWidth <= 600 && typingIndex % 30 === 0) {
        typing.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }

}, speed);

addTypingCursor(true);


}

// =====================================================
// TYPING CURSOR
// =====================================================

function addTypingCursor(active) {


if (!typing) return;

if (active) {
    typing.style.borderRight = "2px solid rgba(244,91,145,.45)";
    typing.style.paddingRight = "5px";
} else {
    typing.style.borderRight = "0";
    typing.style.paddingRight = "0";
}


}

// =====================================================
// MUSIC
// =====================================================

function setMusicButton(playing) {


if (!musicBtn) return;

musicBtn.classList.toggle("playing", playing);

musicBtn.textContent = playing
    ? "🔊"
    : "♫";

musicBtn.setAttribute(
    "aria-label",
    playing
        ? "Matikan musik"
        : "Nyalakan musik"
);


}

function playMusic() {
if (!music) return;


music.volume = 0.55;

music.currentTime = 84; // 1:24

music.play()
    .then(() => {
        musicStarted = true;
        setMusicButton(true);
    })
    .catch(() => {
        setMusicButton(false);
    });


}

function pauseMusic() {


if (!music) return;

music.pause();

setMusicButton(false);


}

// =====================================================
// START
// =====================================================

startBtn?.addEventListener("click", () => {


// Efek tombol
buttonClickEffect(startBtn);

// Tampilkan surat
show(letter);

// Mulai typing
setTimeout(() => {
    typeText(message, 25);
}, 450);

// Mulai musik setelah interaksi user
setTimeout(() => {
    playMusic();
}, 300);

// Burst kecil
setTimeout(() => {
    burstHearts(8);
}, 350);


});

// =====================================================
// CONTINUE
// =====================================================

continueBtn?.addEventListener("click", () => {


buttonClickEffect(continueBtn);

// Kalau typing masih jalan,
// langsung selesaikan teks
if (isTyping) {
    finishTyping();
}

setTimeout(() => {
    show(question);
}, 200);

setTimeout(() => {
    burstHearts(10);
}, 500);


});

// =====================================================
// FINISH TYPING
// =====================================================

function finishTyping() {


if (!typing) return;

clearInterval(typingTimer);

typing.textContent = message;

typingIndex = message.length;

typingTimer = null;
isTyping = false;

addTypingCursor(false);


}

// =====================================================
// JAWABAN YES
// =====================================================

yesBtn?.addEventListener("click", () => {


buttonClickEffect(yesBtn);

endingText.textContent =


`Hehe... gua udah agak curiga sih.

Soalnya tiap kali kita nggak sengaja saling lihat,
lu selalu buru-buru buang muka.

Tapi sekarang gua udah tahu jawabannya.

Kalau emang lu suka sama gua...

yaudah, jangan cuma saling lihat dari jauh terus.

Coba mulai ngobrol sama gua.

Siapa tahu setelah ini
kita malah jadi lebih sering ngobrol. ♡`;


setTimeout(() => {
    show(ending);
}, 180);

setTimeout(() => {
    burstHearts(35);
}, 550);

setTimeout(() => {
    createSparkles();
}, 700);


});

// =====================================================
// JAWABAN MAYBE
// =====================================================

maybeBtn?.addEventListener("click", () => {


buttonClickEffect(maybeBtn);

endingText.textContent =


`Wkwk... nggak apa-apa.

Gua cuma penasaran aja
sama apa yang sebenarnya lu rasain.

Kalau lu belum mau jawab sekarang,
nggak usah dipaksain.

Setidaknya sekarang
gua udah berani nanya langsung.

Tapi jujur...

gua bakal tetap penasaran sih 😭♡`;


setTimeout(() => {
    show(ending);
}, 180);

setTimeout(() => {
    burstHearts(20);
}, 500);


});

// =====================================================
// RESET / LIHAT LAGI
// =====================================================

againBtn?.addEventListener("click", () => {


buttonClickEffect(againBtn);

clearInterval(typingTimer);

typingTimer = null;
typingIndex = 0;
isTyping = false;

if (typing) {
    typing.textContent = "";
    typing.style.borderRight = "0";
}

if (endingText) {
    endingText.textContent = "";
}

// Sembunyikan halaman berikutnya
letter?.classList.add("hidden");
question?.classList.add("hidden");
ending?.classList.add("hidden");

// Balik ke atas
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

// Musik tetap berjalan
setTimeout(() => {
    if (music && music.paused && musicStarted) {
        playMusic();
    }
}, 700);


});

// =====================================================
// MUSIC BUTTON
// =====================================================

musicBtn?.addEventListener("click", () => {


if (!music) return;

if (music.paused) {
    playMusic();
} else {
    pauseMusic();
}


});

// =====================================================
// BUTTON CLICK EFFECT
// =====================================================

function buttonClickEffect(button) {


if (!button) return;

button.animate(
    [
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(.94)"
        },
        {
            transform: "scale(1.03)"
        },
        {
            transform: "scale(1)"
        }
    ],
    {
        duration: 260,
        easing: "cubic-bezier(.2,.8,.2,1)"
    }
);


}

// =====================================================
// FLOATING HEART
// =====================================================

function makeHeart() {


const container =
    document.querySelector(".hearts");

if (!container) return;

const heart =
    document.createElement("span");

heart.className = "heart-float";

const symbols = [
    "♥",
    "♡",
    "✦",
    "✧",
    "·"
];

heart.textContent =
    symbols[
        Math.floor(
            Math.random() * symbols.length
        )
    ];

heart.style.left =
    Math.random() * 100 + "vw";

heart.style.animationDuration =
    6 + Math.random() * 5 + "s";

heart.style.fontSize =
    10 + Math.random() * 17 + "px";

heart.style.opacity =
    0.25 + Math.random() * 0.4;

container.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 12000);


}

// =====================================================
// HEART BURST
// =====================================================

function burstHearts(amount = 20) {


for (let i = 0; i < amount; i++) {

    setTimeout(() => {

        makeHeart();

    }, i * 55);
}


}

// =====================================================
// SPARKLES
// =====================================================

function createSparkles() {


const container =
    document.querySelector(".hearts");

if (!container) return;

for (let i = 0; i < 18; i++) {

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "heart-float";

    sparkle.textContent =
        Math.random() > 0.5
            ? "✦"
            : "✧";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.fontSize =
        8 + Math.random() * 12 + "px";

    sparkle.style.color =
        Math.random() > 0.5
            ? "rgba(244,91,145,.55)"
            : "rgba(154,130,232,.5)";

    sparkle.style.animationDuration =
        3 + Math.random() * 3 + "s";

    container.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 7000);
}


}

// =====================================================
// BACKGROUND HEART LOOP
// =====================================================

let heartInterval =
setInterval(() => {


    // Jangan terlalu banyak heart
    if (
        document.querySelectorAll(
            ".heart-float"
        ).length < 18
    ) {
        makeHeart();
    }

}, 1100);


// =====================================================
// KEYBOARD SUPPORT
// =====================================================

document.addEventListener("keydown", (event) => {


// Enter / Space untuk buka
if (
    event.key === "Enter" &&
    document.activeElement === startBtn
) {
    startBtn.click();
}

// M untuk musik
if (
    event.key.toLowerCase() === "m"
) {
    if (musicBtn) {
        musicBtn.click();
    }
}


});

// =====================================================
// PAGE LOAD
// =====================================================

window.addEventListener("load", () => {


setMusicButton(false);

// Heart awal sedikit saja
setTimeout(() => {
    burstHearts(5);
}, 800);


});

// =====================================================
// VISIBILITY
// Kalau pindah tab, musik tetap aman.
// =====================================================

document.addEventListener(
"visibilitychange",
() => {


    if (
        document.hidden &&
        music &&
        !music.paused
    ) {
        // Jangan pause otomatis,
        // browser yang menentukan behaviour.
    }
}


);

// =====================================================
// KIRIM PESAN KE SUPABASE
// =====================================================

sendMessage?.addEventListener("click", async () => {

    const pesan = userMessage?.value.trim();

    if (!pesan) {
        sendStatus.textContent = "Tulis pesannya dulu ya.";
        return;
    }

    sendMessage.disabled = true;
    sendMessage.innerHTML = "Mengirim...";
    sendStatus.textContent = "";

    try {
        const { error } = await supabaseClient
            .from("messages")
            .insert({ message: pesan });

        if (error) throw error;

        userMessage.value = "";
        sendStatus.textContent = "Pesan lu sudah terkirim ♡";
    } catch (error) {
        console.error("SUPABASE ERROR:", error);
        sendStatus.textContent = "Pesan gagal dikirim. Coba lagi.";
    } finally {
        sendMessage.disabled = false;
        sendMessage.innerHTML = 'Kirim pesan <span>→</span>';
    }
});

// =====================================================
// TAMPILKAN SEMUA PESAN
// =====================================================

async function loadMessages() {

    if (!messagesList) return;

    const { data, error } = await supabaseClient
        .from("messages")
        .select("message, created_at")
        .order("created_at", {
            ascending: false
        });

    if (error) {
        console.error("LOAD MESSAGE ERROR:", error);
        return;
    }

    messagesList.innerHTML = "";

    data.forEach((item) => {

        const card = document.createElement("div");
        card.className = "message-card";

        const message = document.createElement("p");
        message.textContent = item.message;

        const time = document.createElement("span");
        
        time.textContent =
            new Date(item.created_at)
                .toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short"
                });

        card.appendChild(message);
        card.appendChild(time);

        messagesList.appendChild(card);
    });
}


// =====================================================
// LOAD PESAN SAAT WEBSITE DIBUKA
// =====================================================

loadMessages();