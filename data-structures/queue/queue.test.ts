import {Queue} from "./queue";


describe('Queue', () => {
    const queueSize = 5;
    const item = 4;
    const queue = new Queue<number>(queueSize);

    beforeEach(() => {

    });

    it('should create an empty structure', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.isFull()).toBe(false);
    })

    it('should add elements to the queue', () => {
        queue.insert(item);
        expect(queue.tail()).toBe(item);
        expect(queue.head()).toBe(item);
    })

    it('should remove elements from the queue', () => {
        expect(queue.remove()).toBe(item);
    })

    it('should return error if capacity is full', () => {
        for(let i = 1; i <= queueSize; i++) {
            queue.insert(i);
        }

        expect(queue.isFull()).toBe(true);

        expect(() => queue.insert(6)).toThrowError("Queue overflow!");
    })

});