# 🎨 Fontify – Custom Font & UI Enhancer for VS Code

**Fontify** is a Visual Studio Code extension built by [Avinash Gupta (alias tier3guy)](https://github.com/tier3guy), designed to inject **custom fonts** and **UI enhancements** directly into VS Code.

With Fontify, you can personalize your coding experience — apply your favorite fonts globally, fine-tune font weights and UI elements, and make your workspace visually consistent without manual tweaks.

> ⚠️ **Note:** Fontify automatically installs and configures [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) if not already installed.

---

## 📦 Features

✨ **Font Customization**
- Apply a custom font (like *Inter*, *Fira Code*, or *JetBrains Mono*) across the entire VS Code interface.
- Adjust font weights and letter spacing for better readability.

🎛️ **UI Enhancements**
- Clean, minimal scrollbars for a smoother feel.
- Subtle transparency in sidebars and panels.
- Optional emoji or icon prefixes for headers and panels.
- Adjust spacing, padding, and text rendering to improve clarity.

🧩 **Dynamic Controls**
- Enable or disable Fontify on demand.
- Instantly apply or remove injected CSS without editing internal files.

🪄 **Auto-Setup**
- Automatically installs and configures the *Custom CSS and JS Loader* dependency.
- Handles required permissions and CSS injections seamlessly.

---

## 🚀 Installation

### Option 1 – Marketplace
1. Open **VS Code**.
2. Go to the **Extensions** panel.
3. Search for `Fontify`.
4. Click **Install**.

### Option 2 – Manual Installation
If installing manually:
1. Download the `.vsix` file from the [Releases](https://github.com/tier3guy/Fontify/releases) page.
2. Open the Command Palette → `Extensions: Install from VSIX...`
3. Select the `.vsix` file.

Once installed, Fontify will automatically configure the required **Custom CSS and JS Loader** extension.

---

## 🧠 How It Works

Fontify injects a stylesheet (`custom-vscode-config.css`) into VS Code using the Custom CSS and JS Loader extension.  
This stylesheet overrides default styles — including fonts, scrollbars, headers, and panels — to create a more polished and consistent look.

The injected file lives at:
```

src/css/custom-vscode-config.css

````

Fontify enables or disables this file dynamically using VS Code commands.

---

## 🧩 Usage

After installation:

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Run one of the following commands:

| Command | Action |
|----------|--------|
| `Enable Fontify` | Injects Fontify’s CSS and prompts you to restart VS Code. |
| `Disable Fontify` | Removes the injected CSS and restores the default UI. |

> 💡 Restart VS Code when prompted to apply or remove changes.

---

## 🧱 CSS Enhancements Included

| Category | Description |
|-----------|--------------|
| **Fonts** | Global font injection for menus, editors, panels, and notifications. |
| **Scrollbars** | Thin, rounded scrollbars with smooth hover transitions. |
| **Headers** | Optional emoji or icon prefixes for better visual grouping. |
| **Status Bar** | Adjusted font size and opacity for balance. |
| **Sidebars & Panels** | Reduced padding, refined backgrounds, and lighter borders. |
| **Notifications** | Simplified notification layout for cleaner alerts. |

---

## 🧬 Configuration

Fontify currently applies the **Inter** font by default.  
You can modify or replace it manually via the injected CSS file:

### 🔧 Example: Change the Global Font

Edit `src/css/custom-vscode-config.css`:
```css
:root {
  --vscode-font-family: 'Fira Code', monospace !important;
}

body, .monaco-editor, .part.editor, .monaco-workbench {
  font-family: 'Fira Code', monospace !important;
  font-weight: 450;
}
````

### 🔧 Example: Customize Scrollbar

```css
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 3px;
}
```

---

## 🖼️ Screenshots

| Default VS Code                          | With Fontify                              |
| ---------------------------------------- | ----------------------------------------- |
| <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/01d93333-94e3-4fc5-99bc-e2155cc10413" /> | <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/38ed9531-df7b-4b1d-b6f9-7b8dfe97676d" /> |

---

## 🧩 Commands

| Command ID        | Command Name        | Description                       |
| ----------------- | ------------------- | --------------------------------- |
| `fontify.enable`  | **Enable Fontify**  | Injects CSS and restarts VS Code. |
| `fontify.disable` | **Disable Fontify** | Removes CSS and restarts VS Code. |

---

## ⚙️ Development Setup

To run Fontify locally for development or debugging:

```bash
# Clone the repository
git clone https://github.com/tier3guy/Fontify.git
cd Fontify

# Install dependencies
npm install

# Open in VS Code
code .

# Launch extension development host
Press F5
```

In the new window (Extension Development Host):

* Run **Enable Fontify** or **Disable Fontify** from the Command Palette to test your changes.

---

## 🧪 Troubleshooting

### ❌ Fontify not applying styles

1. Make sure **Custom CSS and JS Loader** is enabled.
2. Check VS Code settings for `vscode_custom_css.imports` — Fontify should automatically add the CSS file path.
3. Try disabling and re-enabling Fontify.

### ⚠️ “Your VS Code installation is corrupt”

This is a **false warning** caused by VS Code’s integrity check after CSS injection.
Fontify modifies the internal styles, but the editor remains safe to use.
To suppress this:

1. Click “Don’t Show Again” on the warning.
2. Restart VS Code.

### 💾 Fonts not changing

Ensure the desired font is **installed on your system**.
Fontify only applies the CSS — it doesn’t download the font automatically.

---

## 🧰 File Structure

```
Fontify/
 ┣ src/
 ┃ ┣ css/
 ┃ ┃ ┗ custom-vscode-config.css   # Injected stylesheet
 ┃ ┣ extension.ts                 # Core logic (enable/disable commands)
 ┣ package.json                   # Extension manifest
 ┣ README.md                      # You are here
 ┗ LICENSE
```

---

## 🧑‍💻 Contributing

Contributions, ideas, and feature requests are always welcome.

### To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Run tests / verify locally
5. Submit a Pull Request 🚀

If you’d like to suggest UI tweaks or additional font presets, open an issue under the [Fontify GitHub Issues](https://github.com/tier3guy/Fontify/issues) page.

---

## 🐛 Reporting Issues

If you find a bug, please include:

* Steps to reproduce
* Your OS and VS Code version
* Any console errors or logs

Report issues here:
👉 [https://github.com/tier3guy/Fontify/issues](https://github.com/tier3guy/Fontify/issues)

---

## 👤 Author

**Avinash Gupta (tier3guy)**
💼 [LinkedIn](https://www.linkedin.com/in/tier3guy/)
💻 [GitHub](https://github.com/tier3guy)
🌐 [Website](https://tier3guy.com)

---

## 📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for more details.

---

### ⭐ Support

If Fontify makes your editor look better, consider giving it a ⭐ on GitHub — it helps more developers discover it.
👉 [https://github.com/tier3guy/Fontify](https://github.com/tier3guy/Fontify)

