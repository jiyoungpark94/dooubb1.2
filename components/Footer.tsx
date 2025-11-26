import React from 'react';

export const Footer: React.FC = () => {
  return (
    // Removed border-t border-neutral-900 to avoid shadow-like line below Location section
    <footer className="bg-transparent py-12 text-xs md:text-sm text-gray-500 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        <div className="space-y-2">
            <div className="mb-4">
                {/* SVG Logo Implementation */}
                <svg width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto opacity-80">
                   <text x="0" y="22" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="28" fill="#01C853" letterSpacing="-1.5">dooub</text>
                </svg>
            </div>
            <p>(주)둡 대표이사 : 최원석</p>
            <p>사업자 등록번호 : 206-86-52207</p>
            <p>(13453) 경기도 성남시 수정구 금토로80번길 11, 판교이노베이션랩 지식산업센터 1205호</p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
            <p>&copy; {new Date().getFullYear()} Dooub Corp. All rights reserved.</p>
            <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};