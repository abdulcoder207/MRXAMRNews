import React from "react"
import "./about.css"

function About() {
    return (
        <div className="container-about">
            <h1 className="title-about">Tentang Website</h1>
            <p className="text-about">Selamat datang di <strong>Mr Xamr News</strong>! Web Site ini adalah platform berita yang berfokus pada keamanan cyber, termasuk serangan malware, ransomware, dan ancaman cyber lainnya yang terus berkembang.</p>
            <p className="text-about">Tujuan saya adalah memberikan informasi terkini dan solusi keamanan agar pengguna tetap terlindungi dari ancaman digital.</p>
            <p className="text-about">Pada halaman pertama adalah project yang saya kembangkan dan saya berlatih membuat project kecil-kecilan untuk mengasah programing saya.</p>
            <p className="text-about">Tidak hanya dunia coding saja tetapi saya juga belajar IoT, Cyber, dan jaringan.</p>
            <p className="text-about">Saya tidak hanya seorang frontend tetapi backend juga bisa. Anda bisa melihat api quote saya di halama pertama.</p>
            <p className="text-about">Anda bisa mengunjungi Github saya <a href="https://github.com/abdulcoder207">GITHUB</a>.</p>
            <div className="question-about">
                <h2>Pertanyaan Umum: </h2>
                <details>
                    <summary>Apa itu MrXAM News?</summary>
                    <p className="p-about">MrXAM News adalah platform berita yang membahas tentang keamanan siber.</p>
                </details>
                <details>
                    <summary>Bagaimana cara mengamankan perangkat dari malware?</summary>
                    <p className="p-about">Gunakan antivirus, update sistem secara rutin, dan hindari mengunduh file dari sumber yang tidak jelas.</p>
                </details>
                <details>
                    <summary>Bagaimana cara mengenali suatu aplikasi teredapat malware</summary>
                    <p className="p-about">Download aplikasi di website yang resmi, scan di website VirusTotal dan jangan download dari sumber tidak dikenal.</p>
                </details>
                <details>
                    <summary>Apakah anda seorang programer fullstack ?</summary>
                    <p className="p-about">Ya bahasa yang menjadi saya sukai Javascript tapi saya juga mempelajari bahasa lain seperti shell, php, c++, python.</p>
                </details>
            </div>

        </div>
    )
}

export default About