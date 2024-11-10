# Momo Store 🛒
Momo Store adalah aplikasi e-commerce modern yang memungkinkan pengguna untuk menjelajahi berbagai produk, menambahkannya ke keranjang, melakukan pemesanan, dan meninjau produk. Aplikasi ini dibangun dengan menggunakan Next.js untuk menghadirkan pengalaman pengguna yang cepat, responsif, dan ramah SEO.

## 📌 Fitur Utama
- **Daftar Produk**: Pengguna dapat menelusuri dan mencari produk dari berbagai kategori.
- **Manajemen Pengguna**: Pendaftaran, login, dan manajemen profil pengguna.
- **Keranjang Belanja**: Pengguna dapat menambahkan, mengedit, dan menghapus item di keranjang belanja.
- **Checkout & Pembayaran**: Pemrosesan checkout dan integrasi metode pembayaran.
- **Ulasan Produk**: Pengguna dapat memberikan rating dan ulasan untuk setiap produk.
- **API Routes**: Endpoint API yang fleksibel dan aman untuk berbagai layanan.

## 🔧 Teknologi yang Digunakan
- **Frontend**: [Vue.js](https://vuejs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend API**: API Routes, Node.js, Express.js
- **Database**: MongoDB
- **Autentikasi**: JSON Web Token (JWT)
- **Deployment**: Vercel, Docker

## 🚀 Instalasi dan Penggunaan

1. **Clone repositori ini** ke mesin lokal Anda:
    ```bash
    git clone https://github.com/username/momomart.git
    cd momomart
    ```

2. **Instal dependensi**:
    ```bash
    npm install
    ```

3. **Konfigurasi Environment**:
   Buat file `.env.local` di direktori root proyek dan tambahkan variabel environment berikut:
    ```plaintext
    DATABASE_URL=your_database_url
    NEXT_PUBLIC_API_KEY=your_api_key
    NEXTAUTH_SECRET=your_secret_key
    ```

4. **Menjalankan Aplikasi**:
   Untuk memulai server pengembangan lokal, jalankan perintah berikut:
    ```bash
    npm run dev
    ```
    Akses aplikasi di [http://localhost:3000](http://localhost:3000).

## 📚 Struktur API
| Endpoint              | Method | Deskripsi                            |
|-----------------------|--------|--------------------------------------|
| `/api/v1/users`       | POST   | Mendaftarkan pengguna baru           |
| `/api/v1/users/login` | POST   | Login pengguna                       |
| `/api/v1/products`    | GET    | Mendapatkan daftar produk            |
| `/api/v1/orders`      | POST   | Membuat pesanan baru                 |
| `/api/v1/reviews`     | POST   | Menambahkan ulasan untuk produk      |
| `/api/v1/payments`    | POST   | Memproses pembayaran pesanan         |

**Contoh API Request**:
```bash
POST /api/v1/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
