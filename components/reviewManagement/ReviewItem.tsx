import { TotalReviewsAtom } from "@/app/recoil/state";
import { FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { Button } from "../common/Button";
import { getAxios } from "@/app/services/loginAPI";
import React, { useState } from "react";
import { patchReply } from "@/app/services/shopAPI";

const ReviewItem = () => {
    const reviews = useRecoilValue(TotalReviewsAtom);
    const [clickBtn, setClickBtn] = useState<boolean>(false);
    const [replyContent, setReplyContent] = useState<string | undefined>();
    // console.log(reviews);
    const reviewReply = reviews.find((reply) => reply.ownerReply); // ownerReply 유무에 따라 설정하기
    // console.log(reviewReply);
    // console.log(replyContent);

    const handlePatchReview = (reviewId: number) => {
        patchReply(reviewId, replyContent);
    };

    const deleteReply = async (reviewId: number) => {
        try {
            const res = await getAxios.delete(`owner/review/${reviewId}`);
            if (res.status === 204) console.log(res.data);
        } catch (error) {
            console.error("댓글 삭제 실패", error);
        }
    };

    const onClickReplyBtn = () => {
        setClickBtn(!clickBtn);
    };

    const onChangeReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReplyContent(e.target.value);
    };

    const ReviewReply = (reviewId: number) => {
        const replyDate = new Date().toLocaleDateString();

        return (
            <div className="flex flex-col border rounded-xl px-2 py-2 bg-box-gray ">
                <div className="flex justify-between w-full px-2 py-2">
                    <span>사장님{replyDate}</span>
                    <div className="flex gap-2">
                        <button
                            className="text-yogiyo-blue"
                            onClick={() => {
                                handlePatchReview(reviewId);
                            }}
                        >
                            저장
                        </button>
                        <button
                            onClick={() => {
                                deleteReply(reviewId);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                </div>
                <textarea
                    onChange={onChangeReply}
                    className="px-2 py-2 w-full h-[160px] outline-none resize-none bg-transparent"
                >
                    {" "}
                </textarea>
            </div>
        );
    };

    return (
        <div className="divide-y w-full">
            {reviews.map((item) => (
                <div className="flex gap-6 py-4 px-4" key={item.id}>
                    <div className="flex flex-col text-custom-gray text-sm gap-1 py-2 px-2">
                        <span className="font-bold text-lg text-black">{item.memberName}</span>
                        <span className="flex font-bold text-md text-black">
                            <div className="flex items-center">
                                {item.totalScore} <FaStar style={{ color: "yellow" }} />
                            </div>
                        </span>
                        <div className="flex items-center gap-1 text-base">
                            <div className="flex">
                                맛
                                <div className="flex items-center text-[#fbfb47] font-bold">
                                    <FaStar />
                                    {item.tasteScore}
                                </div>
                            </div>
                            <div className="flex">
                                양
                                <div className="flex items-center text-[#fbfb47] font-bold">
                                    <FaStar style={{ color: "yellow" }} />
                                    {item.quantityScore}
                                </div>
                            </div>
                            <div className="flex">
                                배달
                                <div className="flex items-center text-[#fbfb47] font-bold">
                                    <FaStar style={{ color: "yellow" }} />
                                    <span>{item.deliveryScore}</span>
                                </div>
                            </div>
                        </div>
                        <span>{item.createdAt.toString().slice(0, 10)}</span>
                    </div>
                    <div className="grow px-4 py-2 gap-2">
                        <div className="flex flex-col py-2 text-custom-gray text-sm">
                            <span className="text-black text-base">{item.content}</span>
                            {item.reviewImages.length > 0 && (
                                <div>
                                    {item.reviewImages.map((imageUrl, index) => (
                                        <img
                                            src={`https://yogiyo-clone.shop${imageUrl}`}
                                            key={index}
                                            className="w-32 h-32 border-hidden rounded-xl gap-1"
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="flex">
                                {item.menus.map((menu, index) => (
                                    <span key={index}>
                                        {menu.name},{menu.quantity}개
                                    </span>
                                ))}
                            </div>
                            <span>몇명이 도움됬는지?</span>
                            <Button onClick={onClickReplyBtn}>댓글 쓰기</Button>
                            {clickBtn ? ReviewReply(item.id) : <div></div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewItem;
