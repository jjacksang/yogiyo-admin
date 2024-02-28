import axios from "axios";
import { getAxios } from "./loginAPI";

interface ShopInfo {
    id: number;
    name: string;
    callNumber: string;
    address: string;
    categories: null;
}

interface Shop {
    shopId: number;
    shopName: string;
    orderNum: number;
    reviewNum: number;
    totalScore: number;
    distance: number;
    deliveryTime: number;
    minDeliveryPrice: number;
    maxDeliveryPrice: number;
    icon: string;
  }
  
  interface ShopList {
    content: Shop[];
    nextCursor: number;
    nextSubCursor: number;
    hasNext: boolean;
  }

  export const shopList = async () => {
    try {
      const resShops = await getAxios.get("/member/shop/list"); 
  
      const parsedShops: ShopList = resShops.data as ShopList;
  
      return parsedShops;
    } catch (error) {
      console.error("Error fetching shop list:", error);
      throw error; 
    }
  };