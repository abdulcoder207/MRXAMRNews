import React from "react"
import "./about.css"

function About() {
    return (
        <div className="container-about">
            <h1 className="title-about">Tentang Website</h1>
            <p className="text-about">Selamat datang di <strong>Mr Xamr News</strong>! Web Site ini adalah platform berita yang berfokus pada keamanan cyber, termasuk serangan malware, ransomware, dan ancaman cyber lainnya yang terus berkembang.</p>
            <p className="text-about">Tujuan saya adalah memberikan informasi terkini dan solusi keamanan agar pengguna tetap terlindungi dari ancaman digital.</p>
            <div className="question-about">
                <h2>Pertanyaan Umum</h2>
                <details>
                    <summary>Apa itu MrXAM News?</summary>
                    <p className="p-about">MrXAM News adalah platform berita yang membahas tentang keamanan siber.</p>
                </details>
                <details>
                    <summary>Bagaimana cara mengamankan perangkat dari malware?</summary>
                    <p className="p-about">Gunakan antivirus, update sistem secara rutin, dan hindari mengunduh file dari sumber yang tidak jelas.</p>
                </details>
            </div>

        </div>
    )
}

export default About