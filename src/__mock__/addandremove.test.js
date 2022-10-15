const addandremove = require('./addandremove.js');

describe('should addandremove a task', () => {
  test('checking for task removal', () => {
    const arr = [2, 3, 5];
    expect(arr.splice(1, 2)).toHaveLength(2);
  });
  test('checking for task addition',()=>{
        const arr = [3]
        expect( arr.length).toBe(1)
    })
});
