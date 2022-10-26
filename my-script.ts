// 1. TALLEST MOUNTAIN //

interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

function findNameOfTallestMountain(mountainObjects: Mountain[]): string {
  let mtnHeight: Mountain = mountainObjects[0];
  let mtnWithMaxHeight: Mountain;

  for (let i = 0; i < mountainObjects.length; i++) {
    const mountainItem = mountainObjects[i];
    if (mountainItem.height > mtnHeight.height) {
      mtnWithMaxHeight = mountainItem;
      mtnHeight = mtnWithMaxHeight;
    } else {
      mtnWithMaxHeight = mtnHeight;
    }
  }
  return mtnWithMaxHeight.name;
}

let tallestMtn: string = findNameOfTallestMountain(mountains);
console.log(tallestMtn);

// 2. PRODUCTS //

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "window cleaner",
    price: 5,
  },
  {
    name: "broom",
    price: 10,
  },
  {
    name: "sponge",
    price: 3,
  },
];

function calcAverageProductPrice(arrayProductObjects: Product[]): number {
  let total = 0;
  for (let i = 0; i < arrayProductObjects.length; i++) {
    total += arrayProductObjects[i].price;
  }
  let avg = total / arrayProductObjects.length;
  return avg;
}
let avgNumber: number = calcAverageProductPrice(products);
console.log(avgNumber);


// 3. INVENTORY //
interface InventoryItem {
  product: Product;
  quantity: number;
}
let item1: InventoryItem = {
  product: {
    name: "motor",
    price: 10.0,
  },
  quantity: 10,
};

let item2: InventoryItem = {
  product: {
    name: "sensor",
    price: 12.5,
  },
  quantity: 4,
};
let item3: InventoryItem = {
  product: {
    name: "LED",
    price: 1.0,
  },
  quantity: 20,
};
let inventory: InventoryItem[] = [item1, item2, item3];

function calcInventoryValue(inventoryObjects: InventoryItem[]): number {
  let total = 0;
  for (let i = 0; i < inventoryObjects.length; i++) {
    const itemTotal =
      inventoryObjects[i].product.price * inventoryObjects[i].quantity;
    total += itemTotal;
  }
  return total;
}
let sum: number = calcInventoryValue(inventory);

console.log(sum);
