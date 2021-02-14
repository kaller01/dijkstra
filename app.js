//These nodes are from the following video
//https://www.youtube.com/watch?v=pVfj6mxhdMw
let someSetOfNodes = {
  A: [
    { node: "B", distance: 6 },
    { node: "D", distance: 1 },
  ],
  B: [
    { node: "A", distance: 6 },
    { node: "C", distance: 5 },
    { node: "D", distance: 2 },
    { node: "E", distance: 2 },
  ],
  C: [
    { node: "B", distance: 5 },
    { node: "E", distance: 5 },
  ],
  D: [
    { node: "B", distance: 2 },
    { node: "E", distance: 1 },
  ],
  E: [
    { node: "B", distance: 2 },
    { node: "C", distance: 5 },
    { node: "D", distance: 1 },
  ],
};

//Assignment we have
//https://d2uusema5elisf.cloudfront.net/books/javascript-algorithms/images/26-dijkstra/graph.png
let HomeToOffice = {
  Home: [
    { node: "A", distance: 5 },
    { node: "D", distance: 8 },
  ],
  A: [
    { node: "Home", distance: 5 },
    { node: "C", distance: 3 },
    { node: "B", distance: 9 },
  ],
  B: [
    { node: "A", distance: 9 },
    { node: "C", distance: 5 },
    { node: "Office", distance: 7 },
  ],
  C: [
    { node: "A", distance: 3 },
    { node: "B", distance: 5 },
    { node: "D", distance: 4 },
    { node: "E", distance: 2 },
  ],
  D: [
    { node: "Home", distance: 8 },
    { node: "C", distance: 4 },
    { node: "E", distance: 6 },
  ],
  E: [
    { node: "C", distance: 2 },
    { node: "D", distance: 6 },
    { node: "Office", distance: 4 },
  ],
  Office: [
    { node: "B", distance: 7 },
    { node: "E", distance: 4 },
  ],
};

const startNode = "Home";
const endNode = "Office";
const nodes = HomeToOffice;
const table = constructTable(startNode);
const unvisisted = constructUnvisited();
let leftToVisist = Object.keys(unvisisted).length;
let current = {
  distance: 1000,
  node: "",
};

while (unvisisted[endNode]) {
  current = getShortestPath();
  explore(current.node);
}

function constructTable(start) {
  let table = {};
  for (const node in nodes) {
    if (node == start) table[node] = { distance: 0 };
    else table[node] = { distance: 100 };
  }
  return table;
}

function constructUnvisited() {
  let unvisisted = {};
  for (node in nodes) {
    unvisisted[node] = true;
  }
  return unvisisted;
}

function getShortestPath() {
  for (const node in unvisisted) {
    if (table[node].distance < current.distance && unvisisted[node]) {
      current.distance = table[node].distance;
      current.node = node;
    }
  }
  console.log("Shortest path is " + current.node);
  return current;
}

function explore(node) {
  console.log("Exploring " + node + "...");
  nodes[node].forEach((object) => {
    if (
      table[object.node].distance > object.distance + current.distance &&
      unvisisted[object.node]
    ) {
      table[object.node].distance = object.distance + current.distance;
      table[object.node].by = node;
    }
  });
  unvisisted[node] = false;
  leftToVisist--;
  current = {
    distance: 1000,
    node: "",
  };
  console.log("Current table:");
  console.log(table);
}
