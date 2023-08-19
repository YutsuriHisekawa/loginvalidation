const users = [
    { email: '1@gmail.com', password: '123456' },
    { email: 'fajar@gmail.com', password: 'fajar007123' },
]

function tombol(){
    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;

    if (email && email.length === 0 || password && password.length === 0) {
        return alert('Kolom tidak boleh kosong')
    }

    const exists = users.find((e) => e.email === email && e.password === password)
    if (!exists) return alert('Email atau password salah')

    alert('Login Berhasil')
    window.location.href = 'index2.html'
}
