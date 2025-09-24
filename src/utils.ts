import * as path from 'path';
import * as vscode from 'vscode';

export function PromptReload() {
    vscode.window.showInformationMessage(
        'Reload required to activate this extension.',
        'Reload Window'
    ).then(selection => {
        if (selection === 'Reload Window') {
            vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
    });
};

export async function EnableFontify(context: vscode.ExtensionContext) {
    const cssFilePath = vscode.Uri.file(
		path.join(context.extensionPath, 'src', 'css', 'custom-vscode-config.css')
	).toString();

	console.log('CSS File Path:', cssFilePath);

	const configSection = 'vscode_custom_css.imports';
	const config = vscode.workspace.getConfiguration();
	const currentImports = config.get(configSection) as string[] || [];
	
	if (!currentImports.includes(cssFilePath)) {
		currentImports.push(cssFilePath);
		config.update(
			configSection, 
			currentImports, 
			vscode.ConfigurationTarget.Global
		);

		PromptReload();
	}
}

export async function DisableFontify(context: vscode.ExtensionContext) {
    const cssFilePath = vscode.Uri.file(
        path.join(context.extensionPath, 'src', 'css', 'custom-vscode-config.css')
    ).toString();

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
        
        PromptReload();
    }
}
