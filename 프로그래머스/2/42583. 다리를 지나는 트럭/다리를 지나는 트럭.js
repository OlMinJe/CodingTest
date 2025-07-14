
function solution(bridge_length, weight, truck_weights) {
    const bridgeQueue = Array(bridge_length).fill(0);
    let completeTime = 0;
    let sumTruckWeight = 0;
    
    while (truck_weights.length || sumTruckWeight) {
        completeTime++;
        
        const outTruck = bridgeQueue.shift();
        sumTruckWeight -= outTruck;
        
        const nextTruck = truck_weights[0];
        const canEnter = nextTruck !== undefined && sumTruckWeight + nextTruck <= weight;
        
        const enteringTruck = canEnter ? truck_weights.shift() : 0;
        bridgeQueue.push(enteringTruck);
        sumTruckWeight += enteringTruck;
    }

  return completeTime;
}