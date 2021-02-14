# dijkstra
Learning dijkstra by coding.
After watching this video on how the algorithm works, I decided to code it.  
[Graph Data Structure 4. Dijkstra’s Shortest Path Algorithm](https://www.youtube.com/watch?v=pVfj6mxhdMw)

## Finding the shortest path to Office
![](https://i.imgur.com/KSSJLM1.png)  
I had to solve this, and doing by hand? No way. So this code uses the algorithm to solve this problem. The final results are the following.  
  
{  
  Home: { distance: 0 },  
  A: { distance: 5, by: 'Home' },  
  B: { distance: 13, by: 'C' },  
  C: { distance: 8, by: 'A' },  
  D: { distance: 8, by: 'Home' },  
  E: { distance: 10, by: 'C' },  
  Office: { distance: 14, by: 'E' }  
}  

## Input
Inputting the tree like structure takes some time and requires a lot of duplicate input since it's in the form of a json object, like this.  
  
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
