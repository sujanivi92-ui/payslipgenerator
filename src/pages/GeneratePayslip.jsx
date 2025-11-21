export default function GeneratePayslip() 
{
{/* INCOME DETAILS TITLE */}
<h3 className="text-xl font-semibold text-[#372A82] mt-10 mb-5">
  Income Details<span className="text-red-500">*</span>
</h3>

{/* EARNINGS + DEDUCTION TABLES */}
<div className="border rounded-xl overflow-hidden w-[240px]">

  {/* HEADER */}
  <table className="w-full text-left">
    <thead className="bg-[#F1FBEA]">
      <tr>
        <th className="p-3 font-semibold">Deduction</th>
        <th className="p-3 font-semibold">Amount</th>
      </tr>
    </thead>

    {/* BODY ROW 1 */}
    <tbody>
      <tr className="border-b">
        <td className="p-3">Income Tax</td>
        <td className="p-3">₹ 500</td>
      </tr>

      {/* EMPTY ROW — creates blank space */}
      <tr className="h-12">
        <td className="p-3"></td>
        <td className="p-3"></td>
      </tr>
    </tbody>

    {/* FOOTER (PURPLE BAR) */}
    <tfoot>
      <tr className="bg-[#372A82] text-white font-semibold">
        <td className="p-3">Total Deduction</td>
        <td className="p-3">₹ 500</td>
      </tr>
    </tfoot>
  </table>
</div>

{/* SEPARATOR LINE */}
<hr className="my-10 border-gray-300" />

{/* NET PAYABLE BOX */}
<div className="border rounded-xl bg-[#F1FBEA] p-6 flex justify-between items-center">
  <div>
    <h3 className="text-xl font-bold">TOTAL NET PAYABLE</h3>
    <p className="text-gray-700">Gross Earnings - Total Deduction</p>
  </div>

  <div className="text-xl font-bold text-white bg-[#372A82] px-6 py-2 rounded-md">
    ₹ 15,500
  </div>
</div>

{/* AMOUNT IN WORDS */}
<p className="text-center mt-6 mb-10 text-lg">
  Amount in words : <span className="font-medium">
    Indian Rupee Fifteen thousand Five Hundred Only
  </span>
</p>

{/* GENERATE PAYSLIP BUTTON */}
<div className="flex justify-center mb-10">
  <button className="bg-[#372A82] text-white px-10 py-3 text-xl font-semibold rounded-full hover:opacity-90">
    Generate Payslip
  </button>
</div>}
