import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.store('globals', {
    open: false,
    toggle() {
        this.open = !this.open;
    },
});

Alpine.start();
