import  { FC,Fragment } from "react";
import { defaultalerts, iconalerts, Imagealertslooping, Imagealertswithsize, roundedalerts, shadows, solidalert, solidalert1,} from "../../../components/ui/data/ui-elements/alertsdata";
import {reusealert1,reactalert1,reactDefault,reuseDefault, reactdescriptionalert, reusedescriptionalert, reactBorderedalert, reuseBorderedalert, reactlistalert, reuselistalert, reactActionsalert, reuseActionsalert, reactrightalert, reuserightalert, reactDiscoveryalert, reuseDiscoveryalert, reactDefaultalerts, reuseDefaultalerts, reactLinkalerts, reuseLinkalerts, reactSolidalerts, reuseSolidalerts, reactOutlinealerts, reuseOutlinealerts, reactSolidshadowalerts, reuseSolidshadowalerts, reactDefaultshadowsalerts, reuseDefaultshadowsalerts, reactRoundedsalerts, reuseRoundedsalerts, reactRoundedoutlinesalerts, reuseRoundedoutlinesalerts, reactRoundeddefaultsalerts, reuseRoundeddefaultsalerts, reactRoundedcustomalerts, reuseRoundedcustomalerts, reactIconalerts, reuseIconalerts, reuseCustomizedalerts, reactCustomizedalerts, reactImagesalerts, reuseImagesalerts, reactImagesize, reuseImagesize, reactAdditionalalerts, reuseAdditionalalerts, Defaultdata, Solidalertdata, Outlinedata, Shadowsdatas, roundedalertsdata, Iconalertsdata, Imagesdata, Imagesizedata, } from "../../../components/prism-code/uielementsprism";
import Pageheader from "../../../components/common/page-header/pageheader";
import Showcode from "../../../components/common/showcode/showcode";
import { Link } from "react-router-dom";
import SpkAlert from "../../../@spk/uielements/spk-alert";
import SpkButton from "../../../@spk/uielements/spk-button";
interface AlertsProps {}

const Alerts: FC<AlertsProps> = () => {
  // const [open1, setOpen1] = useState(false);

  return (
    <Fragment>
      <Pageheader
        currentpage="Alerts"
        activepage="Ui Elements"
        mainpage="Alerts"
      />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Basic Alert"  reactCode={reactalert1} reusableCode={reusealert1}>
            <SpkAlert Role="alert" Id="dismiss-basicalert" customClass="alert-warning  fade show flex dismissable-alert">
              <div className="sm:flex-shrink-0">
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
              </div>
              <div className="ms-auto">
                <div className="mx-1 my-1">
                <SpkButton buttontype="button" removeelement="#dismiss-basicalert" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600">
                    <span className="sr-only">Dismiss</span>
                    <svg
                      className="h-3 w-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                        fill="currentColor"
                      />
                    </svg>
                 </SpkButton>
                </div>
              </div>
            </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Default Alert"  reactCode={reactDefault} reusableCode={reuseDefault}>
            <SpkAlert Role="alert" customClass="bg-gray-50 border border-gray-200 dark:bg-light dark:border-defaultborder/10 alert mb-0">
                <div className="flex">
                  <div className="sm:flex-shrink-0">
                    <svg
                      className="h-4 w-4 text-gray-500 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 md:flex md:justify-between ms-2">
                    <p className="text-sm dark:text-defaulttextcolor/70">
                      A new software update is available. See what's new in
                      version 3.0.7
                    </p>
                    <p className="text-sm mt-3 md:mt-0 md:ms-6">
                      <a
                        className="dark:text-defaulttextcolor/70 hover:text-gray-500 font-medium whitespace-nowrap"
                        href="#"
                      >
                        Details
                      </a>
                    </p>
                  </div>
                </div>
            </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Bordered Styles Alert" reactCode={reactBorderedalert} reusableCode={reuseBorderedalert}>
            <div className="space-y-4">
            <div role="alert" className="bg-success/20 border-t-2 border-success rounded-lg p-4 dark:bg-success/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="inline-flex justify-center items-center size-8 rounded-full border-1 border-success bg-success/50 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                  </div>
                  <div className="ms-3">
                    <h6 className="text-gray-800 font-semibold dark:text-white">
                      Successfully updated.
                    </h6>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      You have successfully updated your email preferences.
                    </p>
                  </div>
                </div>
            </div>
            <div role="alert" className="bg-danger/20 border-s-4 border-danger p-4 dark:bg-danger/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <span className="inline-flex justify-center items-center size-8 rounded-full border-1 border-danger bg-danger/40 text-red-800 dark:border-danger dark:bg-danger/20 dark:text-red-400">
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                  </div>
                  <div className="ms-3">
                    <h6 className="text-gray-800 font-semibold dark:text-white">
                      Error!
                    </h6>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      Your purchase has been declined.
                    </p>
                  </div>
                </div>
            </div>
            </div>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="With description Alert" reactCode={reactdescriptionalert} reusableCode={reusedescriptionalert}>
            <div className="space-y-3">
                <SpkAlert Role="alert" customClass="bg-warning/10 border border-warning text-sm text-warning/80 rounded-lg p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="flex-shrink-0 size-4 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                        </div>
                        <div className="ms-4">
                          <h3 className="text-sm font-semibold">
                            Cannot connect to the database
                          </h3>
                          <div className="mt-1 text-sm">
                            We are unable to save any progress at this time.
                          </div>
                        </div>
                      </div>
                </SpkAlert>
                <SpkAlert Role="alert" customClass="bg-info/10 border border-info text-sm text-info/80 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="flex-shrink-0 size-4 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                          <path d="M12 9v4" />
                          <path d="M12 17h.01" />
                        </svg>
                      </div>
                      <div className="ms-4">
                        <h3 className="text-sm font-semibold">
                          Cannot connect to the database
                        </h3>
                        <div className="mt-1 text-sm">
                          We are unable to save any progress at this time.
                        </div>
                      </div>
                    </div>
                </SpkAlert>
            </div>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Alert With list" reactCode={reactlistalert} reusableCode={reuselistalert} >
            <SpkAlert Role="alert" customClass="bg-danger/20 border border-danger/20 text-sm text-danger/80 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="flex-shrink-0 size-4 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <div className="ms-4">
                    <h3 className="text-sm font-semibold">
                      A problem has been occurred while submitting your data.
                    </h3>
                    <div className="mt-2 text-sm text-red-700 dark:text-red-400">
                      <ul className="list-disc space-y-1 ps-5">
                        <li>This username is already in use</li>
                        <li>Email field can't be empty</li>
                        <li>Please enter a valid phone number</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Alert With Actions" reactCode={reactActionsalert} reusableCode={reuseActionsalert}>
              <SpkAlert Role="alert" customClass="bg-info/10 border border-info/20 text-info/80 rounded-lg p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="flex-shrink-0 size-4 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h6 className="font-semibold">
                        YouTube would like you to send notifications
                      </h6>
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Notifications may include alerts, sounds and icon badges.
                        These can be configured in Settings.
                      </div>
                      <div className="mt-4">
                        <div className="flex space-x-3">
                          <SpkButton buttontype="button" customClass="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                             Don't allow
                          </SpkButton>
                          <SpkButton buttontype="button" customClass="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                              Allow
                          </SpkButton>
                        </div>
                      </div>
                    </div>
                  </div>
              </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Link on right Alert" reactCode={reactrightalert} reusableCode={reuserightalert}>
              <SpkAlert Role="alert" customClass="bg-gray-50 border border-gray-200 text-sm text-gray-600 rounded-lg p-4 dark:bg-white/[.05] dark:border-white/10 dark:text-gray-400">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="flex-shrink-0 size-4 mt-0.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </div>
                    <div className="flex-1 md:flex md:justify-between ms-2">
                      <p className="text-sm">
                        A new software update is available. See what's new in
                        version 3.0.7
                      </p>
                      <p className="text-sm mt-3 md:mt-0 md:ms-6">
                        <a
                          className="text-gray-800 hover:text-gray-500 font-medium whitespace-nowrap dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Details
                        </a>
                      </p>
                    </div>
                  </div>
              </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Discovery Alert" reactCode={reactDiscoveryalert} reusableCode={reuseDiscoveryalert}>
               <SpkAlert Role="alert" customClass="bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-bodybg dark:border-white/10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="flex-shrink-0 size-4 text-blue-600 mt-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </div>
                    <div className="ms-3">
                      <h6 className="text-gray-800 font-semibold dark:text-white">
                        New version published
                      </h6>
                      <p className="mt-0 text-sm text-gray-700 dark:text-gray-400">
                        Chris Lynch published a new version of this page. Refresh to
                        see the changes.
                      </p>
                    </div>
                  </div>
              </SpkAlert>
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Default alerts" reactCode={reactDefaultalerts} reusableCode={reuseDefaultalerts} dataCode={Defaultdata}>
            {defaultalerts.map((idx) => (
                <SpkAlert Role="alert" customClass={`alert-${idx.color}`} key={Math.random()}>
                  {` A simple ${idx.text} alert—check it out!`}
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Links in alerts" reactCode={reactLinkalerts} reusableCode={reuseLinkalerts} dataCode={Defaultdata}>
            {defaultalerts.map((idx) => (
              <SpkAlert Role="alert" customClass={`alert-${idx.color}`} key={Math.random()}>
                  {`A simple ${idx.text} alert with`} <Link to="#" className="alert-link">an example
                      link</Link>.
                  Give it a click if you like.
              </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Solid Colored Alerts" reactCode={reactSolidalerts} reusableCode={reuseSolidalerts} dataCode={Solidalertdata}>
            {solidalert.map((idx) => (
                <SpkAlert Role="alert" Id={`dismiss-alert${idx.dismiss}`} customClass={`alert-solid-${idx.color} alert-dismissible fade show flex`} key={Math.random()}>
                    <div className="sm:flex-shrink-0">
                        {` A simple solid ${idx.color} alert—check it out!`}
                    </div>
                    <div className="ms-auto">
                        <div className="mx-1 my-1">
                            <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                              removeelement={`#dismiss-alert${idx.dismiss}`}>
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                    </div>
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Outline Alerts" reactCode={reactOutlinealerts} reusableCode={reuseOutlinealerts}  dataCode={Outlinedata}>
            {solidalert1.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`}  customClass={`alert-outline-${idx.color} alert-dismissible fade show flex`}>
                    <div className="sm:flex-shrink-0">
                      {`  A simple outline ${idx.color} alert—check it out!`}
                  </div>
                  <div className="ms-auto">
                      <div className="mx-1 my-1">
                        <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                         removeelement={`#dismiss-alert${idx.dismiss}`}>
                              <span className="sr-only">Dismiss</span>
                              <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                  fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                  <path
                                      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                      fill="currentColor" />
                              </svg>
                          </SpkButton>
                      </div>
                  </div>
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Solid Alerts With Different Shadows" reactCode={reactSolidshadowalerts} reusableCode={reuseSolidshadowalerts} dataCode={Shadowsdatas}>
            {shadows.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`}  customClass={`alert-solid-${idx.color} alert-dismissible fade show flex`}>
                        <div className="sm:flex-shrink-0">
                        {`A simple solid ${idx.color} alert with ${idx.text} shadow—check it out!`}
                    </div>
                    <div className="ms-auto">
                        <div className="mx-1 my-1">
                            <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                              removeelement={`#dismiss-alert${idx.dismiss}`}>
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                    </div>
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Default Alerts With Different Shadows" reactCode={reactDefaultshadowsalerts} reusableCode={reuseDefaultshadowsalerts} dataCode={Shadowsdatas}>
            {shadows.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`}  customClass={`alert-${idx.color} shadow-sm`}>
                      {`A simple  ${idx.color} alert with ${idx.text} shadow—check it out!`}
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Rounded Solid Alerts" reactCode={reactRoundedsalerts} reusableCode={reuseRoundedsalerts} dataCode={roundedalertsdata}>
            {roundedalerts.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`}  customClass={`alert alert-solid-${idx.color} !rounded-full alert-dismissible fade show flex`}>
                      <div className="sm:flex-shrink-0">
                          {`A simple solid rounded ${idx.color} alert—check it out!`}
                      </div>
                      <div className="ms-auto">
                          <div className="mx-1 my-1">
                              <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                 removeelement={`#dismiss-alert${idx.dismiss}`}>
                                  <span className="sr-only">Dismiss</span>
                                      <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                          fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                      <path
                                          d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                          fill="currentColor" />
                                  </svg>
                              </SpkButton>
                          </div>
                      </div>
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Rounded Outline Alerts" reactCode={reactRoundedoutlinesalerts} reusableCode={reuseRoundedoutlinesalerts} dataCode={roundedalertsdata}>
            {roundedalerts.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-outline${idx.dismiss}`}  customClass={`alert alert-outline-${idx.color} !rounded-full alert-dismissible fade show flex`}>
                    <div className="sm:flex-shrink-0">
                            {`A simple solid rounded ${idx.color} alert—check it out!`}
                        </div>
                        <div className="ms-auto">
                            <div className="mx-1 my-1">
                                <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                                   removeelement={`#dismiss-outline${idx.dismiss}`}>
                                    <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                            fill="currentColor" />
                                    </svg>
                                </SpkButton>
                            </div>
                        </div>
                    </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Rounded Default Alerts" reactCode={reactRoundeddefaultsalerts} reusableCode={reuseRoundeddefaultsalerts} dataCode={roundedalertsdata}>
            {roundedalerts.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-default${idx.dismiss}`}  customClass={`alert-${idx.color} !rounded-full alert-dismissible fade show flex`}>
                    <div className="sm:flex-shrink-0">
                        {`A simple solid rounded ${idx.color} alert—check it out!`}
                    </div>
                    <div className="ms-auto">
                        <div className="mx-1 my-1">
                            <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                               removeelement={`#dismiss-default${idx.dismiss}`}>
                                    <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                            fill="currentColor" />
                                </svg>
                            </SpkButton>
                        </div>
                    </div>
                  </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode
            title="Rounded Alerts With Custom Close Button"
            reactCode={reactRoundedcustomalerts}
            reusableCode={reuseRoundedcustomalerts}
            dataCode={roundedalertsdata}
          >
            {roundedalerts.map((idx) => (
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-custom${idx.dismiss}`}  customClass={`alert-${idx.color} !rounded-full alert-dismissible fade show`}>
                    {`A simple rounded ${idx.color} alert—check out!`}
                    <SpkButton buttontype="button" customClass="inline-flex  ltr:float-right rtl:float-left   focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                       removeelement={`#dismiss-custom${idx.dismiss}`}>
                        <span className="sr-only">Dismiss</span>
                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                fill="currentColor" />
                        </svg>
                    </SpkButton>
                </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Alerts with icons" reactCode={reactIconalerts} reusableCode={reuseIconalerts} dataCode={Iconalertsdata}>
            {iconalerts.map((idx) => (
              <SpkAlert Role="alert" key={Math.random()} customClass={`alert-${idx.color} flex items-center`}>
                  {idx.icon}
                  <div>
                      {` An example ${idx.color} alert  with an icon`}
                  </div>
              </SpkAlert>
            ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode
            title="Customized Alerts With SVG's"
            reactCode={reactCustomizedalerts} reusableCode={reuseCustomizedalerts}
            dataCode={Iconalertsdata}
          >
             {iconalerts.map((idx) => (
              <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`} customClass={`alert-${idx.color} alert-dismissible dark:!bg-bodybg fade show custom-alert-icon shadow-sm flex items-center`}>
                  {idx.icon}
                  <div>
                      {` An example ${idx.color} alert  with an icon`}
                  </div>
                      <div className="ms-auto">
                          <div className="mx-1 my-1">
                          <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                          removeelement={`#dismiss-alert${idx.dismiss}`}>
                              <span className="sr-only">Dismiss</span>
                                  <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                      fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                      <path
                                          d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                          fill="currentColor" />
                                  </svg>
                          </SpkButton>
                          </div>
                      </div>
              </SpkAlert>
             ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Alerts With Images" reactCode={reactImagesalerts} reusableCode={reuseImagesalerts} dataCode={Imagesdata}>
            {Imagealertslooping.map((idx)=>(
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`} customClass={`alert-img alert-${idx.color} alert-dismissible fase show !rounded-full flex-wrap relative`}>
                    <div className="avatar avatar-sm me-3 avatar-rounded">
                            <img src={idx.image} alt="img" />
                        </div>
                        <div>A simple {idx.color} alert with image—check it out!</div>
                          <SpkButton buttontype="button" customClass="m-2 p-3 absolute end-0 top-0 inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                            removeelement={`#dismiss-alert${idx.dismiss}`}>
                            <span className="sr-only">Dismiss</span>
                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                    fill="currentColor" />
                            </svg>
                        </SpkButton>
                </SpkAlert>
                ))}
          </Showcode>
        </div>
        <div className="xxl:col-span-6 col-span-12">
          <Showcode title="Alerts With Different size Images" reactCode={reactImagesize} reusableCode={reuseImagesize} dataCode={Imagesizedata}>
          {Imagealertswithsize.map((idx)=>(
                <SpkAlert Role="alert" key={Math.random()} Id={`dismiss-alert${idx.dismiss}`} customClass={`alert-img alert-${idx.color} alert-dismissible fase show flex-wrap relative`}>
                <div className={`avatar avatar-${idx.size} me-3`}>
                        <img src={idx.image} alt="img" />
                    </div>
                    <div>A simple primary alert with image—check it out!</div>
                    <SpkButton buttontype="button" customClass="m-2 p-3 absolute end-0 top-0  inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                       removeelement={`#dismiss-alert${idx.dismiss}`}>
                        <span className="sr-only">Dismiss</span>
                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path
                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                fill="currentColor" />
                        </svg>
                    </SpkButton>
                </SpkAlert>
          ))}
          </Showcode>
        </div>
        <div className="xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
              <div className="box !bg-white dark:!bg-bodybg !border-0">
              <SpkAlert  Id="dismiss-alert69"  customClass="custom-alert1 alert-primary !bg-white dark:!bg-bodybg">
                  <SpkButton buttontype="button" customClass="btn-close ms-auto" removeelement="#dismiss-alert69"><i className="bi bi-x"></i></SpkButton>
                  <div className="text-center px-[3rem] pb-0">
                      <svg className="custom-alert-icon svg-primary inline-flex"
                          xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                          width="1.5rem" fill="#000000">
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                      </svg>
                      <h5 className="text-[1.25rem] !font-medium">Information?</h5>
                      <p className="">This alert is created to just show the related information.</p>
                      <div className="">
                          <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-outline-danger m-1">Decline</SpkButton>
                          <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-primary text-white m-1">Accept</SpkButton>
                      </div>
                  </div>
            </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
              <div className="box bg-white border-0">
                    <SpkAlert Id="dismiss-alert70" customClass="custom-alert1 alert-secondary">
                        <SpkButton buttontype="button" customClass="btn-close ms-auto" removeelement="#dismiss-alert70"><i className="bi bi-x"></i></SpkButton>
                        <div className="text-center px-5 pb-0">
                            <svg className="custom-alert-icon fill-secondary inline-flex"
                                xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            <h5 className="text-[1.25rem] !font-medium">Confirmed</h5>
                            <p>This alert is created to just show the confirmation message.</p>
                            <div className="">
                            <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-secondary text-white m-1">Close</SpkButton>
                            </div>
                        </div>
                    </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
              <div className="box bg-white border-0">
                  <SpkAlert Id="dismiss-alert71" customClass="custom-alert1 alert-warning">
                        <SpkButton buttontype="button" customClass="btn-close ms-auto" removeelement="#dismiss-alert71"><i className="bi bi-x"></i></SpkButton>
                        <div className="text-center px-5 pb-0">
                            <svg className="custom-alert-icon fill-warning inline-flex"
                                xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                            </svg>
                            <h5 className="text-[1.25rem] !font-medium">Warning</h5>
                            <p className="">This alert is created to just show the warning message.</p>
                            <div className="">
                            <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-outline-secondary m-1">Back</SpkButton>
                            <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-warning text-white m-1">Continue</SpkButton>
                            </div>
                        </div>
                  </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
              <div className="box bg-white border-0">
                  <SpkAlert  Id="dismiss-alert72" customClass="custom-alert1 alert-danger">
                        <SpkButton buttontype="button" customClass="btn-close ms-auto"  removeelement="#dismiss-alert72"><i className="bi bi-x"></i></SpkButton>
                        <div className="text-center px-5 pb-0">
                          <svg className="custom-alert-icon fill-danger inline-flex"
                                xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                width="1.5rem" fill="#000000">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                            </svg>
                            <h5 className="text-[1.25rem] !font-medium">danger</h5>
                            <p className="">This alert is created to just show the warning message.</p>
                            <div className="">
                            <SpkButton buttontype="button" customClass="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-danger text-white m-1">Delete</SpkButton>
                            </div>
                        </div>
                  </SpkAlert>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert57" customClass="alert-primary border !border-primary mb-0 p-2">
                      <div className="flex items-start">
                              <div className="me-2">
                                  <svg className="sm:flex-shrink-0 svg-primary"
                                      xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                      viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                      <path d="M0 0h24v24H0V0z" fill="none" />
                                      <path
                                          d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                  </svg>
                              </div>
                              <div className="text-primary w-full">
                                  <div className="font-semibold flex justify-between">Information
                                      Alert
                                      <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        removeelement="#dismiss-alert57"> 
                                          <span className="sr-only">Dismiss</span>
                                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                              fill="none" xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true">
                                              <path
                                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                  fill="currentColor" />
                                          </svg>
                                          </SpkButton>
                                      </div>
                                  <div className="text-[0.75rem] opacity-[0.8] mb-1">Information alert to show
                                      to information
                                  </div>
                                  <div className="text-[0.75rem]">
                                      <Link to="#"
                                          className="text-secondary font-semibold me-2 inline-block">cancel</Link>
                                      <Link to="#"
                                          className="text-primary font-semibold">open</Link>
                                  </div>
                              </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                <SpkAlert  Id="dismiss-alert58" customClass="alert-secondary border !border-secondary mb-0 p-2">
                    <div className="flex items-start">
                                <div className="me-2">
                                    <svg className="sm:flex-shrink-0 fill-secondary"
                                        xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                        <path
                                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                    </svg>
                                </div>
                                <div className="text-secondary w-full">
                                    <div className="font-semibold flex justify-between">Success
                                        Alert
                                        <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                                        removeelement="#dismiss-alert58"> 
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </SpkButton>
                                        </div>
                                    <div className="text-[0.75rem] opacity-[0.8] mb-1">Success alert to show to
                                        success message
                                    </div>
                                    <div className="text-[0.75rem]">
                                        <Link to="#"
                                            className="text-danger font-semibold me-2 inline-block">cancel</Link>
                                        <Link to="#"
                                            className="text-secondary font-semibold">open</Link>
                                    </div>
                                </div>
                    </div>
                </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                <SpkAlert  Id="dismiss-alert59" customClass="alert-warning border !border-warning mb-0 p-2">
                    <div className="flex items-start">
                            <div className="me-2">
                                <svg className="sm:flex-shrink-0 fill-warning"
                                    xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <g>
                                        <rect fill="none" height="24" width="24" />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                <polygon points="13,16 11,16 11,18 13,18" />
                                                <polygon points="13,10 11,10 11,15 13,15" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="text-warning w-full">
                                <div className="font-semibold flex justify-between">Warning
                                    Alert
                                    <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                                    removeelement="#dismiss-alert59"> 
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </SpkButton>
                                    </div>
                                <div className="text-[0.75rem] opacity-[0.8] mb-1">Warning alert to show
                                    warning message</div>
                                <div className="text-[0.75rem]">
                                    <Link to="#"
                                        className="text-black dark:text-white font-semibold me-2 inline-block">cancel</Link>
                                    <Link to="#"
                                        className="text-warning font-semibold">open</Link>
                                </div>
                            </div>
                    </div>
                </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert60" customClass="alert-danger border !border-danger mb-0 p-2">
                      <div className="flex items-start">
                              <div className="me-2">
                                  <svg className="sm:flex-shrink-0 fill-danger"
                                      xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                      height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                      <g>
                                          <rect fill="none" height="24" width="24" />
                                      </g>
                                      <g>
                                          <g>
                                              <g>
                                                  <path
                                                      d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                  <rect height="6" width="2" x="11" y="7" />
                                                  <rect height="2" width="2" x="11" y="15" />
                                              </g>
                                          </g>
                                      </g>
                                  </svg>
                              </div>
                              <div className="text-danger w-full">
                                  <div className="font-semibold flex justify-between">Danger
                                      Alert
                                      <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        removeelement="#dismiss-alert60"> 
                                          <span className="sr-only">Dismiss</span>
                                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                              fill="none" xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true">
                                              <path
                                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                  fill="currentColor" />
                                          </svg>
                                      </SpkButton>
                                      </div>
                                  <div className="text-[0.75rem] opacity-[0.8] mb-1">Danger alert to show the
                                      danger message
                                  </div>
                                  <div className="text-[0.75rem]">
                                      <Link to="#"
                                          className="text-info font-semibold me-2 inline-block">cancel</Link>
                                      <Link to="#"
                                          className="text-danger font-semibold">open</Link>
                                  </div>
                              </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert61" customClass="alert-solid-primary border border-primary mb-0 p-2">
                      <div className="flex items-start">
                              <div className="me-2">
                                  <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                      height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                      <path d="M0 0h24v24H0V0z" fill="none" />
                                      <path
                                          d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                  </svg>
                              </div>
                              <div className="text-white w-full">
                                  <div className="font-semibold flex justify-between">Information
                                      Alert
                                      <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        removeelement="#dismiss-alert61"> 
                                          <span className="sr-only">Dismiss</span>
                                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                              fill="none" xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true">
                                              <path
                                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                  fill="currentColor" />
                                          </svg>
                                      </SpkButton>
                                      </div>
                                  <div className="text-[0.75rem] opacity-[0.8] mb-1">Information alert to show
                                      to information
                                  </div>
                                  <div className="text-[0.75rem]">
                                      <Link to="#"
                                          className="text-white font-semibold me-2 op-7">cancel</Link>
                                      <Link to="#"
                                          className="text-white font-semibold">open</Link>
                                  </div>
                              </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert62" customClass="alert-solid-secondary border border-secondary mb-0 p-2">
                      <div className="flex items-start">
                              <div className="me-2">
                                  <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                      height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                      <path
                                          d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                  </svg>
                              </div>
                              <div className="text-white w-full">
                                  <div className="font-semibold flex justify-between">Success
                                      Alert
                                      <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        removeelement="#dismiss-alert62"> 
                                          <span className="sr-only">Dismiss</span>
                                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                              fill="none" xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true">
                                              <path
                                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                  fill="currentColor" />
                                          </svg>
                                      </SpkButton>
                                      </div>
                                  <div className="text-[0.75rem] opacity-[0.8] mb-1">Success alert to show to
                                      success message
                                  </div>
                                  <div className="text-[0.75rem]">
                                      <Link to="#"
                                          className="text-white font-semibold me-2">close</Link>
                                  </div>
                              </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert63" customClass="alert-solid-warning border border-warning mb-0 p-2">
                      <div className="flex items-start">
                          <div className="me-2">
                              <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                  enableBackground="new 0 0 24 24" height="1.5rem"
                                  viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                  <g>
                                      <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                      <g>
                                          <g>
                                              <path
                                                  d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                              <polygon points="13,16 11,16 11,18 13,18" />
                                              <polygon points="13,10 11,10 11,15 13,15" />
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                          </div>
                          <div className="text-white w-full">
                              <div className="font-semibold flex justify-between">Warning
                                  Alert
                                  <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                                  removeelement="#dismiss-alert63"> 
                                          <span className="sr-only">Dismiss</span>
                                          <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                              fill="none" xmlns="http://www.w3.org/2000/svg"
                                              aria-hidden="true">
                                              <path
                                                  d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                  fill="currentColor" />
                                          </svg>
                                  </SpkButton>
                                  </div>
                              <div className="text-[0.75rem] opacity-[0.8] mb-1">Warning alert to show to
                                  warning message
                              </div>
                              <div className="text-[0.75rem]">
                                  <Link to="#"
                                      className="text-white font-semibold me-2 op-7">skip</Link>
                                  <Link to="#"
                                      className="text-white font-semibold">open</Link>
                              </div>
                          </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
            <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
              <div className="box border-0">
                  <SpkAlert  Id="dismiss-alert64"  customClass="alert-solid-danger border border-danger mb-0 p-2">
                        <div className="flex items-start">
                          <div className="me-2">
                              <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                  enableBackground="new 0 0 24 24" height="1.5rem"
                                  viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                  <g>
                                      <rect fill="none" height="24" width="24" />
                                  </g>
                                  <g>
                                      <g>
                                          <g>
                                              <path
                                                  d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                              <rect height="6" width="2" x="11" y="7" />
                                              <rect height="2" width="2" x="11" y="15" />
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                          </div>
                          <div className="text-white w-full">
                              <div className="font-semibold flex justify-between">Danger
                                  Alert
                                  <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                    removeelement="#dismiss-alert64"> 
                                      <span className="sr-only">Dismiss</span>
                                      <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                          fill="none" xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true">
                                          <path
                                              d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                              fill="currentColor" />
                                      </svg>
                                  </SpkButton>
                                  </div>
                              <div className="text-[0.75rem] opacity-[0.8] mb-1">Danger alert to show to
                                  danger message
                              </div>
                              <div className="text-[0.75rem]">
                                  <Link to="#"
                                      className="text-white font-semibold me-2 op-7">close</Link>
                                  <Link to="#"
                                      className="text-white font-semibold">continue</Link>
                              </div>
                          </div>
                      </div>
                  </SpkAlert>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-12 col-span-12">
          <Showcode title="Additional content" reactCode={reactAdditionalalerts} reusableCode={reuseAdditionalalerts}>
            <div className="grid grid-cols-12 gap-4">
              <div className="xxl:col-span-6 col-span-12">
                  <SpkAlert Role="alert" Id="dismiss-alert65" customClass="alert-primary overflow-hidden !p-0">
                        <div className="p-4 bg-primary text-white flex justify-between">
                          <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                          </h6>
                          <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                            removeelement="#dismiss-alert65"> 
                              <span className="sr-only">Dismiss</span>
                              <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                  fill="none" xmlns="http://www.w3.org/2000/svg"
                                  aria-hidden="true">
                                  <path
                                      d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                      fill="currentColor" />
                              </svg>
                          </SpkButton>
                      </div>

                      <div className="p-3">
                          <p className="mb-0">We appreciate you to let us know the bug in the template
                              and for warning us about future consequences <Link
                                  to="#"
                                  className="font-semibold underline text-defaulttextcolor">Visit for
                                  support
                                  for queries ?</Link></p>
                      </div>
                  </SpkAlert>
              </div>
              <div className="xxl:col-span-6 col-span-12">
              <SpkAlert Role="alert" Id="dismiss-alert66" customClass="alert-secondary overflow-hidden !p-0">
                    <div className="p-4 bg-secondary text-white flex justify-between">
                            <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                            </h6>
                            <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                              removeelement="#dismiss-alert66"> 
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </SpkButton>
                    </div>

                    <div className="p-3">
                        <p className="mb-0">We appreciate you to let us know the bug in the template
                            and for warning us about future consequences <Link
                                to="#"
                                className="font-semibold underline text-defaulttextcolor">Visit for
                                support
                                for queries ?</Link></p>
                    </div>
                </SpkAlert>
              </div>
              <div className="xxl:col-span-6 col-span-12">
                    <SpkAlert Role="alert" Id="dismiss-alert67" customClass="alert-success !border-success/10 overflow-hidden !p-0">
                              <div className="p-4 bg-success text-white flex justify-between">
                                  <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                  </h6>
                                  <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600" 
                                  removeelement="#dismiss-alert67"> 
                                      <span className="sr-only">Dismiss</span>
                                      <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                          fill="none" xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true">
                                          <path
                                              d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                              fill="currentColor" />
                                      </svg>
                                  </SpkButton>
                              </div>
                          <div className="p-3">
                              <p className="mb-0">We appreciate you to let us know the bug in the template
                                  and for warning us about future consequences <Link
                                      to="#"
                                      className="font-semibold underline text-defaulttextcolor">Visit for
                                      support
                                      for queries ?</Link></p>
                          </div>
                      </SpkAlert>
              </div>
              <div className="xxl:col-span-6 col-span-12">
                  <SpkAlert Role="alert" Id="dismiss-alert68" customClass="alert-warning overflow-hidden !p-0">
                      <div className="p-4 bg-warning text-white flex justify-between">
                                  <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                  </h6>
                              <SpkButton buttontype="button" customClass="inline-flex  rounded-sm  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                removeelement="#dismiss-alert68"> 
                                      <span className="sr-only">Dismiss</span>
                                      <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                          fill="none" xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true">
                                          <path
                                              d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                              fill="currentColor" />
                                      </svg>
                              </SpkButton>
                          </div>

                          <div className="p-3">
                              <p className="mb-0">We appreciate you to let us know the bug in the template
                                  and for warning us about future consequences <Link
                                      to="#"
                                      className="font-semibold underline text-defaulttextcolor">Visit for
                                      support
                                      for queries ?</Link></p>
                          </div>
                  </SpkAlert>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
    </Fragment>
  );
};

export default Alerts;
