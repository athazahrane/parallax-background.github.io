// Fungsi untuk menggulir halaman sejauh 100vh dengan efek smooth scroll
function scrollBy100vh() {
    const scrollHeight = window.innerHeight;
    const currentScrollY = window.scrollY;

    const remainder = currentScrollY % scrollHeight;
    const distanceToNextScroll = scrollHeight - remainder;

    window.scrollBy({
        top: distanceToNextScroll,
        behavior: 'smooth'
    });
}

// Fungsi untuk menggulir halaman sejauh -100vh dengan efek smooth scroll
function scrollBackBy100vh() {
    const scrollHeight = window.innerHeight;
    const currentScrollY = window.scrollY;

    const remainder = currentScrollY % scrollHeight;
    const distanceToPreviousScroll = remainder || scrollHeight;

    window.scrollBy({
        top: -distanceToPreviousScroll,
        behavior: 'smooth'
    });
}

// Mendengarkan tombol keyboard untuk menggulir halaman
document.addEventListener('keydown', function (event) {
    // Menggulir ke bawah ketika tombol panah bawah ditekan
    if (event.key === 'ArrowDown') {
        scrollBy100vh();
    }
    // Menggulir ke atas ketika tombol panah atas ditekan
    else if (event.key === 'ArrowUp') {
        scrollBackBy100vh();
    }
});

// Mendengarkan scroll mouse untuk menggulir halaman
document.addEventListener('wheel', function (event) {
    // Jika menggulir ke bawah
    if (event.deltaY > 0) {
        scrollBy100vh();
    }
    // Jika menggulir ke atas
    else if (event.deltaY < 0) {
        scrollBackBy100vh();
    }
});
