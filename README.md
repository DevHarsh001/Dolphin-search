# 🐬 Dolphin - Personal Search Engine

Dolphin is a lightweight personal search engine that mimics the classic Google layout and allows you to search through a custom `.json` dataset containing website info like titles, descriptions, URLs, and body text. It’s fast, simple, and runs **entirely in the browser**—no backend required!

## 🚀 Features

- Clean, Google-style interface
- Fast, client-side search using JavaScript
- Ranked results based on keyword matching
- Results page supports dynamic new searches
- Clickable links take you to actual URLs in your JSON
- Mobile responsive and fully customizable
- No frameworks, no libraries — pure HTML, CSS & JS


## 📦 How to Use

1. Clone or download this repo.
2. Update the `data.json` file with your own site data.
3. Open `index.html` in a browser.
4. Type a query and hit **Enter** or click **Search**.
5. Results appear on `result.html`.

You can also host it on GitHub Pages or Netlify for easy public use.

## 🛠 JSON Format

Here's an example of what your `data.json` should look like:

```json
[
  {
    "title": "Cookie Recipes",
    "description": "Learn to bake cookies with easy recipes.",
    "url": "https://example.com/cookies",
    "body": "These cookie recipes include chocolate chip, oatmeal, and sugar cookies."
  }
]
