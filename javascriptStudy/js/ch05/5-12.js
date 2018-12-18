// function sumAll() {
//     console.log(typeof (arguments) + ' : ' + arguments.length);
// }
//
// sumAll();

// function pythagoras(width, height) {
//     return Math.sqrt(width * width + height * height);
// }

// function square(x) {
//     return x * x;
// }
//
// function pythagoras(width, height) {
//     return Math.sqrt(square(width) + square(height));
// }

/* 내가 만든거 */

// 제곱 구하는 함수
function square(x) {
    return x * x;
}

// 피타고라스
function pythagoras(width, height) {

// 제곱 구하는 함수
    function square(x) {
        return x * x;
    }

    return Math.sqrt(square(width) + square(height));
}

// 피타고라스 함수 호출
console.log(pythagoras(3, 4));

/* 니가 만든 함수 */
// 삼각형이 직각인지 확인하는 함수
function square(width, height, hypotenuse) {
    if (width * width + height * height == hypotenuse * hypotenuse) {
        return true;
    }
    return false;
}