import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";

interface DatePickerProps {
    dateRange: {
        startDate: Date | null;
        endDate: Date | null;
    };
    onChange: (newDateRange: { startDate: Date | null; endDate: Date | null }) => void;
}

const DatePickerComponent = ({ dateRange, onChange }: DatePickerProps) => {
    const handleDateChange = (update: [Date | null, Date | null]) => {
        const [newStartDate, newEndDate] = update;
        onChange({ startDate: newStartDate, endDate: newEndDate });
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
                dateFormat="yy/MM/dd"
                onChange={handleDateChange}
                isClearable={true}
            />
        </div>
    );
};

export default DatePickerComponent;
