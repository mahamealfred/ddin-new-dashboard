import  { FC, Fragment, useState } from 'react';
//css
import "react-calendar/dist/Calendar.css"; //  react Calendar
import Pageheader from '../../../../components/common/page-header/pageheader';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';

interface DatetimepickerProps { }

const Datetimepicker: FC<DatetimepickerProps> = () => {

    const [_startDate, setStartDate] = useState<Date | string>(new Date());
    const handleDateChange = (date: Date | null) => {
        if (date) {
            setStartDate(date);
        }
    };
    const [_startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    const [_startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate2(date);
        }
    };
    const [startDate3, setStartDate3] = useState(new Date());
    const handleDateChange3 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate3(date);
        }
    };
    const [_startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate4(date);
        }
    };
    const [_startDate5, setStartDate5] = useState<any>(new Date());
    const handleDateChange5 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate5(date);
        }
    };
    const [_startDate6, setStartDate6] = useState<any>(new Date());
    const handleDateChange6 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate6(date);
        }
    };
    const [startDate7, setStartDate7] = useState<any>(new Date());
    const handleDateChange7 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate7(date);
        }
    };



    const [_startDate8, setStartDate8] = useState(new Date());
    const handleDateChange8 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate8(date);
        }
    };

    const [_startDate9, setStartDate9] = useState(new Date());
    const handleDateChange9 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate9(date);
        }
    };

    const [_startDate10, setStartDate10] = useState(new Date());
    const handleDateChange10 = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate10(date);
        }
    };
    return (
        <Fragment>
            <Pageheader currentpage="Date & Time Picker" activepage="Form Elements" mainpage="Date & Time Pickers" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Date picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                      <SpkFlatpickr inputClass="ti-form-input" placeholder="Choose date"   onfunChange={handleDateChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date picker With Time
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <SpkFlatpickr
                                        inputClass="ti-form-input"
                                        onfunChange={handleDateChange1}
                                        placeholder='Choose date with time'
                                        // dataEnableTime={true}
                                        options={{ dateFormat: "Y-m-d",}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Human Friendly dates
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <SpkFlatpickr inputClass="ti-form-input" placeholder="Human friendly dates" onfunChange={handleDateChange2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date range picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <SpkFlatpickr inputClass="ti-form-input" options={{ mode: 'range', dateFormat: "Y-m-d", }} value={startDate3} onfunChange={handleDateChange3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Time picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <SpkFlatpickr inputClass="ti-form-input"
                                        placeholder="Choose Time"
                                        onfunChange={handleDateChange4}
                                        options={{ enableTime: true, }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Picker with 24hr Format
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <SpkFlatpickr inputClass="form-control flatpickr-input" placeholder="Choose time in 24hr format" onfunChange={handleDateChange8} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i', time_24hr: true }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Picker with Limits
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <SpkFlatpickr inputClass="form-control flatpickr-input" placeholder="choose time min 16:00 to max 22:30"  onfunChange={handleDateChange9} options={{ enableTime: 'true', noCalendar: 'true', dateFormat: 'H:i', minTime: "16:00", maxTime: "22:30", }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <SpkFlatpickr
                                        inputClass="form-control flatpickr-input"
                                        onfunChange={handleDateChange10}
                                        placeholder='date with time limit from 16:00 to 22:00'
                                        dataEnableTime={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Date Picker with week numbers
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="form-group mb-0">
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr placeholder="Choose Date" inputClass=" form-control ti-form-input focus:z-10" onfunChange={handleDateChange5} options={{ weekNumbers: 'true', dateFormat: "Y-m-d" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Inline Time Picker
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="form-group mb-0">
                                        <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10" placeholder="Choose time"  onfunChange={handleDateChange6} options={{ enableTime: 'true', noCalendar: 'true', inline: 'true' ,   dateFormat: 'H:i' }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Preloading time
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                                <SpkFlatpickr inputClass=" form-control ti-form-input focus:z-10"  value={startDate7}  onfunChange={handleDateChange7} options={{ enableTime: 'true', noCalendar: 'true',   dateFormat: 'H:i' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Inline Calendar
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group overflow-auto">
                                <SpkFlatpickr inputClass="ti-form-input  form-control" placeholder="Choose date" onfunChange={handleDateChange4} options={{ inline: 'true' ,  dateFormat: "Y-m-d"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Datetimepicker