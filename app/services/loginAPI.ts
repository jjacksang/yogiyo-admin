import axios from "axios";

export const getAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

export const emailJoin = async (email: string, password: string, nickname: string) => {
    const userData = {
        email,
        password,
        nickname,
        providerType: "DEFAULT",
    };
    console.log(userData);
    try {
        const resJoin = await getAxios.post("/owner/join", userData);
        return resJoin.data;
    } catch (error) {
        console.log(error);
    }
};

export const emailLogin = async (email: string, password: string) => {
    const userData = {
        email,
        password,
        authCode: null,
        providerType: "DEFAULT",
    };

    console.log(userData);

    const resSubmit = await getAxios.post("/owner/login", userData);
    if (resSubmit.status >= 200 && resSubmit.status < 300) {
        console.log(`${resSubmit.data.userId} 로그인 성공`);
        console.log(resSubmit);

        const userId = resSubmit.data.userId;
        const userEmail = resSubmit.data.email;

        const resMyPage = await getAxios.get("/owner/mypage");

        return { userId, userEmail };
    } else {
        console.log("Login api error");
        return null;
    }
};

export const KakaoLogin = () => {
    const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}`;
    const RESPONSE_TYPE = "code";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    window.location.href = KAKAO_AUTH_URL;
};

    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
};