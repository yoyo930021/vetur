<p>
  <h1 align="center">Vuter</h1>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=yoyo930021.vuter">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/yoyo930021.vuter.svg?style=flat-square">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=yoyo930021.vuter">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/yoyo930021.vuter.svg?style=flat-square">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=yoyo930021.vuter">
    <img src="https://vsmarketplacebadge.apphb.com/rating-short/yoyo930021.vuter.svg?style=flat-square">
  </a>
</p>

Vuter is fork from [Vetur](https://github.com/vuejs/vetur).   
This is a voluntary project maintained by a Vetur contributor.    
Will be maintained until Vetur is reactivated.

## CHANGELOG

### 0.1.0
- base on Vetur@0.24.0
- Speed up and stabilize e2e test
- Fix no props completion when child component `export default {}` is end of `;` 
- Fix object property completion when have hyphen 
- Fix SFC without a script tag show an error 
- Add more typescript language service features and fix more bugs
  - Add suggestion diagnostics and can fix unused import.
  - Add Organize Imports code actions.
  - Diagnostics will show quick fix in VScode.
  - Add Typescript Refactor support
  - Add support resolveJsonModule
- Add support analyzing vue-class-component and vue-property-decorator 
  - Can't support self vue component props completion when `@Component({ props: {  } })`
- Upgrade required vscode version to 1.43.0
- Upgrade prettier to 2.0.5
- Upgrade typescript from 3.7.5 to 3.9.5
- Fix template interpolation hover info of v-for readonly array item.
- 🙌 Improve performance while using template interpolation service. Thanks to contribution from @IWANABETHATGUY. [#1839](https://github.com/vuejs/vetur/pull/1839).

## Original README

Vue tooling for VS Code.

- [vls](./server): Vue Language Server
- [vti](./vti): Vetur Terminal Interface
- Docs: https://vuejs.github.io/vetur

🎉 VueConf 2017 [Slide](https://www.dropbox.com/sh/eb4w8k3orh0j391/AAB3HaJexbGLa2tCP14BI8oJa?dl=0) & [Video](https://www.youtube.com/watch?v=05tNXJ-Kric) 🎉

## Features

- Syntax-highlighting
- Snippet
- Emmet
- Linting / Error Checking
- Formatting
- Auto Completion
- Debugging
- [VTI / CLI](https://vuejs.github.io/vetur/vti.html)

## Quick Start

- Install [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
- Try it with [Veturpack](https://github.com/octref/veturpack), a pre-configured Vue boilerplate based on [Vuepack](https://github.com/egoist/vuepack).
- Refer to [setup](https://vuejs.github.io/vetur/setup.html) page for setting up.
- Refer to each feature's own page for setting up specific features.

## FAQ

[FAQ](https://github.com/vuejs/vetur/blob/master/docs/FAQ.md)

## Roadmap

See [#873](https://github.com/vuejs/vetur/issues/873).

## Contribution

See [CONTRIBUTING.md](https://github.com/vuejs/vetur/blob/master/.github/CONTRIBUTING.md)

## License

MIT © [Pine Wu](https://github.com/octref) 
