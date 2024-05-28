import { FaStar } from "react-icons/fa";

const ReviewItem = () => {
    return (
        <div className="flex">
            <div className="flex flex-col text-custom-gray text-sm gap-1 py-2 px-2">
                <span className="font-bold text-lg text-black">userId</span>
                <span className="font-bold text-md text-black">
                    5.0 <FaStar />
                </span>
                <div>
                    <span>맛</span>
                    <span>양</span>
                    <span>배달</span>
                </div>
                <span>2023.06.01</span>
            </div>
            <div className="flex flex-col px-4 py-2">
                <span>양도 많고 감자도 맛있고 개꿀맛이네요</span>
                <span>대충 이미지 영역</span>
                <span>대충 뭐 시켰는지 보여주는 곳</span>
                <span>몇명이 도움됬는지?</span>
            </div>
        </div>
    );
};

export default ReviewItem;
