import  { FC, Fragment, useState } from 'react';
import { FilePond } from 'react-filepond';
import CreatableSelect from 'react-select/creatable';
import  { Data, Data1, multiselectdata } from '../../../../components/ui/data/apps/projects/createprojectdata';
import Pageheader from '../../../../components/common/page-header/pageheader';
import SunEditorComponent from '../../../../@spk/spk-packages/editor-component';
import SelectComponent from '../../../../@spk/spk-packages/select-component';
import SpkButton from '../../../../@spk/uielements/spk-button';
import SpkFlatpickr from '../../../../@spk/spk-packages/datepicker-component';

interface CreateprojectProps {}

const Createproject: FC<CreateprojectProps> = () => {

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event:any) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    //Filepond 
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date()); //React date picker

    const [_startDate1, setStartDate1] = useState(new Date());

    const handleDateChange = (date:any) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const handleDateChange1 = (date1:any) => {
      // Ensure date is defined before setting it
      if (date1) {
          setStartDate1(date1);
      }
  };;

    const defaultContent = `
    <p>lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33.</p>
    <p><br></p>
    <ol>
        <li class="ql-size-normal">Conducting a comprehensive analysis of the existing website design.</li>
        <li class="">Collaborating with the UI/UX team to develop wireframes and mockups.</li>
        <li class="">Iteratively refining the design based on feedback../li>
        <li class="">Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
        <li class="">Testing the website across different devices and browsers.</li>
    </ol>
    `;
    return (
        <Fragment>
            <Pageheader currentpage="Create Project" activepage="Projects" mainpage="Create Project" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Create Project
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label" className="form-label">Project Name :</label>
                                    <input type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label1" className="form-label">Project Manager :</label>
                                    <input type="text" className="form-control" id="input-label1" placeholder="Project Manager Name" />
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label1" className="form-label">Client / Stakeholder :</label>
                                    <input type="text" className="form-control" placeholder="Enter Client Name" />
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-4">
                                    <label htmlFor="text-area" className="form-label">Project Description :</label>
                                    <div id="project-descriptioin-editor">
                                        <SunEditorComponent height={'200px'} defaulContent={defaultContent} />
                                    </div>
                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Start Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="ti-form-input"  placeholder="Choose date" value={startDate} onfunChange={handleDateChange} options={  {disableMobile: "true", dateFormat: "Y-m-d", }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">End Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkFlatpickr inputClass="ti-form-input" options={{ dateFormat: "Y-m-d",}} placeholder="Choose date" onfunChange={handleDateChange1} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Status :</label>
                                    <SelectComponent option={Data1}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Priority :</label>
                                    <SelectComponent option={Data}/>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Assigned To</label>
                                    <SelectComponent multi option={multiselectdata} defaultvalue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]}/>
                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Attachments</label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <SpkButton buttontype="button" variant="primary" customClass="ti-btn btn-wave ms-auto float-right">Create Project</SpkButton>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Createproject