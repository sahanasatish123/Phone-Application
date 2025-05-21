import { setupTest } from 'phone-task/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | call log', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('call-log', {});
    assert.ok(model, 'model exists');
  });
});
