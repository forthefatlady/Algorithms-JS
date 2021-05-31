// https://leetcode.com/problems/number-of-islands/ 

var numIslands = function(grid) {
    var count = 0;
      for (var i = 0; i < grid.length; i++) {
          for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                count++;
                dfs(i, j, grid);
            }
          }
      }  
    return count;
};

function dfs(i, j, grid) {
    if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[i].length - 1 || grid[i][j] == 0) return;
    grid[i][j] = 0;
    dfs(i+1, j, grid);
    dfs(i-1, j, grid);
    dfs(i, j+1, grid);
    dfs(i, j-1, grid);
}

var json = JSON.parse(process.argv[2]);
var count = numIslands(json);
console.log(count);

/*  
   Example input using node from terminal

   node number-of-islands.js "[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]" 
*/