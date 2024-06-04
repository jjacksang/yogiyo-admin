import React, { useEffect, useState } from "react";

export const ManageBusinessHours = () => {
    // 시간 옵션 생성
    const generateHourOptions = () => {
        const hours: string[] = [];
        const periods = ["오전", "오후"];
        periods.forEach((period) => {
            for (let i = 1; i <= 12; i++) {
                hours.push(`${period} ${i}시`);
            }
        });
        return hours;
    };

    // 분 옵션 생성
    const generateMinuteOptions = () => {
        const minutes = [];
        for (let i = 0; i <= 50; i += 10) {
            minutes.push(`${i}분`);
        }
        return minutes;
    };

    // 반응형 대응
    const [maxWidthStyle, setMaxWidthStyle] = useState("936px");

    // 수정 버튼 상태관리
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDailyMode, setIsDailyMode] = useState(true); // 새로운 상태 변수 추가
    const [breakTimes, setBreakTimes] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) {
            setMaxWidthStyle("calc(100% - 80px)");
        } else if (screenWidth >= 768) {
            setMaxWidthStyle("calc(100% - 64px)");
        } else {
            setMaxWidthStyle("936px");
        }
    }, []);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleCancelClick = () => {
        setIsEditMode(false);
    };

    const handleDailyClick = () => {
        setIsDailyMode(true);
    };

    const handleDifferentDaysClick = () => {
        setIsDailyMode(false);
    };

    const handleAddBreakTime = (day: string) => {
        setBreakTimes((prev) => ({ ...prev, [day]: true }));
    };

    const handleRemoveBreakTime = (day: string) => {
        setBreakTimes((prev) => ({ ...prev, [day]: false }));
    };

    return (
        <div
            className="relative flex flex-col min-h-screen overflow-auto z-10 bg-[#F7F7F7]"
            style={{ flex: "1 1 auto", overscrollBehavior: "none", zIndex: 1 }}
        >
            {/* 네비게이션 바 부분 */}
            <div
                className="flex items-center w-full px-4 lg:px-6 h-16 bg-white shadow-md"
                style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 8px",
                }}
            >
                {/* 네비게이션 카테고리 넣는 곳 */}
            </div>

            {/* 메인 콘텐츠 영역 */}
            <div className="w-full">
                <div
                    style={{ maxWidth: maxWidthStyle }}
                    className="flex flex-auto flex-col mx-auto"
                >
                    <div className="flex-auto min-w-0" style={{ maxWidth: "936px" }}>
                        <div
                            className="flex flex-col mt-8 rounded-lg bg-white"
                            style={{
                                border: "1px solid rgba(0, 0, 0, 0.1)",
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 6px",
                            }}
                        >
                            {/* 윗부분 */}
                            <div
                                className="pt-8 px-6 pb-6"
                                style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}
                            >
                                <div className="flex items-center">
                                    <div
                                        className="flex items-center flex-auto"
                                        style={{
                                            minHeight: "2.5rem",
                                            fontSize: "1.375rem",
                                            lineHeight: "1.875rem",
                                            color: "rgba(0, 0, 0, 0.8)",
                                        }}
                                    >
                                        영업시간
                                    </div>
                                    <div className="ml-2 flex">
                                        {!isEditMode && (
                                            <button
                                                className="text-blue-500"
                                                onClick={handleEditClick}
                                            >
                                                수정
                                            </button>
                                        )}
                                        {isEditMode && (
                                            <button
                                                className="text-blue-500"
                                                onClick={handleCancelClick}
                                            >
                                                취소
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* 중간 부분 */}
                            <div className="mt-6 mx-6 mb-8">
                                {isEditMode ? (
                                    <div className="mb-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div style={{ flex: 1 }}>
                                                <p style={{ color: "#6B7280", fontSize: "1rem" }}>
                                                    영업주기
                                                </p>
                                                <button
                                                    className="border border-gray-300 text-gray-700 bg-white rounded-md py-4 px-10"
                                                    style={{
                                                        margin: "8px",
                                                        marginLeft: "0",
                                                        height: "60px",
                                                    }}
                                                    onClick={handleDailyClick}
                                                >
                                                    매일 같은 시간에 영업해요
                                                </button>
                                                <button
                                                    className="border border-gray-300 text-gray-700 bg-white rounded-md py-4 px-10"
                                                    style={{ margin: "8px", height: "60px" }}
                                                    onClick={handleDifferentDaysClick}
                                                >
                                                    요일별로 다르게 영업해요
                                                </button>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>

                                                {isDailyMode ? (
                                                    <div>
                                                        <div className="flex items-center justify-between mb-6">
                                                            <div>
                                                                <p
                                                                    style={{
                                                                        color: "#6B7280",
                                                                        fontSize: "1rem",
                                                                        display: "inline-block",
                                                                        marginRight: "8px",
                                                                    }}
                                                                >
                                                                    매일
                                                                </p>
                                                                <p
                                                                    style={{
                                                                        color: "#6B7280",
                                                                        fontSize: "1rem",
                                                                        display: "inline-block",
                                                                        marginRight: "16px",
                                                                    }}
                                                                >
                                                                    영업일
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <p
                                                                    style={{
                                                                        color: "#6B7280",
                                                                        fontSize: "1rem",
                                                                        marginRight: "8px",
                                                                    }}
                                                                >
                                                                    24시간
                                                                </p>
                                                                <input type="checkbox" />
                                                            </div>
                                                        </div>

                                                        {/* 시작 부분 */}
                                                        <span className="text-sm text-gray-400">
                                                            시작
                                                        </span>
                                                        <select
                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                            style={{
                                                                marginLeft: "10px",
                                                                marginRight: "10px",
                                                            }}
                                                        >
                                                            {generateHourOptions().map((hour) => (
                                                                <option key={hour} value={hour}>
                                                                    {hour}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <select
                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                            style={{ marginRight: "8px" }}
                                                        >
                                                            {generateMinuteOptions().map(
                                                                (minute) => (
                                                                    <option
                                                                        key={minute}
                                                                        value={minute}
                                                                    >
                                                                        {minute}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>

                                                        {/* 종료 부분 */}
                                                        <span className="text-sm text-gray-400">
                                                            {" "}
                                                            ~ 종료
                                                        </span>
                                                        <select
                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                            style={{
                                                                marginLeft: "10px",
                                                                marginRight: "10px",
                                                            }}
                                                        >
                                                            {generateHourOptions().map((hour) => (
                                                                <option key={hour} value={hour}>
                                                                    {hour}
                                                                </option>
                                                            ))}
                                                        </select>

                                                        <select
                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                            style={{ marginRight: "8px" }}
                                                        >
                                                            {generateMinuteOptions().map(
                                                                (minute) => (
                                                                    <option
                                                                        key={minute}
                                                                        value={minute}
                                                                    >
                                                                        {minute}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>

                                                        <button
                                                            className="text-blue-500 mt-2"
                                                            onClick={() =>
                                                                handleAddBreakTime("매일")
                                                            }
                                                        >
                                                            + 휴게시간 추가
                                                        </button>

                                                        {breakTimes["매일"] && (
                                                            <div
                                                                style={{
                                                                    width: "600px",
                                                                    height: "100px",
                                                                    backgroundColor: "#efefef",
                                                                    borderRadius: "6px",
                                                                    marginTop: "20px",
                                                                    position: "relative",
                                                                }}
                                                            >
                                                                <button
                                                                    style={{
                                                                        position: "absolute",
                                                                        top: "5px",
                                                                        right: "5px",
                                                                    }}
                                                                    onClick={() =>
                                                                        handleRemoveBreakTime(
                                                                            "매일"
                                                                        )
                                                                    }
                                                                >
                                                                    X
                                                                </button>
                                                                <p
                                                                    style={{
                                                                        color: "#6B7280",
                                                                        fontSize: "1rem",
                                                                        padding: "8px",
                                                                    }}
                                                                >
                                                                    휴게시간
                                                                </p>
                                                                <div className="flex items-center">
                                                                    {/* 시작 부분 */}
                                                                    <span className="text-sm text-gray-400">
                                                                        시작
                                                                    </span>
                                                                    <select
                                                                        className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                        style={{
                                                                            marginLeft: "10px",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        {generateHourOptions().map(
                                                                            (hour) => (
                                                                                <option
                                                                                    key={hour}
                                                                                    value={hour}
                                                                                >
                                                                                    {hour}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>

                                                                    <select
                                                                        className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                        style={{
                                                                            marginRight: "8px",
                                                                        }}
                                                                    >
                                                                        {generateMinuteOptions().map(
                                                                            (minute) => (
                                                                                <option
                                                                                    key={minute}
                                                                                    value={minute}
                                                                                >
                                                                                    {minute}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>

                                                                    {/* 종료 부분 */}
                                                                    <span className="text-sm text-gray-400">
                                                                        {" "}
                                                                        ~ 종료
                                                                    </span>
                                                                    <select
                                                                        className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                        style={{
                                                                            marginLeft: "10px",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        {generateHourOptions().map(
                                                                            (hour) => (
                                                                                <option
                                                                                    key={hour}
                                                                                    value={hour}
                                                                                >
                                                                                    {hour}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>

                                                                    <select
                                                                        className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                        style={{
                                                                            marginRight: "8px",
                                                                        }}
                                                                    >
                                                                        {generateMinuteOptions().map(
                                                                            (minute) => (
                                                                                <option
                                                                                    key={minute}
                                                                                    value={minute}
                                                                                >
                                                                                    {minute}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    [
                                                        "월요일",
                                                        "화요일",
                                                        "수요일",
                                                        "목요일",
                                                        "금요일",
                                                        "토요일",
                                                        "일요일",
                                                    ].map((day) => (
                                                        <div key={day}>
                                                            <div className="flex items-center justify-between mb-6">
                                                                <div>
                                                                    <p
                                                                        style={{
                                                                            color: "#6B7280",
                                                                            fontSize: "1rem",
                                                                            display: "inline-block",
                                                                            marginRight: "8px",
                                                                        }}
                                                                    >
                                                                        {day}
                                                                    </p>
                                                                    <p
                                                                        style={{
                                                                            color: "#6B7280",
                                                                            fontSize: "1rem",
                                                                            display: "inline-block",
                                                                            marginRight: "16px",
                                                                        }}
                                                                    >
                                                                        영업일
                                                                    </p>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <p
                                                                        style={{
                                                                            color: "#6B7280",
                                                                            fontSize: "1rem",
                                                                            marginRight: "8px",
                                                                        }}
                                                                    >
                                                                        24시간
                                                                    </p>
                                                                    <input type="checkbox" />
                                                                </div>
                                                            </div>

                                                            {/* 시작 부분 */}
                                                            <span className="text-sm text-gray-400">
                                                                시작
                                                            </span>
                                                            <select
                                                                className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                style={{
                                                                    marginLeft: "10px",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                {generateHourOptions().map(
                                                                    (hour) => (
                                                                        <option
                                                                            key={hour}
                                                                            value={hour}
                                                                        >
                                                                            {hour}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>

                                                            <select
                                                                className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                style={{ marginRight: "8px" }}
                                                            >
                                                                {generateMinuteOptions().map(
                                                                    (minute) => (
                                                                        <option
                                                                            key={minute}
                                                                            value={minute}
                                                                        >
                                                                            {minute}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>

                                                            {/* 종료 부분 */}
                                                            <span className="text-sm text-gray-400">
                                                                {" "}
                                                                ~ 종료
                                                            </span>
                                                            <select
                                                                className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                style={{
                                                                    marginLeft: "10px",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                {generateHourOptions().map(
                                                                    (hour) => (
                                                                        <option
                                                                            key={hour}
                                                                            value={hour}
                                                                        >
                                                                            {hour}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>

                                                            <select
                                                                className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                style={{ marginRight: "8px" }}
                                                            >
                                                                {generateMinuteOptions().map(
                                                                    (minute) => (
                                                                        <option
                                                                            key={minute}
                                                                            value={minute}
                                                                        >
                                                                            {minute}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>

                                                            <button
                                                                className="text-blue-500 mt-2"
                                                                onClick={() =>
                                                                    handleAddBreakTime(day)
                                                                }
                                                            >
                                                                + 휴게시간 추가
                                                            </button>

                                                            {breakTimes[day] && (
                                                                <div
                                                                    style={{
                                                                        width: "600px",
                                                                        height: "100px",
                                                                        backgroundColor: "#efefef",
                                                                        borderRadius: "6px",
                                                                        marginTop: "20px",
                                                                        position: "relative",
                                                                    }}
                                                                >
                                                                    <button
                                                                        style={{
                                                                            position: "absolute",
                                                                            top: "5px",
                                                                            right: "5px",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleRemoveBreakTime(
                                                                                day
                                                                            )
                                                                        }
                                                                    >
                                                                        X
                                                                    </button>
                                                                    <p
                                                                        style={{
                                                                            color: "#6B7280",
                                                                            fontSize: "1rem",
                                                                            padding: "8px",
                                                                        }}
                                                                    >
                                                                        휴게시간
                                                                    </p>
                                                                    <div className="flex items-center">
                                                                        {/* 시작 부분 */}
                                                                        <span className="text-sm text-gray-400">
                                                                            시작
                                                                        </span>
                                                                        <select
                                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                            style={{
                                                                                marginLeft: "10px",
                                                                                marginRight: "10px",
                                                                            }}
                                                                        >
                                                                            {generateHourOptions().map(
                                                                                (hour) => (
                                                                                    <option
                                                                                        key={hour}
                                                                                        value={hour}
                                                                                    >
                                                                                        {hour}
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>

                                                                        <select
                                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                            style={{
                                                                                marginRight: "8px",
                                                                            }}
                                                                        >
                                                                            {generateMinuteOptions().map(
                                                                                (minute) => (
                                                                                    <option
                                                                                        key={minute}
                                                                                        value={
                                                                                            minute
                                                                                        }
                                                                                    >
                                                                                        {minute}
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>

                                                                        {/* 종료 부분 */}
                                                                        <span className="text-sm text-gray-400">
                                                                            {" "}
                                                                            ~ 종료
                                                                        </span>
                                                                        <select
                                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                            style={{
                                                                                marginLeft: "10px",
                                                                                marginRight: "10px",
                                                                            }}
                                                                        >
                                                                            {generateHourOptions().map(
                                                                                (hour) => (
                                                                                    <option
                                                                                        key={hour}
                                                                                        value={hour}
                                                                                    >
                                                                                        {hour}
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>

                                                                        <select
                                                                            className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4"
                                                                            style={{
                                                                                marginRight: "8px",
                                                                            }}
                                                                        >
                                                                            {generateMinuteOptions().map(
                                                                                (minute) => (
                                                                                    <option
                                                                                        key={minute}
                                                                                        value={
                                                                                            minute
                                                                                        }
                                                                                    >
                                                                                        {minute}
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            <div
                                                                style={{
                                                                    height: "1px",
                                                                    background:
                                                                        "rgba(0, 0, 0, 0.1)",
                                                                    margin: "20px 0",
                                                                }}
                                                            ></div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div style={{ flex: 1 }}>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    월요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    화요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    수요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    목요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    금요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    토요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                                <p
                                                    style={{
                                                        color: "#6B7280",
                                                        fontSize: "1rem",
                                                        display: "inline-block",
                                                        marginRight: "8px",
                                                    }}
                                                >
                                                    일요일
                                                </p>
                                                <div
                                                    style={{
                                                        height: "1px",
                                                        background: "rgba(0, 0, 0, 0.1)",
                                                        margin: "20px 0",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
