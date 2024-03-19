import { registerShop } from '@/app/services/shopAPI';
import axios from '@/node_modules/axios/index';
import React, { ChangeEvent, useState, useEffect } from 'react';
import AddressSearch from './AddressSearch';


// closeModal 함수의 타입을 정의하기 위한 Props 인터페이스
interface DashboardModalProps {
  closeModal: () => void;
}


const DashboardModal: React.FC<DashboardModalProps> = ({ closeModal }) => {
  const [icon, setIcon] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null); // 배너 파일 상태
  const [iconFileName, setIconFileName] = useState('선택된 파일 없음');
  const [bannerFileName, setBannerFileName] = useState('선택된 파일 없음');
  const [shopName, setShopName] = useState(''); // 가게 이름
  const [callNumber, setCallNumber] = useState(''); // 전화번호
  const [exchangeNumber, setExchangeNumber] = useState(''); // 가운데 번호 
  const [areaCode, setAreaCode] = useState(''); // 끝 번호 
  const [subscriberNumber, setSubscriberNumber] = useState('');
  const [categories, setCategories] = useState('') // 카테고리 입력 
  const [showAddressSearch, setShowAddressSearch] = useState(false); // 주소 검색 모달 표시 상태
  const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소
  const [additionalAddress, setAdditionalAddress] = useState(''); // 나머지 주소 
  const [apiResponse, setApiResponse] = useState('');
  
  const shopData = {
    name: shopName,
    callNumber: `${areaCode}${exchangeNumber}${subscriberNumber}`,
    address: selectedAddress,
    latitude: 0,
    longitude: 0,
    categories: ["치킨","한식", "중국집", "버거"]
  }


// 파일 선택 핸들러
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'icon' | 'banner') => {
  const file = e.target.files ? e.target.files[0] : null;
  if (file) {
    if (type === 'icon') {
      setIcon(file);
      setIconFileName(file.name); // 아이콘 파일 이름 상태 업데이트
    } else if (type === 'banner') {
      setBanner(file);
      setBannerFileName(file.name); // 배너 파일 이름 상태 업데이트
      console.log(type, file);
    }
  }
};

  // file 상태가 변경될 때마다 실행될 useEffect
  useEffect(() => {
    console.log("Icon file:", icon);
    console.log("Banner file:", banner);
  }, [icon, banner]);
  

  
  // 전화번호 합치기
  const compileCallNumber = () => `<span class="math-inline">\{areaCode\}\-</span>{exchangeNumber}-${subscriberNumber}`;
  const compiledCallNumber = compileCallNumber();


  // 입점 신청 완료 버튼 클릭 이벤트 핸들러
  const handleRegisterShop = async () => {
    if (!shopName || !compiledCallNumber || !selectedAddress || !categories) {
      alert('모든 정보를 입력해주세요.');
      return;
    }

   // 가게 이름 입력 핸들러
   const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShopName(e.target.value);
  };

  // 전화번호 입력 핸들러
  const handleCallNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCallNumber(e.target.value);
  };

  // 카테고리 입력 핸들러
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategories(e.target.value);
  };


  // FormData 객체 생성 및 데이터 추가
  const formData = new FormData();
  if (icon) formData.append('icon', icon);
  if (banner) formData.append('banner', banner);
  formData.append('shopdata', JSON.stringify(shopData));
  
  try {
    const response = await registerShop(icon, banner, shopData); // 수정된 API 호출
    setApiResponse(JSON.stringify(response)); // 응답을 상태에 저장
    console.log("FormData가 성공적으로 전송되었습니다.");
  } catch (error) {
    console.error(error);
    setApiResponse('입점 신청 중 오류가 발생했습니다.');
  }
};



  // 주소 검색 모달을 표시하는 함수
  const handleOpenAddressSearch = () => {
    setShowAddressSearch(true);
  };

  // 주소 검색 모달에서 주소를 선택했을 때 실행되는 함수
  const handleSelectAddress = (data: { address: React.SetStateAction<string>; }) => {
    setSelectedAddress(data.address); // 선택된 주소 저장
    setShowAddressSearch(false); // 주소 검색 모달 숨기기
  };

   // 나머지 주소 입력 핸들러
   const handleAdditionalAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalAddress(e.target.value);
  };

  return (
    <div className="fixed left-2 overflow-y-auto flex flex-col h-[calc(100vh-196px)] max-h-[600px] min-h-[230px] w-[360px] rounded-lg border border-[rgba(0,0,0,0.8)] bg-white shadow-md text-[rgba(0,0,0,0.6)] z-10 cursor-default lg:absolute lg:top-[166px] lg:right-0"
     style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px', zIndex: 1000 }}>
       <div className="flex flex-col flex-none bg-white rounded-t-lg z-10 pt-4">
        <div className="flex flex-col flex-auto h-auto rounded-b-lg overflow-y-auto bg-white p-0" style={{padding: '16px 0px'}}>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 이름</label>
            <input value={shopName} onChange={(e) => setShopName(e.target.value)} type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 번호</label>
            <div className="flex gap-2">
              <input value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)} type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="지역번호"/>
              <input value={exchangeNumber}
                onChange={(e) => setExchangeNumber(e.target.value)}type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="국번"/>
              <input value={subscriberNumber}
                onChange={(e) => setSubscriberNumber(e.target.value)}type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="번호"/>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 주소</label>
            <input type="text" value={selectedAddress} readOnly onChange={(e) => setSelectedAddress(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
            <button onClick={() => setShowAddressSearch(true)} className="py-2 px-4 w-3/1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">주소 검색</button>
            <div>
              <input  
                value={additionalAddress}
                onChange={handleAdditionalAddressChange} type="text" placeholder="나머지 주소 입력" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
            </div>
          </div>
          {/* 주소 검색 모달 */}
            {showAddressSearch && (
              <AddressSearch
                onClose={() => setShowAddressSearch(false)} // 모달 닫기 함수
                onSelectAddress={handleSelectAddress}
              />
            )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">업종 카테고리</label>
            <input value={categories}  onChange={(e) => setCategories(e.target.value)}type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
          </div>
          {/* icon 부분 파일업로드창 */}
          <div className="mb-4">
            <label htmlFor="icon-upload" className="block text-sm font-medium text-gray-700">Icon</label>
            <div className="mt-1 flex justify-between items-center">
              <input type="text" className="p-1 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 mr-2 flex-grow w-1/3" value={iconFileName} readOnly/>
              <input type="file" id="icon-upload" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'icon')}/>
              <label htmlFor="icon-upload" className="cursor-pointer py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors text-sm w-1/3">
                파일 찾기
              </label>
            </div>
          </div>
          {/* banner 부분 파일업로드창*/}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Banner</label>
            <div className="mt-1 flex justify-between items-center">            
              <input type="text" className="p-1 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 mr-2 flex-grow w-1/3" value={bannerFileName} readOnly/>
              <input type="file" id="banner-upload" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'banner')}/>
              <label htmlFor="banner-upload" className="cursor-pointer py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors text-sm w-1/3">
                파일 찾기
              </label>
            </div>
          </div>
          <button onClick={handleRegisterShop} className="py-2 px-4 w-1/2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">
            입점 신청 완료
          </button>
          {apiResponse && <p className="text-gray-800">{apiResponse}</p>}
        </div>
      </div>
    </div>
  )
};

export default DashboardModal;