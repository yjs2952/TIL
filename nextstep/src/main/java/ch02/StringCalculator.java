package ch02;

import org.jetbrains.annotations.NotNull;

public class StringCalculator {
    int add(String text) {
        if (isEmpty(text)) {
            return 0;
        }

        return sum(stringsToInt(split(text)));
    }

    private String[] split(String text) {
        return text.split(",|:");
    }

    private int[] stringsToInt(String[] values){
        int[] numbers = new int[values.length];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = Integer.parseInt(values[i]);
        }

        return numbers;
    }

    private int sum(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }

    private boolean isEmpty(String text) {
        return text == null || text.isEmpty();
    }
}
