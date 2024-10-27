// app/not-found.js or app/blogs/not-found.js

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
                Go back home
            </a>
        </div>
    );
}

