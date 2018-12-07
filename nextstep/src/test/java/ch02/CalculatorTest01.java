package ch02;

import org.junit.Assert;
import org.junit.Test;

public class CalculatorTest01 {

    private Calculator cal = new Calculator();

    @Test
    public void add(){
        Assert.assertEquals(9, cal.add(6, 3));
    }

    @Test
    public void subtract(){
        Assert.assertEquals(3, cal.subtract(6, 3));
    }
}
