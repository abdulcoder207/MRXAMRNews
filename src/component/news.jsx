import bootkitImage from "../assets/bootkitty-img-1.webp"
import eburyImage from "../assets/ebury-malware.jpeg"
import autoColor from "../assets/auto-color.webp"
import LockBit from "../assets/locbit3.0.png"

import "./news.css"

function News() {
    return (
        <div>
            <div className="container-news">
                <h2 className="h2-news">News cyber security </h2>

                <div className="card-news">
                    <img src={bootkitImage} alt="Bootkit Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Virus Bootkit Baru Menginfeksi Linux</h3>
                        <p>
                            Peneliti keamanan menemukan Bootkit berbahaya yang mampu menginfeksi sistem Linux,
                            bahkan sebelum sistem operasi berjalan. Virus ini menyusup ke bootloader dan bertahan meskipun sistem diinstal ulang.
                        </p>
                        <p>
                            Serangan ini sulit dideteksi karena berjalan di level firmware. Pakar menyarankan
                            untuk memperbarui firmware dan menggunakan Secure Boot untuk mencegah infeksi.
                        </p>
                    </div>
                </div>

                <div className="card-news">
                    <img src={eburyImage} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Malware Ebury: Trojan SSH yang Mengancam Server Linux</h3>
                        <p>
                            Ebury adalah malware trojan SSH yang menargetkan server Linux dan digunakan untuk mencuri
                            kredensial SSH serta mengontrol jaringan botnet. Malware ini menginfeksi OpenSSH, memungkinkan
                            peretas mencuri username dan password saat admin server login.
                        </p>
                        <p>
                            Malware ini pertama kali ditemukan pada tahun 2009, tetapi masih aktif hingga sekarang karena
                            banyak admin yang tidak memperbarui sistemnya. Ebury memungkinkan penyerang untuk
                            memonitor lalu lintas server, mengontrol jaringan botnet, dan menyusup ke sistem tanpa terdeteksi.
                        </p>
                        <p>
                            Cara mencegah Ebury:
                            - Perbarui sistem Linux dan OpenSSH secara rutin.
                            - Gunakan autentikasi berbasis kunci SSH, bukan password.
                            - Audit server secara berkala untuk mendeteksi aktivitas mencurigakan.
                        </p>
                    </div>
                </div>

                <div className="card-news">
                    <img src={autoColor} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Malware “Auto-Color” Menargetkan Linux dengan Teknik Canggih</h3>
                        <p>
                            Malware baru bernama Auto-Color ditemukan menyerang sistem operasi Linux dengan teknik yang lebih canggih. Malware ini mampu menyembunyikan jejaknya dan bertahan meskipun sistem direstart. Para peneliti keamanan menemukan bahwa Auto-Color menyusup melalui celah keamanan dalam server berbasis Linux, lalu memberikan akses penuh kepada peretas.
                        </p>
                        <p>
                            Cara mencegah Ebury:
                            - Selalu perbarui sistem Linux dengan path terbaru.
                            - Gunakan firewall untuk membatasi koneksi yang tidak dikenal.
                            - Monitor aktivitas sistem untuk mendeteksi anomali sejak dini.
                        </p>
                    </div>
                </div>

                <div className="card-news">
                    <img src={LockBit} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Varian Ransomware LockBit 3.0 Kini Menargetkan Linux</h3>
                        <p>
                            LockBit, salah satu ransomware paling terkenal, kini memiliki versi baru LockBit 3.0 Linux-ESXi, yang secara khusus dibuat untuk menyerang server berbasis Linux. Setelah berhasil menginfeksi, ransomware ini mengenkripsi semua data di server dan meminta tebusan dalam bentuk cryptocurrency.
                        </p>
                        <p>Bagaimana LockBit 3.0 Menyerang?
                            Memanfaatkan kerentanan dalam software yang belum diperbarui.
                            Menyebar melalui email phishing yang mengandung file berbahaya.
                            Menargetkan perusahaan besar yang memiliki data sensitif.</p>
                        <p>
                            Cara Mencegah Serangan:
                            Jangan membuka email mencurigakan atau mengunduh file dari sumber yang tidak dikenal.
                            Backup data secara berkala agar tidak kehilangan informasi penting.
                            Gunakan sistem keamanan berbasis AI untuk mendeteksi ancaman lebih cepat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News