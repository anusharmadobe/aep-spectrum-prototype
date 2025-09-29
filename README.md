# AEP Spectrum Prototype - Birthday Celebration App 🎉

A delightful interactive birthday celebration web application built with HTML5, CSS3, and vanilla JavaScript, featuring confetti animations, sound effects, and personalized messages.

## 🌟 Features

- **Interactive Birthday Card** - Personalized birthday messages
- **Confetti Animations** - Colorful confetti effects with multiple shapes
- **Sound Effects** - Happy Birthday melody using Web Audio API
- **Responsive Design** - Works on desktop and mobile devices
- **Smooth Animations** - Cake wiggle, title bounce, and sparkle effects
- **Adobe Experience Platform Integration** - Ready for AEP implementation

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anusharmadobe/aep-spectrum-prototype.git
   cd aep-spectrum-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Alternative: Direct File Access
You can also open `index.html` directly in your browser for a quick preview.

## 🎮 How to Use

1. **Enter your name** in the input field
2. **Click "Celebrate!"** or press Enter
3. **Enjoy the celebration** with confetti, animations, and music!
4. **Click anywhere** on the card for mini confetti effects

## 🛠️ Project Structure

```
aep-spectrum-prototype/
├── index.html              # Main HTML file
├── style.css              # CSS styles and animations
├── script.js              # JavaScript functionality
├── server.js              # Express.js server
├── package.json           # Node.js dependencies
├── start.sh               # Quick start script
├── .gitignore             # Git ignore rules
├── adobe-experience-platform-ia.json          # AEP integration config
├── adobe-experience-platform-ia-enhanced.json # Enhanced AEP config
├── UI-Development-Guide.md                    # Development documentation
└── README.md              # This file
```

## 🎨 Customization

### Adding New Birthday Messages
Edit the `birthdayMessages` array in `script.js`:

```javascript
this.birthdayMessages = [
    "Your custom message here!",
    "Another personalized message!",
    // Add more messages...
];
```

### Changing Confetti Colors
Modify the confetti colors in the `createConfetti()` method:

```javascript
// In script.js, line ~226
background: ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]};
```

### Customizing Animations
Edit the CSS animations in `style.css` or add new ones in the JavaScript file.

## 🔧 Development

### Available Scripts

- `npm start` - Start the development server
- `npm run dev` - Alternative start command

### Server Configuration

The Express.js server runs on port 3000 by default. You can modify the port in `server.js`:

```javascript
const PORT = process.env.PORT || 3000;
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Audio Features

The app uses the Web Audio API to play a simple Happy Birthday melody. If audio is blocked by the browser, the app will continue to work with visual effects only.

## 🎨 Adobe Experience Platform Integration

This prototype includes AEP integration files:

- `adobe-experience-platform-ia.json` - Basic AEP configuration
- `adobe-experience-platform-ia-enhanced.json` - Enhanced AEP setup

These files are ready for integration with Adobe Experience Platform for analytics and personalization.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anurag Sharma**
- Email: anusharm@adobe.com
- GitHub: [@anusharmadobe](https://github.com/anusharmadobe)

## 🙏 Acknowledgments

- Inspired by modern web animation techniques
- Built with vanilla JavaScript for optimal performance
- Designed with accessibility in mind
- Ready for Adobe Experience Platform integration

## 📞 Support

If you have any questions or need help with this project, please:

1. Check the [Issues](https://github.com/anusharmadobe/aep-spectrum-prototype/issues) page
2. Create a new issue if your question isn't answered
3. Contact the author directly

---

**Happy Coding! 🎉**

*Made with ❤️ for celebrating special moments*
