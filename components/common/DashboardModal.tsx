import { registerShop } from '@/app/services/shopAPI';
import axios from '@/node_modules/axios/index';
import React, { ChangeEvent, useState } from 'react';
import AddressSearch from './AddressSearch';

const DashboardModal = ({ closeModal }) => {
  const [icon, setIcon] = useState<File | null>(null); // 아이콘 파일 상태
  const [banner, setBanner] = useState<File | null>(null); // 배너 파일 상태
  const [shopName, setShopName] = useState(''); // 가게 이름
  const [callNumber, setCallNumber] = useState(''); // 전화번호
  const [areaCode, setAreaCode] = useState(''); // 지역번호
  const [exchangeNumber, setExchangeNumber] = useState(''); // 국번
  const [subscriberNumber, setSubscriberNumber] = useState(''); // 번호
  const [address, setAddress] = useState(''); // 주소
  const [additionalAddress, setAdditionalAddress] = useState(''); // 나머지 주소 
  const [fileName, setFileName] = useState('선택된 파일 없음');
  const [file, setFile] = useState<File | null>(null);
  const [categories, setCategories] = useState('') // 카테고리 입력 
  const [showAddressSearch, setShowAddressSearch] = useState(false); // 주소 검색 모달 표시 상태
  const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소
  const [apiResponse, setApiResponse] = useState('');

  // 파일 선택 핸들러
  const handleFileSelect = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      setFileName('선택된 파일 없음');
      setFile(null);
    }
  };


  // 전화번호 합치기
  const compileCallNumber = () => `${areaCode}-${exchangeNumber}-${subscriberNumber}`;
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
  if (banner) formData.append('banner', banner);
  // 개별 속성으로 추가
  formData.append('name', shopName);
  formData.append('callNumber', compileCallNumber());
  formData.append('address', selectedAddress + " " + additionalAddress);
  formData.append('latitude', '0'); // 실제 값을 사용해야 함
  formData.append('longitude', '0'); // 실제 값을 사용해야 함
  formData.append('categories', JSON.stringify(categories.split(',').map(item => item.trim())));


  try {
    const response = await registerShop(formData); // 수정된 API 호출
    setApiResponse(JSON.stringify(response)); // 응답을 상태에 저장
    console.log(formData);
    
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
  const handleSelectAddress = (data) => {
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Icon Banner</label>
            <div className="mt-1 flex justify-between items-center">
              {/* 파일 선택 인풋창 */}
              <input type="text" className="p-1 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 mr-2 flex-grow w-1/3" value={fileName} readOnly/>
              {/* 파일 선택을 위한 숨겨진 인풋 필드 */}
              <input type="file" id="file-upload" className="hidden" accept="image/*" onChange={handleFileSelect}/>
              {/* 파일 찾기 버튼 */}
              <label htmlFor="file-upload" className="cursor-pointer py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors text-sm w-1/3">
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