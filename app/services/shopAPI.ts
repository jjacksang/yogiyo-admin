import axios from "axios";
import { getAxios } from "./loginAPI";
import { shoplistState } from "../recoil/state";

// 가게 정보 조회 
interface ShopInfo {
  id: number;
  name: string;
  callNumber: string;
  address: string;
  categories: null;
}

// 가게 입점 부분 
interface ShopRegistration{
  icon: {
    filename: string; // 
    contentType: string; // 이미지 부분 "image/png"
    data: Blob; 
  };

  banner: {
    filename: string; 
    contentType: string; 
    data: Blob; 
  };

  shopData: {
    name: string;
    callNumber: string;
    address: string;
    latitude: number;
    longitude: number;
    categories: string[];
  };


}
  
// 점주 가게 목록 조회 
export interface OwnerShopList {
  id: number;
  name: string;
  icon: string;
}

// 점주 가게 입점 
export const registerShop = async () => {
  

  // // FormData 객체 생성
  // const formData = new FormData();
  // formData.append('icon', icon.data, icon.filename);
  // formData.append('banner', banner.data, banner.filename);
  // formData.append('shopData', JSON.stringify(shopData));



  try {
      // getAxios 인스턴스를 사용하여 Authorization 헤더와 함께 요청 전송
      const token = localStorage.getItem('kakao_token')
      const response = await getAxios.post('/owner/shop/register', {
          headers: {
            'Authorization': `bearer${token}`,
            'Content-Type': 'application/json',
          },
      });
      return response.data; // 성공 응답 데이터 반환
  } catch (error) {
      console.error(error);
      throw error;
  }
};


// 가게 목록 조회 함수
export const fetchShopList = async () => {
  try {
    const response = await getAxios.get('/owner/shop/list', {
      headers: { 
      'Content-Type' : 'application/json',
    },
  })
    return response.data; // 성공 응답 데이터 반환
  } catch (error) {
    console.error("가게 목록 조회 중 오류:", error);
    throw error;
  }
}

