# Fontify – Custom Font & UI Enhancer for VS Code

**Fontify** is a Visual Studio Code extension by **Avinash Gupta (alias tier3guy)** that allows you to inject custom fonts and UI tweaks into VS Code using the **Custom CSS and JS Loader** extension. With Fontify, you can make VS Code more visually appealing, apply personalized fonts across the editor, and tweak UI elements like scrollbars, status bar, and menus.

> ⚠️ **Note:** This extension requires [Custom CSS and JS Loader](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css) to be installed. Fontify will automatically update your settings to include the necessary CSS file.

---

## Features

* Apply the **Inter** font across VS Code interface.
* Customize font weights and styles for editors, menus, status bar, and notifications.
* Add custom icons/emojis to headers and panels.
* Tweak scrollbars and UI components for a cleaner look.
* Enable or disable the extension dynamically via commands.

---

## Installation

1. Install **Custom CSS and JS Loader** extension from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=be5invis.vscode-custom-css).
2. Install **Fontify** from VS Code Marketplace or via `.vsix`.
3. Once installed, Fontify automatically updates your `settings.json` to include the CSS file.

> Fontify stores its CSS in `src/css/custom-vscode-config.css` inside the extension. It uses absolute file paths for injection.

---

## Usage

After installing:

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Run either command:

   * `Fontify: Enable` – Injects the CSS and prompts to reload VS Code.
   * `Fontify: Disable` – Removes the CSS and prompts to reload VS Code.

> Make sure to reload VS Code when prompted for changes to take effect.

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

## Technical Details

* **VS Code API**: Uses `vscode.workspace.getConfiguration()` and `vscode.ConfigurationTarget.Global` to manage settings.
* **File Injection**: The CSS file is stored inside the extension and injected via absolute URI path.
* **Path Handling**: `vscode.Uri.file(context.extensionPath, ...)` ensures cross-platform path resolution.
* **Prompt**: Reload is prompted automatically after enabling/disabling.

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

## Links & Resources

* **LinkedIn**: [Avinash Gupta (tier3guy)](https://www.linkedin.com/in/tier3guy/)
* **GitHub Project**: [Fontify](https://github.com/tier3guy/Fontify)
* **Website**: [tier3guy.com](https://tier3guy.com)

---

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, new features, or UI improvements.

---

## License

MIT License – see `LICENSE` file for details.
