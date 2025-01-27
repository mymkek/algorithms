
export class Stack<T> {
    private readonly stack: (T | null)[];
    private readonly capacity: number;
    private pointer: number;

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than 0");
        }
        this.capacity = capacity;
        this.stack = new Array(capacity).fill(null);
        this.pointer = -1;
    }

    push(element: T): void {
        if(this.isFull()) {
            throw new Error("Stack overflow!");
        }

        this.pointer++;
        this.stack[this.pointer] = element;
    }

    pop(): void {
        if(this.isEmpty()) return;

        this.stack[this.pointer] = null;
        this.pointer--;
    }

    top(): T | null {
        if(this.isEmpty()) return null;

        return this.stack[this.pointer];
    }

    isEmpty(): boolean {
        return this.pointer === -1;
    }

    isFull(): boolean {
        return this.pointer === this.capacity - 1;
    }

}