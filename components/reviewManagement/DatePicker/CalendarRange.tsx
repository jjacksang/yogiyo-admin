import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

const pastMonth = new Date();

const CalendarRange = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleIsOpen = () => {
        if (isOpen === false) {
            setIsOpen(true);
        } else setIsOpen(false);
    };

    return (
        <div className="flex items-center border rounded-xl px-4 gap-2">
            <button onClick={handleIsOpen}>직접설정</button>
            <span></span>
            {isOpen === true ? (
                <DatePicker
                    selectsRange={true}
                    locale={ko}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    isClearable={true}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
};

const startDate = (
    <form>
        <input />
    </form>
);

export default CalendarRange;
