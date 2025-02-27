const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');
const filterButtons = document.querySelectorAll('.filter-btn');

let displayedPhotos = 0;
let currentFilter = 'all';
const photosPerPage = 6;

const photos = [
    { url: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=952&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=987&auto=format&fit=crop', type: 'nature' },
    { url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1064&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1031&auto=format&fit=crop', type: 'city' },
    { url: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=1170&auto=format&fit=crop', type: 'city' },
    { url: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?q=80&w=987&auto=format&fit=crop', type: 'animals' },
    { url: 'https://plus.unsplash.com/premium_photo-1666278379770-440439b08656?q=80&w=988&auto=format&fit=crop', type: 'animals' },
    { url: 'https://images.unsplash.com/photo-1441057206919-63d19fac2369?q=80&w=987&auto=format&fit=crop', type: 'animals' },
    { url: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=987&auto=format&fit=crop', type: 'animals' }
];

function displayPhotos(filter = 'all', reset = false) {
    if (reset) {
        gallery.innerHTML = '';
        displayedPhotos = 0;
    }
    
    let filteredPhotos = photos;
    if (filter !== 'all') {
        filteredPhotos = photos.filter(photo => photo.type === filter);
    }
    
    const photosToShow = filteredPhotos.slice(displayedPhotos, displayedPhotos + photosPerPage);
    photosToShow.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.type;
        img.classList.add('gallery-image');
        gallery.appendChild(img);
    });
    
    displayedPhotos += photosPerPage;
    loadMoreBtn.style.display = displayedPhotos < filteredPhotos.length ? 'block' : 'none';
}

// Filter button event listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        displayPhotos(currentFilter, true);
    });
});

// Load More button event listener
loadMoreBtn.addEventListener('click', () => {
    displayPhotos(currentFilter);
});

// Initial Load
displayPhotos();
