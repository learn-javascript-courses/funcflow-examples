import test from 'tape';
import double from '../../../examples/double/imperative';

test('imperative double()', assert => {
  const msg = 'should return an array with doubled numbers';
  const actual = double([1, 2, 3]);
  const expected = [2, 4, 6];

  assert.deepEqual(actual, expected, msg);
  assert.end();
});
