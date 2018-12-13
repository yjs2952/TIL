package ch14;

public class MyFunctionalInterfaceExample02 {
    public static void main(String[] args) {
        MyFunctionalInterface02 mfi;

        mfi = (x, y) -> {
            int result = x + y;
            return result;
        };
        System.out.println(mfi.method(2, 5));

        mfi = (x, y) -> {
            return x + y;
        };
        System.out.println(mfi.method(2, 5));

        mfi = (x, y) -> x + y;
        System.out.println(mfi.method(2, 5));

        mfi = (x, y) -> sum(x, y);
        System.out.println(mfi.method(2, 5));
    }

    public static int sum(int x, int y) {
        return x + y;
    }
}
