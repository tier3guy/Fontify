import * as vscode from 'vscode';
import { EnableFontify, DisableFontify, SetCustomCSSEnabled, EnableEmojis, DisableEmojis } from './utils';

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

	const disposableEnableEmojis = vscode.commands.registerCommand('fontify.enableEmojis', async () => {
		await EnableEmojis(context);
		await SetCustomCSSEnabled(true);
	});

	const disposableDisableEmojis = vscode.commands.registerCommand('fontify.disableEmojis', async () => {
		await DisableEmojis(context);
		await SetCustomCSSEnabled(true);
	});

	context.subscriptions.push(disposableEnable);
	context.subscriptions.push(disposableDisable);
	context.subscriptions.push(disposableEnableEmojis);
	context.subscriptions.push(disposableDisableEmojis);
}

export function deactivate() {}
