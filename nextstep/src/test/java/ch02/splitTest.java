package ch02;

import org.junit.Assert;
import org.junit.Test;

public class splitTest {

    @Test
    public void 스플릿테스트(){
        String[] values =  "1".split(",");
        Assert.assertArrayEquals(new String[]{"1"}, values);
    }
}
