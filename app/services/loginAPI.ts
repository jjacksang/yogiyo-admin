import axios from "axios";

const getAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
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
        const resJoin = await getAxios.post("/member/join", userData);
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
    const resSubmit = await getAxios.post("/member/login", userData);
    if (resSubmit.status >= 200 && resSubmit.status < 300) {
        // window.location.href = "/";
        console.log(`${resSubmit.data.userId} 로그인 성공`);
        console.log(resSubmit);
    } else {
        console.log("Login api error");
    }
};

// export const SocialKakao = async (req: ReqAuth) => {
//     const baseURL = "https://kauth.kakao.com/authorize";
// };
