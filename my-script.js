// TALLEST MOUNTAIN //
var mountainOne = {
    name: "Kilimanjaro",
    height: 19341,
};
var mountainTwo = {
    name: "Everest",
    height: 29029,
};
var mountainThree = {
    name: "Denali",
    height: 20310,
};
var mountains = [mountainOne, mountainTwo, mountainThree];
function findNameOfTallestMountain(mountainObjects) {
    var firstMountain = mountainObjects[0];
    var maxHeightMountain;
    for (var i = 0; i < mountainObjects.length; i++) {
        var mountainItem = mountainObjects[i];
        if (mountainItem.height > firstMountain.height) {
            maxHeightMountain = mountainItem;
            firstMountain = maxHeightMountain; // set the variable equal to the max heigh mountain at the time of the iteration
        }
        else {
            maxHeightMountain = firstMountain;
        }
    }
    return "".concat(maxHeightMountain.name);
}
var s = findNameOfTallestMountain(mountains);
console.log(s);
var p1 = {
    name: "window cleaner",
    price: 5,
};
var p2 = {
    name: "broom",
    price: 10,
};
var p3 = {
    name: "sponge",
    price: 3,
};
var products = [p1, p2, p3];
function calcAverageProductPrice(productObjects) {
    var total = 0;
    for (var i = 0; i < productObjects.length; i++) {
        total += productObjects[i].price;
    }
    var avg = total / productObjects.length;
    return avg;
}
var avgNum = calcAverageProductPrice(products);
console.log(avgNum);
var i1 = {
    product: {
        name: "motor",
        price: 10.00,
    },
    quantity: 10,
};
var i2 = {
    product: {
        name: "sensor",
        price: 12.50,
    },
    quantity: 4,
};
var i3 = {
    product: {
        name: "LED",
        price: 1.00,
    },
    quantity: 20,
};
var inventory = [i1, i2, i3];
function calcInventoryValue(inventoryObjects) {
    var total = 0;
    for (var i = 0; i < inventoryObjects.length; i++) {
        var itemTotal = inventoryObjects[i].product.price * inventoryObjects[i].quantity;
        total += itemTotal;
    }
    return total;
}
var sumOfTotal = calcInventoryValue(inventory);
console.log(sumOfTotal);
//# sourceMappingURL=my-script.js.map