document.addEventListener('DOMContentLoaded', () => {
    // Lenis Setup
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Integrate Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0, 0);

    // Initialize VanillaTilt for 3D Cards
    VanillaTilt.init(document.querySelectorAll(".service-card, .work-card, .testi-card"), {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        scale: 1.02
    });

    // Cursor Logic
    const cursorDot = document.getElementById('cursorDot');
    const cursorRing = document.getElementById('cursorRing');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let mouseMoved = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!mouseMoved) {
            ringX = mouseX;
            ringY = mouseY;
            mouseMoved = true;
        }
    });

    function animateCursor() {
        if (cursorDot && cursorRing) {
            // Use translate3d for hardware acceleration, preventing layout thrashing
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

            // Easing for ring
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        }
        requestAnimationFrame(animateCursor);
    }
    
    // Always start animation loop; CSS handles hiding it on smaller screens
    animateCursor();

    // Hover effects for cursor
    const hoverElements = document.querySelectorAll('a, button, .service-card, .why-item, .work-card, .testi-card, input, textarea, .modal-close');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.width = '12px';
            cursorDot.style.height = '12px';
            cursorRing.style.width = '60px';
            cursorRing.style.height = '60px';
            cursorRing.style.borderColor = 'rgba(41, 182, 246, 0.8)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.width = '8px';
            cursorDot.style.height = '8px';
            cursorRing.style.width = '40px';
            cursorRing.style.height = '40px';
            cursorRing.style.borderColor = 'rgba(41, 182, 246, 0.5)';
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Modal Logic
    const modal = document.getElementById('contactModal');
    const modalFormContainer = document.getElementById('modalFormContainer');
    const modalSuccess = document.getElementById('modalSuccess');
    const projectForm = document.getElementById('projectForm');

    function openModal() {
        modal.classList.add('active');
        modalFormContainer.style.display = 'block';
        modalSuccess.style.display = 'none';
        projectForm.reset();
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    // Expose to global scope for inline HTML event listeners
    window.openModal = openModal;
    window.closeModal = closeModal;

    projectForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = projectForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = 'Sending...';
        btn.style.opacity = '0.7';

        const formData = new FormData(projectForm);

        try {
            const response = await fetch(projectForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                modalFormContainer.style.display = 'none';
                modalSuccess.style.display = 'block';
                projectForm.reset();
            } else {
                throw new Error("Submission failed");
            }

        } catch (error) {
            alert("Something went wrong. Please try again.");
        }

        btn.innerHTML = originalText;
        btn.style.opacity = '1';
    });

    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // GSAP Animations

    // Hero Entry Animation
    const tl = gsap.timeline();
    tl.to('.hero-title .word', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        startAt: { y: 100, opacity: 0 }
    })
        .to('#heroTag', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .to('#heroSub', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('#heroBtns', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');

    // Simple Reveal for standard elements (.gs-reveal)
    gsap.utils.toArray('.gs-reveal').forEach(elem => {
        gsap.fromTo(elem, {
            opacity: 0,
            y: 40
        }, {
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Marquee Scrub Animation
    gsap.to('.marquee-content', {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".marquee",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // Services Grid Stagger Reveal
    ScrollTrigger.create({
        trigger: '.services-grid',
        start: 'top 80%',
        onEnter: () => {
            gsap.fromTo('.service-card',
                { opacity: 0, y: 80, rotationX: -10 },
                { opacity: 1, y: 0, rotationX: 0, duration: 1, stagger: 0.1, ease: 'back.out(1.5)' }
            );
        }
    });

    // Stats Grid Stagger Reveal
    ScrollTrigger.create({
        trigger: '.stats-wrap',
        start: 'top 85%',
        onEnter: () => {
            gsap.fromTo('.stat-box',
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
        }
    });

    // Work Cards Parallax Entry & Image Parallax Scrub
    gsap.utils.toArray('.work-card').forEach((card, i) => {
        // Entry
        gsap.fromTo(card,
            { opacity: 0, y: 100 },
            {
                scrollTrigger: { trigger: card, start: 'top 85%' },
                opacity: 1, y: 0, duration: 1, ease: 'power4.out', delay: i % 2 === 0 ? 0 : 0.2
            }
        );
    });

    // Background Image Parallax within Work Cards
    gsap.utils.toArray('.img-cover, .iframe-cover').forEach(img => {
        gsap.to(img, {
            yPercent: 15, // Move image down as user scrolls down
            ease: 'none',
            scrollTrigger: {
                trigger: img.closest('.work-card'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Process Timeline Animations
    // 1. Draw the connecting line
    gsap.to('.process-line', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 75%',
            end: 'right 20%', // Draw line as user scrolls past
            scrub: 1
        }
    });

    // 2. Pop up each step and light up the dot
    gsap.utils.toArray('.process-step').forEach((step, i) => {
        ScrollTrigger.create({
            trigger: step,
            start: 'top 80%',
            onEnter: () => {
                gsap.fromTo(step,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' }
                );
                // Light up dot
                step.querySelector('.process-dot').classList.add('active');
            }
        });
    });

    // Testimonials Grid Stagger Reveal
    ScrollTrigger.create({
        trigger: '.testi-grid',
        start: 'top 85%',
        onEnter: () => {
            gsap.fromTo('.testi-card',
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' }
            );
        }
    });

    // Number Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                const target = +counter.getAttribute('data-target');
                const suffix = counter.getAttribute('data-suffix') || '';
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out',
                    onUpdate: function () {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
                    }
                });
            }
        });
    });

    // =============== END GSAP ANIMATIONS ===============

    // Three.js Scene
    const canvas = document.getElementById('heroCanvas');
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    // Renderer - Capped Pixel Ratio for better performance
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));

    // Outer Abstract 3D Object
    const geometry = new THREE.IcosahedronGeometry(2.5, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0x29b6f6,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Inner glowing core
    const innerGeometry = new THREE.IcosahedronGeometry(1.5, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
        color: 0x007ac1,
        wireframe: true,
        transparent: true,
        opacity: 0.4
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    // Particles around it - Reduced count for performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 300; // Reduced from 800
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.03,
        color: 0x29b6f6,
        transparent: true,
        opacity: 0.6
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseXThree = 0;
    let mouseYThree = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseXThree = (event.clientX - windowHalfX);
        mouseYThree = (event.clientY - windowHalfY);
    });

    // Intersection Observer to pause rendering when scrolled out of view
    const heroSection = document.getElementById('home');
    let isThreeVisible = true;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isThreeVisible = entry.isIntersecting;
        });
    }, { threshold: 0 });
    observer.observe(heroSection);

    // Animation Loop
    const clock = new THREE.Clock();

    function animateThree() {
        requestAnimationFrame(animateThree);

        // Stop wasting GPU cycles if Hero isn't visible
        if (!isThreeVisible) return;

        const elapsedTime = clock.getElapsedTime();

        // Rotate 3D Objects
        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;

        innerSphere.rotation.y -= 0.003;
        innerSphere.rotation.z -= 0.002;

        particlesMesh.rotation.y = -elapsedTime * 0.05;

        // Mouse Parallax effect
        targetX = mouseXThree * 0.001;
        targetY = mouseYThree * 0.001;

        sphere.rotation.y += 0.05 * (targetX - sphere.rotation.y);
        sphere.rotation.x += 0.05 * (targetY - sphere.rotation.x);

        innerSphere.rotation.y += 0.05 * (targetX - innerSphere.rotation.y);
        innerSphere.rotation.x += 0.05 * (targetY - innerSphere.rotation.x);

        renderer.render(scene, camera);
    }

    animateThree();

    // Window Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
