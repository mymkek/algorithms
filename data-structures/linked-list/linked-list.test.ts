import {LinkedList} from "./linked-list";

describe("LinkedList", () => {
    it("should insert a new list", async () => {
        const list = new LinkedList();

        expect(list).toBeTruthy();
    })

    it("should update this length when add an item", async () => {
        const list = new LinkedList<number>();
        list.append(5);

        expect(list.length).toBe(1);
    })
})