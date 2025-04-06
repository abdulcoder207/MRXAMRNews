import viteLogo from "../assets/vite3j.jpg"
import myfilm from "../assets/logo-m (1).ico"
import catatan from "../assets/notepad-12.jpg"
import logoQrCode from "../assets/scan-me-logo2.png"
import "./content.css"

function Content() {
    return (
        <div className="container">

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>Website Film Dan Anime</h1>
                        <p>Website yang dikembangkan tahun 2024 isi dari website ini adalah cerita singkat ari berbagai film dan anime.</p>
                        <a href="https://my-film-one.vercel.app" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={myfilm} alt="My-Film logo" />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>Website Personal</h1>
                        <p>Website yang dikembangkan tahun 2024 isi dari website ini adalah kata-kata yang menarik.</p>
                        <a href="https://website-personal-rouge.vercel.app/" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={viteLogo }alt="website-personal" />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>Website QR-Code generator</h1>
                        <p>Website yang dikembangkan tahun 2024 website ini adalah generate qr code semua bisa digenerate apa saja.</p>
                        <a href="https://qrcode-coder.vercel.app/" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={logoQrCode} alt="qrcode" />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>Website Catatan</h1>
                        <p>Website yang dikembangkan tahun 2024 website ini adalah sebuah catatan atau to-do-list.</p>
                        <a href="https://catatan-two.vercel.app/" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={catatan} alt="catatan" />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>Clone HDD tutorial</h1>
                        <p>Website yang dikembangkan tahun 2024 sebenarnya web ini hanya untuk tugas saja.</p>
                        <a href="https://clone-hdd.vercel.app/" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={"https://dummyimage.com/250x250/000/fff"} alt="catatan" />
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="text">
                        <h1>API Quotes</h1>
                        <p>API yang dikembangkan tahun 2025 yamg kalian bisa mengambilnya.</p>
                        <a href="https://quote-gold.vercel.app/api" target="_blank" className="a-content">
                            Visit Website
                        </a>
                    </div>
                    <div className="image">
                        <img src={"https://dummyimage.com/250x250/000/fff"} alt="catatan" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content