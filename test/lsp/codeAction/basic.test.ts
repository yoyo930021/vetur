import * as vscode from 'vscode';
import * as assert from 'assert';
import { activateLS, showFile } from '../helper';
import { getDocUri, sameLineRange } from '../util';
import { getDiagnosticsAndTimeout } from '../helper';

describe('Should do codeAction', () => {
  const docUri = getDocUri('client/codeAction/Basic.vue');

  before('activate', async () => {
    await activateLS();
    await showFile(docUri);
  });

  it('finds codeAction for unused import', async () => {
    const codeActions = [{ title: `Remove unused declaration for: 'lodash'`, command: 'vetur.applyWorkspaceEdits' }];
    await testCodeAction(docUri, sameLineRange(5, 6, 6), codeActions);
  });

  it('finds codeAction for unused variables', async () => {
    const codeActions = [{ title: `Remove unused declaration for: 'foo'`, command: 'vetur.applyWorkspaceEdits' }];

    await testCodeAction(docUri, sameLineRange(7, 6, 6), codeActions);
  });
});

interface CodeAction {
  title: string;
  command: string;
}

async function testCodeAction(docUri: vscode.Uri, range: vscode.Range, expectedActions: CodeAction[]) {
  await getDiagnosticsAndTimeout(docUri);

  const result = (await vscode.commands.executeCommand(
    'vscode.executeCodeActionProvider',
    docUri,
    range
  )) as CodeAction[];

  expectedActions.forEach(eAction => {
    assert.ok(
      result.some(rAction => {
        return rAction.title === eAction.title && rAction.command === eAction.command;
      }),
      `Cannot find matching codeAction with title '${eAction.title}'\n` +
        `Seen codeActions are:\n${JSON.stringify(result, null, 2)}`
    );
  });
}
