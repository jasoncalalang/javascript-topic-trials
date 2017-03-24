/**
 * Created by jhtrujil on 3/24/2017.
 */

const makeStack = (capacity = 2) => {
  let currentSize = 0;

  return {
    isEmpty: () => currentSize === 0,
    size: () => currentSize,

    push: () => {
      if (currentSize === capacity) throw new Error('Overflow Error');
      currentSize++;
    },

    pop: () => {
      if (currentSize === 0) throw new Error('Underflow Error: Cannot perform pop on empty stack');
      currentSize--;
      return 1;
    }
  };
};

describe.only('a stack should', () => {
  let stack;

  beforeEach(() => {
    stack = makeStack();
  });

  it('be empty when created', () => {
    stack.isEmpty().should.be.true();
  });

  it('have a size of zero when created', () => {
    stack.size().should.equal(0);
  });

  it('have a size of one after a push', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('be empty after one push and pop', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('throw underflow error when popping an element off of stack and stack is empty', () => {
    ( () => {
      stack.pop();
    }).should.throw('Underflow Error: Cannot perform pop on empty stack');
  });

  it('throw overflow error when pushing an element onto stack and stack is at capacity', () => {
    ( () => {
      stack.push();
      stack.push();
      stack.push();
    } ).should.throw('Overflow Error');
  });

  it('return one after pushing one onto stack and performing a pop', () => {
    stack.push(1);
    stack.pop().should.equal(1);
  });

  it('return two and one in that order after pushing one and two onto stack and performing pop twice');
  it('throw illegal capacity error when creating a stack with negative capacity');
});
