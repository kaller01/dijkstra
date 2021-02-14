const nodes = {
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

const table = {
  A: {
    distance: 0,
  },
  B: {
    distance: 100,
  },
  C: {
    distance: 100,
  },
  D: {
    distance: 100,
  },
  E: {
    distance: 100,
  },
};

const unvisisted = {
  A: true,
  B: true,
  C: true,
  D: true,
  E: true,
};

let leftToVisist = Object.keys(unvisisted).length;

let current = {
  distance: 1000,
  node: "",
};

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

while (leftToVisist > 0) {
  current = getShortestPath();
  explore(current.node);
}
