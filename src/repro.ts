import {
  css,
  customElement,
  FASTElement,
  html,
  observable,
} from '@microsoft/fast-element';

import '@fluentui/web-components/button.js';

const template = html<ReproElem>`
  <fluent-button>${(x) => x.title}</fluent-button>
`;

const styles = css`
:host {
  display: block;
  padding: 10px;
}
`;

@customElement({
  name: 'repro-elem',
  template,
  styles,
})
export class ReproElem extends FASTElement {
  @observable title = 'My Button';
}
