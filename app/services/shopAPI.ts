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




// 점주 가게 입점 
export async function registerShop(icon, banner, shopData) {
  const formData = new FormData();
  
  // icon이 null이 아니면 FormData 객체에 추가
  if (icon !== null) {
    formData.append('icon', icon, icon.name);
  }

  // banner가 null이 아니면 FormData 객체에 추가
  if (banner !== null) {
    formData.append('banner', banner, banner.name);
  }
  
  // shopData를 JSON 문자열로 변환하여 FormData 객체에 추가
  formData.append('shopData', new Blob([JSON.stringify(shopData)], { type: 'application/json' }));

  

// 입점 부분 
  try {
      // getAxios 인스턴스를 사용하여 Authorization 헤더와 함께 요청 전송
      const response = await getAxios.post('/owner/shop/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          
      });
      console.log(response.data);
      return response.data; // 성공 응답 데이터 반환
      
  } catch (error) {
      console.error(error);
      throw error;
  }
};



