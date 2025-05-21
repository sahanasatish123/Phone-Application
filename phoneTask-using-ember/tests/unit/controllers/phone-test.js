import { module, test } from 'qunit';
import { setupTest } from 'phone-task/tests/helpers';

module('Unit | Controller | phone', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:phone');
    assert.ok(controller);
  });
});
