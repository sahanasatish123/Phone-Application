import { module, test } from 'qunit';
import { setupTest } from 'phone-task/tests/helpers';

module('Unit | Controller | history', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:history');
    assert.ok(controller);
  });
});
