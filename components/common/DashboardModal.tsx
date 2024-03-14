import React, { useState } from 'react';
import AddressSearch from './AddressSearch';

const DashboardModal = ({ closeModal }) => {

  const [fileName, setFileName] = useState('선택된 파일 없음');
  const [showAddressSearch, setShowAddressSearch] = useState(false); // 주소 검색 모달 표시 상태
  const [selectedAddress, setSelectedAddress] = useState(''); // 선택된 주소

  // 파일 선택 핸들러
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('선택된 파일 없음');
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

  return (
    <div className="fixed left-2 overflow-y-auto flex flex-col h-[calc(100vh-196px)] max-h-[600px] min-h-[230px] w-[360px] rounded-lg border border-[rgba(0,0,0,0.8)] bg-white shadow-md text-[rgba(0,0,0,0.6)] z-10 cursor-default lg:absolute lg:top-[166px] lg:right-0"
     style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px' }}>
       <div className="flex flex-col flex-none bg-white rounded-t-lg z-10 pt-4">
        <div className="flex flex-col flex-auto h-auto rounded-b-lg overflow-y-auto bg-white p-0" style={{padding: '16px 0px'}}>
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 이름</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 번호</label>
            <div className="flex gap-2">
              <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="지역번호"/>
              <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="국번"/>
              <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/4" placeholder="번호"/>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">가게 주소</label>
            <input type="text" value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
            <button onClick={handleOpenAddressSearch} className="py-2 px-4 w-3/1 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">주소 검색</button>
            <div>
              <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
            </div>
          </div>
          {/* 주소 검색 모달 */}
            {showAddressSearch && (
              <AddressSearch
                onClose={() => setShowAddressSearch(false)} // 모달 닫기 함수
                onSelectAddress={handleSelectAddress} // 주소 선택 함수
              />
            )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">업종 카테고리</label>
            <input type="text" className="mt-1 p-2 border border-gray-300 rounded-md w-1/2"/>
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
          <button className="py-2 px-4 w-1/2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">입점 신청 완료</button>
        </div>
      </div>
    </div>
  )
};

export default DashboardModal;