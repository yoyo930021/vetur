import { activateLS, showFile } from '../../lsp/helper';
import { position, getDocUri } from '../util';
import { testCompletion } from './helper';
import { CompletionItemKind } from 'vscode';

describe('Vue 3 integration test', () => {
  const fileUri = getDocUri('completion/Basic.vue');

  before('activate', async () => {
    await activateLS();
    await showFile(fileUri);
  });

  describe('Should complete Vue 3 options', () => {
    it('complete `setup`', async () => {
      await testCompletion(fileUri, position(6, 2), [
        {
          label: 'setup',
          kind: CompletionItemKind.Field
        }
      ]);
    });
  });
});
