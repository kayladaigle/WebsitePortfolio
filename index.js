const elements = document.getElementsByClassName('portfolioProjects');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('projectAnimation');
            return;
        }
    });
});

for(const element of elements) {
    observer.observe(element);
}


