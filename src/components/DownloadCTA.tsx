
import React from "react";
import { Button } from "@/components/ui/button";

const DownloadCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-eco-green to-eco-teal rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Download the App & Start Earning Today
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of users who are turning their waste into wealth while saving the planet. Our app makes recycling rewarding and effortless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-eco-green hover:bg-eco-pale-green hover:text-eco-green">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M17.05 19.874c-.68.28-1.466.47-2.38.47-1.87 0-3.34-.83-4.47-2.5l-.03-.04c-1.16-1.61-1.04-3.86-.45-5.84.65-2.12 1.88-4.08 3.49-5.54.31-.28.84-.59 1.12-.72.28.19.85.51 1.11.74 1.73 1.5 2.98 3.59 3.55 5.87.11.45.17.89.18 1.33.05 2.28-.87 4.57-2.1 6.22zm-9.33-1.65c-1.27.5-2.78.06-3.55-1.05-.56-.8-.8-1.73-.7-2.7.13-1.77 1.5-2.97 3.11-3.22 1.63-.24 3.29.6 4.05 1.98l.02.04c-1.01 1.57-2.01 3.2-2.93 4.95zm12.2-3.16c-.76 1.35-1.63 2.65-2.29 4.06l-.04.08c-1.04 2.16-2.96 3.25-5.14 3.33-2.17.08-4.13-.69-5.33-2.38.99-1.68 2.01-3.34 3.01-5.01.66.39 1.41.62 2.15.58 1.55-.08 2.97-.94 3.83-2.16.71-1.05 1-2.3.75-3.6-.24-1.33-.97-2.43-2.01-3.19 1.72.08 3.22.81 4.34 2.09 1.38 1.57 1.84 3.37 1.34 5.44-.07.28-.18.54-.29.8-.02 0-.33-.04-.32-.04z"/>
                  </svg>
                  Download for iOS
                </Button>
                <Button className="bg-white text-eco-green hover:bg-eco-pale-green hover:text-eco-green">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                    <path d="M3.176 3.696v16.608l10.518-8.304-10.518-8.304zm8.706 7.696l2.293 1.806 2.814-1.733-4.023-2.35-1.084 2.277zm.596 3.397l2.879-5.093 8.467-4.927-14.132 4.084 2.786 5.936zm.41 1.211l.084 5.851 3.685-2.133 1.853-1.073-5.622-2.645z"/>
                  </svg>
                  Download for Android
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 24 24" className="h-5 w-5 text-eco-leaf-gold" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm">4.8/5 from 2,500+ reviews</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center p-8">
              <div className="relative w-64 h-[500px]">
                <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-[36px] translate-x-4 translate-y-4"></div>
                <div className="relative z-10 bg-white rounded-[36px] w-full h-full overflow-hidden border-4 border-white">
                  <div className="w-full h-full bg-eco-pale-green flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">📱</div>
                      <p className="text-eco-green font-semibold">App Screen Preview</p>
                      <p className="text-sm text-gray-600 mt-2">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
