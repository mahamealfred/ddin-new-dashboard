import  { FC, Fragment } from 'react'
import Pageheader from '../../../components/common/page-header/pageheader'
import SpkAccordions from '../../../@spk/advanced-ui/spk-accordions'
import { Customersupport, Frequentlyquestions } from '../../../components/ui/data/pages/faqsdata'
import SpkButton from '../../../@spk/uielements/spk-button'


interface FaqsProps {}

const Faqs: FC<FaqsProps> = () => {
  return (
    <Fragment>
      <Pageheader currentpage="Faq's" activepage="Pages" mainpage="Faq's" />
      <div className="grid grid-cols-12 mb-[3rem] !mx-auto">
        <div className="xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 !mx-auto">
            <div className="xl:col-span-3 col-span-12"></div>
            <div className="xl:col-span-6 col-span-12">
              <div className="text-center p-4 faq-header mb-6">
                <h5 className="mb-1 text-[1.25rem] text-primary opacity-[5] font-semibold">F.A.Q's</h5>
                <h4 className="mb-1 text-[1.5rem] text-defaulttextcolor font-semibold">Frequently Asked Questions</h4>
                <p className="text-[.9375rem] text-[#8c9097] dark:text-white/50 opacity-[7]">We have shared some of the most frequently asked questions to help you out! </p>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12"></div>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-12"></div>
        <div className="xl:col-span-10 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    General Topics ?
                  </div>
                </div>
                <div className="box-body">
                  <SpkAccordions items={Frequentlyquestions} key={1} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80' />
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Customer Support ?
                  </div>
                </div>
                <div className="box-body">
                  <div className="hs-accordion-group">
                    <SpkAccordions items={Customersupport} key={2} Titletext="before" SvgIcon={true} Toggleclass='hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80' />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-12 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Still Have Questions ?
                    <span className="subtitle font-normal text-[#8c9097] dark:text-white/50 block text-[0.75rem]">
                      You can post your questions here,our support team is always active.
                    </span>
                  </div>
                </div>
                <div className="box-body">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="xl:col-span-6 col-span-12">
                      <label htmlFor="user-name" className="form-label">Your Name</label>
                      <input type="text" className="form-control w-full !rounded-md form-control-light" id="user-name" placeholder="Enter Your Name" />
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                      <label htmlFor="user-email" className="form-label">Email Id</label>
                      <input type="text" className="form-control w-full !rounded-md form-control-light" id="user-email" placeholder="Enter Email" />
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="text-area" className="form-label">Textarea</label>
                      <textarea className="form-control w-full !rounded-md form-control-light" placeholder="Enter your question here" id="text-area" rows={2}></textarea>
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <SpkButton buttontype="button" customClass="ti-btn bg-primary text-white ltr:float-right rtl:float-left">Send</SpkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1"></div>
      </div>
    </Fragment>
  )
}

export default Faqs