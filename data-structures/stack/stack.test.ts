import { Stack } from './stack';

describe('Stack', () => {
    it('should create an empty stack', () => {
        const stack = new Stack<number>(5);
        expect(stack.isEmpty()).toBe(true);
        expect(stack.isFull()).toBe(false);
    });

    it('should push elements onto the stack', () => {
        const stack = new Stack<number>(3);
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.top()).toBe(10);

        stack.push(20);
        expect(stack.top()).toBe(20);

        stack.push(30);
        expect(stack.isFull()).toBe(true);
        expect(stack.top()).toBe(30);
    });

    it('should throw an error when pushing to a full stack', () => {
        const stack = new Stack<number>(2);
        stack.push(10);
        stack.push(20);

        expect(() => stack.push(30)).toThrow('Stack overflow!');
    });

    it('should pop elements from the stack', () => {
        const stack = new Stack<number>(3);
        stack.push(10);
        stack.push(20);

        stack.pop();
        expect(stack.top()).toBe(10);

        stack.pop();
        expect(stack.isEmpty()).toBe(true);
        expect(stack.top()).toBeNull();
    });

    it('should not pop from an empty stack', () => {
        const stack = new Stack<number>(3);
        expect(() => stack.pop()).not.toThrow();
        expect(stack.isEmpty()).toBe(true);
    });

    it('should return null for top when stack is empty', () => {
        const stack = new Stack<number>(3);
        expect(stack.top()).toBeNull();
    });
});