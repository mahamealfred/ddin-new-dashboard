import { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
// import desktoplogo from "../assets/images/brand-logos/ddinlogoT.png";
// import desktopdarklogo from "../assets/images/brand-logos/ddinlogoT.png";
import SpkButton from '../@spk/uielements/spk-button';

interface SignupProps { }

const Signup: FC<SignupProps> = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return (
        <Fragment>
            <div className="container">
                <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
                    <div className="grid grid-cols-20 gap-x-10">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
                            {/* <div className="my-[2.5rem] flex justify-center">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                    <img src={desktoplogo} alt="logo" className="desktop-logo w-1/3" />
                                    <img src={desktopdarklogo} alt="logo" className="desktop-dark w-1/3" />
                                </Link>
                            </div> */}

                            <div className="box">
                                <div className="box-body !p-[3rem]">
                                    <p className="h5 font-semibold mb-2 text-center">Sign Up</p>
                                    <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">
                                        Welcome &amp; Join us by creating a free account !
                                    </p>
                                    <div className="grid grid-cols-12 gap-x-6 gap-y-4">
                                        {/* First Name & Last Name */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-firstname" className="form-label text-default">First Name</label>
                                            <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-firstname" placeholder="First Name"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-lastname" className="form-label text-default">Last Name</label>
                                            <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-lastname" placeholder="Last Name"/>
                                        </div>

                                        {/* Email & Phone Number */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-email" className="form-label text-default">Email</label>
                                            <input type="email" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-email" placeholder="Email"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-phone" className="form-label text-default">Phone Number</label>
                                            <input type="tel" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-phone" placeholder="254 XXX XXX XXX"/>
                                        </div>

                                        {/* Merchant Name & Country */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-merchantname" className="form-label text-default">Merchant Name</label>
                                            <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-merchantname" placeholder="Merchant Name"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-country" className="form-label text-default">Country</label>
                                            <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-country" placeholder="Kenya"/>
                                        </div>

                                        {/* How did you hear about us? & What best describes you */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-hearabout" className="form-label text-default">How did you hear about us?</label>
                                            <select id="signup-hearabout" className="form-control form-control-lg w-full !rounded-md">
                                                <option>Please select an option</option>
                                                <option>Social Media</option>
                                                <option>Friend Referral</option>
                                                <option>Online Search</option>
                                            </select>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-description" className="form-label text-default">What best describes you?</label>
                                            <select id="signup-description" className="form-control form-control-lg w-full !rounded-md">
                                                <option>Select</option>
                                                <option>Individual</option>
                                                <option>Business Owner</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        {/* Is your business registered & Monthly revenue */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-registered" className="form-label text-default">Is your business registered?</label>
                                            <select id="signup-registered" className="form-control form-control-lg w-full !rounded-md">
                                                <option>Select</option>
                                                <option>Yes</option>
                                                <option>No</option>
                                            </select>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-revenue" className="form-label text-default">Monthly Revenue (USD)</label>
                                            <select id="signup-revenue" className="form-control form-control-lg w-full !rounded-md">
                                                <option>Select</option>
                                                <option>Under $1,000</option>
                                                <option>$1,000 - $10,000</option>
                                                <option>$10,000+</option>
                                            </select>
                                        </div>

                                        {/* Username & Create Password */}
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-username" className="form-label text-default">Username</label>
                                            <input type="text" className="form-control form-control-lg w-full !rounded-md"
                                                id="signup-username" placeholder="Username"/>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="signup-password" className="form-label text-default">Create Password</label>
                                            <div className="input-group">
                                                <input type={(passwordshow1) ? 'text' : 'password'} className="form-control form-control-lg !rounded-e-none"
                                                    id="signup-password" placeholder="Min 8 characters, 1 uppercase, numbers & symbols"/>
                                                <SpkButton onclickfunc={() => setpasswordshow1(!passwordshow1)} Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-s-none !mb-0"
                                                    Id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                        </div>

                                        {/* Confirm Password */}
                                        <div className="xl:col-span-6 col-span-12 mb-2">
                                            <label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm Password</label>
                                            <div className="input-group">
                                                <input type={(passwordshow2) ? 'text' : 'password'} className="form-control form-control-lg !rounded-e-none"
                                                    id="signup-confirmpassword" placeholder="Confirm Password"/>
                                                <SpkButton onclickfunc={() => setpasswordshow2(!passwordshow2)} Label="button" buttontype="button" variant="light" customClass="ti-btn !rounded-s-none !mb-0"
                                                    Id="button-addon21"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></SpkButton>
                                            </div>
                                        </div>

                                        {/* Terms & Conditions */}
                                        <div className="mt-4 col-span-12">
                                            <div className="form-check !flex !ps-0">
                                                <input className="form-check-input me-1" type="checkbox" value="" id="defaultCheck1"/>
                                                <label className="ps-2 form-check-label text-[#8c9097] dark:text-white/50 font-normal block" htmlFor="defaultCheck1">
                                                    By creating an account you agree to our <Link to={`${import.meta.env.BASE_URL}pages/termsconditions`} className="text-success"><u>Terms & Conditions</u></Link> and <Link to="#" className="text-success"><u>Privacy Policy</u></Link>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Continue Button */}
                                        <div className="xl:col-span-12 col-span-12 mt-6">
                                            <SpkButton buttontype="button" Size="lg" customClass="w-full !rounded-lg" Label="Continue" variant="primary"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Signup;
