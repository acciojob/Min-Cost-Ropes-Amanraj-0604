function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;

  while (arr.length > 1) {
    // sort array
    arr.sort((a, b) => a - b);

    // take two smallest
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // push merged rope back
    arr.push(cost);
  }

  return totalCost;

}

module.exports=mincost;
