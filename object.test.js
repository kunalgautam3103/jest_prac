test("assignemt object", () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });

});

test("check addition", () => {
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(i + j).not.toEqual(0);
        }
    }
})

test("null", () => {
    let n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();

})

test("check number", () => {
    let a = 2 + 5;
    expect(a).toBeGreaterThan(6);
    expect(a).toBeGreaterThanOrEqual(7);
    expect(a).toBeLessThan(8);

});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
});

test('there is no  in team', () => {
    expect('team').not.toMatch(/I/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
});

function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
});