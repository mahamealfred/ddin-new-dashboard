import  { FC,Fragment } from 'react'
import Pageheader from '../../../../components/common/page-header/pageheader'
import SunEditorComponent from '../../../../@spk/spk-packages/editor-component'
interface SuneditorProps { }

const Suneditor: FC<SuneditorProps> = () => {
    return (
        <Fragment>
            <Pageheader currentpage="Sun Editor" activepage="Form Editors" mainpage="Sun Editor" />
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                               Basic Sun Editor
                            </div>
                        </div>
                        <div className="box-body">
                            <SunEditorComponent height={'300px'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Sun Editor With Value
                            </div>
                        </div>
                        <div className="box-body">
                            <SunEditorComponent 
                                height={'300px'}
                                setoptions={{
                                    buttonList: [
                                    ["undo", "redo"],
                                    ["font", "fontSize"],
                                    [
                                        "bold",
                                        "underline",
                                        "italic",
                                        "strike",
                                        "subscript",
                                        "superscript"
                                    ],
                                    ["fontColor", "hiliteColor"],
                                    ["align", "list", "lineHeight"],
                                    ["outdent", "indent"],
                                    ["table", "link", "image", "video"],
                                    ["preview", "print"],
                                    ["removeFormat"]
                                    ], 
                                    defaultTag: "div",
                                    minHeight: "300px",
                                    showPathLabel: false,
                                    font: ["Arial", "Comic Sans MS", "Courier New", "Impact"],
                                    defaultStyle: 'font-family: Arial; font-size: 16px;',
                                }}
                                />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Suneditor