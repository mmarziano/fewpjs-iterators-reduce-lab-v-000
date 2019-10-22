const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function reducer() {
   let totalBatteries = 0;
   return batteryBatches.reduce((total, element) => total += element, 0)
}
