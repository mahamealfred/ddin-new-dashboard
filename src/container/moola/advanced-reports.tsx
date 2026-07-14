import { FC, Fragment } from 'react';
import Pageheader from '../../components/common/page-header/pageheader';
import AdvancedAnalytics from '../../components/common/advanced-analytics/AdvancedAnalytics';

interface AdvancedReportPageProps {}

/**
 * Advanced Report Page - Dedicated page for advanced analytics and reporting
 * 
 * This page provides in-depth analytics with period filtering, 
 * transaction analysis, and comprehensive charts using eCharts.
 */
const AdvancedReportPage: FC<AdvancedReportPageProps> = () => {

  return (
    <Fragment>
      <Pageheader 
        currentpage="Advanced Reports" 
        activepage="Dashboard" 
        mainpage="Advanced Analytics & Reports" 
      />

      <div className="grid grid-cols-12 gap-x-6">
        {/* Main Advanced Analytics Component */}
        <div className="col-span-12">
          <AdvancedAnalytics 
            title="Corporate Dashboard - Advanced Analytics" 
            showDateRange={true}
          />
        </div>

        {/* Additional Report Sections */}
        <div className="col-span-12 mt-8">
          <div className="box">
            <div className="box-header border-b">
              <h4 className="box-title">Export & Share Reports</h4>
            </div>
            <div className="box-body">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <button className="w-full ti-btn ti-btn-primary py-3 rounded-md flex items-center justify-center gap-2">
                    <i className="ri-download-line"></i>
                    Export as PDF
                  </button>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <button className="w-full ti-btn ti-btn-success py-3 rounded-md flex items-center justify-center gap-2">
                    <i className="ri-file-excel-line"></i>
                    Export as Excel
                  </button>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <button className="w-full ti-btn ti-btn-info py-3 rounded-md flex items-center justify-center gap-2">
                    <i className="ri-mail-line"></i>
                    Email Report
                  </button>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <button className="w-full ti-btn ti-btn-warning py-3 rounded-md flex items-center justify-center gap-2">
                    <i className="ri-share-forward-line"></i>
                    Schedule Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Insights */}
        <div className="col-span-12 mt-6">
          <div className="box">
            <div className="box-header border-b">
              <h4 className="box-title">Quick Insights</h4>
            </div>
            <div className="box-body">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-md border border-indigo-200 dark:border-indigo-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <i className="ri-lightbulb-line text-primary me-2"></i>
                      Top Insight
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      Revenue increased by 23% this month
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-md border border-emerald-200 dark:border-emerald-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <i className="ri-check-line text-success me-2"></i>
                      Success Rate
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      98.5% transactions successful
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-md border border-amber-200 dark:border-amber-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <i className="ri-alert-line text-warning me-2"></i>
                      Attention Needed
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      5 pending transactions {'>'}24hrs
                    </p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-md border border-indigo-200 dark:border-indigo-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <i className="ri-trending-up-line text-danger me-2"></i>
                      Growth Rate
                    </p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-white">
                      12% week-over-week growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdvancedReportPage;
