 // Animation du header au scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Fonction pour ouvrir la modal
        function openModal(img) {
            const modal = document.getElementById("modal");
            const modalImg = document.getElementById("modal-img");
            modal.style.display = "flex";
            modalImg.src = img.src;
            
            // Effet de transition
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
        
        // Fonction pour fermer la modal
        function closeModal() {
            const modal = document.getElementById("modal");
            modal.classList.remove('show');
            
            // Attendre la fin de l'animation avant de cacher complètement
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }