// Game Data
const gameData = {
    fruits: [
        { emoji: '🍎', word: 'Jablko' },
        { emoji: '🍌', word: 'Banán' },
        { emoji: '🍓', word: 'Jahoda' },
        { emoji: '🍊', word: 'Pomeranč' },
        { emoji: '🍇', word: 'Hrozny' },
        { emoji: '🍉', word: 'Meloun' },
        { emoji: '🍑', word: 'Broskvička' },
        { emoji: '🍒', word: 'Třešeň' },
        { emoji: '🍐', word: 'Hruška' },
        { emoji: '🥝', word: 'Kiwi' },
        { emoji: '🍍', word: 'Ananas' },
        { emoji: '🥭', word: 'Mango' },
        { emoji: '🍋', word: 'Citrón' },
        { emoji: '🫐', word: 'Borůvka' },
        { emoji: '🍈', word: 'Meloun žlutý' },
        { emoji: '🥥', word: 'Kokos' },
        { emoji: '🫒', word: 'Olivy' },
        { emoji: '🥑', word: 'Avokádo' },
        { emoji: '🍊', word: 'Mandarinka' },
        { emoji: '🫐', word: 'Malina' },
        { emoji: '🫐', word: 'Ostružina' },
        { emoji: '🍇', word: 'Hroznové víno' }
    ],
    vegetables: [
        { emoji: '🥕', word: 'Mrkev' },
        { emoji: '🥦', word: 'Brokolice' },
        { emoji: '🥔', word: 'Brambora' },
        { emoji: '🍅', word: 'Rajče' },
        { emoji: '🥒', word: 'Okurka' },
        { emoji: '🌽', word: 'Kukuřice' },
        { emoji: '🥬', word: 'Salát' },
        { emoji: '🫑', word: 'Paprika' },
        { emoji: '🧅', word: 'Cibule' },
        { emoji: '🧄', word: 'Česnek' },
        { emoji: '🫛', word: 'Hrášek' },
        { emoji: '🫘', word: 'Fazole' },
        { emoji: '🥬', word: 'Špenát' },
        { emoji: '🥬', word: 'Zelí' },
        { emoji: '🥦', word: 'Květák' },
        { emoji: '🥒', word: 'Cuketa' },
        { emoji: '🍆', word: 'Lilek' },
        { emoji: '🫑', word: 'Ředkvička' },
        { emoji: '🫒', word: 'Řepa' },
        { emoji: '🥬', word: 'Celer' },
        { emoji: '🫒', word: 'Chřest' },
        { emoji: '🍄', word: 'Houba' },
        { emoji: '🎃', word: 'Dýně' },
        { emoji: '🌶️', word: 'Chilli' }
    ],
    farm: [
        { emoji: '🐮', word: 'Kráva' },
        { emoji: '🐷', word: 'Prase' },
        { emoji: '🐔', word: 'Slepice' },
        { emoji: '🐑', word: 'Ovce' },
        { emoji: '🐴', word: 'Kůň' },
        { emoji: '🐐', word: 'Koza' },
        { emoji: '🦆', word: 'Kachna' },
        { emoji: '🐰', word: 'Králík' },
        { emoji: '🫏', word: 'Osel' },
        { emoji: '🦃', word: 'Krocan' },
        { emoji: '🪿', word: 'Husa' },
        { emoji: '🐓', word: 'Kohout' },
        { emoji: '🐈', word: 'Kočka' },
        { emoji: '🐕', word: 'Pes' },
        { emoji: '🐭', word: 'Myš' },
        { emoji: '🐀', word: 'Potkan' },
        { emoji: '🐏', word: 'Beran' },
        { emoji: '🐄', word: 'Kráva' },
        { emoji: '🐖', word: 'Prase' },
        { emoji: '🐷', word: 'Prasátko' },
        { emoji: '🐤', word: 'Kuřátko' },
        { emoji: '🐥', word: 'Kuře' },
        { emoji: '🐣', word: 'Vejce' },
        { emoji: '🐴', word: 'Kobyla' },
        { emoji: '🐎', word: 'Kůň' },
        { emoji: '🦄', word: 'Jednorožec' },
        { emoji: '🐷', word: 'Selátko' },
        { emoji: '🐮', word: 'Tele' },
        { emoji: '🐑', word: 'Jehně' },
        { emoji: '🐐', word: 'Kůzle' }
    ],
    house: [
        { emoji: '🛋️', word: 'Gauč' },
        { emoji: '🪑', word: 'Židle' },
        { emoji: '🛏️', word: 'Postel' },
        { emoji: '🪞', word: 'Zrcadlo' },
        { emoji: '🪟', word: 'Okno' },
        { emoji: '🚪', word: 'Dveře' },
        { emoji: '💡', word: 'Světlo' },
        { emoji: '📺', word: 'Televize' }
    ],
    family: [
        { emoji: '👩', word: 'Máma' },
        { emoji: '👨', word: 'Táta' },
        { emoji: '👶', word: 'Miminko' },
        { emoji: '🧒', word: 'Dítě' },
        { emoji: '👵', word: 'Babička' },
        { emoji: '👴', word: 'Dědeček' },
        { emoji: '👧', word: 'Holčička' },
        { emoji: '👦', word: 'Chlapeček' }
    ],
    colors: [
        { emoji: '🔴', word: 'Červená' },
        { emoji: '🟢', word: 'Zelená' },
        { emoji: '🔵', word: 'Modrá' },
        { emoji: '🟡', word: 'Žlutá' },
        { emoji: '🟠', word: 'Oranžová' },
        { emoji: '🟣', word: 'Fialová' },
        { emoji: '⚫', word: 'Černá' },
        { emoji: '⚪', word: 'Bílá' }
    ],
    vehicles: [
        { emoji: '🚗', word: 'Auto' },
        { emoji: '🚲', word: 'Kolo' },
        { emoji: '🛴', word: 'Koloběžka' },
        { emoji: '🏍️', word: 'Motorka' },
        { emoji: '🚌', word: 'Autobus' },
        { emoji: '🚂', word: 'Vlak' }
    ],
    jungle: [
        { emoji: '🦁', word: 'Lev' },
        { emoji: '🐯', word: 'Tygr' },
        { emoji: '🐘', word: 'Slon' },
        { emoji: '🐵', word: 'Opice' },
        { emoji: '🦓', word: 'Zebra' },
        { emoji: '🦒', word: 'Žirafa' },
        { emoji: '🐍', word: 'Had' },
        { emoji: '🐻', word: 'Medvěd' },
        { emoji: '🦏', word: 'Nosorožec' },
        { emoji: '🦛', word: 'Hroch' },
        { emoji: '🐆', word: 'Leopard' },
        { emoji: '🦧', word: 'Orangutan' },
        { emoji: '🦍', word: 'Gorila' },
        { emoji: '🐺', word: 'Vlk' },
        { emoji: '🦊', word: 'Liška' },
        { emoji: '🐨', word: 'Koala' },
        { emoji: '🦘', word: 'Klokan' },
        { emoji: '🦬', word: 'Bizon' },
        { emoji: '🐃', word: 'Buvol' },
        { emoji: '🦣', word: 'Mamut' },
        { emoji: '🐪', word: 'Velbloud' },
        { emoji: '🦎', word: 'Ještěrka' },
        { emoji: '🐊', word: 'Krokodýl' },
        { emoji: '🦅', word: 'Orel' },
        { emoji: '🦉', word: 'Sova' },
        { emoji: '🦜', word: 'Papoušek' },
        { emoji: '🦩', word: 'Plameňák' },
        { emoji: '🦚', word: 'Páv' },
        { emoji: '🐼', word: 'Panda' },
        { emoji: '🐻‍❄️', word: 'Lední medvěd' },
        { emoji: '🦌', word: 'Jelen' },
        { emoji: '🐗', word: 'Kanec' },
        { emoji: '🦝', word: 'Mýval' },
        { emoji: '🐿️', word: 'Veverka' },
        { emoji: '🦫', word: 'Bobr' },
        { emoji: '🦨', word: 'Skunk' },
        { emoji: '🦡', word: 'Jezevec' },
        { emoji: '🐾', word: 'Tlapka' }
    ],
    body: [
        { emoji: '👤', word: 'Hlava' },
        { emoji: '👁️', word: 'Oko' },
        { emoji: '👃', word: 'Nos' },
        { emoji: '👄', word: 'Ústa' },
        { emoji: '✋', word: 'Ruka' },
        { emoji: '🦶', word: 'Noha' },
        { emoji: '👂', word: 'Ucho' },
        { emoji: '💪', word: 'Paže' }
    ],
    sea: [
        { emoji: '🦀', word: 'Krab' },
        { emoji: '🦐', word: 'Kreveta' },
        { emoji: '🦞', word: 'Humr' },
        { emoji: '🐟', word: 'Ryba' },
        { emoji: '🦈', word: 'Žralok' },
        { emoji: '🐬', word: 'Delfín' },
        { emoji: '🐳', word: 'Velryba' },
        { emoji: '🐋', word: 'Plejtvák' },
        { emoji: '🦭', word: 'Tuleň' },
        { emoji: '🐙', word: 'Chobotnice' },
        { emoji: '🦑', word: 'Krakatice' },
        { emoji: '🐡', word: 'Čtverzubec' },
        { emoji: '🐠', word: 'Rybička' },
        { emoji: '🦞', word: 'Langusta' },
        { emoji: '🐚', word: 'Mušle' },
        { emoji: '🪸', word: 'Korál' },
        { emoji: '🌊', word: 'Vlna' },
        { emoji: '🏖️', word: 'Pláž' },
        { emoji: '🐢', word: 'Želva' },
        { emoji: '🦭', word: 'Lachtan' },
        { emoji: '🦈', word: 'Žralok bílý' },
        { emoji: '🐋', word: 'Modrá velryba' },
        { emoji: '🦀', word: 'Krab poustevník' }
    ],
    toys: [
        { emoji: '🧸', word: 'Medvídek' },
        { emoji: '🎈', word: 'Balónky' },
        { emoji: '🧩', word: 'Puzzle' },
        { emoji: '🎯', word: 'Terč' },
        { emoji: '🎲', word: 'Kostky' },
        { emoji: '🪁', word: 'Drak' },
        { emoji: '🚂', word: 'Vláček' },
        { emoji: '🚗', word: 'Autíčko' },
        { emoji: '🤖', word: 'Robot' },
        { emoji: '🎪', word: 'Cirkus' },
        { emoji: '🎨', word: 'Barvy' },
        { emoji: '🎭', word: 'Maňásek' },
        { emoji: '🪀', word: 'Jojo' },
        { emoji: '🎮', word: 'Hra' },
        { emoji: '🏀', word: 'Míč' },
        { emoji: '🎾', word: 'Míček' },
        { emoji: '🪆', word: 'Panenka' },
        { emoji: '🦆', word: 'Kachnička' }
    ]
};

// Game State
let currentCategory = null;
let currentIndex = 0;
let speechSynthesis = window.speechSynthesis;

// DOM Elements
const homeScreen = document.getElementById('homeScreen');
const categoryScreen = document.getElementById('categoryScreen');
const surpriseScreen = document.getElementById('surpriseScreen');
const exploreScreen = document.getElementById('exploreScreen');
const categoryButtons = document.querySelectorAll('.category-btn');
const exitBtn = document.getElementById('exitBtn');
const surpriseExitBtn = document.getElementById('surpriseExitBtn');
const exploreExitBtn = document.getElementById('exploreExitBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const speakerBtn = document.getElementById('speakerBtn');
const itemEmoji = document.getElementById('itemEmoji');
const itemName = document.getElementById('itemName');
const surpriseBtn = document.getElementById('surpriseBtn');
const exploreBtn = document.getElementById('exploreBtn');
const mysteryBox = document.getElementById('mysteryBox');
const surpriseBoxWrapper = document.getElementById('surpriseBoxWrapper');
const surpriseReveal = document.getElementById('surpriseReveal');
const revealedEmoji = document.getElementById('revealedEmoji');
const revealedName = document.getElementById('revealedName');
const nextSurpriseBtn = document.getElementById('nextSurpriseBtn');
const confettiContainer = document.getElementById('confettiContainer');
const tapHint = document.getElementById('tapHint');
const exploreGrid = document.getElementById('exploreGrid');
const exploreZoomed = document.getElementById('exploreZoomed');
const zoomedEmoji = document.getElementById('zoomedEmoji');
const zoomedName = document.getElementById('zoomedName');
const zoomCloseBtn = document.getElementById('zoomCloseBtn');

// Initialize Speech Synthesis
function speakWord(word) {
    // Verify word is not empty first
    if (!word || word.trim() === '') {
        console.warn('Attempted to speak empty word');
        return;
    }

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    // Wait to ensure cancellation is complete
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(word.trim());
        utterance.lang = 'cs-CZ'; // Set language to Czech
        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1.1; // Slightly higher pitch (child-friendly)
        utterance.volume = 1.0;

        // Try to use a Czech voice if available
        const voices = speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice =>
            voice.lang.startsWith('cs') ||
            voice.lang.startsWith('cs-CZ')
        ) || voices.find(voice =>
            voice.lang.includes('cs')
        );

        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        // Add error handling and logging
        utterance.onstart = (event) => {
            console.log('Speaking:', word);
        };

        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event);
        };

        speechSynthesis.speak(utterance);
    }, 200);
}

// Load voices when available (some browsers need this)
let voicesLoaded = false;
function loadVoices() {
    if (voicesLoaded) return;
    voicesLoaded = true;
    // Voices are now available
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
}

// Also try to load voices immediately
if (speechSynthesis.getVoices().length > 0) {
    loadVoices();
}

// Update display with current item
function updateDisplay() {
    const items = gameData[currentCategory];
    if (!items || items.length === 0) return;
    
    const item = items[currentIndex];
    itemEmoji.textContent = item.emoji;
    itemName.textContent = item.word;
    
    // Trigger animation
    itemEmoji.style.animation = 'none';
    setTimeout(() => {
        itemEmoji.style.animation = 'bounce-in 0.6s ease-out';
    }, 10);
    
    // Auto-speak the word
    speakWord(item.word);
}

// Navigate to category
function openCategory(category) {
    currentCategory = category;
    currentIndex = 0;
    
    homeScreen.classList.remove('active');
    categoryScreen.classList.add('active');
    
    updateDisplay();
}

// Navigate to home
function goHome() {
    speechSynthesis.cancel();
    categoryScreen.classList.remove('active');
    surpriseScreen.classList.remove('active');
    exploreScreen.classList.remove('active');
    exploreZoomed.classList.remove('active');
    homeScreen.classList.add('active');
    currentCategory = null;
    currentIndex = 0;
    resetSurpriseBox();
}

// Surprise Box Functions
function getAllItems() {
    const allItems = [];
    for (const category in gameData) {
        if (gameData.hasOwnProperty(category)) {
            allItems.push(...gameData[category]);
        }
    }
    return allItems;
}

function getRandomItem() {
    const allItems = getAllItems();
    const randomIndex = Math.floor(Math.random() * allItems.length);
    return allItems[randomIndex];
}

function createConfetti() {
    const confettiEmojis = ['🎉', '🎊', '✨', '⭐', '💫', '🌟', '🎈', '🎁', '💝', '🎀'];
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 4) + 's';
        confettiContainer.appendChild(confetti);
    }
}

function unwrapBox() {
    // Cancel any pending speech first
    speechSynthesis.cancel();

    // Hide the box and hint slowly
    surpriseBoxWrapper.style.transition = 'opacity 1s ease-out';
    surpriseBoxWrapper.style.opacity = '0';

    // Get random item
    const randomItem = getRandomItem();

    // Create confetti
    createConfetti();

    // Show reveal after a longer delay
    setTimeout(() => {
        surpriseBoxWrapper.style.display = 'none';
        // Reset any inline styles on reveal
        surpriseReveal.style.opacity = '1';
        surpriseReveal.style.transition = '';
        surpriseReveal.classList.add('active');
        revealedEmoji.textContent = randomItem.emoji;
        revealedName.textContent = randomItem.word;

        // Trigger animation
        revealedEmoji.style.animation = 'none';
        setTimeout(() => {
            revealedEmoji.style.animation = 'revealPop 1.5s ease-out, emojiBounce 2s ease-in-out infinite';
        }, 10);

        // Speak the word after reveal
        setTimeout(() => {
            speakWord(randomItem.word);
        }, 1200);
    }, 1000);
}

function resetSurpriseBox() {
    surpriseBoxWrapper.style.display = 'flex';
    surpriseBoxWrapper.style.opacity = '1';
    surpriseBoxWrapper.style.transition = 'opacity 0.5s ease-in';
    surpriseReveal.classList.remove('active');
    surpriseReveal.style.opacity = '';
    surpriseReveal.style.transition = '';
    confettiContainer.innerHTML = '';
}

function openSurpriseBox() {
    // Cancel any speech when opening surprise box
    speechSynthesis.cancel();
    homeScreen.classList.remove('active');
    surpriseScreen.classList.add('active');
    resetSurpriseBox();
}

function getNextSurprise() {
    // Fade out current reveal
    surpriseReveal.style.transition = 'opacity 0.8s ease-out';
    surpriseReveal.style.opacity = '0';
    
    setTimeout(() => {
        // Get new random item
        const randomItem = getRandomItem();
        
        // Clear confetti and create new one
        confettiContainer.innerHTML = '';
        createConfetti();
        
        // Update the revealed item
        revealedEmoji.textContent = randomItem.emoji;
        revealedName.textContent = randomItem.word;
        
        // Reset animation
        revealedEmoji.style.animation = 'none';
        
        // Fade in new reveal
        surpriseReveal.style.transition = 'opacity 0.8s ease-in';
        surpriseReveal.style.opacity = '1';
        
        setTimeout(() => {
            revealedEmoji.style.animation = 'revealPop 1.5s ease-out, emojiBounce 2s ease-in-out infinite';
        }, 10);
        
        // Speak the word after reveal - use the displayed word to ensure accuracy
        setTimeout(() => {
            const displayedWord = revealedName.textContent;
            if (displayedWord && displayedWord === randomItem.word) {
                speakWord(displayedWord);
            } else {
                speakWord(randomItem.word);
            }
        }, 500);
    }, 800);
}

// Navigate to previous item
function goPrevious() {
    if (!currentCategory) return;
    
    const items = gameData[currentCategory];
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateDisplay();
}

// Navigate to next item
function goNext() {
    if (!currentCategory) return;
    
    const items = gameData[currentCategory];
    currentIndex = (currentIndex + 1) % items.length;
    updateDisplay();
}

// Event Listeners
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        if (category) {
            openCategory(category);
        }
    });
    
    // Add touch feedback
    btn.addEventListener('touchstart', () => {
        btn.style.transform = 'scale(0.95)';
    });
    
    btn.addEventListener('touchend', () => {
        btn.style.transform = '';
    });
});

exitBtn.addEventListener('click', goHome);
surpriseExitBtn.addEventListener('click', goHome);
exploreExitBtn.addEventListener('click', goHome);
prevBtn.addEventListener('click', goPrevious);
nextBtn.addEventListener('click', goNext);
speakerBtn.addEventListener('click', () => {
    if (currentCategory) {
        const items = gameData[currentCategory];
        const item = items[currentIndex];
        speakWord(item.word);
    }
});

// Surprise Box Event Listeners
surpriseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openSurpriseBox();
});

// Explore Mode Event Listeners
exploreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openExploreMode();
});

zoomCloseBtn.addEventListener('click', closeZoomedView);

// Close zoomed view when clicking on background
exploreZoomed.addEventListener('click', (e) => {
    if (e.target === exploreZoomed) {
        closeZoomedView();
    }
});

// Allow clicking on zoomed item to repeat word
zoomedEmoji.addEventListener('click', () => {
    if (exploreZoomed.classList.contains('active')) {
        const wordToSpeak = zoomedName.textContent.trim();
        if (wordToSpeak) {
            speakWord(wordToSpeak);
        }
    }
});

zoomedName.addEventListener('click', () => {
    if (exploreZoomed.classList.contains('active')) {
        const wordToSpeak = zoomedName.textContent.trim();
        if (wordToSpeak) {
            speakWord(wordToSpeak);
        }
    }
});

mysteryBox.addEventListener('click', (e) => {
    e.stopPropagation();
    unwrapBox();
});
surpriseBoxWrapper.addEventListener('click', unwrapBox);
nextSurpriseBtn.addEventListener('click', getNextSurprise);

// Explore Mode Functions
function populateExploreGrid() {
    exploreGrid.innerHTML = '';
    const allItems = getAllItems();
    
    allItems.forEach(item => {
        const emojiBtn = document.createElement('button');
        emojiBtn.className = 'explore-emoji-btn';
        emojiBtn.textContent = item.emoji;
        emojiBtn.setAttribute('data-word', item.word);
        emojiBtn.setAttribute('data-emoji', item.emoji);
        emojiBtn.setAttribute('aria-label', item.word);
        
        emojiBtn.addEventListener('click', () => {
            showZoomedItem(item.emoji, item.word);
        });
        
        exploreGrid.appendChild(emojiBtn);
    });
}

function showZoomedItem(emoji, word) {
    zoomedEmoji.textContent = emoji;
    zoomedName.textContent = word;
    exploreZoomed.classList.add('active');
    
    // Trigger animation
    zoomedEmoji.style.animation = 'none';
    setTimeout(() => {
        zoomedEmoji.style.animation = 'zoomIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), emojiBounce 2s ease-in-out infinite';
    }, 10);
    
    // Speak the word
    setTimeout(() => {
        speakWord(word);
    }, 400);
}

function closeZoomedView() {
    exploreZoomed.classList.remove('active');
    speechSynthesis.cancel();
}

function openExploreMode() {
    homeScreen.classList.remove('active');
    exploreScreen.classList.add('active');
    exploreZoomed.classList.remove('active');
    populateExploreGrid();
}

// Also allow clicking on revealed item to repeat word
revealedName.addEventListener('click', () => {
    if (surpriseReveal.classList.contains('active')) {
        // Always use the actual displayed text to ensure accuracy
        const wordToSpeak = revealedName.textContent.trim();
        if (wordToSpeak) {
            speakWord(wordToSpeak);
        }
    }
});

revealedEmoji.addEventListener('click', () => {
    if (surpriseReveal.classList.contains('active')) {
        // Always use the actual displayed text to ensure accuracy
        const wordToSpeak = revealedName.textContent.trim();
        if (wordToSpeak) {
            speakWord(wordToSpeak);
        }
    }
});

// Keyboard navigation support (for accessibility)
document.addEventListener('keydown', (e) => {
    if (categoryScreen.classList.contains('active')) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                goPrevious();
                break;
            case 'ArrowRight':
                e.preventDefault();
                goNext();
                break;
            case 'Escape':
                e.preventDefault();
                goHome();
                break;
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (currentCategory) {
                    const items = gameData[currentCategory];
                    const item = items[currentIndex];
                    speakWord(item.word);
                }
                break;
        }
    }
});

// Touch feedback for all buttons
const allButtons = document.querySelectorAll('button');
allButtons.forEach(btn => {
    btn.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.9)';
    });
    
    btn.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// Prevent context menu on long press (better for toddlers)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Initialize: ensure home screen is visible
window.addEventListener('load', () => {
    homeScreen.classList.add('active');
    categoryScreen.classList.remove('active');
});

