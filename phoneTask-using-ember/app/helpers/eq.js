import { helper } from '@ember/component/helper';

export default helper(function eq([left, right]) {
  return left === right;
});
// app/helpers/eq.js
// import { helper } from '@ember/component/helper';

// export function eq([left, right]) {
//   return left === right;
// }

// export default helper(eq);
