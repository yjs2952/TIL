package com.community.community.pojo;

import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PropertyTest {

    @Autowired
    private FruitProperty fruitProperty;

    @Test
    public void test(){
        List<Fruit> fruitData = fruitProperty.getList();

        Assert.assertThat(fruitData.get(0).getName(), Matchers.is("banana"));
        Assert.assertThat(fruitData.get(0).getColor(), Matchers.is("yellow"));
    }

}
