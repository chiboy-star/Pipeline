const getRandomNumber = require('./index');

test('generateRandomNumber Should return a number between 1 and 100', () => {
    const randomNumber = getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
}); 
