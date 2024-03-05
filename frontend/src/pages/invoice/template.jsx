import { useRef, useState } from "react";
import Barcode from "react-barcode";
import ReactToPrint from "react-to-print";

function PdfTemplate(props) {
    const ref = useRef();
    const [openAirPopup, setOpenAirPopup] = useState(false);
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState('');
    const [list, setList] = useState([]);

    const addData = () => {
        setList(prevList => [...prevList, { product: item, amount: amount }]);
        setItem('');
        setAmount('');
        setOpenAirPopup(false);
    };

    let sum = 0;
    list.forEach(item => {
        sum += parseInt(item.amount);
    });

    return (
        <>
            <div className="container" ref={ref}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4 brcode">
                                    <Barcode value={`4n%${props.InvoiceNumber}+ut%`} width={1} displayValue={false} />
                                </div>
                                <div className="col-md-8 text-right bbc">
                                    <h4 className="text-green-800 font-bold">CareGivi</h4>
                                    <p>+94 123456789</p>
                                    <p>caregivi@gmail.com</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h2 className="text-green-800">CareGivi</h2>
                                    <h5>Id: {props.InvoiceNumber}</h5>
                                </div>
                            </div>
                            <br />
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><h5>Services</h5></th>
                                            <th><h5>Amount</h5></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.length ? list.map((item, index) => (
                                            <tr key={index}>
                                                <td className="col-md-9">{item.product}</td>
                                                <td className="col-md-3">LKR {item.amount}</td>
                                            </tr>
                                        )) : null}
                                        <tr>
                                            <td className="text-right">
                                                <p><strong>Total amount:</strong></p>
                                                <p><strong>Payable amount:</strong></p>
                                            </td>
                                            <td>
                                                <p><strong>LKR {sum}</strong></p>
                                                <p><strong>LKR {sum}</strong></p>
                                            </td>
                                        </tr>
                                        <tr style={{ color: "#3a4539" }}>
                                            <td className="text-right">
                                                <h4><strong>Total:</strong></h4>
                                            </td>
                                            <td className="text-left">
                                                <h4><strong>LKR {sum}</strong></h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <div className="col-md-12">
                                        <p><b>Data:</b> {props.data}</p>
                                        <br />
                                        <p><b>:Name</b></p>
                                        <p><b>Contact: +94 123456789</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReactToPrint
                trigger={() => <button className="btn" onClick={() => ref.current && ref.current.print()}>Print</button>}
                content={() => ref.current}
                documentTitle={`CareGivi ${props.InvoiceNumber}`}
            />
            <button className="btn" onClick={() => setOpenAirPopup(true)}>Add Services</button>
            {openAirPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25">
                    <div className="bg-white p-8 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-bold">New Service</div>
                            <button onClick={() => setOpenAirPopup(false)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600 hover:text-gray-800 cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="container">
                            <div className="forms">
                                <input
                                    type="text"
                                    value={item}
                                    onChange={(e) => setItem(e.target.value)}
                                    placeholder="Name"
                                    className="border p-2 mb-4 w-full"
                                />
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Amount"
                                    className="border p-2 mb-4 w-full"
                                />
                            </div>
                            <div className="buttons">
                                <button className="btn" onClick={addData}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PdfTemplate;
