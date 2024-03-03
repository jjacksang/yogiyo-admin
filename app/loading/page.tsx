"use client";
import { useRouter, useSearchParams } from "next/navigation";
import react, { useEffect } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userStateAtom } from "../recoil/state";

export default function Loading() {
    const setUserState = useSetRecoilState(userStateAtom);
    const router = useRouter();
    const getKakaoToken = async () => {
        const CLIENT_ID = `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`;
        const REDIRECT_URI = `${process.env.NEXT_PUBLIC_KAKAO_LOGIN_REDIRECT_URI}`;
        const code = new URL(window.location.href).searchParams.get("code");

        if (code && !localStorage.getItem("kakao_token")) {
            try {
                const response = await axios({
                    method: "POST",
                    url: "https://kauth.kakao.com/oauth/token",
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded",
                    },
                    data: `grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                });
                console.log(response);

                if (response.status === 200) {
                    localStorage.setItem("kakao_token", response.data.access_token);
                    try {
                        const resProfile = await axios({
                            method: "GET",
                            url: "https://kapi.kakao.com/v2/user/me",
                            headers: {
                                Authorization: `Bearer ${response.data.access_token}`,
                            },
                        });
                        console.log(resProfile);
                        const user = {
                            userId: resProfile.data.id,
                            email: resProfile.data.kakao_account.email,
                            nickname: resProfile.data.properties.nickname,
                            isLoggedIn: true,
                        };
                        setUserState(user);
                        router.push("/");
                    } catch (error) {
                        console.log("프로필 가져오기 실패");
                    }
                } else {
                    console.log("token발급 실패");
                }
            } catch (error) {
                // console.log(error.response.data);
            }
        }
    };

    const getNaverToken = async () => {
        const CODE = new URL(window.location.href).searchParams.get("code");
        const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
        const CLIENT_SECRET = process.env.NEXT_PUBLIC_NAVER_SECRET_KEY;
        const REDIRECT_URI = process.env.NEXT_PUBLIC_NAVER_LOGIN_REDIRECT_URI as string;
        const STATE = new URL(window.location.href).searchParams.get("state");
        console.log(CODE);

        if (CODE) {
            try {
                const response = await axios({
                    method: "GET",
                    url: "https://nid.naver.com/oauth2.0/token",
                    params: {
                        grant_type: "authorization_code",
                        client_id: CLIENT_ID,
                        client_secret: CLIENT_SECRET,
                        code: CODE,
                        redirect_uri: REDIRECT_URI as string,
                        state: STATE,
                    },
                });
                console.log(response);
                if (response.status === 200) {
                    localStorage.setItem("naver_token", response.data.access_token);
                } else {
                    console.log("토큰 발급 실퍃ㅎ");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        const provider = localStorage.getItem("provider");
        if (provider === "kakao") {
            getKakaoToken();
        } else if (provider === "naver") {
            getNaverToken();
        }
    }, []);
    return (
        <>
            <h2>로딩 페이지</h2>
        </>
    );
}
