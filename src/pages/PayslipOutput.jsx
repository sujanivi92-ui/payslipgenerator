import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PayslipOutput() {
  const navigate = useNavigate();

  // ---------------- PRINT FUNCTION ----------------
  const handlePrint = () => {
    window.print();
  };

  // ---------------- PDF DOWNLOAD FUNCTION ----------------
  const handleDownloadPDF = async () => {
    const element = document.getElementById("payslip-content");

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("payslip.pdf");
  };

  return (
    <div className="min-h-screen bg-[#F1FBEA] pb-20">

      {/* TOP NAVBAR */}
      <header className="w-full bg-white shadow-sm px-16 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#372A82]">VETRI IT SYSTEMS</h1>
          <p className="text-lg text-gray-700 -mt-1">-Employee Payslip-</p>
        </div>

        <div className="flex items-center gap-10">
          <button
            onClick={() => navigate("/generate-payslip")}
            className="text-xl font-semibold text-[#372A82]"
          >
            Generate Payslip
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-[#372A82] text-white px-6 py-2 rounded-md text-lg font-bold"
          >
            Logout
          </button>
        </div>
      </header>

      {/* PAGE TITLE */}
      <h2 className="text-center text-2xl mt-8 font-bold text-[#1A1A1A]">
        EMPLOYEE PAYSLIP
      </h2>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrint}
          className="px-6 py-2 bg-white shadow rounded-lg font-medium hover:bg-gray-100 flex items-center gap-2"
        >
          🖨 Print
        </button>

        <button
          onClick={handleDownloadPDF}
          className="px-6 py-2 bg-[#372A82] text-white shadow rounded-lg font-medium hover:opacity-90 flex items-center gap-2"
        >
          ⬇️ Download
        </button>
      </div>

      {/* PAYSLIP CARD */}
      <div
        id="payslip-content"
        className="bg-white w-full max-w-3xl mx-auto rounded-xl shadow p-10 mt-8 border"
      >

        {/* HEADER SECTION */}
        
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <div>
                <img src={Logo} className="w-20" alt="logo" />
              <h2 className="text-xl font-semibold">VETRI IT SYSTEMS PVT LTD.,</h2>
              <p className="text-gray-700">
                Shanthi complex, Second floor,<br />
                Surandai, Tenkasi – 627 859<br />India
              </p>
            </div>

            
          </div>

          <div className="text-right">
            <p className="text-sm">Payslip for the Month</p>
            <p className="text-lg font-bold">OCTOBER 2025</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* EMPLOYEE DETAILS */}
        <div>
          <h3 className="text-[#372A82] font-semibold mb-4">Employee Statement</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Employee Name:</strong> Yedidyah Cherub</p>
            <p><strong>Employee ID:</strong> 1122334455</p>
            <p><strong>Pay Period:</strong> Sep 1, 2025 – Sep 30, 2025</p>
            <p><strong>Paid Days:</strong> 26</p>
            <p><strong>Loss of Pay Days:</strong> 0</p>
            <p><strong>Payment Date:</strong> Oct 15, 2025</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* EARNINGS + DEDUCTIONS TABLES */}
        <div className="grid grid-cols-2 gap-6">

          {/* Earnings */}
          <div className="border rounded-xl overflow-hidden">
            <div className="bg-[#F1FBEA] p-2 font-semibold flex justify-between">
              <span>Earnings</span><span>Amount</span>
            </div>
            <div className="p-2 flex justify-between border-b">
              <span>Basic</span><span>₹ 15,000</span>
            </div>
            <div className="p-2 flex justify-between border-b">
              <span>Incentive</span><span>₹ 1,000</span>
            </div>
            <div className="bg-[#372A82] text-white p-2 font-semibold flex justify-between">
              <span>Gross Earnings</span><span>₹ 16,000</span>
            </div>
          </div>

          {/* Deductions */}
          <div className="border rounded-xl overflow-hidden">
            <div className="bg-[#F1FBEA] p-2 font-semibold flex justify-between">
              <span>Deduction</span><span>Amount</span>
            </div>
            <div className="p-2 flex justify-between border-b">
              <span>Income Tax</span><span>₹ 500</span>
            </div>
            <div className="bg-[#372A82] text-white p-2 font-semibold flex justify-between">
              <span>Total Deduction</span><span>₹ 500</span>
            </div>
          </div>

        </div>

        <hr className="my-6" />

        {/* NET PAYABLE */}
        <div className="border rounded-xl bg-[#F1FBEA] p-4 flex justify-between items-center">
          <div>
            <h3 className="font-bold">TOTAL NET PAYABLE</h3>
            <p className="text-sm">Gross Earnings - Total Deduction</p>
          </div>
          <p className="bg-[#372A82] text-white px-5 py-1 rounded-md font-bold">
            ₹ 15,500
          </p>
        </div>

        {/* AMOUNT IN WORDS */}
        <p className="text-center mt-4 text-sm">
          Amount in words:
          <strong> Indian Rupee Fifteen Thousand Five Hundred Only</strong>
        </p>

        <hr className="my-6" />

      
    {/* ACKNOWLEDGED BY SECTION */}
<div className="mt-3">

  <h3 className="text-center text-[#372A82] font-semibold tracking-wide mb-">
    ACKNOWLEDGED BY,
  </h3>

  <div className="grid grid-cols-2 gap-10 mt-8">

    {/* LEFT SIDE – EMPLOYEE */}
    <div className="text-center">
      {/* Line */}
      <div className="border-t border-[#372A82] w-48 mx-auto mb-2"></div>

      <p className="font-semibold text-sm">Yedidyah Cherub</p>
      <p className="text-xs text-gray-700">
        Employee, VETRI IT SYSTEMS PVT LTD.,
      </p>
    </div>

    {/* RIGHT SIDE – AUTHORISED PERSON */}
    <div className="text-center">
      {/* Line */}
      <div className="border-t border-[#372A82] w-48 mx-auto mb-2"></div>

      <p className="font-semibold text-sm">AUTHORISED NAME</p>
      <p className="text-xs text-gray-700">
        Managing Director, VETRI IT SYSTEMS PVT LTD.,
      </p>
    </div>

  </div>
</div>



  </div>
</div>
  );
}
