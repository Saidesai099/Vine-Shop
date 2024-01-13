<script>
    let containers = document.querySelectorAll('.container');
    let active = 0;

    window.addEventListener('scroll', () => {
        for (let i = 0; i < containers.length; i++) {
            let rect = containers[i].getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                if (active !== i) {
                    containers[active].querySelector('.text').style.opacity = 0;
                    containers[i].querySelector('.text').style.opacity = 1;
                    active = i;
                }
                break;
            }
        }
    });
</script>