import Image from 'next/image';
import logo from '../../public/icon2.png';

const LoadingScreen = () => {

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#202022] text-white">
            <div className="flex flex-col items-center">
                <div className="logo mb-0">
                    <Image src={logo} alt="Logo" width={100} height={100} className="animate-shimmer" />
                </div>
                <div className="loading-text text-xl mt-0 light">Lambda</div>
                <div className="encryption-text text-sm text-gray-400 mt-1 light">End-to-end encrypted</div>
            </div>
        </div>
    );
};

export default LoadingScreen;
