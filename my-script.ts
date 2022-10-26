// TALLEST MOUNTAIN //

interface Mountain {
  name: string;
  height: number;
}

let mountainOne: Mountain = {
  name: "Kilimanjaro",
  height: 19341,
};
let mountainTwo: Mountain = {
  name: "Everest",
  height: 29029,
};
let mountainThree: Mountain = {
  name: "Denali",
  height: 20310,
};
let mountains: Mountain[] = [mountainOne, mountainTwo, mountainThree];

function findNameOfTallestMountain(mountainObjects: Mountain[]): string {
  let firstMountain: Mountain = mountainObjects[0];
  let maxHeightMountain: Mountain;

  for (let i = 0; i < mountainObjects.length; i++) {
    const mountainItem = mountainObjects[i];
    if (mountainItem.height > firstMountain.height) {
      maxHeightMountain = mountainItem;
      firstMountain = maxHeightMountain; // set the variable equal to the max heigh mountain at the time of the iteration
    } else {
      maxHeightMountain = firstMountain;
    }
  }
  return `${maxHeightMountain.name}`;
}

let s: string = findNameOfTallestMountain(mountains);
console.log(s);

// PRODUCTS //

interface Product {
  name: string;
  price: number;
}


let p1: Product = {
  name: "window cleaner",
  price: 5,
};

let p2: Product = {
  name: "broom",
  price: 10,
};
let p3: Product = {
  name: "sponge",
  price: 3,
};

let products: Product[] = [p1, p2, p3];


function calcAverageProductPrice(productObjects: Product[]): number {
  let total = 0;
  for (let i = 0; i < productObjects.length; i++) {
    total += productObjects[i].price;
  }
  let avg = total / productObjects.length;
  return avg;
}
let avgNum: number = calcAverageProductPrice(products);

console.log(avgNum);


//INVENTORY //
interface InventoryItem{
    product: Product;
    quantity: number
}
let i1: InventoryItem = {
    product: {
        name: "motor",
        price: 10.00,
      },
    quantity: 10,
  };
  
  let i2: InventoryItem = {
    product: {
        name: "sensor",
        price: 12.50,
      },
    quantity: 4,
  };
  let i3: InventoryItem = {
    product: {
        name: "LED",
        price: 1.00,
      },
    quantity: 20,
  };
let inventory: InventoryItem[] = [i1, i2, i3];

function calcInventoryValue(inventoryObjects: InventoryItem[]): number{
    let total = 0;
    for (let i = 0; i < inventoryObjects.length; i++) {
        const itemTotal = inventoryObjects[i].product.price * inventoryObjects[i].quantity;
        total += itemTotal;
    }
    return total;
}
let sumOfTotal: number = calcInventoryValue(inventory);

console.log(sumOfTotal);
