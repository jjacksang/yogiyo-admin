import { getAxios } from "@/app/services/loginAPI";
import { ItemHeader } from "../menu/menuModal/common/ItemHeader";
import { ItemLayout } from "../menu/menuModal/common/ItemLayout";
import { FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { shopIdAtom } from "@/app/recoil/state";

const dummyData = {
    sort: "LATEST",
    startDate: 2024 - 5 - 21,
    endDate: 2024 - 5 - 26,
    status: "ALL",
};

export const ReviewManagement = () => {
    const shopId = useRecoilValue(shopIdAtom);
    const getReviews = async () => {
        try {
            const res = await getAxios.get(
                `/owner/review/shop/${shopId}?sort=LATEST&startDate=2023-10-20&endDate=2023-10-23&status=ALL&cursor=11&limit=10`
            );
            if (res.status === 200) {
                console.log(res.data);
            }
        } catch (error) {
            console.log("리뷰 조회 실패", error);
        }
    };
    return (
        <div className="my-4 mx-2">
            <ItemLayout>
                <ItemHeader>
                    <div className="flex flex-col w-full divide-y gap-2">
                        <div className="px-4 py-2">
                            <span className="text-custom-gray text-xl" onClick={getReviews}>
                                리뷰관리
                            </span>
                        </div>
                        <div className="px-4 py-4">
                            <span className="text-custom-gray text-base">전체 별점</span>
                            <div>
                                <div>
                                    <FaStar size="16" color="yellow" />
                                </div>
                                <span>(총리뷰)</span>
                            </div>
                            <div>
                                <span>맛</span>
                                <span>양</span>
                                <span>배달</span>
                            </div>
                        </div>
                    </div>
                </ItemHeader>
            </ItemLayout>
        </div>
    );
};
