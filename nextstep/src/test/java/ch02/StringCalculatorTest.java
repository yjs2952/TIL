package ch02;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class StringCalculatorTest {

    private StringCalculator sc;

    @Before
    public void setup() {
        sc = new StringCalculator();
    }

    @Test
    public void _01_문자열이_비었니() throws Exception {
        Assert.assertEquals(0, sc.add(null));
        Assert.assertEquals(0, sc.add(""));
    }

    @Test
    public void _02_숫자하나입력() throws Exception {
        Assert.assertEquals(1, sc.add("1"));
    }

    @Test
    public void _03_숫자_두개_쉼표() throws Exception {
        Assert.assertEquals(3, sc.add("1,2"));
    }

    @Test
    public void _04_쉼표_이외_구분자() throws Exception {
        Assert.assertEquals(6, sc.add("1,2:3"));
    }

    @Test
    public void _05_문자사이_커스텀구분자() throws Exception {
        Assert.assertEquals(6, sc.add("//;\n1;2;3"));
    }

    @Test(expected = RuntimeException.class)
    public void _06_음수_런타임에러() throws Exception {
        sc.add("1,-2,3");
    }
}
