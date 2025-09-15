import React from "react";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="text-lg font-bold">PBMINDS</div>
            <p className="text-sm text-muted">Enterprise engineering & cloud platforms</p>
          </div>
          <div className="text-sm text-muted">
            <div>© {new Date().getFullYear()} PBMINDS INDIA PRIVATE LIMITED</div>
            <div>hr@pbmindstech.com • +91 76193 04857</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
