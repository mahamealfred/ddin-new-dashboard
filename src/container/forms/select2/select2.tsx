import  { FC, Fragment, useState } from 'react';
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from '../../../components/ui/data/forms/select2data';
import Pageheader from '../../../components/common/page-header/pageheader';
import SelectComponent from '../../../@spk/spk-packages/select-component';
import SpkButton from '../../../@spk/uielements/spk-button';
interface Option {
    value: string;
    label: string;
}
interface Optionmax {
    value: string;
    label: string;
}
interface Select2Props { }

const Select2: FC<Select2Props> = () => {

    const [selectedOptions, setSelectedOptions] = useState<Optionmax[] | null>(null);

    const handleSelectChange = (selected: Optionmax[] | null) => {
        // Define your maximum selection limit (e.g., 2 in this example)
        const maxSelections = 3;

        if (selected && selected.length <= maxSelections) {
            setSelectedOptions(selected);
        }
    };

    const [singleSelectValue, setSingleSelectValue] = useState<Option | null>(null);
    const [multiSelectValue, setMultiSelectValue] = useState<Option[] | null>([]);
    const [isSelectDisabled, setSelectDisabled] = useState(false);

    const options: Option[] = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
        { value: 's-4', label: 'Selection-4' },
        { value: 's-5', label: 'Selection-5' },
    ];

    const handleSingleSelectChange = (selectedOption: Option | null) => {
        setSingleSelectValue(selectedOption);
    };

    const handleMultiSelectChange = (selectedOptions: Option[] | null) => {
        setMultiSelectValue(selectedOptions);
    };

    const disableSelect = () => {
        setSelectDisabled(true);
    };

    const enableSelect = () => {
        setSelectDisabled(false);
    };


    return (
        <Fragment>
            <Pageheader currentpage="Select2" activepage="Forms" mainpage="Select2" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Select2
                            </div>
                        </div>
                        <div className="box-body">
                            <SelectComponent option={Selectoption1} mainClass="js-example-basic-single w-full" defaultvalue={[Selectoption1[0]]} searchable={true}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title !text-start">
                                Multiple Select
                            </div>
                        </div>
                        <div className="box-body">
                        <SelectComponent option={Selectoption2} mainClass="js-example-basic-multiple w-full" multi={true} defaultvalue={[Selectoption2[0]]} searchable={true}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Single Select With Placeholder
                            </div>
                        </div>
                        <div className="box-body">
                            <SelectComponent option={Selectoption3} mainClass="js-example-placeholder-single js-states" defaultvalue={[Selectoption3[0]]} searchable={true}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Multiple Select With Placeholder
                            </div>
                        </div>
                        <div className="box-body">
                            <SelectComponent option={Selectoption4} mainClass="js-example-placeholder-multiple w-full js-states" defaultvalue={[Selectoption4[0]]} multi={true}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Templating
                            </div>
                        </div>
                        <div className="box-body">
                             <SelectComponent option={Selectoption5} mainClass="js-example-templating js-persons" defaultvalue={[Selectoption5[0]]}/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Templating Selection
                            </div>
                        </div>
                        <div className="box-body">
                            <SelectComponent option={Selectoption5} mainClass="select2-client-search" defaultvalue={[Selectoption5[0]]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Max Selections Limiting
                            </div>
                        </div>
                        <div className="box-body">
                        <SelectComponent option={Selectmaxoption} getValue={selectedOptions} mainClass="basic-multi-select" onfunchange={handleSelectChange} defaultvalue={[Selectmaxoption[0]]} multi={true}/>

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Disabling a Select2 control
                            </div>
                        </div>
                        <div className="box-body flex flex-col gap-3">

                        <SelectComponent option={options} mainClass="mb-3" onfunchange={handleSingleSelectChange} disabled={isSelectDisabled} getValue={singleSelectValue}/>
                        <SelectComponent option={options} multi={true} mainClass="js-example-disabled-multi" onfunchange={handleMultiSelectChange} disabled={isSelectDisabled} getValue={multiSelectValue} clearable={!isSelectDisabled}/>
                            <div>
                                <SpkButton buttontype="button" variant="primary" customClass="ti-btn js-programmatic-enable me-2" onclickfunc={enableSelect}>Enable</SpkButton>
                                <SpkButton buttontype="button" variant="primary-full" customClass="ti-btn js-programmatic-disable" onclickfunc={disableSelect}>Disable</SpkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Select2