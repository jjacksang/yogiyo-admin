import { FaStar } from "react-icons/fa";
import { useRecoilState, useRecoilValue } from "recoil";
import { TotalReviewsAtom, shopIdAtom } from "@/app/recoil/state";
import TotalReview from "./TotalReview";
import React, { useEffect, useState } from "react";
import DatePickerComponent from "./DatePicker/DatePickerComponent";
import { Button } from "../common/Button";
import ReviewItem from "./ReviewItem";
import { fetchReviews } from "@/app/services/shopAPI";
import { ItemLayout } from "../common/ItemLayout";
import { ItemHeader } from "../common/ItemHeader";

export const ReviewManagement = () => {
    const shopId = useRecoilValue(shopIdAtom);
    const [getReviews, setGetReviews] = useRecoilState(TotalReviewsAtom);
    const [sortReview, setSortReview] = useState("LATEST");
    const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
        startDate: null,
        endDate: null,
    });

    const reviewOption = [
        { value: "LATEST", label: "최신순" },
        { value: "RATING_LOW", label: "별점 낮은순" },
        { value: "RATING_HIGH", label: "별점 높은순" },
    ];

    const handleFetchReviews = async () => {
        const fetchedReviews = await fetchReviews({
            shopId: shopId,
            dateRange,
            sortReview,
        });
        setGetReviews(fetchedReviews);
    };

    const handleSortReview = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortReview(e.target.value);
    };

    const handleDateChange = (newDateRange: { startDate: Date | null; endDate: Date | null }) => {
        setDateRange(newDateRange);
    };

    return (
        <div className="my-4 mx-2">
            <ItemLayout>
                <ItemHeader>
                    <TotalReview />
                </ItemHeader>
                <div className="flex flex-col border rounded-xl py-4 w-full bg-white">
                    <div className="flex px-4 gap-2">
                        <div className="flex">
                            <select
                                className="border rounded-xl px-2 py-2 text-custom-gray"
                                onChange={handleSortReview}
                                value={sortReview}
                            >
                                {reviewOption.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex">
                            <DatePickerComponent
                                dateRange={dateRange}
                                onChange={handleDateChange}
                            />
                        </div>
                        <Button onClick={handleFetchReviews}>조회</Button>
                    </div>

                    <ReviewItem />
                </div>
            </ItemLayout>
        </div>
    );
};
