document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('.sale-link');
    const graph = document.getElementById('saleGraph');

    if (!graph || links.length === 0) return;

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Change image
            const newImg = this.getAttribute('data-img');
            graph.src = newImg;

            // Reset all links
            links.forEach(l => {
                l.classList.remove('text-danger', 'fw-bold');
                l.classList.add('text-muted');
            });

            // Activate clicked link
            this.classList.remove('text-muted');
            this.classList.add('text-danger', 'fw-bold');
        });
    });

});

