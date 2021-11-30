// Write a function minimumIsland that takes in a grid containing Ws and Ls. 
// W represents water and L repersents land. The function should return the size
// of the smallest island. An island is a vertically or horizontally connected
// region of land. 
// You may assume that a grid contains at least one island. 

const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize = Infinity;
   for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid.length[0]; r += 1) {
      const size = exploreSize(grid, r, c, visited); 
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
   }
   return minSize;
}

const exploreSize = (grid, r, c, visited) => {
  const rowInbound = 0 <= r && r < grid.length;
  const colInbound = 0 <= c && c < grid[0].length;
  if (!rowInbound || !colInbound) return 0;

  if (grid[r][c] === 'W') return 0;
  
  const pos = r + ','+ c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r - 1, c, visited);
  size += explore(grid, r + 1, c, visited);
  size += explore(grid, r, c - 1, visited);
  size += explore(grid, r, c + 1, visited);
  return size;
}