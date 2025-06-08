import { module, test } from 'qunit';
import { setupRenderingTest } from 'play/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | category-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CategoryBar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CategoryBar>
        template block text
      </CategoryBar>
    `);

    assert.dom().hasText('template block text');
  });
});
