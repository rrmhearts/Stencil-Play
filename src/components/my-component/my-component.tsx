import { Component, Prop, h /*jsx*/, Event } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * The "h" namespace is used to import JSX types for elements and attributes.
 * It is imported in order to avoid conflicting global JSX issues.
 */

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  componentDidLoad() {
    console.log('Component successfully loaded')
    // Do something
   }
   
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const sampleComponent = document.querySelector('my-legend');
    const test = sampleComponent.text;

  return <div>Hello, World! I'm {this.getText()}. The prop is <b>{test}</b>.</div>;
  }
}

  /*
  @Event() active: EventEmitter;
  checkboxCompletedHandler(checkbox: Checkbox) {
    this.active.emit(checkbox);
  }
*/
/*
@Listen('click', { capture: true })
handleClick(ev) {
 console.log('click');
}
*/