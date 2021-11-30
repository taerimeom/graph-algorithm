// connected components count
// Write a function connectedComponentsCount that takes in the ajacency list of
// an undirected graph. The function should return the number of connected components
// within the graph. 

const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  
  for (let node in graph) {
    if (explore(graph, node, visited) === true){
      count += 1;
    };
  }
};

// depth first traversal
const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return false;

  visited.add(String(current));

  for (neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
}
