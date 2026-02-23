import { FC, Fragment, useEffect, useState } from 'react';
import Pageheader from '../../../components/common/page-header/pageheader';
import { Link } from 'react-router-dom';
import SpkDropdown from '../../../@spk/uielements/spk-dropdown';
//import SpkBadge from '../../../@spk/uielements/spk-badge';
import axios from 'axios';
import jsPDF from "jspdf";
import logo from "../../../assets/images/brand-logos/ddinlogoT.png";
//import Spktables from '../../../@spk/tables/spk-tables';
//import SpkButton from '../../../@spk/uielements/spk-button';
import * as XLSX from "xlsx";
interface SalesProps { }

// Define the structure of transaction data
interface Transaction {
    id: number;
    orderid: string;
    name: string;
    quantity: string;
    price: string;
    status: string;
    date: string;
    color: string;
    bg: string;

}

const IncompleteTrasactions: FC<SalesProps> = () => {
    //const [totalTransactions, setTotalTransactions] = useState(0);
    const [balance, setBalance] = useState(() => {
        return Number(localStorage.getItem("balance")) || 0;
    });
    const [searchTerm, setSearchTerm] = useState<string>("");
    // const [completedTransactions, setCompletedTransactions] = useState(0);
    // const [incompleteTransactions, setIncompleteTransactions] = useState(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [accountId, setAccountId] = useState("");
    const transactionsPerPage = 20; // Show 5 transactions per page
    //const {authToken}=useAuth()

    const [, setDailyCompletedTransactions] = useState(0);
    const [, setDailyIncompleteTransactions] = useState(0);
    const [, setDailyTotalTransactions] = useState(0);
    const [, setChartData] = useState<{ name: string; data: number[] }[]>([
        { name: "Total Transactions", data: Array(12).fill(0) },
        { name: "Completed Transactions", data: Array(12).fill(0) },
        { name: "Incomplete Transactions", data: Array(12).fill(0) },
    ]);

    const [sortBy, setSortBy] = useState<string>("");  // Default sort by transaction ID
    const [sortOrder, setSortOrder] = useState<string>("desc"); // Default desc order


  
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState("");


    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedData = localStorage.getItem("userData");

        if (storedData) {

            //setData(JSON.parse(storedData));
            setAccountId(JSON.parse(storedData).accountId)
            setUsername(JSON.parse(storedData).username)
        }
        if (storedToken) {
            setToken(JSON.parse(storedToken));
        }
    }, []);


    useEffect(() => {

        const fetchBalance = async () => {
            try {
                const response = await axios.get("https://app.ddin.rw/api/v1/accounts/balance/account?accountId=" + accountId,
                    {
                        headers: {
                            Authorization: "Basic " + token,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.data.responseCode === 200) {
                    const newBalance = Number(response.data?.data?.availableBalance);

                    // Only update state if balance has changed
                    if (newBalance !== balance) {
                        setBalance(newBalance);
                        localStorage.setItem("balance", newBalance.toString());
                    }
                } else {
                    console.error("API error:", response.data);
                }
            } catch (error: any) {
                console.error("Error fetching balance:", error.response?.data || error.message);
            }
        };

        // Fetch balance every 10 seconds
        fetchBalance();
        // const interval = setInterval(fetchBalance, 60000);

        // return () => clearInterval(interval); // Cleanup on unmount
    }, [token, balance]); // Rerun effect when token or balance changes





    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(
                    "https://app.ddin.rw/api/v1/transactions/logs-transactions"
                );
                const data = await response.json();

                if (data.responseCode === 200) {
                    const filteredData = data.data.filter(
                        (item: any) => item.status === "Incomplete"
                    );

                    // Calculate overall values
                    // const total = filteredData.length;
                    // const completed = filteredData.filter(
                    //     (t: any) => t.status === "Complete"
                    // ).length;
                   // const incomplete = total - completed;

                    // setTotalTransactions(total);
                    // setCompletedTransactions(completed);
                    // setIncompleteTransactions(incomplete);

                    // 🌟 Group transactions by day
                    const today = new Date().toISOString().split("T")[0]; // Format YYYY-MM-DD
                    let dailyTotal = 0;
                    let dailyCompleted = 0;
                    let dailyIncomplete = 0;

                    filteredData.forEach((transaction: any) => {
                        const transactionDate = new Date(transaction.date)
                            .toISOString()
                            .split("T")[0];

                        if (transactionDate === today) {
                            dailyTotal++;
                            if (transaction.status === "Complete") {
                                dailyCompleted++;
                            } else {
                                dailyIncomplete++;
                            }
                        }
                    });

                    // 🌟 Set daily transactions in state
                    setDailyTotalTransactions(dailyTotal);
                    setDailyCompletedTransactions(dailyCompleted);
                    setDailyIncompleteTransactions(dailyIncomplete);

                    // 🌟 Prepare monthly data for charts
                    const monthlyData = Array(12).fill(0);
                    const completedData = Array(12).fill(0);
                    const incompleteData = Array(12).fill(0);

                    filteredData.forEach((transaction: any) => {
                        const month = new Date(transaction.date).getMonth(); // 0 = Jan, 11 = Dec
                        monthlyData[month]++;
                        transaction.status === "Complete"
                            ? completedData[month]++
                            : incompleteData[month]++;
                    });

                    setChartData([
                        { name: "Total Transactions", data: monthlyData },
                        { name: "Completed Transactions", data: completedData },
                        { name: "Incomplete Transactions", data: incompleteData },
                    ]);

                    // 🌟 Format transactions for display
                    const formattedData: Transaction[] = filteredData
                        .reverse()
                        .map((item: any, index: number) => ({
                            id: item.ID,
                            orderid: item.transactionId || `#000${index + 1}`,
                            name: item.agent_name,
                            quantity: item.service_name,
                            price: `${item.amount}`,
                            status: item.status,
                            date: new Date(item.date).toLocaleDateString(),
                            color: item.status === "Complete" ? "success" : "warning",
                            bg: item.status === "Complete" ? "success/10" : "warning/10",
                        }));

                    setTransactions(formattedData);
                } else {
                    setError("Failed to load transactions.");
                }
            } catch (error) {
                console.error("Error fetching transactions:", error);
                setError("Error fetching transactions. Please try again.");
            }
        };

        fetchTransactions();

        // Optionally set an interval to refresh data every 1 minute
        // const interval = setInterval(fetchTransactions, 60000);
        // return () => clearInterval(interval);

    }, [username]);

    //const balancePercentage = totalAmount ? ((balance / totalAmount) * 100).toFixed(2) : "0";
    // const completedPercentage = totalTransactions ? ((completedTransactions / totalTransactions) * 100).toFixed(2) : "0";
    // const incompletePercentage = totalTransactions ? ((incompleteTransactions / totalTransactions) * 100).toFixed(2) : "0";


    // Calculate indexes for pagination
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Pagination handlers
    const nextPage = () => {
        if (indexOfLastTransaction < transactions.length) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // ✅ Function to filter transactions based on search term
    const filteredTransactions = currentTransactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.orderid.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.quantity.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // ✅ Sorting function based on selected column and order
    const sortedTransactions = filteredTransactions.sort((a, b) => {
        const aValue = a[sortBy as keyof Transaction];
        const bValue = b[sortBy as keyof Transaction];

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    // ✅ Function to handle sorting change
    const handleSort = (column: string) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    // ✅ Function to generate PDF for a transaction

    const downloadReceiptPDF = (transaction: Transaction) => {
        const doc = new jsPDF();

        // Add DDIN Logo (adjust position based on your preference)
        doc.addImage(logo, 'PNG', 14, 10, 40, 40);  // (image, format, x, y, width, height)

        // Store/Company Header (company details)
        doc.setFontSize(18);
        doc.text("DDIN Group Ltd", 110, 25, { align: 'center' }); // Company name centered
        doc.setFontSize(12);
        doc.text("KN 78 St, Norresken House, Kigali City, Rwanda", 110, 35, { align: 'center' });
        doc.text("Phone: +250 783 038 641 | Email: info@ddin.rw", 110, 40, { align: 'center' });
        doc.text("Website: www.ddin.rw", 110, 45, { align: 'center' });

        // Receipt Title
        doc.setFontSize(20);
        doc.text("Receipt", 110, 55, { align: 'center' });

        // Transaction details (Receipt Number, Date)
        doc.setFontSize(12);
        doc.text(`Receipt #: ${transaction.orderid}`, 14, 70);
        doc.text(`Date: ${transaction.date}`, 14, 75);
        doc.text(`Status: ${transaction.status}`, 14, 80);

        // Line separator after header
        doc.setLineWidth(0.5);
        doc.line(14, 85, 200, 85);

        // Purchased Item Section (description, quantity, unit price, and total)
        doc.setFontSize(12);
        doc.text("Item", 14, 95);
        // doc.text("Quantity", 120, 95, { align: 'center' });
        // doc.text("Unit Price", 150, 95, { align: 'center' });
        // doc.text("Total", 180, 95, { align: 'center' });

        // Add the transaction items (You may loop through items if there are multiple services)
        const serviceDescription = transaction.quantity; // Adjust to use description if available
        const unitPrice = parseFloat(transaction.price);
        // const totalPrice = unitPrice; // Adjust for total if multiple items

        // Set Y position for the item row
        const yOffset = 105;

        // Adjust the description text to fit within the page width
        //const lineHeight = 6;
        const margins = { left: 14, right: 200 };
        const maxWidth = margins.right - margins.left;

        // Wrap and justify the service description
        doc.setFontSize(12);
        doc.text(serviceDescription, margins.left, yOffset, { maxWidth: maxWidth, align: 'justify' });

        // Quantity, Unit Price, and Total (Ensure these fit within the page width)
        // doc.text("1", 120, yOffset, { align: 'center' });
        // doc.text(`${unitPrice}`, 150, yOffset, { align: 'center' });
        // doc.text(`${totalPrice}`, 180, yOffset, { align: 'center' });

        // Line separator after table
        doc.setLineWidth(0.5);
        doc.line(14, yOffset + 10, 200, yOffset + 10);

        // Total Amount Section



        doc.setFontSize(12);
        doc.text("Subtotal:", 120, yOffset + 20);
        doc.text(`${unitPrice}`, 180, yOffset + 20, { align: 'center' });

        doc.text("Tax (0):", 120, yOffset + 30);
        doc.text('0', 180, yOffset + 30, { align: 'center' });

        doc.setFontSize(14);
        doc.text("Total Amount:", 120, yOffset + 40);
        doc.text(`${unitPrice}` + " " + "Rwf", 180, yOffset + 40, { align: 'center' });

        // Footer (Payment Method, Customer Support)
        doc.setFontSize(10);
        doc.text("Payment Method: Xpay", 14, yOffset + 50);  // Update payment method
        doc.text("Thank you for your purchase!", 14, yOffset + 55);
        doc.text("For any inquiries, contact us at info@ddin.rw", 14, yOffset + 60);

        // Save the PDF
        doc.save(`Receipt_${transaction.orderid}.pdf`);
    };
    const fetchAllTransactionsData = async () => {
        try {
          const response = await fetch(
            "https://app.ddin.rw/api/v1/transactions/logs-transactions"
          );
          const data = await response.json();
      
          if (data.responseCode === 200) {
            const filteredData = data.data.filter(
                (item: any) => item.agent_name === username
            );
            return  filteredData; // Return all transactions
          } else {
            console.error("Failed to fetch transactions");
            return [];
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
          return [];
        }
      };
    const exportToExcel = async() => {
        const allTransactions = await fetchAllTransactionsData(); // Fetch all transactions

        if (allTransactions.length === 0) {
          alert("No transactions available to export.");
          return;
        }
        // Format the data
        const formattedData = allTransactions.map((transaction:any) => ({
            "Transaction ID": transaction.transactionId,
            Customer: transaction.agent_name,
            Description: transaction.description,
            Amount: transaction.amount,
            Status: transaction.status,
            Date: transaction.date,
        }));

        // Create a new worksheet and workbook
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

        // Save the file
        XLSX.writeFile(workbook, "transactions.xlsx");
    };
    return (
        <Fragment>
            <Pageheader currentpage="Failed Transactions" activepage="Dashboards" mainpage="Transactions" />
          
           
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">

                        <div className="grid grid-cols-12 gap-x-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box">

                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xl:col-span-12 col-span-12">
                                            <div className="box">
                                                <div className="box-header justify-between">
                                                    <div className="box-title"> Transactions</div>
                                                    <div className="flex flex-wrap">
                                                        <div className="me-3 my-1">
                                                            <input
                                                                className="ti-form-control form-control-sm"
                                                                type="text"
                                                                placeholder="Search Here"
                                                                aria-label=".form-control-sm example"
                                                                value={searchTerm}
                                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                            />
                                                        </div>
                                                        <SpkDropdown
                                                            Linktag={true}
                                                            Arrowicon={true}
                                                            Toggletext="Sort By"
                                                            Customclass="!py-1"
                                                            Linkclass="ti-btn ti-btn-primary !py-1 !bg-primary !text-white !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                                        >
                                                            <li>
                                                                <Link
                                                                    onClick={() => handleSort("orderid")}
                                                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                    to="#"
                                                                >
                                                                    Transaction ID
                                                                </Link>
                                                            </li>
                                                           
                                                            <li>
                                                                <Link
                                                                    onClick={() => handleSort("date")}
                                                                    className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                    to="#"
                                                                >
                                                                    Date
                                                                </Link>
                                                            </li>
                                                        </SpkDropdown>
                                                    </div>
                                                </div>
                                                <div className="box-body">
                                                    {error ? (
                                                        <div className="text-red-500">{error}</div>
                                                    ) : (
                                                        <>
                                                            {/* Export to Excel Button */}
                                                            <div className="flex justify-between items-center mb-4">
                                                                <h2 className="text-xl font-bold">Transactions</h2>
                                                                <button
                                                                    onClick={exportToExcel}
                                                                    className="ti-btn bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                                                                >
                                                                    <i className="ri-file-excel-2-line"></i> Export to Excel
                                                                </button>
                                                            </div>

                                                            <div className="table-responsive">
                                                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Transaction ID</th>
                                                                            <th>Customer</th>
                                                                            <th>Description</th>
                                                                            <th>Amount</th>
                                                                            <th>Status</th>
                                                                            <th>Date</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {sortedTransactions.map((transaction) => (
                                                                            <tr
                                                                                className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10"
                                                                                key={transaction.id}
                                                                            >
                                                                                <td>
                                                                                    <span className="text-success font-semibold">{transaction.orderid}</span>
                                                                                </td>
                                                                                <td>{transaction.name}</td>
                                                                                <td>{transaction.quantity}</td>
                                                                                <td>
                                                                                    <span className="font-semibold text-sm">{transaction.price}</span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className={`badge bg-${transaction.bg} text-${transaction.color}`}>
                                                                                        {transaction.status}
                                                                                    </span>
                                                                                </td>
                                                                                <td>
                                                                                    <span className="text-muted">{transaction.date}</span>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                                                        <Link
                                                                                            onClick={() => downloadReceiptPDF(transaction)}
                                                                                            aria-label="anchor"
                                                                                            to="#"
                                                                                            className="ti-btn ti-btn-icon ti-btn-wave bg-success/10 text-success"
                                                                                        >
                                                                                            <i className="ri-download-2-line"></i>
                                                                                        </Link>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="flex justify-between items-center mt-4">
                                                                <button
                                                                    onClick={prevPage}
                                                                    disabled={currentPage === 1}
                                                                    className="page-link"
                                                                >
                                                                    Previous
                                                                </button>
                                                                <span>
                                                                    Page {currentPage} of {Math.ceil(transactions.length / transactionsPerPage)}
                                                                </span>
                                                                <button
                                                                    onClick={nextPage}
                                                                    disabled={indexOfLastTransaction >= transactions.length}
                                                                    className="page-link !text-primary"
                                                                >
                                                                    Next
                                                                </button>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default IncompleteTrasactions