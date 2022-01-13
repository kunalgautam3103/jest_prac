const { format: prettyFormat } = require('pretty-format');
const { getType } = require('jest-get-type');
test("jest-type", () => {
    const arr = [1, 2, 3, 4];
    const nul = null;
    const undef = undefined;
    console.log(getType(arr));
    console.log(getType(null));
    console.log(getType(undef));

})
test("pretty", () => {
    const val = { object: {} };
    val.circularReference = val;
    val[Symbol('foo')] = 'foo';
    val.map = new Map([
        ['prop', 'value']
    ]);
    val.array = [-0, Infinity, NaN];

    console.log(prettyFormat(val));
})