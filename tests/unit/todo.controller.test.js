
/*      
* Modules: CommonJS modules: require(id): https://nodejs.org/docs/latest/api/modules.html#requireid
* In Node.js, each file is treated as a separate module. For example, consider a file named
*/
const TodoController = require('../../controllers/todo.contoller');

/* 
* Introduction: More Resources: Api References: Globals: describe(name, fn): https://jestjs.io/docs/api#describename-fn
* creates a block that groups together several related tests.
* 
* Globals: test(name, fn, timeout): https://jestjs.io/docs/api#testname-fn-timeout
* Also under the alias: it(name, fn, timeout)
* All you need in a test file is the test method which runs a test.
*
* Api References: Expect: expect(value): https://jestjs.io/docs/expect#expectvalue
* The expect function is used every time you want to test a value.
*
* Expect: Matchers: .toBe(value): https://jestjs.io/docs/expect#tobevalue
* Use .toBe to compare primitive values or to check referential identity of object instances.
*/

describe('TodoController.createTodo', () => {
    test('should have a createTodo function', () => {
        // The typeof operator returns a string indicating the type of the operand's value.
        console.log(typeof TodoController.createTodo);
        expect(typeof TodoController.createTodo).toBe('function');
    });
});