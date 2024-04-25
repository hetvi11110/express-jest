/*      
* Modules: CommonJS modules: require(id): https://nodejs.org/docs/latest/api/modules.html#requireid
* In Node.js, each file is treated as a separate module. For example, consider a file named
*/
const TodoController    = require('../../controllers/todo.contoller');
const TodoModel         = require('../../model/todo.model');

// https://www.npmjs.com/package/node-mocks-http
const httpMocks         = require('node-mocks-http');
const newTodo           = require('../mock-data/new-todo.json')

/* 
* https://mongoosejs.com/docs/models.html#constructing-documents
*
* to test dependencies use mock 
* Api References: The jest object: jest.fn(implementation?): Returns a new, unused mock function. Optionally takes a mock implementation.
* Api References: Mock Functions: Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with jest.fn(). If no implementation is given, the mock function will return undefined when invoked.
* https://jestjs.io/docs/jest-object#jestfnimplementation
*/
TodoModel.create = jest.fn();

let req,res,next;
/* 
* Globals: beforeEach(fn, timeout): https://jestjs.io/docs/api#beforeeachfn-timeout
*/
beforeEach(() => {
    req = httpMocks.createResponse();
    res = httpMocks.createResponse();
    next = null;
});

/* 
* https://jestjs.io/docs/cli#--configpath
*
* Introduction: More Resources: Api References: Globals: describe(name, fn): https://jestjs.io/docs/api#describename-fn
* creates a block that groups together several related tests.
* 
* Globals: test(name, fn, timeout): Also under the alias: it(name, fn, timeout): https://jestjs.io/docs/api#testname-fn-timeout
* All you need in a test file is the test method which runs a test.
*
* Api References: Expect: expect(value): https://jestjs.io/docs/expect#expectvalue
* The expect function is used every time you want to test a value.
*
* Expect: Matchers: .toBe(value): https://jestjs.io/docs/expect#tobevalue
* Expect: Matchers: .toHaveBeenCalled(): Also under the alias: .toBeCalled(): https://jestjs.io/docs/expect#tohavebeencalled
* Expect: Matchers: .toHaveBeenCalledWith(arg1, arg2, ...): Also under the alias: .toBeCalledWith(): https://jestjs.io/docs/expect#tohavebeencalledwitharg1-arg2-
* Expect: Matchers: .toBeTruthy(): https://jestjs.io/docs/expect#tobetruthy
* Expect: Matchers: .toStrictEqual(value): https://jestjs.io/docs/expect#tostrictequalvalue
* Use .toBe to compare primitive values or to check referential identity of object instances.
* Mock Functions: mockFn.mockReturnValue(value): https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue
*/

describe('TodoController.createTodo', () => {

    beforeEach(() => {
        req.body = newTodo;
    });

    test('should have a createTodo function', () => {
        // The typeof operator returns a string indicating the type of the operand's value.
        //console.log(typeof TodoModel);
        expect(typeof TodoController.createTodo).toBe('function');
    });

    test('should call TodoModel.create',() => {
        //called function from todo.contoller.js
        TodoController.createTodo(req, res, next);       
        expect(TodoModel.create).toHaveBeenCalledWith(newTodo);
    });

    test('sould return 201 responde code', () => {
        TodoController.createTodo(req, res, next); 
        expect(res.statusCode).toBe(201);
        //https://www.npmjs.com/package/node-mocks-http#usage
        expect(res._isEndCalled()).toBeTruthy();
    });

    test('sould return json body in respone',() => {
        TodoModel.create.mockReturnValue(newTodo);
        TodoController.createTodo(req, res, next);
        expect(res._getJSONData()).toStrictEqual(newTodo);
    });

});