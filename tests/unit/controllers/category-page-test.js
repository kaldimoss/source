import { module, test } from 'qunit';
import { setupTest } from 'play/tests/helpers';

module('Unit | Controller | category-page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:category-page');
    assert.ok(controller);
  });
});
