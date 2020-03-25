import { activateLS, sleep, showFile, FILE_LOAD_SLEEP_TIME } from '../helper';
import { getDocUri } from '../util';
import { testNoDiagnostics } from './helper';

describe('Should find common diagnostics for all regions', () => {
  const docUri = getDocUri('client/diagnostics/Parent.vue');

  before('activate', async () => {
    await activateLS();
    await showFile(docUri);
    await sleep(FILE_LOAD_SLEEP_TIME);
  });

  it('shows no diagnostics error for <script> region', async () => {
    await testNoDiagnostics(docUri);
  });
});
