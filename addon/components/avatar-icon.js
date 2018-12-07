import Component from '@ember/component';
import layout from '../templates/components/avatar-icon';
import { computed } from '@ember/object';

export default Component.extend({
  layout,

  colours: computed(() => [
    '#b71c1c',
    '#880e4f',
    '#4a148c',
    '#01579b',
    '#006064',
    '#827717',
    '#f57f17',
    '#e65100',
    '#bf360c',
    '#3e2723',
  ]),

  classNames: ['icon-image'],
  classNameBindings: ['image:has-image'],

  name: computed('data.username', function() {
    return this.getWithDefault('data.username', 'anonymous');
  }),

  imageUrl: computed.readOnly('image.url'),

  initials: computed('name', function() {
    if (!this.get('name')) return '';
    return this.get('name')
      .trim()
      .split(' ')
      .filter(el => Boolean(el))
      .map(item => item[0].toUpperCase())
      .slice(0, 2)
      .join('');
  }),

  backgroundColour: computed('name', function() {
    if (!this.get('name')) return '';
    var colourNumber = this.get('name')
      .trim()
      .split('')
      .map(item => item.charCodeAt())
      .reduce((sum, i) => sum + i);

    var index = colourNumber % this.get('colours').length;

    return this.get('colours')[index];
  }),

  // rewrite this
  updateStyles() {
    this.$().css({
      backgroundColor: this.get('backgroundColour'),
      height: this._size,
      width: this._size,
      lineHeight: this._size + 'px',
    });
  },

  didRender() {
    this._super(...arguments);
    this.updateStyles();
  },
});
