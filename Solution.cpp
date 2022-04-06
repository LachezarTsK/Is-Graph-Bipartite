
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
    inline static const int GROUP_ONE = 1;
    inline static const int GROUP_TWO = -GROUP_ONE;
    inline static const int NOT_VISITED = 0;

public:
    bool isBipartite(vector<vector<int>>& graph) {
        const size_t numberOfNodes = graph.size();
        vector<int> groups(numberOfNodes);

        for (int node = 0; node < numberOfNodes; node++) {
            if (groups[node] == NOT_VISITED && !isBipartiteGroup_breadthFirstSearch(graph, groups, node)) {
                return false;
            }
        }
        return true;
    }
    
private:
    bool isBipartiteGroup_breadthFirstSearch(const vector<vector<int>>& graph, vector<int>& groups, int start) {
        queue<int> queue;
        queue.push(start);
        groups[start] = GROUP_ONE;

        while (!queue.empty()) {

            int current = queue.front();
            queue.pop();
            vector<int> neighbous = graph[current];

            for (const auto& node : neighbous) {
                if (groups[current] == groups[node]) {
                    return false;
                }
                if (groups[node] == NOT_VISITED) {
                    groups[node] = -groups[current];
                    queue.push(node);
                }
            }
        }
        return true;
    }
};
