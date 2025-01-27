
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



    dfs(startVertex: T, callback?: (vertex: T) => void) {
        // этот метод содержит итеративную реализацию поиска в глубину (depth-first search)
        let list = this.vertices; // список смежности
        let stack = [startVertex]; // стек вершин для перебора
        let visited = new Map().set(startVertex, 1); // посещенные вершины

        if(!list.has(startVertex)) {
            throw new Error('В графе нет таких вершин');
        }
        const handleVertex = (vertex: T) => {
            if(callback) {
                callback(vertex);
            }

            // получаем список смежных вершин
            const neighboursList = list.get(vertex) as T[];
            const reversedNeighboursList = neighboursList.reverse();


            reversedNeighboursList.forEach(neighbour => {
                if (!visited.has(neighbour)) {
                    // отмечаем вершину как посещенную
                    visited.set(neighbour, 1);
                    // добавляем в стек
                    stack.push(neighbour);
                }
            });
        }

        while(stack.length) {
            let activeVertex = stack.pop() as T;
            handleVertex(activeVertex);
        }

        // проверка на изолированные фрагменты
        stack = Array.from(list.keys());

        while(stack.length) {
            let activeVertex = stack.pop() as T;
            if (!visited.has(activeVertex)) {
                visited.set(activeVertex, 1);
                handleVertex(activeVertex);
            }
        }

    }


    bfs() {
        // этот метод содержит итеративную реализацию поиска в ширину (breadth-first-search)
    }
}


