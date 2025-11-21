import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function GeneratePayslip() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F1FBEA] h-[600px]">

      {/* ====================== HEADER ====================== */}
      <header className="w-full flex items-center justify-between px-20 py-16 bg-white shadow-sm">

        {/* LEFT TITLE */}
        <div>
          <h1 className="text-4xl font-extrabold text-[#372A82] tracking-wide">
            VETRI IT SYSTEMS
          </h1>
          <p className="text-xl font-semibold text-gray-700 -mt-1">
            -Employee Payslip-
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-10">

          <button
            className="text-2xl font-semibold text-[#372A82] hover:opacity-75"
            onClick={() => navigate("/generate-payslip")}
          >
            Generate Payslip
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-[#372A82] text-white px-8 py-2 rounded-md text-xl font-bold hover:opacity-90 transition"
          >
            Logout
          </button>

        </div>
      </header>

      {/* ====================== PAGE TITLE ====================== */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-8 tracking-wide">
          EMPLOYEE PAYSLIP GENERATOR
        </h1>
      </div>

      {/* ====================== MAIN CARD ====================== */}
      <div className="bg-white w-full max-w-5xl mx-auto rounded-2xl shadow p-10">

        {/* TOP SECTION */}
        <div className="flex justify-between items-start">

          {/* LOGO + ADDRESS */}
    
            <div>
            <img src={Logo} alt="logo" className="w-24 h-24 object-contain" />
            
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A]">
                VETRI IT SYSTEMS PVT LTD.,
              </h2>
              <p className="text-gray-700 leading-relaxed mt-2">
                Shanthi complex, Second floor,<br />
                Surandai, Tenkasi – 627 859<br />
                India
              </p>
            </div>
          </div>

          {/* MONTH INFO */}
          <div className="text-right">
            <p className="text-gray-700 text-sm">Payslip for the Month</p>
            <p className="text-xl font-bold text-[#1A1A1A]">OCTOBER 2025</p>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* ====================== SUMMARY TITLE ====================== */}
        <h3 className="text-xl font-semibold text-[#372A82] mb-5">
          Employee Pay Summary<span className="text-red-500">*</span>
        </h3>

        {/* EMPLOYEE DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Employee Name :</label>
            <input type="text" defaultValue="Yedidyah Cherub" className="border rounded-md w-full px-3 py-2" />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Paid Days :</label>
            <input type="number" defaultValue="26" className="border rounded-md w-full px-3 py-2" />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Employee ID :</label>
            <input type="text" defaultValue="1122334455" className="border rounded-md w-full px-3 py-2" />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Loss of Pay Days :</label>
            <input type="number" defaultValue="0" className="border rounded-md w-full px-3 py-2" />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Pay Period :</label>
            <input type="text" defaultValue="Sep 1, 2025 - Sep 30, 2025" className="border rounded-md w-full px-3 py-2" />
          </div>

          <div className="flex items-center gap-3">
            <label className="font-medium w-40">Payment Date :</label>
            <input type="text" defaultValue="Oct 15, 2025" className="border rounded-md w-full px-3 py-2" />
          </div>
        </div>

        {/* ====================== INCOME DETAILS ====================== */}
        <h3 className="text-xl font-semibold text-[#372A82] mt-10 mb-5">
          Income Details<span className="text-red-500">*</span>
        </h3>

        {/* TABLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* EARNINGS TABLE */}
          <div className="w-full border border-gray-300 rounded-xl overflow-hidden">
            <div className="bg-[#F1FBEA] border-b border-gray-300 px-4 py-2 flex justify-between font-semibold">
              <span>Earnings</span>
              <span>Amount</span>
            </div>

            <div className="px-4 py-3 flex justify-between border-b border-gray-300">
              <span>Basic</span>
              <span>₹ 15,000</span>
            </div>

            <div className="px-4 py-3 flex justify-between border-b border-gray-300">
              <span>Incentive</span>
              <span>₹ 1,000</span>
            </div>

            <div className="bg-[#372A82] text-white px-4 py-2 flex justify-between font-semibold">
              <span>Gross Earnings</span>
              <span>₹ 16,000</span>
            </div>
          </div>


    {/* HEADER */}
{/* DEDUCTION TABLE */}
<div className="border rounded-xl overflow-hidden w-[450px]">

  <table className="w-full text-left table-fixed">

    {/* HEADER */}
    <thead className="bg-[#F1FBEA]">
      <tr>
        <th className="p-3 font-semibold w-1/2">Deduction</th>
        <th className="p-3 font-semibold w-1/2">Amount</th>
      </tr>
    </thead>

    {/* BODY */}
    <tbody>

      {/* Row 1 */}
      <tr className="border-b">
        <td className="p-3">Income Tax</td>
        <td className="p-3">₹ 500</td>
      </tr>

      {/* Row 2 (EMPTY) → produces the blank space */}
      <tr className="h-2">
        <td className="p-1">&nbsp;</td>
        <td className="p-1">&nbsp;</td>
      </tr>

    </tbody>

    {/* FOOTER */}
    <tfoot>
      <tr className="bg-[#372A82] text-white font-semibold">
        <td className="p-3">Total Deduction</td>
        <td className="p-3">₹ 500</td>
      </tr>
    </tfoot>

  </table>
</div>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* ====================== NET PAYABLE ====================== */}
        <div className="border rounded-xl bg-[#F1FBEA] p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">TOTAL NET PAYABLE</h3>
            <p className="text-gray-700">Gross Earnings - Total Deduction</p>
          </div>

          <div className="text-xl font-bold text-white bg-[#372A82] px-6 py-2 rounded-md">
            ₹ 15,500
          </div>
        </div>

        {/* ====================== AMOUNT IN WORDS ====================== */}
        <p className="text-center mt-6 mb-10 text-lg">
          Amount in words :{" "}
          <span className="font-medium">Indian Rupee Fifteen thousand Five Hundred Only</span>
        </p>

        {/* ====================== BUTTON ====================== */}
        <button
        onClick={() => navigate("/payslip-output")}
        className="bg-[#372A82] text-white px-10 py-3 rounded-full text-xl font-semibold"
>
  Generate Payslip
</button>

      </div>
    </div>
  );
}
