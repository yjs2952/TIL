function calcAvgHeight(data) {
    // Calculate average height from received data. If no data, return null.
    if (data == null) {
        return null;
    }

    var sum = 0;
    var entry = Object.keys(data);

    for (var i = 0; i < entry.length; i++) {
        sum += data[entry[i]]['height'];
    }

    return sum / entry.length;
}

var avgHeight = calcAvgHeight({
    Matt: {height: 174, weight: 69},
    Jason: {height: 190, weight: 103}
});

console.log(avgHeight);