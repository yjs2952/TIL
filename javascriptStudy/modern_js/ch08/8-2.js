function myConcat(seperator) {
    var s = "";
    for (var i = 1; i < arguments.length; i++) {
        s += arguments[i];
        if (i < arguments.length - 1) s += seperator;
    }
    return s;
}

console.log(myConcat("/", "apple", "orange", "graph"));