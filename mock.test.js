let forEach = require('./mock');
test("mock func", () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.instances.length).toBe(2);
})
test("myMock", () => {
    let mymock = jest.fn();
    console.log(mymock());
    mymock.mockReturnValueOnce(10).mockReturnValueOnce('x');
    console.log(mymock(), mymock());
})