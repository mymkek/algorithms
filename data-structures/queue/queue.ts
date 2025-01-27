export class Queue<T> {
    private readonly queue: Map<number, T>;
    private readonly capacity: number;
    private pointerStart: number;
    private pointerEnd: number;

    constructor(capacity: number) {
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than 0");
        }
        this.capacity = capacity;
        this.pointerStart = -1;
        this.pointerEnd = -1;
        this.queue = new Map();

    }

    insert(element: T): void {
        if (this.isFull()) {
            throw new Error("Queue overflow!");
        }
        if(this.pointerStart == -1) {
            this.pointerStart = 0;
        }
        this.pointerEnd++;
        this.queue.set(this.pointerEnd, element)

    }

    remove(): T | undefined {
        if (this.isEmpty()) return;

        const el = this.queue.get(this.pointerStart);
        this.queue.delete(this.pointerStart);
        if(this.queue.size === 0) {
            this.pointerStart = 0;
            this.pointerEnd = 0;
        } else {
            this.pointerStart++;
        }

        return el;
    }

    head(): T | undefined {
        return this.queue.get(this.pointerStart);
    }

    tail(): T | undefined {
        return this.queue.get(this.pointerEnd);
    }

    isEmpty(): boolean {
        return this.queue.size === 0;
    }

    isFull(): boolean {

        return this.queue.size === this.capacity;
    }

}