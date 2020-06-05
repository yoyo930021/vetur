import { activateLS, showFile } from '../../lsp/helper';
import { position, getDocUri } from '../util';
import { testCompletion, testNoSuchCompletion } from './helper';
import { CompletionItem, CompletionItemKind, MarkdownString } from 'vscode';

describe('Should autocomplete interpolation for <template> in property class component', () => {
  const templateDocUri = getDocUri('completion/BasicPropertyClass.vue');
  const parentTemplateDocUri = getDocUri('completion/ParentPropertyClass.vue');

  before('activate', async () => {
    await activateLS();
    await showFile(templateDocUri);
  });

  const defaultList: CompletionItem[] = [
    {
      label: 'foo',
      documentation: new MarkdownString('My foo').appendCodeblock(`@Prop({ type: Boolean, default: false }) foo`, 'js'),
      kind: CompletionItemKind.Field
    },
    {
      label: 'msg',
      documentation: new MarkdownString('My msg').appendCodeblock(`msg = 'Vetur means "Winter" in icelandic.'`, 'js'),
      kind: CompletionItemKind.Field
    },
    {
      label: 'count',
      documentation: new MarkdownString('My count').appendCodeblock(
        `get count () {
  return this.$store.state.count
}`,
        'js'
      ),
      kind: CompletionItemKind.Field
    },
    {
      label: 'hello',
      documentation: new MarkdownString('My greeting').appendCodeblock(
        `hello () {
  console.log(this.msg)
}`,
        'js'
      ),

      kind: CompletionItemKind.Function
    }
  ];

  describe('Should complete props, data, computed and methods', () => {
    it('completes inside {{ }}', async () => {
      await testCompletion(templateDocUri, position(2, 7), defaultList);
    });

    it(`completes child component tag`, async () => {
      await testCompletion(parentTemplateDocUri, position(4, 5), [
        {
          label: 'basic-property-class',
          kind: CompletionItemKind.Property,
          documentationStart: 'My basic tag\n```js\n@Component('
        }
      ]);
    });

    it(`completes child component's props`, async () => {
      await testCompletion(parentTemplateDocUri, position(2, 27), [
        {
          label: 'foo',
          kind: CompletionItemKind.Value,
          documentation: new MarkdownString('My foo').appendCodeblock(
            `@Prop({ type: Boolean, default: false }) foo`,
            'js'
          )
        }
      ]);
    });

    it('completes inside v-if=""', async () => {
      await testCompletion(parentTemplateDocUri, position(3, 32), defaultList);
    });
    it(`doesn't completes on the edge " of v-if=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 31), defaultList);
    });
    it(`doesn't completes on the edge " of v-if=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 33), defaultList);
    });

    it('completes inside @click=""', async () => {
      await testCompletion(parentTemplateDocUri, position(3, 42), defaultList);
    });
    it(`doesn't completes on the edge " of @click=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 41), defaultList);
    });
    it(`doesn't completes on the edge " of @click=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 43), defaultList);
    });

    it('completes inside :foo=""', async () => {
      await testCompletion(parentTemplateDocUri, position(3, 50), defaultList);
    });
    it(`doesn't completes on the edge " of :foo=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 49), defaultList);
    });
    it(`doesn't completes on the edge " of :foo=""`, async () => {
      await testNoSuchCompletion(parentTemplateDocUri, position(3, 51), defaultList);
    });
  });
});