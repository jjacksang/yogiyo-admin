import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

const DatePickerComponent = () => {
    const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
        startDate: null,
        endDate: null,
    });

    const handleDateChange = (update: [Date | null, Date | null]) => {
        const [newStartDate, newEndDate] = update;
        setDateRange({ startDate: newStartDate, endDate: newEndDate });
    };
    console.log(dateRange);
    return (
        <div className="flex items-center border rounded-xl px-4 gap-2">
            <span>직접설정</span>
            <DatePicker
                selectsRange={true}
                locale={ko}
                startDate={dateRange.startDate}
                endDate={dateRange.endDate}
                onChange={handleDateChange}
                isClearable={true}
            />
        </div>
    );
};

export default DatePickerComponent;
