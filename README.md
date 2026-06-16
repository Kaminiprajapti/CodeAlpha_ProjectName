# 🌐 Language Translation Tool

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/MyMemory_API-00C853?style=for-the-badge&logo=google-translate&logoColor=white)

> **CodeAlpha Internship — Artificial Intelligence Task 1**

A web-based Language Translation Tool that allows users to translate text between multiple languages using the MyMemory Translation API. Built with HTML, CSS, and JavaScript — no backend required!

---

## 🚀 Live Demo

> Open `index.html` directly in your browser — No installation needed!

---

## ✨ Features

- 🌍 **Multi-language Support** — Translate between 8+ languages
- ⇄ **Swap Languages** — Instantly swap source and target language
- 📋 **Copy Button** — Copy translated text to clipboard
- 🔊 **Text-to-Speech** — Listen to the translated text
- 🗑️ **Clear Button** — Clear both input and output fields
- 📱 **Responsive Design** — Works on mobile and desktop
- ⚡ **Fast & Free** — Uses MyMemory API (no API key needed)

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & Layout |
| CSS3 | Styling & Animations |
| JavaScript (Vanilla) | Logic & API Calls |
| MyMemory API | Translation Engine |
| Web Speech API | Text-to-Speech Feature |

---

## 📁 Project Structure

```
CodeAlpha_ProjectName/
│
├── index.html       # Main HTML file
├── style.css        # Styling file
├── script.js        # JavaScript logic
└── README.md        # Project documentation
```

---

## 🌐 Supported Languages

| Language | Code |
|----------|------|
| English  | en |
| Hindi    | hi |
| French   | fr |
| German   | de |
| Spanish  | es |
| Chinese  | zh |
| Arabic   | ar |
| Japanese | ja |

---

## ⚙️ How to Run

### Method 1 — Direct Browser (Easiest)
```
1. Download or clone this repository
2. Open index.html in any browser
3. Done! No setup needed ✅
```

### Method 2 — Clone via Git
```bash
# Clone the repository
git clone https://github.com/your-username/CodeAlpha_ProjectName.git

# Go to project folder
cd CodeAlpha_ProjectName

# Open in browser
open index.html
```

---

## 📸 How It Works

```
User enters text
       ↓
Select Source & Target Language
       ↓
Click Translate Button
       ↓
JavaScript sends request to MyMemory API
       ↓
API returns translated text
       ↓
Result displayed on screen
       ↓
Optional: Copy or Listen to translation
```

---

## 🔗 API Used

**MyMemory Translation API** — Free, no API key required

```
Endpoint:
https://api.mymemory.translated.net/get?q={text}&langpair={source}|{target}

Example:
https://api.mymemory.translated.net/get?q=Hello&langpair=en|hi

Response:
{
  "responseData": {
    "translatedText": "नमस्ते"
  }
}
```

---

## 🎯 Key Learnings

- How to consume a **REST API** using JavaScript `fetch()`
- Working with **JSON responses**
- Using **Web Speech API** for text-to-speech
- Building a **responsive UI** with CSS
- **Async/Await** in JavaScript

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

## 🏢 Internship Details

| Detail | Info |
|--------|------|
| Company | CodeAlpha |
| Domain | Artificial Intelligence |
| Task | Task 1 — Language Translation Tool |
| Duration | As per internship timeline |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this helpful, please give it a star on GitHub!
> 
> Made with ❤️ during CodeAlpha AI Internship
