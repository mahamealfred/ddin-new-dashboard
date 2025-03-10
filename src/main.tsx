import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = lazy(()=> import( './pages/App.tsx'))
const Auth = lazy(()=> import( './firebase/auth.tsx'))
const Login = lazy(()=> import( './firebase/login.tsx'))
const Signup = lazy(()=> import( './firebase/signup.tsx'))
const Crm = lazy(()=> import( './container/dashboards/crm/crm.tsx'))
const Ecommerce = lazy(()=> import( './container/dashboards/ecommerce/ecommerce.tsx'))
const Crypto = lazy(()=> import( './container/dashboards/crypto/crypto.tsx'))
const Jobs = lazy(()=> import( './container/dashboards/jobs/jobs.tsx'))
const Nft = lazy(()=> import( './container/dashboards/nft/nft.tsx'))
const Sales = lazy(()=> import( './container/dashboards/sales/sales.tsx'))
const Analytics = lazy(()=> import( './container/dashboards/analytics/analytics.tsx'))
const Projects = lazy(()=> import( './container/dashboards/projects/projects.tsx'))
const Hrm = lazy(()=> import( './container/dashboards/hrm/hrm.tsx'))
const Stocks = lazy(()=> import( './container/dashboards/stocks/stocks.tsx'))
const Courses = lazy(()=> import( './container/dashboards/courses/courses.tsx'))
const Personal = lazy(()=> import( './container/dashboards/personal/personal.tsx'))
const AboutUs = lazy(()=> import( './container/pages/about-us/about-us.tsx'))
const Blog = lazy(()=> import( './container/pages/blog/blog/blog.tsx'))
const BlogDetails = lazy(()=> import( './container/pages/blog/blog-details/blog-details.tsx'))
const Createblog = lazy(()=> import( './container/pages/blog/create-blog/create-blog.tsx'))
const Chat = lazy(()=> import( './container/pages/chat/chat.tsx'))
const Contacts = lazy(()=> import( './container/pages/contacts/contacts.tsx'))
const Contactus = lazy(()=> import( './container/pages/contact-us/contact-us.tsx'))
const Addproducts = lazy(()=> import( './container/pages/ecommerce/add-products/add-products.tsx'))
const Cart = lazy(()=> import( './container/pages/ecommerce/cart/cart.tsx'))
const Checkout = lazy(()=> import( './container/pages/ecommerce/checkout/checkout.tsx'))
const Editproducts = lazy(()=> import( './container/pages/ecommerce/edit-products/edit-products.tsx'))
const Orderdetails = lazy(()=> import( './container/pages/ecommerce/order-details/order-details.tsx'))
const Orders = lazy(()=> import( './container/pages/ecommerce/orders/orders.tsx'))
const Products = lazy(()=> import( './container/pages/ecommerce/products/products.tsx'))
const ProductDetails = lazy(()=> import( './container/pages/ecommerce/product-details/product-details.tsx'))
const Productlist = lazy(()=> import( './container/pages/ecommerce/product-list/product-list.tsx'))
const Wishlist = lazy(()=> import( './container/pages/ecommerce/wishlist/wishlist.tsx'))
const Mailapp = lazy(()=> import( './container/pages/email/mail-app/mail-app.tsx'))
const Mailsettings = lazy(()=> import( './container/pages/email/mail-settings/mail-settings.tsx'))
const Empty = lazy(()=> import( './container/pages/empty/empty.tsx'))
const Faqs = lazy(()=> import( './container/pages/faqs/faqs.tsx'))
const Filemanager = lazy(()=> import( './container/pages/filemanager/filemanager/filemanager.tsx'))
const Createinvoice = lazy(()=> import( './container/pages/invoice/create-invoice/create-invoice.tsx'))
const Invoicedetails = lazy(()=> import( './container/pages/invoice/invoice-details/invoice-details.tsx'))
const Invoicelist = lazy(()=> import( './container/pages/invoice/invoice-list/invoie-list.tsx'))
const Notifications = lazy(()=> import( './container/pages/notifications/notifications.tsx'))
const Pricing = lazy(()=> import( './container/pages/pricing/pricing.tsx'))
const Profile = lazy(()=> import( './container/pages/profile/profile.tsx'))
const Reviews = lazy(()=> import( './container/pages/reviews/reviews.tsx'))
const Team = lazy(()=> import( './container/pages/team/team.tsx'))
const Termsconditions = lazy(()=> import( './container/pages/terms&conditions/terms-conditions.tsx'))
const Timeline = lazy(()=> import( './container/pages/timeline/timeline.tsx'))
const Todolist = lazy(()=> import( './container/pages/todo-list/todolist.tsx'))
const Kanbanboard = lazy(()=> import( './container/task/kanban-board/kanban-board.tsx'))
const Listview = lazy(()=> import( './container/task/list-view/list-view.tsx'))
const Taskdetails = lazy(()=> import( './container/task/task-details/task-details.tsx'))
const Alerts = lazy(()=> import( './container/ui-elements/alerts/alerts.tsx'))
const Breadcrumb = lazy(()=> import( './container/ui-elements/breadcrumb/breadcrumb.tsx'))
const Buttons = lazy(()=> import( './container/ui-elements/buttons/buttons.tsx'))
const Buttongroup = lazy(()=> import( './container/ui-elements/button-group/button-group.tsx'))
const Cards = lazy(()=> import( './container/ui-elements/cards/cards.tsx'))
const Dropdowns = lazy(()=> import( './container/ui-elements/dropdowns/dropdowns.tsx'))
const Imagesfigures = lazy(()=> import( './container/ui-elements/images&figures/images-figures.tsx'))
const Listgroup = lazy(()=> import( './container/ui-elements/list-group/list-group.tsx'))
const Navstabs = lazy(()=> import( './container/ui-elements/navs&tabs/navs-tabs.tsx'))
const Objectfit = lazy(()=> import( './container/ui-elements/object-fit/object-fit.tsx'))
const Pagination = lazy(()=> import( './container/ui-elements/pagination/pagination.tsx'))
const Popovers = lazy(()=> import( './container/ui-elements/popovers/popovers.tsx'))
const Progress = lazy(()=> import( './container/ui-elements/progress/progress.tsx'))
const Spinners = lazy(()=> import( './container/ui-elements/spinners/spinners.tsx'))
const Indicators = lazy(()=> import( './container/ui-elements/indicators/indicators.tsx'))
const Toasts = lazy(()=> import( './container/ui-elements/toasts/toasts.tsx'))
const Tooltips = lazy(()=> import( './container/ui-elements/tooltips/tooltips.tsx'))
const Avatars = lazy(()=> import( './container/utilities/avatars/avatars.tsx'))
const Borders = lazy(()=> import( './container/utilities/borders/borders.tsx'))
const Badge = lazy(()=> import( './container/ui-elements/badge/badge.tsx'))
const Landing = lazy(()=> import( './container/pages/landing/landing.tsx'))
const JobsLanding = lazy(()=> import( './container/pages/jobs-landing/jobs-landing.tsx'))
const Landinglayout = lazy(()=> import( './pages/landinglayout.tsx'))
const Error401 = lazy(()=> import( './container/error/error-401/error-401.tsx'))
const Error404 = lazy(()=> import( './container/error/error-404/error-404.tsx'))
const Error500 = lazy(()=> import( './container/error/error-500/error-500.tsx'))
const Undermaintanance = lazy(()=> import( './container/authentication/under-maintanance/under-maintanance.tsx'))
const Twobasic = lazy(()=> import( './container/authentication/two-step-verification/two-basic/two-basic.tsx'))
const Twocover = lazy(()=> import( './container/authentication/two-step-verification/two-cover/two-cover.tsx'))
const Signincover = lazy(()=> import( './container/authentication/sign-in/signin-cover/signin-cover.tsx'))
const Signinbasic = lazy(()=> import( './container/authentication/sign-in/signin-basic/signin-basic.tsx'))
const Signupbasic = lazy(()=> import( './container/authentication/sign-up/signup-basic/signup-basic.tsx'))
const Signupcover = lazy(()=> import( './container/authentication/sign-up/signup-cover/signup-cover.tsx'))
const Resetbasic = lazy(()=> import( './container/authentication/reset-password/reset-basic/reset-basic.tsx'))
const Resetcover = lazy(()=> import( './container/authentication/reset-password/reset-cover/reset-cover.tsx'))
const Screenbasic = lazy(()=> import( './container/authentication/lock-screen/screen-basic/screen-basic.tsx'))
const Screencover = lazy(()=> import( './container/authentication/lock-screen/screen-cover/screen-cover.tsx'))
const Createbasic = lazy(()=> import( './container/authentication/create-password/create-basic/create-basic.tsx'))
const Createcover = lazy(()=> import( './container/authentication/create-password/create-cover/create-cover.tsx'))
const Comingsoon = lazy(()=> import( './container/authentication/coming-soon/coming-soon.tsx'))
const Authenticationlayout = lazy(()=> import( './pages/authenticationlayout.tsx'))
const Icons = lazy(()=> import( './container/icons/icons.tsx'))
const Vectormaps = lazy(()=> import( './container/maps/vector-maps/vectormaps.tsx'))
const Echart = lazy(()=> import( './container/charts/echart/echart.tsx'))
const Chartjs = lazy(()=> import( './container/charts/chartjs/chartjs.tsx'))
const Radarchart = lazy(()=> import( './container/charts/apexcharts/radar-chart/radar-chart.tsx'))
const Polarareachart = lazy(()=> import( './container/charts/apexcharts/polararea-chart/polararea-chart.tsx'))
const Radialbarchart = lazy(()=> import( './container/charts/apexcharts/radialbar-chart/radialbar-chart.tsx'))
const Piechart = lazy(()=> import( './container/charts/apexcharts/pie-chart/pie-charts.tsx'))
const Treemapchart = lazy(()=> import( './container/charts/apexcharts/treemap-chart/treemap-chart.tsx'))
const Heatmapchart = lazy(()=> import( './container/charts/apexcharts/heatmap-chart/heatmap-chart.tsx'))
const Scatterchart = lazy(()=> import( './container/charts/apexcharts/scatter-chart/scatter-chart.tsx'))
const Boxplotchart = lazy(()=> import( './container/charts/apexcharts/boxplot-charts/boplot-charts.tsx'))
const Candlestickchart = lazy(()=> import( './container/charts/apexcharts/candlestick-chart/candlestick-chart.tsx'))
const Timelinechart = lazy(()=> import( './container/charts/apexcharts/timeline-chart/timeline-chart.tsx'))
const Rangeareachart = lazy(()=> import( './container/charts/apexcharts/range-area-chart/range-area-chart.tsx'))
const Mixedcharts = lazy(()=> import( './container/charts/apexcharts/mixed-charts/mixed-charts.tsx'))
const Barcharts = lazy(()=> import( './container/charts/apexcharts/bar-charts/bar-charts.tsx'))
const Columncharts = lazy(()=> import( './container/charts/apexcharts/column-charts/column-charts.tsx'))
const Areacharts = lazy(()=> import( './container/charts/apexcharts/area-charts/area-charts.tsx'))
const Linecharts = lazy(()=> import( './container/charts/apexcharts/line-charts/line-charts.tsx'))
const Table = lazy(()=> import( './container/tables/table/table.tsx'))
const Gridjstable = lazy(()=> import( './container/tables/gridjs-table/gridjs-table.tsx'))
const Datatable = lazy(()=> import( './container/tables/data-table/data-table.tsx'))
const Wallet = lazy(()=> import( './container/apps/crypto/wallet/wallet.tsx'))
const Marketcap = lazy(()=> import( './container/apps/crypto/market-cap/market-cap.tsx'))
const Buysell = lazy(()=> import( './container/apps/crypto/buy-sell/buy-sell.tsx'))
const Currencyexchange = lazy(()=> import( './container/apps/crypto/currency-exchange/currency-exchange.tsx'))
const Transactions = lazy(()=> import( './container/apps/crypto/transactions/transactions.tsx'))
const Leads = lazy(()=> import( './container/apps/crm/leads/leads.tsx'))
const Companies = lazy(()=> import( './container/apps/crm/companies/companies.tsx'))
const CrmContacts = lazy(()=> import( './container/apps/crm/crmcontacts/crmcontacts.tsx'))
const Deals = lazy(()=> import( './container/apps/crm/deals/deals.tsx'))
const Liveauction = lazy(()=> import( './container/apps/nft/live-auction/live-auction.tsx'))
const Marketplace = lazy(()=> import( './container/apps/nft/market-place/market-place.tsx'))
const Nftdetails = lazy(()=> import( './container/apps/nft/nft-details/nft-details.tsx'))
const Createnft = lazy(()=> import( './container/apps/nft/create-nft/create-nft.tsx'))
const Walletintegration = lazy(()=> import( './container/apps/nft/wallet-integration/wallet-integration.tsx'))
const SearchCandidate = lazy(()=> import( './container/apps/jobs/search-candidate/search-candidate.tsx'))
const Candidatedetails = lazy(()=> import( './container/apps/jobs/candidate-details/candidate-details.tsx'))
const Jobslist = lazy(()=> import( './container/apps/jobs/jobs-list/jobs-list.tsx'))
const Jobpost = lazy(()=> import( './container/apps/jobs/job-post/job-post.tsx'))
const SearchJobs = lazy(()=> import( './container/apps/jobs/search-jobs/search-jobs.tsx'))
const Searchcompany = lazy(()=> import( './container/apps/jobs/search-company/search-company.tsx'))
const Jobdetails = lazy(()=> import( './container/apps/jobs/job-details/job-details.tsx'))
const Createproject = lazy(()=> import( './container/apps/projects/create-project/create-project.tsx'))
const Projectoverview = lazy(()=> import( './container/apps/projects/project-overview/project-overview.tsx'))
const Projectlist = lazy(()=> import( './container/apps/projects/project-list/project-list.tsx'))
const Gallery = lazy(()=> import( './container/apps/gallery/gallery.tsx'))
const Fullcalendar = lazy(()=> import( './container/apps/full-calendar/full-calendar.tsx'))
const Widgets = lazy(()=> import( './container/widgets/widgets.tsx'))
const Swiperjs = lazy(()=> import( './container/advanced-ui/swiper-js/swiper-js.tsx'))
const Ratings = lazy(()=> import( './container/advanced-ui/ratings/ratings.tsx'))
const Offcanvas = lazy(()=> import( './container/advanced-ui/offcanvas/offcanvas.tsx'))
const Navbar = lazy(()=> import( './container/advanced-ui/navbar/navbar.tsx'))
const Draggablecards = lazy(()=> import( './container/advanced-ui/draggable-cards/draggable-cards.tsx'))
const Select2 = lazy(()=> import( './container/forms/select2/select2.tsx'))
const Validation = lazy(()=> import( './container/forms/validation/validation.tsx'))
const Formlayouts = lazy(()=> import( './container/forms/form-layouts/form-layouts.tsx'))
const Colorpicker = lazy(()=> import( './container/forms/formelements/color-picker/color-picker.tsx'))
const Datetimepicker = lazy(()=> import( './container/forms/formelements/date-time-picker/date-time-picker.tsx'))
const Inputs = lazy(()=> import( './container/forms/formelements/inputs/inputs.tsx'))
const Checksradios = lazy(()=> import( './container/forms/formelements/checks&radios/check-radios.tsx'))
const Inputgroup = lazy(()=> import( './container/forms/formelements/input-group/input-group.tsx'))
const Formselect = lazy(()=> import( './container/forms/formelements/form-select/form-select.tsx'))
const RangeSlider = lazy(()=> import( './container/forms/formelements/range-slider/range-slider.tsx'))
const Fileuploads = lazy(()=> import( './container/forms/formelements/file-uploads/file-uploads.tsx'))
const Columns = lazy(()=> import( './container/utilities/columns/columns.tsx'))
const Flex = lazy(()=> import( './container/utilities/flex/flex.tsx'))
const Grids = lazy(()=> import( './container/utilities/grids/grids.tsx'))
const Colors = lazy(()=> import( './container/utilities/colors/colors.tsx'))
const Blackquotes = lazy(()=> import( './container/ui-elements/blockquotes/blackquotes.tsx'))
const Typography = lazy(()=> import( './container/utilities/typography/typography.tsx'))
const Formswitch = lazy(()=> import( './container/forms/formelements/formswitch/foemswitch.tsx'))
const Advancedselect = lazy(()=> import( './container/forms/formelements/advancedselect/advancedselect.tsx'))
const Inputnumber = lazy(()=> import( './container/forms/formelements/inputnumber/inputnumber.tsx'))
const Passwords = lazy(()=> import( './container/forms/formelements/passwords/passwords.tsx'))
const Countermarkup = lazy(()=> import( './container/forms/formelements/countermarkup/countermarkup.tsx'))
const Accordionscollapse = lazy(()=> import( './container/advanced-ui/accordions-collapse/accordionscollapse.tsx'))
const Customscrollbar = lazy(()=> import( './container/advanced-ui/customscrollbar/customscrollbar.tsx'))
const Stepper = lazy(()=> import( './container/advanced-ui/stepper/stepper.tsx'))
const Modalscloses = lazy(()=> import( './container/advanced-ui/modals-closes/modals-closes.tsx'))
const Leafletmaps = lazy(()=> import( './container/maps/leaflet-map/leaflet-map.tsx'))
const Googlemaps = lazy(()=> import( './container/maps/google-map/googlemaps.tsx'))
const Bubblechart = lazy(()=> import( './container/charts/apexcharts/bubble-chart/bubble-chart.tsx'))
const Suneditor = lazy(()=> import( './container/forms/formeditors/formeditor/formeditor.tsx'))
const Loader =lazy(()=>import( './components/common/loader/loader.tsx'))
import "../src/assets/scss/tailwind/_tailwind.scss"
import './index.scss'
import { Provider } from 'react-redux'
import store from './redux/store.tsx'
import RootWrapper from './pages/Rootwrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
     <Provider store={store}>
        <RootWrapper>
            <BrowserRouter future={{v7_startTransition: true,   v7_relativeSplatPath: true,}}>
              <React.Suspense fallback={<Loader/>}>
                <Routes>
                  <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
                    {/* <Route index element={<Landing/>} /> */}
                    <Route index element={<Login/>} />
                    <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
                    <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />} />
                  </Route>
                  <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
                    <Route path={`${import.meta.env.BASE_URL}dashboards/crm`} element={<Crm/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/ecommerce`} element={<Ecommerce />} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/crypto`} element={<Crypto/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/jobs`} element={<Jobs/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/nft`} element={<Nft/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/corporate`} element={<Sales/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/analytics`} element={<Analytics/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/projects`} element={<Projects/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/hrm`} element={<Hrm/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/stocks`} element={<Stocks/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/courses`} element={<Courses/>} />
                    <Route path={`${import.meta.env.BASE_URL}dashboards/personal`} element={<Personal/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/about-us`} element={<AboutUs/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/blog/blog`} element={<Blog/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/blog/blog-details`} element={<BlogDetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/blog/create-blog`} element={<Createblog/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/chat`} element={<Chat/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/contacts`} element={<Contacts/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/contact-us`} element={<Contactus/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/add-products`} element={<Addproducts/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} element={<Cart/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/checkout`} element={<Checkout/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/edit-products`} element={<Editproducts/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/order-details`} element={<Orderdetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/orders`} element={<Orders/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/products`} element={<Products/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/product-details/`} element={<ProductDetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/product-details/:id`} element={<ProductDetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/product-list`} element={<Productlist/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist`} element={<Wishlist/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/email/mail-app`} element={<Mailapp/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/email/mail-settings`} element={<Mailsettings/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/empty`} element={<Empty/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/faqs`} element={<Faqs/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/filemanager/filemanager`} element={<Filemanager/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/invoice/create-invoice`} element={<Createinvoice/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice-details`} element={<Invoicedetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/invoice/invoice-list`} element={<Invoicelist/>} />

                    <Route path={`${import.meta.env.BASE_URL}pages/notifications`} element={<Notifications/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/pricing`} element={<Pricing/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/profile`} element={<Profile/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/reviews`} element={<Reviews/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/team`} element={<Team/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/terms-conditions`} element={<Termsconditions/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/timeline`} element={<Timeline/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/todo-list`} element={<Todolist/>} />

                    <Route path={`${import.meta.env.BASE_URL}task/kanban-board`} element={<Kanbanboard/>} />
                    <Route path={`${import.meta.env.BASE_URL}task/list-view`} element={<Listview/>} />
                    <Route path={`${import.meta.env.BASE_URL}task/task-details`} element={<Taskdetails/>} />

                    <Route path={`${import.meta.env.BASE_URL}ui-elements/alerts`} element={<Alerts/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/badge`} element={<Badge/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/breadcrumb`} element={<Breadcrumb/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/buttons`} element={<Buttons/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/button-group`} element={<Buttongroup/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/blockquotes`} element={<Blackquotes/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/cards`} element={<Cards/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/dropdowns`} element={<Dropdowns/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/images-figures`} element={<Imagesfigures/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/list-group`} element={<Listgroup/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/navs-tabs`} element={<Navstabs/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/object-fit`} element={<Objectfit/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/pagination`} element={<Pagination/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/popovers`} element={<Popovers/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/progress`} element={<Progress/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/spinners`} element={<Spinners/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/indicators`} element={<Indicators/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/toasts`} element={<Toasts/>} />
                    <Route path={`${import.meta.env.BASE_URL}ui-elements/tooltips`} element={<Tooltips/>} />

                    <Route path={`${import.meta.env.BASE_URL}utilities/avatars`} element={<Avatars/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/borders`} element={<Borders/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/colors`} element={<Colors/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/grids`} element={<Grids/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/flex`} element={<Flex/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/columns`} element={<Columns/>} />
                    <Route path={`${import.meta.env.BASE_URL}utilities/typography`} element={<Typography/>} />

                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputs`} element={<Inputs/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/check-radios`} element={<Checksradios/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/formswitch`} element={<Formswitch/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/input-group`} element={<Inputgroup/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/form-select`} element={<Formselect/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/range-slider`} element={<RangeSlider/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/file-uploads`} element={<Fileuploads/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/date-time-picker`} element={<Datetimepicker/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/color-picker`} element={<Colorpicker/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/advancedselect`} element={<Advancedselect/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/inputnumber`} element={<Inputnumber/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/passwords`} element={<Passwords/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/formelements/countermarkup`} element={<Countermarkup/>} />

                    <Route path={`${import.meta.env.BASE_URL}forms/form-layouts`} element={<Formlayouts/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/validation`} element={<Validation/>} />
                    <Route path={`${import.meta.env.BASE_URL}forms/select2`} element={<Select2/>} />

                    <Route path={`${import.meta.env.BASE_URL}forms/formeditors/formeditor`} element={<Suneditor/>} />

                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/accordions-collapse`} element={<Accordionscollapse/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/customscrollbar`} element={<Customscrollbar/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/draggable-cards`} element={<Draggablecards/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/modals-closes`} element={<Modalscloses/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/navbar`} element={<Navbar/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/offcanvas`} element={<Offcanvas/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/ratings`} element={<Ratings/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/swiper-js`} element={<Swiperjs/>} />
                    <Route path={`${import.meta.env.BASE_URL}advanced-ui/stepper`} element={<Stepper/>} />

                    <Route path={`${import.meta.env.BASE_URL}widgets`} element={<Widgets/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/full-calendar`} element={<Fullcalendar/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/gallery`} element={<Gallery/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/projects/project-list`} element={<Projectlist/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/projects/project-overview`} element={<Projectoverview/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/projects/create-project`} element={<Createproject/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/job-details`} element={<Jobdetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/search-company`} element={<Searchcompany/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/search-jobs`} element={<SearchJobs/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/job-post`} element={<Jobpost/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/jobs-list`} element={<Jobslist/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/search-candidate`} element={<SearchCandidate/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/jobs/candidate-details`} element={<Candidatedetails/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/nft/market-place`} element={<Marketplace/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/nft/nft-details`} element={<Nftdetails/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/nft/create-nft`} element={<Createnft/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/nft/wallet-integration`} element={<Walletintegration/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/nft/live-auction`} element={<Liveauction/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/crm/crmcontacts`} element={<CrmContacts/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crm/companies`} element={<Companies/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crm/deals`} element={<Deals/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crm/leads`} element={<Leads/>} />

                    <Route path={`${import.meta.env.BASE_URL}apps/crypto/transactions`} element={<Transactions/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crypto/currency-exchange`} element={<Currencyexchange/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crypto/buy-sell`} element={<Buysell/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crypto/market-cap`} element={<Marketcap/>} />
                    <Route path={`${import.meta.env.BASE_URL}apps/crypto/wallet`} element={<Wallet/>} />

                    <Route path={`${import.meta.env.BASE_URL}tables/table`} element={<Table/>} />
                    <Route path={`${import.meta.env.BASE_URL}tables/gridjs-table`} element={<Gridjstable/>} />
                    <Route path={`${import.meta.env.BASE_URL}tables/data-table`} element={<Datatable/>} />

                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/line-charts`} element={<Linecharts/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/area-charts`} element={<Areacharts/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/column-charts`} element={<Columncharts/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/bar-charts`} element={<Barcharts/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/mixed-charts`} element={<Mixedcharts/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/range-area-chart`} element={<Rangeareachart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/timeline-chart`} element={<Timelinechart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/candlestick-chart`} element={<Candlestickchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/boxplot-charts`} element={<Boxplotchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/bubble-chart`} element={<Bubblechart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/scatter-chart`} element={<Scatterchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/heatmap-chart`} element={<Heatmapchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/treemap-chart`} element={<Treemapchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/pie-chart`} element={<Piechart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/radialbar-chart`} element={<Radialbarchart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/polararea-chart`} element={<Polarareachart/>} />
                    <Route path={`${import.meta.env.BASE_URL}/apexcharts/radar-chart`} element={<Radarchart/>} />

                    <Route path={`${import.meta.env.BASE_URL}charts/chartjs`} element={<Chartjs/>} />
                    <Route path={`${import.meta.env.BASE_URL}charts/echart`} element={<Echart/>} />

                    <Route path={`${import.meta.env.BASE_URL}maps/google-map`} element={<Googlemaps/>} />
                    <Route path={`${import.meta.env.BASE_URL}maps/leaflet-map`} element={<Leafletmaps/>} />
                    <Route path={`${import.meta.env.BASE_URL}maps/vector-maps`} element={<Vectormaps/>} />

                    <Route path={`${import.meta.env.BASE_URL}icons`} element={<Icons/>} />

                  </Route>
                  <Route path={`${import.meta.env.BASE_URL}`} element={<Authenticationlayout/>}>
                    <Route path={`${import.meta.env.BASE_URL}authentication/coming-soon`} element={<Comingsoon/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/create-password/create-basic`} element={<Createbasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/create-password/create-cover`} element={<Createcover/>} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/lock-screen/screen-basic`} element={<Screenbasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/lock-screen/screen-cover`} element={<Screencover />} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`} element={<Resetbasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/reset-password/reset-cover`} element={<Resetcover/>} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/sign-up/signup-basic`} element={<Signupbasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/sign-up/signup-cover`} element={<Signupcover/>} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/sign-in/signin-basic`} element={<Signinbasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/sign-in/signin-cover`} element={<Signincover/>} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/two-step-verification/two-basic`} element={<Twobasic/>} />
                    <Route path={`${import.meta.env.BASE_URL}authentication/two-step-verification/two-cover`} element={<Twocover/>} />

                    <Route path={`${import.meta.env.BASE_URL}authentication/under-maintanance`} element={<Undermaintanance/>} />

                    <Route path={`${import.meta.env.BASE_URL}error/error-401`} element={<Error401/>} />
                    <Route path={`${import.meta.env.BASE_URL}error/error-404`} element={<Error404/>} />
                    <Route path={`${import.meta.env.BASE_URL}error/error-500`} element={<Error500/>} />
                  </Route>
                  <Route path={`${import.meta.env.BASE_URL}`} element={<Landinglayout/>}>
                    <Route path={`${import.meta.env.BASE_URL}pages/landing`} element={<Landing/>} />
                    <Route path={`${import.meta.env.BASE_URL}pages/jobs-landing`} element={<JobsLanding/>} />
                  </Route>
                </Routes>
              </React.Suspense>
            </BrowserRouter>
        </RootWrapper>
      </Provider>
  </React.Fragment>
)
