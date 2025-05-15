 const langBtn = document.getElementById("languageBtn");
        const langDropdown = document.getElementById("languageDropdown");
        const langOptions = document.querySelectorAll(".language-option");
        const currentLang = document.getElementById("currentLanguage");
    
        langBtn.addEventListener("click", () => {
            langDropdown.classList.toggle("show");
        });
    
        langOptions.forEach(option => {
            option.addEventListener("click", () => {
                const selectedLang = option.getAttribute("data-lang");
                currentLang.textContent = selectedLang.toUpperCase();
                document.querySelectorAll(".lang").forEach(el => {
                    el.classList.remove("active");
                });
                document.querySelectorAll(`.lang.${selectedLang}`).forEach(el => {
                    el.classList.add("active");
                });
                langDropdown.classList.remove("show");
            });
        });
    
        // Optionnel : fermer dropdown en cliquant ailleurs
        document.addEventListener("click", (e) => {
            if (!langBtn.contains(e.target)) {
                langDropdown.classList.remove("show");
            }
        });