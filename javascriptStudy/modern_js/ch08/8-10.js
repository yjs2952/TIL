function Primes(n) {
    // 2~n 사이의 소수 구하기
    var p = [];
    for (var i = 0; i <= n; i++) p[i] = true;
    var max = Math.floor(Math.sqrt(n))
    var x = 2;
    while (x <= max) {
        for (let i = 0; i <= n; i++) p[i] = false;
        while (!p[++x]) ;
    }
    // 소수만 꺼내 배열 primesㅇ[ 저장]

    var primes = [], nprimes = 0;
    for (var i = 0; i <= n; i++) if (p[i]) primes[nprimes++] = i;
    p = null;

    // 소수 m개를 무작위로 선택하여 곱한 값을 반환하는 함수를 반환
    return function (m) {
        for (var i = 0, product = 1; i < m; i++) {
            product *= primes[Math.floor(Math.random() * nprimes)]
        }
        return product;
    };
}

var primeProduct = Primes(10000);
console.log(primeProduct(2));
console.log(primeProduct(2));

