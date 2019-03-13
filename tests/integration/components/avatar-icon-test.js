import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | avatar-icon', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    const userData = {
      username: 'test'
    };
    this.set('userData', userData);

    const imageModel = {
      url: '//joeschmoe.io/api/v1/random'
    };
    this.set('imageModel', imageModel);
  });

  test('it renders', async function(assert) {
    await render(hbs`{{avatar-icon}}`);

    assert.equal(this.element.textContent.trim(), 'A');
  });

  test('test user data', async function(assert) {
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), 'T');

    this.set('userData.username', 'john doe');
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), 'JD');
  });

  test('empty user data', async function(assert) {
    this.set('userData', null);
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), 'A');

    this.set('userData', undefined);
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), 'A');
  });

  test('empty username', async function(assert) {
    this.set('userData.username', 0);
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), '');

    this.set('userData.username', '');
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), '');

    this.set('userData.username', null);
    await render(hbs`{{avatar-icon data=userData}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('test userImage', async function(assert) {
    await render(hbs`{{avatar-icon image=imageModel}}`);
    assert.ok(find('img'));
    assert.equal(this.element.querySelector('img').getAttribute('src'), this.imageModel.url);
  });
});
