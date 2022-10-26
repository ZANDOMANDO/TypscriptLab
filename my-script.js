// 1. TALLEST MOUNTAIN //
var mountains = [
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
function findNameOfTallestMountain(mountainObjects) {
    var mtnHeight = mountainObjects[0];
    var mtnWithMaxHeight;
    for (var i = 0; i < mountainObjects.length; i++) {
        var mountainItem = mountainObjects[i];
        if (mountainItem.height > mtnHeight.height) {
            mtnWithMaxHeight = mountainItem;
            mtnHeight = mtnWithMaxHeight;
        }
        else {
            mtnWithMaxHeight = mtnHeight;
        }
    }
    return mtnWithMaxHeight.name;
}
var tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);
var products = [
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
function calcAverageProductPrice(arrayProductObjects) {
    var total = 0;
    for (var i = 0; i < arrayProductObjects.length; i++) {
        total += arrayProductObjects[i].price;
    }
    var avg = total / arrayProductObjects.length;
    return avg;
}
var avgNumber = calcAverageProductPrice(products);
console.log(avgNumber);
var item1 = {
    product: {
        name: "motor",
        price: 10.0,
    },
    quantity: 10,
};
var item2 = {
    product: {
        name: "sensor",
        price: 12.5,
    },
    quantity: 4,
};
var item3 = {
    product: {
        name: "LED",
        price: 1.0,
    },
    quantity: 20,
};
var inventory = [item1, item2, item3];
function calcInventoryValue(inventoryObjects) {
    var total = 0;
    for (var i = 0; i < inventoryObjects.length; i++) {
        var itemTotal = inventoryObjects[i].product.price * inventoryObjects[i].quantity;
        total += itemTotal;
    }
    return total;
}
var sum = calcInventoryValue(inventory);
console.log(sum);
//# sourceMappingURL=my-script.js.map