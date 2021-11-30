// Write a function, largestComponent, that takes in the ajacency list of an 
// undirected graph. The function should return the largest size of the largest
// connected component in the graph.

const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
}

const exploreSize = (graph, current, visited) => {

  if (visited.has(current)) return 0;
  visited.add(current);
  let size = 1;

  for (neighbor of graph[current]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}