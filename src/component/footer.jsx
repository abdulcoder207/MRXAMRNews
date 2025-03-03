import "./footer.css"

function Footer() {
    return (
        <div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Mr Xamr News. All Rights Reserved.</p>
            </footer>
        </div>
    )
}

export default Footer