package ch14;

public class UsingLocalVariable {
    void method(int arg) {
        int localVal = 40;

//        arg = 11;
//        localVal = 41;

        // arg 수정 불가
        // localVal 수정 불가

        MyFunctionalInterface04 fi = () -> {
            System.out.println("arg : " + arg);
            System.out.println("localVal : " + localVal + "\n");
        };
        fi.method();
    }
}
