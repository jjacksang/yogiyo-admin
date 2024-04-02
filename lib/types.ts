export interface OwnerJoin {
    nickname: string;
    email: string;
    password: string;
    providerType: "DEFAULT";
}

export interface OwnerJoinResponse {
    id: number;
}

export interface OwnerLogin {
    email: string | null;
    password: string | null;
    authCode: null | string;
    providerType: "DEFAULT";
}

export interface SocialLogin {
    email: string | null;
    password: string | null;
    authcode: string;
    providerType: string;
}

export interface KakaoAuth {
    client_id: string;
    redirect_uri: string;
    repose_type: string;
}

export interface ReqAuth {
    code: string;
    client_id: string;
    redirect_uri: string;
    state?: string;
}

export interface userState {
    userId: number;
    nickname: string;
    email: string;
    isLoggedIn: boolean;
    shopId?: number;
}

export interface DynamicRoute {
    params: {
        provider: string;
    };
}

export interface AddMenu {
    shopId: number;
    name: string;
    content: string;
}

export interface MenuList {
    id: number;
    name: string;
    content: string;
}

// export interface ShopId {
//     id: number;
// }
