document.addEventListener('DOMContentLoaded', function() { 

    const gallery = document.querySelector('main'); 

    const galleryImages = document.querySelectorAll('main .picture img'); 

    const lightbox = document.getElementById('lightbox'); 

    const lightboxImg = document.getElementById('lightbox-img'); 

    const captionText = document.getElementById('caption'); 

    const closeBtn = document.querySelector('.close-btn'); 

    const prevArrow = document.querySelector('.prev-arrow'); 

    const nextArrow = document.querySelector('.next-arrow'); 

 

    let currentIndex = 0; 

 

    // Use event delegation on the gallery container 

    gallery.addEventListener('click', function(event) { 

        if (event.target.tagName === 'IMG' && event.target.closest('.picture')) { 

            const clickedImage = event.target; 

            const index = Array.from(galleryImages).indexOf(clickedImage); 

            if (index > -1) { 

                currentIndex = index; 

                lightbox.classList.add('active'); 

                updateLightboxContent(); 

            } 

        } 

    }); 

 

    closeBtn.addEventListener('click', function() { 

        lightbox.classList.remove('active'); 

    }); 

 

    lightbox.addEventListener('click', function(event) { 

        if (event.target === lightbox) { 

            lightbox.classList.remove('active'); 

        } 

    }); 

 

    // Function to update lightbox content based on currentIndex 

    function updateLightboxContent() { 

        const currentImage = galleryImages[currentIndex]; 

        if (currentImage) { 

            lightboxImg.src = currentImage.getAttribute('data-src'); 

            captionText.textContent = currentImage.getAttribute('data-caption'); 

        } 

    } 

 

    // Keyboard navigation (left/right arrows) 

    document.addEventListener('keydown', function(event) { 

        if (lightbox.classList.contains('active')) { 

            if (event.key === 'ArrowRight') { 

                currentIndex = (currentIndex + 1) % galleryImages.length; 

                updateLightboxContent(); 

            } else if (event.key === 'ArrowLeft') { 

                if (currentIndex === 0) { 

                    currentIndex = galleryImages.length - 1; 

                } else { 

                    currentIndex--; 

                } 

                updateLightboxContent(); 

            } 

        } 

    }); 

 

    // Arrow button navigation 

    prevArrow.addEventListener('click', function() { 

        if (lightbox.classList.contains('active')) { 

            if (currentIndex === 0) { 

                currentIndex = galleryImages.length - 1; 

            } else { 

                currentIndex--; 

            } 

            updateLightboxContent(); 

        } 

    }); 

 

    nextArrow.addEventListener('click', function() { 

        if (lightbox.classList.contains('active')) { 

            currentIndex = (currentIndex + 1) % galleryImages.length; 

            updateLightboxContent(); 

        } 

    }); 

}); 