// AddressSearch.js 또는 AddressSearch.tsx

import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const AddressSearch = ({ onSelectAddress, onClose }) => {
  // 주소 선택 이벤트 핸들러
  const handleSelectAddress = (data) => {
    if (onSelectAddress) onSelectAddress(data); // 부모 컴포넌트에 선택된 주소 전달
    if (onClose) onClose(); // 모달 닫기
  };

  return (
    <div>
      <DaumPostcode onComplete={handleSelectAddress} autoClose />
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default AddressSearch;
