import  {FC } from 'react'
import { blackquote1, blackquote2, blackquote3, blackquote4, blackquote5, blackquote6, blackquote7, blackquote8, blackquote9 } from '../../../components/prism-code/utilities-prism'
import Pageheader from '../../../components/common/page-header/pageheader'
import Showcode from '../../../components/common/showcode/showcode'
import face1 from "../../../assets/images/faces/1.jpg";
interface BlackquotesProps {}

const Blackquotes: FC<BlackquotesProps> = () => {
  return (
    <>
            <Pageheader currentpage="Blockquotes" activepage="Ui Elements" mainpage="Blockquotes" />
            <div className="grid grid-cols-12 gap-x-6">
                    <div className="col-span-12">
                            <Showcode title="Basic Blockquote" reactCode={blackquote1} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>
                                    <div className="relative z-10">
                                        <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and
                                                detailed.</em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Small Blockquote" reactCode={blackquote2} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-gray-800 dark:text-white">
                                            <em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and detailed.
                                            </em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Medium Blockquote" reactCode={blackquote3} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and detailed.</em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Large Blockquote" reactCode={blackquote4} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-xl text-gray-800 md:text-3xl md:leading-normal dark:text-white">
                                            <em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and detailed.</em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Center Aligned Blockquote" reactCode={blackquote5} customCardBodyClass="">
                                <blockquote className="relative text-center max-w-lg mx-auto">
                                    <div className="relative z-10">
                                        <p className="text-xl text-gray-800">
                                            <em className="relative">
                                                <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-white/10"
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path
                                                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span className="relative z-10 dark:text-white">I just wanted to say that
                                                    I'm very happy with my purchase so far. The documentation is
                                                    outstanding - clear and detailed.</span>
                                            </em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Right Aligned Blockquote" reactCode={blackquote6} customCardBodyClass="">
                                <blockquote className="relative text-end">
                                    <div className="relative z-10">
                                        <p className="text-xl text-gray-800">
                                            <em className="relative">
                                                <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-white/10"
                                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path
                                                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                                        fill="currentColor"></path>
                                                </svg>
                                                <span className="relative z-10 dark:text-white">I just wanted to say that
                                                    I'm very happy with my purchase so far. The documentation is
                                                    outstanding - clear and detailed.</span>
                                            </em>
                                        </p>
                                    </div>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Naming A Source" reactCode={blackquote7} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and detailed.</em>
                                        </p>
                                    </div>

                                    <footer className="mt-6">
                                        <div className="text-base font-semibold text-gray-800 dark:text-white/70">Josh
                                            Grazioso</div>
                                    </footer>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Blockquote With Avatar" reactCode={blackquote8} customCardBodyClass="">
                                <blockquote className="relative">
                                    <svg className="absolute top-0 ltr:left-0 rtl:right-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-white/10"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                                            fill="currentColor"></path>
                                    </svg>

                                    <div className="relative z-10">
                                        <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                                I just wanted to say that I'm very happy with my purchase so far. The
                                                documentation is outstanding - clear and detailed.</em>
                                        </p>
                                    </div>

                                    <footer className="mt-6">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={face1}
                                                    alt="Image Description"/>
                                            </div>
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <div className="text-base font-semibold text-gray-800 dark:text-white/70">
                                                    Josh Grazioso</div>
                                                <div className="text-xs text-gray-500 dark:text-white/70">Source title</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                                </Showcode>
                    </div>
                    <div className="col-span-12">
                            <Showcode title="Left Bordered Blockquote" reactCode={blackquote9} customCardBodyClass="">
                                <blockquote
                                    className="relative ltr:border-l-4 rtl:border-r-4 ltr:pl-4 rtl:pr-4 ltr:sm:pl-6 rtl:sm:pr-6 dark:border-white/10">
                                    <p className="text-gray-800 sm:text-xl dark:text-white"><em>
                                            I just wanted to say that I'm very happy with my purchase so far. The
                                            documentation is outstanding - clear and detailed.</em>
                                    </p>

                                    <footer className="mt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={face1}
                                                    alt="Image Description"/>
                                            </div>
                                            <div className="ltr:ml-4 rtl:mr-4">
                                                <div className="text-base font-semibold text-gray-800 dark:text-white/70">
                                                    Josh Grazioso</div>
                                                <div className="text-xs text-gray-500 dark:text-white/70">Source title</div>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                                </Showcode>
                    </div>
                </div>
    </>
  )
}

export default Blackquotes