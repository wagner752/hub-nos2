document.addEventListener('DOMContentLoaded', function() {
    const linksContainer = document.getElementById('linksContainer');
    
    // Links data
    const links = [
        {
            title: "NOS2 Sex Shop",
            url: "https://nos2-sexshop.vercel.app",
            icon: "shopping-bag",
            description: "Visite nossa loja online"
        },
        {
            title: "Pedidos via WhatsApp",
            url: "https://wa.me/5584991937731",
            icon: "shopping-cart",
            description: "84 99193-7731"
        },
        {
            title: "Grupo +18 (Em breve)",
            url: "https://chat.whatsapp.com/BcX7KydGEVu6A5kIkbxsac?mode=wwt",
            icon: "users",
            description: "Entre no nosso grupinho +18",
            comingSoon: false
        }
    ];

    // Create link elements
    links.forEach((link, index) => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = `block link-card rounded-lg p-4 text-center ${link.comingSoon ? 'opacity-70' : ''}`;
        linkElement.style.animationDelay = `${index * 0.1}s`;
        linkElement.innerHTML = `
            <div class="flex items-center justify-center mb-2">
                <i data-feather="${link.icon}" class="text-red-500"></i>
            </div>
            <h3 class="text-lg font-semibold ${link.comingSoon ? 'text-gray-400' : 'text-white'}">${link.title}</h3>
            <p class="text-sm ${link.comingSoon ? 'text-gray-500' : 'text-gray-300'}">${link.description}</p>
            ${link.comingSoon ? '<span class="text-xs text-red-500 block mt-1">EM BREVE</span>' : ''}
        `;
        
        // Add hover effect
        if (!link.comingSoon) {
            linkElement.addEventListener('mouseenter', () => {
                linkElement.querySelector('i').classList.add('animate-pulse');
            });
            linkElement.addEventListener('mouseleave', () => {
                linkElement.querySelector('i').classList.remove('animate-pulse');
            });
        }
        
        linksContainer.appendChild(linkElement);
    });

    // Add confetti effect on click (for fun)
    document.querySelectorAll('.link-card:not([href="#"])').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.querySelector('.coming-soon')) {
                e.preventDefault();
                // Simple confetti effect
                const colors = ['#ff0000', '#ffffff', '#000000'];
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'absolute w-2 h-2 rounded-full';
                        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.left = `${Math.random() * 100}vw`;
                        confetti.style.top = '0';
                        confetti.style.transform = 'translateY(0)';
                        document.body.appendChild(confetti);
                        
                        // Animate confetti
                        setTimeout(() => {
                            confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
                            confetti.style.opacity = '0';
                            
                            // Remove after animation
                            setTimeout(() => {
                                confetti.remove();
                            }, 1000);
                        }, 10);
                    }, i * 50);
                }
                
                // Open link after animation
                setTimeout(() => {
                    window.open(link.href, '_blank');
                }, 500);
            }
        });
    });

    // Add floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '<i data-feather="heart" class="text-red-500 opacity-30"></i>';
        heart.className = 'absolute';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        document.body.appendChild(heart);
        feather.replace();

        // Animate
        let pos = parseFloat(heart.style.top);
        const id = setInterval(() => {
            pos -= 0.5;
            heart.style.top = `${pos}vh`;
            if (pos < -10) {
                clearInterval(id);
                heart.remove();
            }
        }, 50);
    }

    // Create floating hearts periodically
    setInterval(createFloatingHeart, 1000);

});

