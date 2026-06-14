
document.addEventListener('DOMContentLoaded', () => {
    // 1. Copy to Clipboard for Support ID
    const copyBtn = document.getElementById('copy-support-id');
    const copyBtnText = document.getElementById('copy-btn-text');
    const toast = document.getElementById('toast-message');
    const supportId = 'poshtibani_deltang_haram';

    if (copyBtn && toast) {
        copyBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(supportId).then(() => {
                toast.classList.add('show');
                if (copyBtnText) {
                    copyBtnText.textContent = 'کپی شد';
                    copyBtn.style.background = 'rgba(20, 184, 166, 0.15)';
                    copyBtn.style.borderColor = 'var(--turquoise)';
                    copyBtn.style.color = '#fff';
                }
                setTimeout(() => {
                    toast.classList.remove('show');
                    if (copyBtnText) {
                        copyBtnText.textContent = 'کپی آیدی';
                        copyBtn.style.background = 'rgba(212, 175, 55, 0.1)';
                        copyBtn.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                        copyBtn.style.color = 'var(--gold)';
                    }
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy support ID: ', err);
            });
        });
    }

    // Support redirect
    const supportLinkBtn = document.getElementById('support-link-btn');
    if (supportLinkBtn) {
        supportLinkBtn.addEventListener('click', () => {
            window.open(`https://eitaa.com/${supportId}`, '_blank', 'noopener,noreferrer');
        });
    }

    // 2. Dynamic Hadith / Quote Generator
    const hadithText = document.getElementById('hadith-content');
    const hadithRef = document.getElementById('hadith-ref');
    const newHadithBtn = document.getElementById('btn-new-hadith');

    const hadiths = [
        { text: '«إِنَّ الْحُسَیْنَ مِصْبَاحُ الْهُدَى وَ سَفِینَةُ النَّجَاةِ»<br>(همانا حسین چراغ هدایت و کشتی نجات است)', ref: 'پیامبر اکرم (ص)' },
        { text: '«كُلُّ یَوْمٍ عَاشُورَا وَ كُلُّ أَرْضٍ كَرْبَلَاءُ»<br>(همه روزها عاشورا و همه زمین‌ها کربلاست)', ref: 'منسوب به امام صادق (ع)' },
        { text: '«مَنْ زَارَ الْقَبْرَ الْحُسَيْنِ بِكَرْبَلَاءَ كَمَنْ زَارَ اللَّهَ فِي عَرْشِهِ»<br>(هر کس قبر حسین (ع) را در کربلا زیارت کند، مانند کسی است که خدا را در عرش زیارت کرده است)', ref: 'امام صادق (ع)' },
        { text: '«بِأَبِي أَنْتَ وَ أُمِّي يَا أَبَا عَبْدِ اللَّهِ لَقَدْ عَظُمَتِ الرَّزِيَّةُ»<br>(پدر و مادرم فدایت ای اباعبدالله، مصیبت شما بس بزرگ است)', ref: 'زیارت عاشورا' },
        { text: '«أَنَا قَتِيلُ الْعَبْرَةِ لَا يَذْكُرُنِي مُؤْمِنٌ إِلَّا بَكَى»<br>(من کشته اشکم؛ هیچ مؤمنی مرا یاد نمی‌کند مگر اینکه می‌گرید)', ref: 'امام حسین (ع)' },
        { text: '«الْحَمْدُ لِلَّهِ الَّذِي جَعَلَنَا مِنَ الْمُتَمَسِّكِينَ بِوِلايَةِ أَمِيرِ الْمُؤْمِنِينَ»<br>(ستایش خدای را که ما را از تمسک‌کنندگان به ولایت امیرالمؤمنین قرار داد)', ref: 'دعای غدیر' },
        { text: '«مَنْ بَكَى أَوْ تَبَاكَى عَلَى الْحُسَيْنِ وَجَبَتْ لَهُ الْجَنَّةُ»<br>(هر کس بر حسین (ع) بگرید یا خود را به گریه وادارد، بهشت بر او واجب می‌شود)', ref: 'امام صادق (ع)' },
        { text: '«زِيَارَةُ الْحُسَيْنِ ع تَعْدِلُ مِائَةَ حِجَّةٍ مَبْرُورَةٍ»<br>(زیارت امام حسین (ع) معادل صد حج مقبول است)', ref: 'امام باقر (ع)' },
        { text: '«إِنَّ لِقَتْلِ الْحُسَيْنِ حَرَارَةً فِي قُلُوبِ الْمُؤْمِنِينَ لَا تَبْرُدُ أَبَداً»<br>(برای شهادت حسین (ع) حرارتی در دلهای مؤمنان است که هرگز سرد نخواهد شد)', ref: 'پیامبر اکرم (ص)' },
        { text: '«شِیعَتُنَا مَهْمَا شَرِبْتُمْ مَاءَ عَذْبٍ فَاذْكُرُونِی»<br>(شیعیان من! هرگاه آب گوارایی نوشیدید، مرا یاد کنید)', ref: 'امام حسین (ع)' },
        { text: '«بَابُ الْحُسَیْنِ أَوْسَعُ وَ فِي لُجَّةِ الْبِحَارِ أَسْرَعُ»<br>(درگاه امام حسین (ع) وسیع‌تر و در میان طوفان‌ها سریع‌تر است)', ref: 'امام صادق (ع)' }
    ];

    if (hadithText && hadithRef && newHadithBtn) {
        let currentIdx = 0;
        newHadithBtn.addEventListener('click', () => {
            // Apply fade-out animation
            hadithText.style.opacity = '0';
            hadithRef.style.opacity = '0';

            setTimeout(() => {
                let nextIdx = currentIdx;
                while (nextIdx === currentIdx) {
                    nextIdx = Math.floor(Math.random() * hadiths.length);
                }
                currentIdx = nextIdx;

                hadithText.innerHTML = hadiths[currentIdx].text;
                hadithRef.textContent = hadiths[currentIdx].ref;

                // Fade back in
                hadithText.style.opacity = '1';
                hadithRef.style.opacity = '1';
            }, 250);
        });

        // Add CSS transition properties to text/ref elements dynamically
        hadithText.style.transition = 'opacity 0.25s ease';
        hadithRef.style.transition = 'opacity 0.25s ease';
    }

    // 3. Portfolio Grid Clicks
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // 4. Staggered load animation for cards
    const elementsToAnimate = document.querySelectorAll('.creative-section, .link-card, .support-card');
    elementsToAnimate.forEach((elem, index) => {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(15px)';
        elem.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        
        setTimeout(() => {
            elem.style.opacity = '1';
            elem.style.transform = 'translateY(0)';
        }, 100 + index * 60);
    });

    // 5. Click ripple effect
    const rippleTargets = document.querySelectorAll('.link-card, .support-card, .portfolio-card');
    rippleTargets.forEach(target => {
        target.addEventListener('click', function (e) {
            if (e.target.closest('#copy-support-id') || e.target.closest('#btn-new-hadith')) return;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => { ripple.remove(); }, 600);
        });
    });

    // 6. Desktop Parallax background glow movement
    const glowGold = document.querySelector('.glow-gold');
    const glowTurquoise = document.querySelector('.glow-turquoise');
    if (window.innerWidth > 768 && glowGold && glowTurquoise) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
            
            glowGold.style.transform = `translate(${moveX}px, ${moveY}px)`;
            glowTurquoise.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        });
    }
});
