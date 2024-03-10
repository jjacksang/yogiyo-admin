import axios from "axios";
import { useRouter } from "next/navigation";

export const getAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

export const LogoutBtn = async (userId: number) => {
    const resLogout = await getAxios
        .post(`/owner/logout/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer" + "token",
            },
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

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
        const { userId, email: userEmail, nickname: userNickname } = resSubmit.data;
        console.log(`${resSubmit.data.userId} 로그인 성공`);
        console.log(resSubmit);

        const resMyPage = await getAxios.get("/owner/mypage");

        return { userId, userEmail, userNickname };
    } else {
        console.log("Login api error");
        return null;
    }
};

export const SocialKakao = async () => {
    const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`;
    const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}`;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
};

export const SocialNaver = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_LOGIN_REDIRECT_URI;
    const STATE = "jjak";
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;
};
