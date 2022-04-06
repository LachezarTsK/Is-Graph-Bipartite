
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    this.GROUP_ONE = 1;
    this.GROUP_TWO = -GROUP_ONE;
    this.NOT_VISITED = 0;

    const numberOfNodes = graph.length;
    const groups = new Array(numberOfNodes).fill(0);

    for (let node = 0; node < numberOfNodes; node++) {
        if (groups[node] === this.NOT_VISITED && !isBipartiteGroup_breadthFirstSearch(graph, groups, node)) {
            return false;
        }
    }
    return true;
};

/**
 * @param {number[][]} graph
 * @param {number[]} groups
 * @param {number} start
 * @return {boolean}
 */
function isBipartiteGroup_breadthFirstSearch(graph, groups, start) {
    const queue = new Queue();
    queue.enqueue(start);
    groups[start] = this.GROUP_ONE;

    while (!queue.isEmpty()) {
        const current = queue.dequeue();
        const neighbous = graph[current];

        for (let node of neighbous) {
            if (groups[current] === groups[node]) {
                return false;
            }
            if (groups[node] === this.NOT_VISITED) {
                groups[node] = -groups[current];
                queue.enqueue(node);
            }
        }
    }
    return true;
}
