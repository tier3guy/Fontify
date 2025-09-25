import * as path from 'path';
import * as vscode from 'vscode';

// export function PromptRestart() {
//     vscode.window.showInformationMessage(
//         'Restart required to activate Fontify.',
//         'Restart Window'
//     ).then(selection => {
//         if (selection === 'Restart Window') {
//             vscode.commands.executeCommand('workbench.action.reloadWindow');
//         }
//     });
// };

export async function PromptRestart() {
  const config = vscode.workspace.getConfiguration();
  const titleBarStyle = config.inspect("window.titleBarStyle");

  if (titleBarStyle) {
    const currentStyle = config.get("window.titleBarStyle");
    const _style = currentStyle === "native" ? "custom" : "native";

    await config.update("window.titleBarStyle", _style, vscode.ConfigurationTarget.Global);
    await config.update("window.titleBarStyle", titleBarStyle.globalValue, vscode.ConfigurationTarget.Global);
  }
}


export function GetCSSFilePath(context: vscode.ExtensionContext): string {
    return vscode.Uri.file(
        path.join(context.extensionPath, 'media', 'custom-vscode-config.css')
    ).toString(true).toLowerCase();
};

export async function SetCustomCSSEnabled(enabled: boolean) {
    const extension = vscode.extensions.getExtension('be5invis.vscode-custom-css');
    if (!extension) {
        vscode.window.showWarningMessage('Custom CSS and JS Loader extension is not installed.');
        return;
    }

    await extension.activate();

    // Enable/Disable the extension via its commands
    const command = enabled 
        ? 'extension.installCustomCSS' 
        : 'extension.uninstallCustomCSS';

    await vscode.commands.executeCommand(command);
}

export async function EnableFontify(context: vscode.ExtensionContext) {
    const cssFilePath = GetCSSFilePath(context);

	console.log('CSS File Path:', cssFilePath);

	const configSection = 'vscode_custom_css.imports';
	const config = vscode.workspace.getConfiguration();
	const currentImports = config.get(configSection) as string[] || [];
	
	if (!currentImports.includes(cssFilePath)) {
		currentImports.push(cssFilePath);
		await config.update(
			configSection, 
			currentImports, 
			vscode.ConfigurationTarget.Global
		);

		PromptRestart();
	}
};

export async function DisableFontify(context: vscode.ExtensionContext) {
    const cssFilePath = GetCSSFilePath(context);

    const configSection = 'vscode_custom_css.imports';
    const config = vscode.workspace.getConfiguration();
    const currentImports = config.get(configSection) as string[] || [];
    const updatedImports = currentImports.filter(importPath => importPath !== cssFilePath);

    if (updatedImports.length !== currentImports.length) {
        await config.update(
            configSection,
            updatedImports,
            vscode.ConfigurationTarget.Global
        );
        
        PromptRestart();
    }
};
