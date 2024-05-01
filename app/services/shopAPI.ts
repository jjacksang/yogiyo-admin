import { getAxios } from "./loginAPI";


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


export const ShopList = async () => {
  try {
      const resShops = await getAxios.get("/owner/shop/");
      console.log(resShops.data);
      return resShops.data;
  } catch (error) {
      console.error("Error fetching shop list:", error);
      throw error;
  }
};


// 메뉴 그룹 추가
export const GroupList = async () => {
  const shopId = 1062565;
  try {
      const res = await getAxios.get(`/owner/menu-group/shop/${shopId}`);
      console.log(res.data);
      return res.data;
  } catch (error) {
      console.log(error);
  }
};

// 메뉴 그룹 삭제

export const DeleteMenuGroup = async () => {
    try {
        const res = await getAxios.delete(`owner/menu-group/`);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error("삭제오류", error);
    }
};

// 메뉴 그룹 메뉴 추가

// 메뉴 그룹 메뉴 조회
