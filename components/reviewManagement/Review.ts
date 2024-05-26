// 리뷰 타입
export interface IReview {
    id: number;
    tasteScore: number;
    quantityScore: number;
    deliveryScore: number;
    totalScore: number;
    content: string;
    ownerReply: string;
    memberName: string;
    createdAt: string;
    reviewImages: [string];
    menus: [
        {
            name: string;
            quantity: number;
            price: number;
        }
    ];
}
