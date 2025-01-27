
export class UndirectedGraph<T = string | number> {

    private readonly vertices: Map<T, T[]>;

    constructor() {
        this.vertices = new Map(); // список смежности графа
    }

    addVertex(value: T) {
        if (!this.vertices.has(value)) {
            this.vertices.set(value, []);
        }
    }

    addEdge(vertex1: T, vertex2: T) {
        const adjList1 = this.vertices.get(vertex1);
        const adjList2 = this.vertices.get(vertex1);

        if (!adjList1 || !adjList2) {
            throw new Error('В графе нет таких вершин');
        }

        if(!adjList1.includes(vertex2)) {
            adjList1.push(vertex2);
        }

        if(!adjList2.includes(vertex1)) {
            adjList2.push(vertex1);
        }
    }

    dfs(startVertex: T, callback: (vertex: T) => void) {
        // этот метод содержит итеративную реализацию поиска в глубину (depth-first search)
        let list = this.vertices; // список смежности
        let stack = [startVertex]; // стек вершин для перебора
        let visited = { [startVertex]: 1 }; // посещенные вершины
    }

    bfs() {
        // этот метод содержит итеративную реализацию поиска в ширину (breadth-first-search)
    }
}
