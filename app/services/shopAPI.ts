import axios from "axios";
import { getAxios } from "./loginAPI";
import { shoplistState } from "../recoil/state";
import DaumPostcode from "react-daum-postcode";

// 가게 정보 조회 
interface ShopInfo {
  id: number;
  name: string;
  callNumber: string;
  address: string;
  categories: null;
}

// 가게 입점 부분 
interface ShopRegistration {
  icon: {
    filename: string;
    contentType: string;
    data: Blob;
  };
  banner: {
    filename: string; 
    contentType: string; 
    data: Blob; 
  };
}

// 가게 입점 부분 정보
interface ShopData {
    name: string;
    callNumber: string;
    address: string;
    latitude: number;
    longitude: number;
    categories: string[];
};


  
// 점주 가게 목록 조회 
export interface OwnerShopList {
  id: number;
  name: string;
  icon: string;
}

  export const ShopList = async () => {
    try {
      const resShops = await getAxios.get("/owner/shop/"); 
  
      const parsedShops: OwnerShopList = resShops.data as OwnerShopList;
  
      console.log(resShops.data);
      
      return parsedShops;
    } catch (error) {
      console.error("Error fetching shop list:", error);
      throw error; 
    }
  };