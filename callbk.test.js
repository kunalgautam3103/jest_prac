test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    function fetchData(callback) {
        let data = 'peanut butter';
        callback(data);
    }
    fetchData(callback);
});