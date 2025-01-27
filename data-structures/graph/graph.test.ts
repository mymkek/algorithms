import {UndirectedGraph} from "./graph";

describe("Graph", () => {
    it("should create graph correctly", async () => {
        const graph = new UndirectedGraph();

        expect(graph).toBeTruthy();
    })

    it("should return error if add edge to unexisted vertexes", async () => {
        const graph = new UndirectedGraph();

        expect(() => graph.addEdge('A', 'B')).toThrowError('В графе нет таких вершин')


    })

})
