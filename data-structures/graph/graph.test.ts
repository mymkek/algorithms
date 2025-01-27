import {UndirectedGraph} from "./graph";

describe("Graph", () => {
    it("should create graph correctly", () => {
        const graph = new UndirectedGraph();

        expect(graph).toBeTruthy();
    })

    it("should return error if add edge to unexisted vertexes", () => {
        const graph = new UndirectedGraph();

        expect(() => graph.addEdge('A', 'B')).toThrowError('В графе нет таких вершин')
    })

    it("should return error if start dfs from unexisted vertex", () => {
        const graph = new UndirectedGraph();
        const mockCallback = jest.fn(x => 42 + x);
        expect(() => graph.dfs('A', mockCallback)).toThrowError('В графе нет таких вершин')
    })

    it("should call callback same times as graph vertexes count", () => {
        const graph = new UndirectedGraph();
        const mockCallback = jest.fn(x => 42 + x);

        graph.addVertex('A');
        graph.addVertex('B');
        graph.addEdge('A', 'B');
        graph.dfs('A', mockCallback)
        expect(mockCallback.mock.calls).toHaveLength(2);
    })

})
