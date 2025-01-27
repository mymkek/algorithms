
// EXAMPLE
//
// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                 }
//             }
//         }
//     }
// };



class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T> {
    private head: ListNode<T> | null = null;
    private _length: number = 0;

    get length() {
        return this._length;
    }

    constructor() {
        this.head = null;
        this._length = 0;
    }

    append(value: T) {
        if (!this.head) {
            this.head = new ListNode(value); // If there are no nodes
            // node variable will be the first and head node in the list
        } else {
            let current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = new ListNode(value);
        }

        this._length++;
    }

    insertInPosition(value: T, position: number) {
        if (position < 0 || position > this.length) {
            throw new Error("Incorrect value of position");
        }

        let node = new ListNode(value); // creates the node using class Node

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head as ListNode<T>;
            let prev: ListNode<T> | null = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next as ListNode<T>;
                index++;
            }

            // @ts-ignore
            prev.next = node;
            node.next = current;
        }

        this._length++;
    }

    removeFromPosition(position: number) {
        if (position < 0 || position > this.length) {
            throw new Error("Incorrect value of position");
        }

        let current = this.head; // now current is the head of the Linked List

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while(index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this._length--;
        return current.value;
    }
}