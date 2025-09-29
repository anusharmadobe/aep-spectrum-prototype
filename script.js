// AEP Spectrum Prototype - Rapid UI Prototyping Tool

class AEPPrototype {
    constructor() {
        this.screenshotInput = document.getElementById('screenshotInput');
        this.uploadBtn = document.getElementById('uploadBtn');
        this.fileInfo = document.getElementById('fileInfo');
        this.welcomeMessage = document.getElementById('welcomeMessage');
        this.prototypeMessage = document.getElementById('prototypeMessage');
        this.progressContainer = document.getElementById('progressContainer');
        this.aiTools = document.querySelectorAll('.ai-tool');
        
        this.processingSteps = [
            "Analyzing screenshot...",
            "Extracting UI components...",
            "Generating code structure...",
            "Applying AI-based styling...",
            "Optimizing for AEP Spectrum...",
            "Finalizing prototype..."
        ];
        
        this.init();
    }
    
    init() {
        this.uploadBtn.addEventListener('click', () => this.screenshotInput.click());
        this.screenshotInput.addEventListener('change', (e) => this.handleScreenshotUpload(e));
        
        // Add hover effects to AI tools
        this.aiTools.forEach(tool => {
            tool.addEventListener('mouseenter', () => this.highlightTool(tool));
            tool.addEventListener('mouseleave', () => this.unhighlightTool(tool));
        });
        
        // Add some initial animation
        this.addInitialAnimation();
    }
    
    handleScreenshotUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.displayFileInfo(file);
            this.simulatePrototypingProcess();
        }
    }
    
    displayFileInfo(file) {
        this.fileInfo.innerHTML = `
            <div class="file-details">
                <strong>📁 ${file.name}</strong><br>
                <small>Size: ${(file.size / 1024).toFixed(1)} KB</small><br>
                <small>Type: ${file.type}</small>
            </div>
        `;
        this.fileInfo.style.display = 'block';
    }
    
    simulatePrototypingProcess() {
        this.updateMessage("Processing your screenshot...", "AI is analyzing your design and generating a prototype.");
        this.showProgress();
        
        let currentStep = 0;
        const processInterval = setInterval(() => {
            if (currentStep < this.processingSteps.length) {
                this.updateProgressStep(this.processingSteps[currentStep], currentStep);
                currentStep++;
            } else {
                clearInterval(processInterval);
                this.completePrototyping();
            }
        }, 1500);
    }
    
    updateMessage(title, description) {
        this.welcomeMessage.textContent = title;
        this.prototypeMessage.querySelector('p').textContent = description;
        
        // Add processing animation
        this.prototypeCard = document.querySelector('.prototype-card');
        this.prototypeCard.classList.add('processing');
        
        setTimeout(() => {
            this.prototypeCard.classList.remove('processing');
        }, 300);
    }
    
    showProgress() {
        this.progressContainer.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>
            <div class="progress-text" id="progressText">Starting...</div>
        `;
        this.progressContainer.style.display = 'block';
    }
    
    updateProgressStep(stepText, stepIndex) {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        const progress = ((stepIndex + 1) / this.processingSteps.length) * 100;
        progressFill.style.width = progress + '%';
        progressText.textContent = stepText;
        
        // Add step animation
        this.animateStep(stepIndex);
    }
    
    animateStep(stepIndex) {
        const tool = this.aiTools[stepIndex % this.aiTools.length];
        tool.classList.add('active');
        
        setTimeout(() => {
            tool.classList.remove('active');
        }, 1000);
    }
    
    completePrototyping() {
        this.updateMessage("Prototype Generated! 🎉", "Your UI prototype is ready for fine-tuning and iteration.");
        
        // Show completion animation
        this.showCompletionAnimation();
        
        // Reset after 3 seconds
        setTimeout(() => {
            this.resetInterface();
        }, 5000);
    }
    
    showCompletionAnimation() {
        // Create success particles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createSuccessParticle();
            }, i * 100);
        }
        
        // Animate all tools
        this.aiTools.forEach((tool, index) => {
            setTimeout(() => {
                tool.classList.add('success');
            }, index * 200);
        });
    }
    
    createSuccessParticle() {
        const particle = document.createElement('div');
        particle.className = 'success-particle';
        particle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: #4CAF50;
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: successParticle 2s ease-out forwards;
        `;
        
        document.querySelector('.prototype-card').appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
    
    resetInterface() {
        this.fileInfo.style.display = 'none';
        this.progressContainer.style.display = 'none';
        this.screenshotInput.value = '';
        this.updateMessage("Ready for Next Prototype", "Upload another screenshot to continue prototyping.");
        
        // Reset tools
        this.aiTools.forEach(tool => {
            tool.classList.remove('active', 'success');
        });
    }
    
    highlightTool(tool) {
        tool.style.transform = 'scale(1.1)';
        tool.style.transition = 'transform 0.3s ease';
    }
    
    unhighlightTool(tool) {
        tool.style.transform = 'scale(1)';
    }
    
    addInitialAnimation() {
        // Add subtle floating animation to tools
        this.aiTools.forEach((tool, index) => {
            tool.style.animation = `float 3s ease-in-out infinite`;
            tool.style.animationDelay = `${index * 0.5}s`;
        });
    }
}

// Initialize the prototype tool when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AEPPrototype();
});

// Add success particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes successParticle {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);