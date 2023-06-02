import React, { useState } from "react";
import imgOrder from "../../../assets/shop/banner2.jpg";
import MenuHeaderBanner from "../shared/MenuHeaderBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../shared/FoodCard";
import OrderTabs from "../shared/OrderTabs";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const OrderFood = () => {
    const { category } = useParams();
    const catagories = ['salad', 'pizza', 'soups', 'dessert', 'drinks'];
    const initialIndex = catagories.indexOf(category)
    
    const [tabindex, setTabindex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups=menu.filter(item=>item.category==='soup')
  return (
      <div>
          <Helmet>
        <title>Food Bites | Order Food</title>
      </Helmet>
      <MenuHeaderBanner
        img={imgOrder}
        title={"order food"}
        text={"text-5xl"}
      ></MenuHeaderBanner>
      <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
              <TabPanel>
                  <OrderTabs items={salads}></OrderTabs>
        </TabPanel>
              <TabPanel>
              <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
              <TabPanel>
              <OrderTabs items={soups}></OrderTabs>
        </TabPanel>
              <TabPanel>
              <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
              <TabPanel>
              <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
