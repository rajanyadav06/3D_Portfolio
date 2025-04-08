export default function SocialMedia() {
    return (
        <div className="flex space-x-4 justify-around items-center bg-black-100 p-8 rounded-2xl mt-10 text-white">
            {/* Facebook */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.86 3.44 8.9 8 9.82V15.8H7v-3.73h3V9.8c0-3.02 1.79-4.73 4.52-4.73 1.31 0 2.68.24 2.68.24v3h-1.51c-1.49 0-1.96.93-1.96 1.88v2.15h3.33l-.53 3.73h-2.8v6.1c4.56-.91 8-4.96 8-9.82z" />
                </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/rajanyadav_06/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2c-2.76 0-5 2.24-5 5v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rajan-yadav-6bb4b0210/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm0 4h4v12H4V7zm6 0h4v2.34a4 4 0 013.68-2.34c2.24 0 4 1.64 4 4.92V19h-4v-6c0-1.6-.68-2.34-1.84-2.34-1.16 0-1.66 1-1.66 2.34V19h-4V7z" />
                </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/rajanyadav06" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.61-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.94.84.09-.64.36-1.1.65-1.36-2.22-.26-4.55-1.11-4.55-4.94 0-1.1.39-2 .97-2.71-.1-.26-.42-1.32.1-2.75 0 0 .84-.27 2.75 1.03a9.61 9.61 0 015 0c1.9-1.3 2.75-1.03 2.75-1.03.52 1.43.2 2.49.1 2.75.6.7.97 1.61.97 2.71 0 3.84-2.34 4.67-4.57 4.92.36.3.69.88.69 1.77v2.62c0 .27.16.59.67.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
            </a>

            {/* Twitter */}
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.45 8.45 0 01-2.7 1.03 4.21 4.21 0 00-7.2 3.84A11.93 11.93 0 013 5.16a4.21 4.21 0 001.3 5.6 4.14 4.14 0 01-1.91-.53v.05a4.21 4.21 0 003.38 4.12 4.21 4.21 0 01-1.9.07 4.22 4.22 0 003.94 2.92 8.46 8.46 0 01-5.24 1.8c-.34 0-.67-.02-1-.06a11.93 11.93 0 006.5 1.9c7.79 0 12.06-6.45 12.06-12.06 0-.18 0-.36-.01-.54a8.63 8.63 0 002.12-2.2z" />
                </svg>
            </a>
        </div>
    );
}
