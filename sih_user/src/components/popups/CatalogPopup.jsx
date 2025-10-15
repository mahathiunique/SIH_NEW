import React from "react";

const categories = [
  { id: "trades", title: "Trades & Crafts", desc: "Plumbing, Carpentry, Tailoring, Masonry" },
  { id: "automation", title: "Automotive & Mechanical", desc: "Automobile servicing, Welding" },
  { id: "it", title: "IT & Digital Skills", desc: "Computer basics, Networking" },
  { id: "hospitality", title: "Hospitality & Services", desc: "Food service, Housekeeping" },
  { id: "agriculture", title: "Agriculture", desc: "Sustainable farming, Crop care" },
];

const CatalogPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-start pt-24 z-50">
      <div className="bg-white p-6 rounded-lg w-2/3 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl">✖</button>

        <h2 className="text-2xl font-bold mb-4">📖 Course Catalog</h2>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div key={cat.id} className="p-4 bg-gray-50 rounded flex flex-col justify-between">
              <div>
                <div className="font-semibold">{cat.title}</div>
                <div className="text-sm text-gray-600 mt-2">{cat.desc}</div>
              </div>
              <div className="mt-3">
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded" onClick={() => alert(`${cat.title} listing not implemented`)}>
                  Browse
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-600">
          Use the catalog to explore training paths and filter courses by category.
        </p>
      </div>
    </div>
  );
};

export default CatalogPopup;

