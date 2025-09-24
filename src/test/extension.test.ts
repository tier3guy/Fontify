import * as path from 'path';
import * as assert from 'assert';
import * as vscode from 'vscode';
import { EnableFontify, DisableFontify } from '../utils';

suite('Fontify Extension Test Suite', () => {
    let context: vscode.ExtensionContext;

    suiteSetup(() => {
        // Fake minimal context object for testing
        context = {
            extensionPath: path.join(__dirname, '../../../'),
            subscriptions: [],
        } as unknown as vscode.ExtensionContext;
    });

    test('EnableFontify should add CSS path to vscode_custom_css.imports', async () => {
        const configSection = 'vscode_custom_css.imports';
        const config = vscode.workspace.getConfiguration();

        // Clear existing setting before test
        await config.update(configSection, [], vscode.ConfigurationTarget.Global);

        await EnableFontify(context);

        const imports = config.get(configSection) as string[];
        assert.ok(
            imports.some(p => p.endsWith('src/css/custom-vscode-config.css')),
            'CSS path should be added to settings'
        );
    });

    test('DisableFontify should remove CSS path from vscode_custom_css.imports', async () => {
        const configSection = 'vscode_custom_css.imports';
        const config = vscode.workspace.getConfiguration();

        // First enable
        await EnableFontify(context);

        await DisableFontify(context);

        const imports = config.get(configSection) as string[];
        assert.ok(
            !imports.some(p => p.endsWith('src/css/custom-vscode-config.css')),
            'CSS path should be removed from settings'
        );
    });
});
