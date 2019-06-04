function bgChange() {
    if (this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add('bg-changed');
    } else {
        document.body.classList.remove('bg-changed');
    }
}

window.addEventListener('scroll', bgChange);
