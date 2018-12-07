package ch02;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class StringCalculatorTest {

    private StringCalculator sc;

    @Before
    public void setup(){
        sc = new StringCalculator();
        System.out.println("StringCalculator");
    }

    @Test
    public void _01문자열이_비었니(){
        Assert.assertEquals(0, sc.add(null));
        Assert.assertEquals(0, sc.add(""));
    }

    @Test
    public void _02숫자하나입력(){
        Assert.assertEquals(1, sc.add("1"));
    }

    @Test
    public void _03숫자_두개_쉼표(){
        Assert.assertEquals(3, sc.add("1,2"));
    }

    @Test
    public void _04쉼표_이외_구분자(){
        Assert.assertEquals(6, sc.add("1,2:3"));
    }

    @Test
    public void _05문자사이_커스텀구분자(){
        Assert.assertEquals(6, sc.add("//;\n1;2;3"));
    }

    @Test(expected = RuntimeException.class)
    public void _06음수_런타임에러(){
        sc.add("1,-2,3");
    }
}
