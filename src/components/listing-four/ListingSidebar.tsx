import React from 'react';

const ListingSidebar: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/10 p-6 h-fit sticky top-24">
      <p className="text-green-700 font-medium text-sm">● For Sale</p>
      <h3 className="mt-3 text-3xl font-semibold">$1,429,418</h3>
      <hr className="my-4 border-black/10" />
      <p className="text-xs font-semibold text-muted">CONTACT YOUR AGENT</p>
      <p className="mt-2 font-medium text-heading">ARIF ALI RAJER</p>
      <a href="/contact" className="text-sm text-accent hover:underline">
        View Profile
      </a>
      <div className="mt-5 space-y-3">
        <button className="block w-full rounded-md bg-accent px-4 py-3 text-center text-white font-medium shadow hover:brightness-110 transition">
          Request a Tour
        </button>
        <button className="block w-full rounded-md border border-black/20 px-4 py-3 text-center font-medium hover:bg-black/5 transition">
          Contact Agent
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h4 className="font-bold text-heading mb-2 text-sm">Listing Brokerage</h4>
        <p className="text-sm text-muted">CITYSCAPE REAL ESTATE LTD.</p>
        <p className="text-sm text-muted">905-241-2222</p>
      </div>
    </div>
  );
};

export default ListingSidebar;
