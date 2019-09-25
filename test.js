const missing = require('./extra challenge');


test('It does not accept strings as input', () => {
    expect(missing('string')).toBe('invalid input');
});

test('It finds the missing numbers in a given array', () => {
    expect(
        missing([2,4,6,8 ])
        ).toEqual(
             [3,5,7]
            );
});