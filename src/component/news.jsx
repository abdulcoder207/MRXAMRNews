import bootkitImage from "../assets/bootkitty-img-1.webp"
import eburyImage from "../assets/ebury-malware.jpeg"
import SpyWare from "../assets/spyware-malware.webp"
import autoColor from "../assets/auto-color.webp"
import DdosAtck from "../assets/ddos-attck.webp"
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

                <div className="card-news">
                    <img src={DdosAtck} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Serangan DDoS Besar-Besaran Mengguncang Infrastruktur Cloud Internasional</h3>
                        <p>
                            Baru-baru ini, sebuah serangan Distributed Denial of Service (DDoS) besar-besaran menargetkan penyedia layanan cloud global, menyebabkan gangguan pada ratusan website dan aplikasi. Serangan ini dilaporkan mencapai lebih dari 1 Tbps dalam lalu lintas palsu yang dikirim secara bersamaan dari ribuan perangkat yang telah terinfeksi.
                        </p>
                        <p>Serangan DDoS terjadi ketika ribuan perangkat (biasanya bot yang telah menjadi bagian dari botnet) mengirimkan permintaan secara bersamaan ke satu server atau layanan. Tujuannya adalah membanjiri server hingga tidak mampu menangani permintaan yang sah, sehingga layanan menjadi tidak tersedia bagi pengguna normal.</p>
                        <p>Solusi & Cara Mencegah:
                            - Gunakan layanan anti-DDoS protection dari penyedia cloud seperti Cloudflare atau AWS Shield.
                            - Terapkan rate limiting dan firewall rules untuk memblokir lalu lintas mencurigakan.
                            - Pantau trafik secara real-time untuk mendeteksi lonjakan lalu lintas yang tidak normal.
                            - Gunakan load balancer untuk membagi beban ke beberapa server.
                        </p>
                    </div>
                </div>

                <div className="card-news">
                    <img src={SpyWare} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Spyware Pegasus Kembali Digunakan dalam Serangan Lewat Aplikasi Pesan</h3>
                        <p>Spyware Pegasus, yang dikenal sangat canggih, kembali digunakan untuk menyerang target-target penting, termasuk jurnalis dan aktivis hak asasi manusia.
                            Serangan terbaru dilakukan melalui celah keamanan pada aplikasi pesan populer, di mana korban hanya perlu menerima pesan tanpa harus membukanya.
                        </p>
                        <p>Pegasus menyisipkan dirinya ke dalam perangkat korban melalui eksploitasi zero-click (tanpa interaksi pengguna).
                            Setelah masuk, spyware ini dapat mengakses kamera, mikrofon, lokasi GPS, serta membaca pesan dan panggilan tanpa sepengetahuan pengguna.</p>
                        <p>
                            Solusi & Cara Mencegah:
                            - Selalu perbarui sistem operasi dan aplikasi ke versi terbaru untuk menutup celah keamanan.
                            - Gunakan aplikasi yang terenkripsi dan memiliki reputasi keamanan yang baik.
                            - Hindari mengklik tautan mencurigakan dan pertimbangkan untuk menggunakan sistem operasi mobile khusus privasi seperti GrapheneOS.
                            - Gunakan mobile threat detection (MTD) untuk mendeteksi aktivitas aneh di perangkat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News