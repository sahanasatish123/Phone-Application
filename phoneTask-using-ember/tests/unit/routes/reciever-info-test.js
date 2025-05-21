import { module, test } from 'qunit';
import { setupTest } from 'phone-task/tests/helpers';

module('Unit | Route | recieverInfo', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reciever-info');
    assert.ok(route);
  });
});
