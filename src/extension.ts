import * as vscode from 'vscode';
import { EnableFontify, DisableFontify, SetCustomCSSEnabled } from './utils';

export async function activate(context: vscode.ExtensionContext) {
	console.log('Fontify extension is now active!');
	
	const disposableEnable = vscode.commands.registerCommand('fontify.enable', async () => {
		await SetCustomCSSEnabled(true);
		await EnableFontify(context);
	});

	const disposableDisable = vscode.commands.registerCommand('fontify.disable', async () => {
		await DisableFontify(context);
		await SetCustomCSSEnabled(false);
	});

	
	context.subscriptions.push(disposableEnable);
	context.subscriptions.push(disposableDisable);
}

export function deactivate() {}
