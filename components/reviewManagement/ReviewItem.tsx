import { TotalReviewsAtom } from "@/app/recoil/state";
import { FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";

const ReviewItem = () => {
    const reviews = useRecoilValue(TotalReviewsAtom);
    console.log(reviews);
    const reviewReply = reviews.find((reply) => reply.ownerReply); // ownerReply 유무에 따라 설정하기
    console.log(reviewReply);
    const reviewImage = reviews.map((image) => {
        if (image.reviewImages !== undefined) return image.reviewImages.slice(25);
    });
    console.log(reviewImage);

    return (
        <div className="divide-y">
            {reviews.map((item) => (
                <div className="flex gap-6 py-4 px-4 " key={item.id}>
                    <div className="flex flex-col text-custom-gray text-sm gap-1 py-2 px-200">
                        <span className="font-bold text-base text-black">{item.memberName}</span>
                        <span className="font-bold text-md text-black">
                            {item.totalScore} <FaStar />
                        </span>
                        <div>
                            <span>맛{item.tasteScore}</span>
                            <span>양{item.quantityScore}</span>
                            <span>배달{item.deliveryScore}</span>
                        </div>
                        <span>{item.createdAt.toString().slice(0, 10)}</span>
                    </div>
                    <div className="flex flex-col px-4 py-2 text-custom-gray text-sm gap-2">
                        <span className="text-black text-base">{item.content}</span>
                        {item.reviewImages?.slice(25).length !== 0 ? (
                            <img
                                src={item.reviewImages}
                                className="w-32 h-32 border-hidden rounded-xl gap-1"
                            />
                        ) : (
                            <div></div>
                        )}

                        <div className="flex">
                            {item.menus.map((menu) => (
                                <span>
                                    {menu.name},{menu.quantity}개
                                </span>
                            ))}
                        </div>
                        <span>몇명이 도움됬는지?</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewItem;
