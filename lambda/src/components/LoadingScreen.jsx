import { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/icon2.png';

const LoadingScreen = () => {
    useEffect(() => {
        const progressBar = document.querySelector(".progress");
        let width = 0;
        const duration = 3000; 
        const incrementTime = 30;
        const increment = 100 / (duration / incrementTime);

        if (progressBar) {
            progressBar.style.width = "0%";
        }

        const animateProgress = () => {
            width += increment;
            if (width <= 100 && progressBar) {
                progressBar.style.width = `${width}%`;
                setTimeout(animateProgress, incrementTime);
            }
        };

        setTimeout(animateProgress, incrementTime);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202022] text-white">
            <div className="flex flex-col items-center">
                <div className="logo mb-1">
                    <Image src={logo} alt="Logo" width={100} height={100} className="animate-shimmer" />
                </div>
                <div className="loading-bar w-[50vw] md:w-[15vw] h-1 bg-[#46494F] rounded overflow-hidden relative mx-auto">
                    <div className="progress h-full bg-[#FF835B] transform origin-left"></div>
                </div>
                <div className="loading-text text-xl mt-4 light">Lambda</div>
                <div className="encryption-text text-sm text-gray-400 mt-1 light">End-to-end encrypted</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
