const input = document.getElementById("inputText");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

input.addEventListener("input", updateCount);

function updateCount() {
  const text = input.value.trim();
  charCount.textContent = text.length;
  wordCount.textContent = text === "" ? 0 : text.split(/\s+/).length;
}

function toUpper() {
  input.value = input.value.toUpperCase();
  updateCount();
}

function toLower() {
  input.value = input.value.toLowerCase();
  updateCount();
}

function toCapitalize() {
  const text = input.value.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  input.value = text;
  updateCount();
}

function toSentence() {
  const sentences = input.value
    .toLowerCase()
    .split(/([.?!]\s*)/g)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1));
  input.value = sentences.join("");
  updateCount();
}

function copyText() {
  input.select();
  document.execCommand("copy");
  alert("Teks disalin ke clipboard!");
}
