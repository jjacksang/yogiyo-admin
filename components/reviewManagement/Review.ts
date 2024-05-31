//리뷰 타입
export interface IReview {
    nextCursor: number;
    nextSubCursor: number;
    hasNext: boolean;
    content: IReviewContent[] | null;
}

// 리뷰 컨텐츠 타입
export interface IReviewContent {
    id: number;
    tasteScore: number;
    quantityScore: number;
    deliveryScore: number;
    totalScore: number;
    content: string;
    ownerReply: string | null;
    memberName: string;
    createdAt: string;
    reviewImages: string[];
    menus: {
        name: string;
        quantity: number;
        price: number;
    }[];
}

interface reviewImage {
    url: string;
    description: string;
}
