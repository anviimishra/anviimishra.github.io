const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function PageTransitions() {
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelector('.active-btn'); // Use querySelector here
            if (currentBtn) {
                currentBtn.classList.remove('active-btn'); // Remove the class
            }
            this.classList.add('active-btn'); // Add the class to the clicked button
        });
    }

    allSections.forEach(section => {
        section.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if (id) {
                sectBtns.forEach((btn) => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                sections.forEach((section) => {
                    section.classList.remove('active');
                });

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });
}

PageTransitions();
