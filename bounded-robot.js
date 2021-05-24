var instructions = "GLRLLGLL";
var x = 0;
var y = 0;
var dir = 0;
var vecs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
for (var i = 0; i < instructions.length; i++) {
    console.log("****************");
    console.log(`position ${x} ${y}`);
    console.log(`char ${instructions.charAt(i)}`);
    console.log("dir ", dir);
    console.log("vec ", vecs[dir]);
    switch (instructions.charAt(i)) {
        case 'G':
            x += (vecs[dir][0]);
            y += (vecs[dir][1]);
            break;
        case 'R':
            dir++;
            break;
        case 'L':
            dir--;
            break;
        default:
            break;
    }
    dir = ((dir % 4) + 4) % 4;
}

console.log((x === 0 && y === 0) || dir != 0);