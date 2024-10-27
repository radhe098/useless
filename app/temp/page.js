// app/index.js

import Link from 'next/link';

function generateHashForInterval() {
    const now = new Date();
    const halfHourInterval = Math.floor(now.getTime() / (30 * 60 * 1000));
    const str = String(halfHourInterval);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash.toString(16);
}

export default function HomePage() {
    const currentHash = generateHashForInterval();

    return (
        <div>
            <h1>Welcome to the Interval App</h1>
            <p>Current Hash: {currentHash}</p>
            <Link href={`/intervals/${currentHash}`}>
                Go to Current Interval Page
            </Link>
        </div>
    );
}
