import ComponentText from './ComponentText';
import { toLowerCase } from '../../utils/mixins';

const type = 'label';

export default class ComponentLabel extends ComponentText {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type,
      tagName: type,
      traits: ['title', 'for'],
    };
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === type;
  }
}
