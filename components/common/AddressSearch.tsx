import { Address } from '@/node_modules/react-daum-postcode/lib/loadPostcode';
import React from 'react';
import DaumPostcode from 'react-daum-postcode';


interface AddressSearchProps {
  onSelectAddress: (data: Address) => void;
  onClose: () => void;
}


const AddressSearch: React.FC<AddressSearchProps> = ({ onSelectAddress, onClose }) => {
  // 주소 선택 이벤트 핸들러
  const handleSelectAddress = (data: Address) => {
    onSelectAddress(data);
    onClose();
  };

  return (
    <div>
      <DaumPostcode onComplete={handleSelectAddress} autoClose />
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default AddressSearch;
