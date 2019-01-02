import * as vscode from 'vscode';
import { onActivate, execInsertLineNumber } from "./LineNumberInserter";

export function activate(context: vscode.ExtensionContext) {
	console.log('"insert-line-number" is now active.');

	onActivate(/* context */);

	context.subscriptions.push(vscode.commands.registerCommand('extension.insertLineNumber', () => {
		execInsertLineNumber(/* context */);
	}));
}

export function deactivate() { }
