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

// 가게 일시정지 
export interface TempCloseShopRequest {
  closeUntil: string; 
  today: null | string; 
}

