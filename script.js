const translateBtn = document.getElementById('translateBtn');
const copyBtn = document.getElementById('copyBtn');
const speakBtn = document.getElementById('speakBtn');
const clearBtn = document.getElementById('clearBtn');
const swapBtn = document.getElementById('swapBtn');

// 🌐 TRANSLATE
translateBtn.addEventListener('click', async () => {
  const text = document.getElementById('inputText').value.trim();
  const source = document.getElementById('sourceLang').value;
  const target = document.getElementById('targetLang').value;

  if (!text) {
    alert('Please enter text to translate!');
    return;
  }

  translateBtn.textContent = '⏳ Translating...';

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
    );
    const data = await response.json();
    document.getElementById('outputText').value = 
      data.responseData.translatedText;
  } catch (error) {
    alert('Translation failed! Check your internet connection.');
  }

  translateBtn.textContent = '🌐 Translate';
});

// 📋 COPY
copyBtn.addEventListener('click', () => {
  const output = document.getElementById('outputText').value;
  if (!output) { alert('Nothing to copy!'); return; }
  navigator.clipboard.writeText(output);
  alert('Copied to clipboard!');
});

// 🔊 SPEAK
speakBtn.addEventListener('click', () => {
  const output = document.getElementById('outputText').value;
  if (!output) { alert('Nothing to speak!'); return; }
  const utterance = new SpeechSynthesisUtterance(output);
  utterance.lang = document.getElementById('targetLang').value;
  window.speechSynthesis.speak(utterance);
});

// 🗑️ CLEAR
clearBtn.addEventListener('click', () => {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
});

// ⇄ SWAP LANGUAGES
swapBtn.addEventListener('click', () => {
  const src = document.getElementById('sourceLang');
  const tgt = document.getElementById('targetLang');
  const temp = src.value;
  src.value = tgt.value;
  tgt.value = temp;

  // Also swap text
  const inputText = document.getElementById('inputText');
  const outputText = document.getElementById('outputText');
  const tempText = inputText.value;
  inputText.value = outputText.value;
  outputText.value = tempText;
});