
import java.util.LinkedList;
import java.util.Queue;

public class Solution {

    private static final int GROUP_ONE = 1;
    private static final int GROUP_TWO = -GROUP_ONE;
    private static final int NOT_VISITED = 0;

    public boolean isBipartite(int[][] graph) {
        final int numberOfNodes = graph.length;
        int[] groups = new int[numberOfNodes];

        for (int node = 0; node < numberOfNodes; node++) {
            if (groups[node] == NOT_VISITED && !isBipartiteGroup_breadthFirstSearch(graph, groups, node)) {
                return false;
            }
        }
        return true;
    }

    private boolean isBipartiteGroup_breadthFirstSearch(int[][] graph, int[] groups, int start) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        groups[start] = GROUP_ONE;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            int[] neighbous = graph[current];

            for (int node : neighbous) {
                if (groups[current] == groups[node]) {
                    return false;
                }
                if (groups[node] == NOT_VISITED) {
                    groups[node] = -groups[current];
                    queue.add(node);
                }
            }
        }
        return true;
    }
}
