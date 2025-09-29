// Birthday Celebration App JavaScript

class BirthdayApp {
    constructor() {
        this.nameInput = document.getElementById('nameInput');
        this.celebrateBtn = document.getElementById('celebrateBtn');
        this.personalMessage = document.getElementById('personalMessage');
        this.birthdayMessage = document.getElementById('birthdayMessage');
        this.confettiContainer = document.getElementById('confettiContainer');
        this.cake = document.querySelector('.cake');
        
        this.birthdayMessages = [
            "Hope your special day brings you lots of happiness, love, and fun!",
            "Wishing you a day filled with happiness and a year filled with joy!",
            "May your birthday be filled with laughter, love, and all your favorite things!",
            "Here's to another year of amazing adventures and wonderful memories!",
            "Sending you smiles for every moment of your special day!",
            "Hope your birthday is as wonderful and special as you are!",
            "May all your dreams and wishes come true on your birthday!",
            "Wishing you health, happiness, and prosperity in the year ahead!"
        ];
        
        this.init();
    }
    
    init() {
        this.celebrateBtn.addEventListener('click', () => this.celebrate());
        this.nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.celebrate();
            }
        });
        
        // Add some initial sparkle
        this.addSparkleEffect();
    }
    
    celebrate() {
        const name = this.nameInput.value.trim();
        
        if (name) {
            this.updateMessage(name);
            this.createConfetti();
            this.playCelebrationAnimation();
            this.playBirthdaySound();
            this.nameInput.value = '';
        } else {
            this.showAlert();
        }
    }
    
    updateMessage(name) {
        const randomMessage = this.birthdayMessages[Math.floor(Math.random() * this.birthdayMessages.length)];
        this.personalMessage.textContent = `Happy Birthday, ${name}! 🎉`;
        this.birthdayMessage.querySelector('p').textContent = randomMessage;
        
        // Add celebration class for animation
        this.birthdayCard = document.querySelector('.birthday-card');
        this.birthdayCard.classList.add('celebration');
        
        setTimeout(() => {
            this.birthdayCard.classList.remove('celebration');
        }, 600);
    }
    
    createConfetti() {
        // Clear existing confetti
        this.confettiContainer.innerHTML = '';
        
        // Create confetti pieces
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                // Random shapes
                const shapes = ['circle', 'square', 'triangle'];
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                
                if (shape === 'circle') {
                    confetti.style.borderRadius = '50%';
                } else if (shape === 'triangle') {
                    confetti.style.width = '0';
                    confetti.style.height = '0';
                    confetti.style.borderLeft = '5px solid transparent';
                    confetti.style.borderRight = '5px solid transparent';
                    confetti.style.borderBottom = '10px solid ' + confetti.style.background;
                    confetti.style.background = 'transparent';
                }
                
                this.confettiContainer.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }, i * 50);
        }
    }
    
    playCelebrationAnimation() {
        // Cake animation
        this.cake.style.animation = 'none';
        setTimeout(() => {
            this.cake.style.animation = 'wiggle 0.5s ease-in-out 3';
        }, 10);
        
        // Title bounce
        const title = document.querySelector('.birthday-title');
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'bounce 0.6s ease-in-out 3';
        }, 10);
    }
    
    playBirthdaySound() {
        // Create a simple beep sound using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Play a happy birthday melody
            const notes = [523.25, 523.25, 659.25, 523.25, 783.99, 698.46]; // C, C, E, C, G, F
            let currentNote = 0;
            
            const playNote = () => {
                if (currentNote < notes.length) {
                    oscillator.frequency.setValueAtTime(notes[currentNote], audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                    
                    currentNote++;
                    setTimeout(playNote, 300);
                } else {
                    oscillator.stop();
                }
            };
            
            oscillator.start();
            playNote();
        } catch (error) {
            console.log('Audio not supported or blocked by browser');
        }
    }
    
    showAlert() {
        // Create a temporary alert message
        const alert = document.createElement('div');
        alert.textContent = 'Please enter your name first!';
        alert.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff6b6b;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            z-index: 1000;
            animation: fadeInUp 0.5s ease;
        `;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
    
    addSparkleEffect() {
        // Add some sparkles around the cake
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #FFD700;
                border-radius: 50%;
                animation: sparkle 2s ease-in-out infinite;
                animation-delay: ${i * 0.3}s;
            `;
            
            const angle = (i * 60) * Math.PI / 180;
            const radius = 80;
            sparkle.style.left = (50 + Math.cos(angle) * radius) + 'px';
            sparkle.style.top = (50 + Math.sin(angle) * radius) + 'px';
            
            this.cake.appendChild(sparkle);
        }
        
        // Add sparkle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sparkle {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new BirthdayApp();
});

// Add some extra fun - click anywhere to create mini confetti
document.addEventListener('click', (e) => {
    if (e.target.closest('.birthday-card')) {
        const miniConfetti = document.createElement('div');
        miniConfetti.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]};
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: miniConfetti 1s ease-out forwards;
        `;
        
        document.body.appendChild(miniConfetti);
        
        setTimeout(() => {
            miniConfetti.remove();
        }, 1000);
    }
});

// Add mini confetti animation
const miniStyle = document.createElement('style');
miniStyle.textContent = `
    @keyframes miniConfetti {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(miniStyle);
