import React, { useState } from 'react';
import { FileText, Upload, CheckCircle, Clock, PenTool } from 'lucide-react';

const DocumentChamber = () => {
  const [docStatus, setDocStatus] = useState('Draft'); // Options: Draft, In Review, Signed
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center">
          <FileText className="mr-2 text-primary-600" /> Document Vault
        </h3>
        <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1 rounded-md border text-sm font-semibold">
          <Clock size={16} className="text-gray-500" /> 
          <span>Status: <span className="text-primary-600">{docStatus}</span></span>
        </div>
      </div>

      <div className="bg-gray-100 border border-gray-200 rounded-lg p-8 mb-6 text-center">
        <div className="w-full h-48 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-400 italic rounded">
          {isSigned ? (
            <div className="text-green-600 font-bold flex flex-col items-center">
               <PenTool size={40} className="mb-2" />
               SIGNED & VERIFIED
            </div>
          ) : "--- Scroll down to sign document ---"}
        </div>
        <p className="mt-4 text-sm text-gray-600 font-bold">Investment_Contract_Draft.pdf</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => setDocStatus('In Review')}
          className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
        >
          <Upload size={18} className="mr-2 text-gray-500" /> Upload New Version
        </button>

        <button 
          onClick={() => {
            setIsSigned(true);
            setDocStatus('Signed');
          }}
          disabled={isSigned}
          className={`flex items-center justify-center py-3 px-4 rounded-lg font-bold text-white transition ${isSigned ? 'bg-green-600 cursor-not-allowed' : 'bg-primary-600 hover:bg-primary-700'}`}
        >
          <CheckCircle size={18} className="mr-2" /> {isSigned ? 'Document Signed' : 'Sign Agreement'}
        </button>
      </div>
    </div>
  );
};

export default DocumentChamber;