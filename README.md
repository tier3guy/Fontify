# Fontify – Custom Font & UI Enhancer for VS Code

**Fontify** is a Visual Studio Code extension by **Avinash Gupta (alias tier3guy)** that allows you to inject custom fonts and UI tweaks into VS Code. With Fontify, you can make VS Code more visually appealing, apply personalized fonts across the editor, and tweak UI elements like scrollbars, status bar, and menus.

> ⚠️ **Note:** Fontify automatically installs and configures [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) if not already installed.

---

## Features

* Apply the **Inter** font across VS Code interface.
* Customize font weights and styles for editors, menus, status bar, and notifications.
* Add custom icons/emojis to headers and panels.
* Tweak scrollbars and UI components for a cleaner look.
* Enable or disable the extension dynamically via commands.

---

## Installation

1. Install **Fontify** from VS Code Marketplace or via `.vsix`.  
2. Fontify will automatically install and configure the required CSS loader.  
3. Once installed, the CSS file (`src/css/custom-vscode-config.css`) is injected into VS Code.

---

## Usage

After installing:

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).  
2. Run either command:

   * `Enable Fontify` – Injects the CSS and prompts to restart VS Code.  
   * `Disable Fontify` – Removes the CSS and prompts to restart VS Code.  

> Make sure to restart VS Code when prompted for changes to take effect.

---

### CSS Tweaks Included

* **Fonts**: Inter font applied globally across editors, menus, labels, and notifications.  
* **Headers**: Emoji icons added to panel headers.  
* **Scrollbars**: Slim, minimalistic scrollbars.  
* **Backgrounds**: Optional watermark/letterpress style backgrounds.  
* **Shortcuts**: Hides default shortcut overlays for a cleaner look.

---

## Commands

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `fontify.enable`  | Enable Fontify CSS injection  |
| `fontify.disable` | Disable Fontify CSS injection |

---

## Development

To run locally:

1. Clone the repo.  
2. Install dependencies:

```bash
npm install
```

3. Open in VS Code, press `F5` to launch the Extension Development Host.  
4. Use the commands in the palette to test enabling/disabling the extension.

---

## Reporting Issues

If you encounter any bugs or have feature requests:

1. Go to the [GitHub Issues page](https://github.com/tier3guy/Fontify/issues).  
2. Click **“New Issue”** and provide:  
   * Steps to reproduce the issue  
   * VS Code version and OS  
   * Any error messages or logs  
3. Submit the issue, and it will be reviewed promptly.

---

## Connect With Author

* **LinkedIn**: [Avinash Gupta (tier3guy)](https://www.linkedin.com/in/tier3guy/)  
* **GitHub Project**: [Fontify](https://github.com/tier3guy/Fontify)  
* **Website**: [tier3guy.com](https://tier3guy.com)

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, new features, or UI improvements.

---

## License

MIT License – see `LICENSE` file for details.
