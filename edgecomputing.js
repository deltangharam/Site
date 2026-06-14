'use strict';

/* ==============================================
   دلتنگ حرم | Edge Computing Version
   ============================================== */

// -------------- Embedded Assets --------------

// 1. Main HTML (index.html)
const Index = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دلتنگ حرم | صفحه رسمی و محتوای مذهبی</title>
    <meta name="description" content="صفحه رسمی دلتنگ حرم. دسترسی به کانال‌ها، آثار ویدئویی، صلوات‌شمار آنلاین، نوای حرم و شبکه‌های اجتماعی ایتا، روبیکا، بله و آپارات.">
    <meta name="author" content="دلتنگ حرم">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="دلتنگ حرم | صفحه رسمی و شبکه‌های اجتماعی">
    <meta property="og:description" content="صفحه رسمی دلتنگ حرم. دسترسی سریع به کانال‌ها، صلوات‌شمار آنلاین و گالری آثار.">
    <meta property="og:image" content="avatar.png">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Background Elements -->
    <div class="stars-bg"></div>
    <div class="ambient-glow glow-gold"></div>
    <div class="ambient-glow glow-turquoise"></div>

    <div class="container">
        <!-- Header Section -->
        <header class="profile-header">
            <div class="avatar-container" id="avatar-container">
                <img src="https://mhy.s3.ir-thr-at1.arvanstorage.ir/deltang-haram.jpg?versionId=" alt="لوگوی دلتنگ حرم" class="avatar-img" id="profile-avatar">
                <div class="avatar-glow"></div>
            </div>
            <h1 class="profile-name" id="profile-title">دلتنگ حرم</h1>
        </header>

        <!-- Social Networks Links Section -->
        <section class="creative-section" id="section-links">
            <h2 class="section-title">
                <span class="title-icon">🔗</span>
                صفحات رسمی ما
            </h2>
            <div class="links-grid">
                <!-- Eitaa -->
                <a href="https://eitaa.com/deltang_haram_1_2_8" target="_blank" rel="noopener noreferrer" class="link-card card-eitaa" id="link-eitaa">
                    <div class="card-icon">
                        <img class="svg-logo" src="https://dl.grapik.ir/shop/wp-content/uploads/2023/01/Eitaa-vector-logo.png"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title">کانال رسمی ایتا</span>
                        <span class="card-subtitle">deltang_haram_1_2_8</span>
                    </div>
                    <div class="card-action"><span class="action-btn">ورود</span></div>
                </a>

                <!-- Rubika -->
                <a href="http://rubika.ir/deltang_haram_1_2_8" target="_blank" rel="noopener noreferrer" class="link-card card-rubika" id="link-rubika">
                    <div class="card-icon">
                        <img class="svg-logo" src="https://cdn.nody.ir/files/2024/06/04/nody-%D8%A2%D8%B1%D9%85-%D9%84%D9%88%DA%AF%D8%B1%D9%88%D8%A8%DB%8C%DA%A9%D8%A7--1717487837.png"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title">کانال رسمی روبیکا</span>
                        <span class="card-subtitle">deltang_haram_1_2_8</span>
                    </div>
                    <div class="card-action"><span class="action-btn">ورود</span></div>
                </a>

                <!-- Rubino -->
                <a href="https://rubika.ir/page/deltang_haram_1_2_8" target="_blank" rel="noopener noreferrer" class="link-card card-rubino" id="link-rubino">
                    <div class="card-icon">
                        <img class="svg-logo" src="https://cdn.nody.ir/files/2024/06/04/nody-%D8%A2%D8%B1%D9%85-%D9%84%D9%88%DA%AF%D8%B1%D9%88%D8%A8%DB%8C%DA%A9%D8%A7--1717487837.png"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title">صفحه رسمی روبینو</span>
                        <span class="card-subtitle">deltang_haram_1_2_8</span>
                    </div>
                    <div class="card-action"><span class="action-btn">ورود</span></div>
                </a>
                <!-- Aparat -->
                <a href="https://rubika.ir/page/deltang_haram_1_2_8" target="_blank" rel="noopener noreferrer" class="link-card card-rubino" id="link-rubino">
                    <div class="card-icon">
                            <img class="svg-logo" src="https://cdn.nody.ir/files/2021/08/09/nody-%D9%84%D9%88%DA%AF%D9%88-%D8%A2%D9%BE%D8%A7%D8%B1%D8%A7%D8%AA-1628455708.png"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title">صفحه رسمی آپارات</span>
                        <span class="card-subtitle">deltang_haram_1_2_8</span>
                    </div>
                    <div class="card-action"><span class="action-btn">ورود</span></div>
                </a>
                <!-- Eitaa Support -->
                <a href="https://eitaa.ir/deltang_haram_admin" target="_blank" rel="noopener noreferrer" class="link-card card-rubino" id="link-rubino">
                    <div class="card-icon">
                            <svg viewBox="0 0 24 24" class="svg-logo-support" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                    </div> 
                    <div class="card-content">
                        <span class="card-title">پشتیبانی ایتا</span>
                        <span class="card-subtitle">@deltang_haram_admin</span>
                    </div>
                    <div class="card-action"><span class="action-btn">ورود</span></div>
                </a>

                <!-- Bale (disabled) -->
                <!-- <a href="https://ble.ir/deltang_haram_1_2_8" target="_blank" rel="noopener noreferrer" class="link-card card-bale" id="link-bale"> ... </a> -->

                <!-- Aparat (disabled) -->
                <!-- <a href="https://www.aparat.com/shorts/user/deltang_haram_1_2_8/shorts" target="_blank" rel="noopener noreferrer" class="link-card card-aparat" id="link-aparat"> ... </a> -->

             
            </div>
        </section>

        <!-- Hadith / Spiritual Quote of the Day -->
        <section class="creative-section hadith-section" id="section-hadith">
            <h2 class="section-title">
                <span class="title-icon">✨</span>
                حدیث و ذکر روز
            </h2>
            <div class="hadith-card">
                <p class="hadith-text" id="hadith-content">«إِنَّ الْحُسَیْنَ مِصْبَاحُ الْهُدَى وَ سَفِینَةُ النَّجَاةِ» (همانا حسین چراغ هدایت و کشتی نجات است)</p>
                <span class="hadith-source" id="hadith-ref">پیامبر اکرم (ص)</span>
                <button class="hadith-refresh-btn" id="btn-new-hadith">
                    دریافت حدیث جدید
                </button>
            </div>
        </section>

        <!-- Biography / Mission Card -->
        <section class="creative-section bio-section-card" id="section-about">
            <h2 class="section-title">
                <span class="title-icon">📜</span>
                درباره دلتنگ حرم
            </h2>
            <div class="bio-card">
                <p class="bio-text">
گنجینه محتوای مذهبی برای دل‌های مشتاق؛ \n 
اینجا منبع اصلی ویدیو های  استوری‌خور، پست‌های تأثیرگذار مذهبی باکیفیت است.
                </p>
            </div>
        </section>

        <!-- Footer Section -->
        <footer class="profile-footer">
            <p class="footer-text">صفحات رسمی رسانه دلتنگ حرم</p>
            <p class="footer-subtext">اللهم عجل الولیک الفرج</p>
        </footer>
    </div>

    <!-- JavaScript -->
    <script src="app.js"></script>
</body>
</html>`;

// 2. CSS (style.css)
const Styles = `/* Base Reset & Variables */
:root {
    --bg-color: #0b0c10;
    --card-bg: rgba(22, 27, 41, 0.55);
    --card-border: rgba(255, 255, 255, 0.08);
    --card-border-hover: rgba(212, 175, 55, 0.35);
    
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --text-muted: #64748b;
    
    --gold: #d4af37;
    --gold-rgb: 212, 175, 55;
    --gold-glow: rgba(212, 175, 55, 0.2);
    --turquoise: #14b8a6;
    --turquoise-rgb: 20, 184, 166;
    --turquoise-glow: rgba(20, 184, 166, 0.2);
    
    --eitaa-color: #e87315;
    --rubika-color: #d42c67;
    --rubino-color: #f57b20;
    --bale-color: #14b8a6;
    --aparat-color: #df0863;
    
    --font-main: 'Vazirmatn', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-main);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 1.5rem;
    overflow-x: hidden;
    position: relative;
    line-height: 1.65;
}

/* Background Ambient Glows & Stars */
.stars-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        radial-gradient(circle at 75% 35%, rgba(255, 255, 255, 0.02) 1.5px, transparent 1.5px),
        radial-gradient(circle at 45% 75%, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
        radial-gradient(circle at 85% 10%, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 100% 100%;
    z-index: -2;
    pointer-events: none;
}

.ambient-glow {
    position: fixed;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(130px);
    z-index: -1;
    pointer-events: none;
    opacity: 0.4;
    animation: slow-drift 30s infinite alternate ease-in-out;
}

.glow-gold {
    background: radial-gradient(circle, rgba(var(--gold-rgb), 0.1) 0%, transparent 70%);
    top: -150px;
    right: -150px;
}

.glow-turquoise {
    background: radial-gradient(circle, rgba(var(--turquoise-rgb), 0.07) 0%, transparent 70%);
    bottom: -150px;
    left: -150px;
    animation-delay: -7s;
}

@keyframes slow-drift {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(60px, 40px) scale(1.1); }
}

/* Container */
.container {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

/* Header Styling */
.profile-header {
    text-align: center;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar-container {
    position: relative;
    width: 115px;
    height: 115px;
    margin-bottom: 1.25rem;
}

.avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3.5px solid rgba(212, 175, 55, 0.75);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 2;
}

.avatar-glow {
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), var(--turquoise));
    opacity: 0.35;
    filter: blur(10px);
    z-index: 1;
    animation: pulse-glow 4s infinite alternate ease-in-out;
}

@keyframes pulse-glow {
    0% { transform: scale(0.95); opacity: 0.2; }
    100% { transform: scale(1.05); opacity: 0.45; }
}

.profile-name {
    font-size: 1.7rem;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #ffffff 60%, var(--gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.profile-bio {
    font-size: 0.95rem;
    color: var(--text-secondary);
    max-width: 340px;
}

.bio-subtitle {
    display: block;
    font-size: 0.8rem;
    color: var(--gold);
    margin-top: 0.4rem;
    font-weight: 400;
    opacity: 0.9;
}

/* Sections Styling */
.creative-section {
    width: 100%;
    margin-bottom: 1.8rem;
}

.section-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--gold);
    margin-bottom: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0.25rem;
    letter-spacing: 0.2px;
    opacity: 0.95;
    text-shadow: 0 2px 10px rgba(212, 175, 55, 0.15);
}

.title-icon {
    font-size: 1.1rem;
}

/* Glassmorphism Card Base */
.audio-player-card,
.link-card,
.support-card,
.salawat-card,
.hadith-card,
.portfolio-card,
.bio-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    backdrop-filter: blur(12px) saturate(180%);
    -webkit-backdrop-filter: blur(12px) saturate(180%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
}

/* Audio Player */
.audio-player-card {
    display: flex;
    flex-direction: column;
    padding: 1.1rem 1.4rem;
    gap: 0.8rem;
    border-color: rgba(20, 184, 166, 0.15);
}

.player-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.track-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
}

.track-artist {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.player-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.player-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: none;
    background: var(--turquoise);
    color: #0b0c10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: var(--transition-smooth);
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
}

.player-btn:hover {
    transform: scale(1.08);
    background: #0ea5e9;
    box-shadow: 0 4px 15px rgba(14, 165, 233, 0.4);
}

.audio-progress-container {
    flex-grow: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.audio-progress {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--turquoise), #0ea5e9);
    border-radius: 3px;
    transition: width 0.1s linear;
}

/* Links Grid Layout */
.links-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Social Cards */
.link-card {
    display: flex;
    align-items: center;
    padding: 0.95rem 1.25rem;
    text-decoration: none;
    color: var(--text-primary);
}

.link-card:hover {
    transform: translateY(-3px);
    border-color: var(--card-border-hover);
    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.15);
}

.card-icon {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-left: 1.1rem;
}

.svg-logo {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25));
    transition: var(--transition-smooth);
}

.link-card:hover .svg-logo {
    transform: scale(1.08) rotate(3deg);
}

.card-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-start;
}

.card-title {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 0.15rem;
}

.card-subtitle {
    font-size: 0.78rem;
    color: var(--text-muted);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    letter-spacing: 0.5px;
    direction: ltr;
}

.card-action {
    display: flex;
    align-items: center;
    justify-content: center;
}

.action-btn {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.35rem 0.85rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    color: var(--text-secondary);
    transition: var(--transition-smooth);
}

/* Card Glows */
.card-eitaa:hover { border-color: rgba(232, 115, 21, 0.4); box-shadow: 0 8px 24px rgba(232, 115, 21, 0.15); }
.card-eitaa:hover .action-btn { background: rgba(232, 115, 21, 0.15); color: #ffa552; border-color: rgba(232, 115, 21, 0.3); }

.card-rubika:hover { border-color: rgba(212, 44, 103, 0.4); box-shadow: 0 8px 24px rgba(212, 44, 103, 0.15); }
.card-rubika:hover .action-btn { background: rgba(212, 44, 103, 0.15); color: #ff78a4; border-color: rgba(212, 44, 103, 0.3); }

.card-rubino:hover { border-color: rgba(245, 123, 32, 0.4); box-shadow: 0 8px 24px rgba(245, 123, 32, 0.15); }
.card-rubino:hover .action-btn { background: rgba(245, 123, 32, 0.15); color: #ffaa6b; border-color: rgba(245, 123, 32, 0.3); }

.card-bale:hover { border-color: rgba(20, 184, 166, 0.4); box-shadow: 0 8px 24px rgba(20, 184, 166, 0.15); }
.card-bale:hover .action-btn { background: rgba(20, 184, 166, 0.15); color: #5eead4; border-color: rgba(20, 184, 166, 0.3); }

.card-aparat:hover { border-color: rgba(223, 8, 99, 0.4); box-shadow: 0 8px 24px rgba(223, 8, 99, 0.15); }
.card-aparat:hover .action-btn { background: rgba(223, 8, 99, 0.15); color: #ff60a0; border-color: rgba(223, 8, 99, 0.3); }

/* Support Card */
.support-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.95rem 1.25rem;
}

.support-main-clickable {
    display: flex;
    align-items: center;
    flex-grow: 1;
    cursor: pointer;
}

.svg-logo-support {
    width: 26px;
    height: 26px;
    color: var(--gold);
    transition: var(--transition-smooth);
}

.support-main-clickable:hover .svg-logo-support {
    transform: scale(1.1) rotate(-5deg);
    color: #ffe58f;
}

.support-card:hover {
    border-color: var(--gold);
    box-shadow: 0 8px 24px rgba(212, 175, 55, 0.18);
    transform: translateY(-2px);
}

.support-actions {
    display: flex;
    align-items: center;
    margin-right: auto;
    z-index: 5;
}

.copy-btn {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.4rem 0.75rem;
    background: rgba(212, 175, 55, 0.1);
    border: 1px solid rgba(212, 175, 55, 0.3);
    border-radius: 12px;
    color: var(--gold);
    font-family: var(--font-main);
    font-size: 0.72rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.copy-btn:hover {
    background: rgba(212, 175, 55, 0.2);
    border-color: var(--gold);
    color: #fff6da;
}

/* Toast Tooltip */
.toast-tooltip {
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%) translateY(10px);
    background: #151c2c;
    border: 1px solid rgba(212, 175, 55, 0.4);
    color: var(--gold);
    padding: 0.3rem 0.9rem;
    border-radius: 8px;
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 10;
}

.toast-tooltip.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}

/* Salawat Counter */
.salawat-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1.2rem;
    background: radial-gradient(circle at top right, rgba(var(--gold-rgb), 0.05), transparent), var(--card-bg);
}

.salawat-display {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.salawat-count {
    font-size: 2.8rem;
    font-weight: 900;
    color: var(--gold);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    letter-spacing: -1px;
    line-height: 1;
    margin-bottom: 0.2rem;
    text-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    transition: transform 0.1s ease;
}

.salawat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.salawat-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
}

.salawat-btn {
    flex-grow: 1;
    position: relative;
    padding: 0.8rem;
    background: linear-gradient(135deg, var(--gold) 0%, #b89326 100%);
    border: none;
    border-radius: 14px;
    color: #0b0c10;
    font-family: var(--font-main);
    font-weight: 800;
    font-size: 0.95rem;
    cursor: pointer;
    transition: var(--transition-smooth);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
    overflow: hidden;
}

.salawat-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
    background: linear-gradient(135deg, #e3bd42 0%, #cfa62e 100%);
}

.salawat-btn:active {
    transform: translateY(1px);
}

.salawat-reset-btn {
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    color: var(--text-secondary);
    font-family: var(--font-main);
    font-size: 0.85rem;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.salawat-reset-btn:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.2);
    color: #f87171;
}

/* Hadith Section */
.hadith-card {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    background: radial-gradient(circle at bottom left, rgba(var(--turquoise-rgb), 0.03), transparent), var(--card-bg);
}

.hadith-text {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.7;
    color: #e2e8f0;
}

.hadith-source {
    font-size: 0.8rem;
    color: var(--gold);
    font-weight: 400;
    opacity: 0.85;
}

.hadith-refresh-btn {
    padding: 0.45rem 1rem;
    background: rgba(20, 184, 166, 0.08);
    border: 1px solid rgba(20, 184, 166, 0.2);
    border-radius: 12px;
    color: var(--turquoise);
    font-family: var(--font-main);
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.hadith-refresh-btn:hover {
    background: rgba(20, 184, 166, 0.15);
    border-color: var(--turquoise);
    color: #5eead4;
}

/* Portfolio Section */
.portfolio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.portfolio-card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.portfolio-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.portfolio-thumbnail {
    position: relative;
    aspect-ratio: 16/10;
    width: 100%;
    overflow: hidden;
    background: #11131c;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mock-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.gradient-red {
    background: linear-gradient(135deg, #581c1c, #991b1b);
}

.gradient-teal {
    background: linear-gradient(135deg, #134e4a, #0f766e);
}

.shrine-dome-silhouette {
    font-size: 2.2rem;
    filter: drop-shadow(0 4px 10px rgba(0,0,0,0.3));
}

.play-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(11, 12, 16, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--transition-smooth);
}

.portfolio-card:hover .play-overlay {
    opacity: 1;
}

.play-icon {
    font-size: 1.4rem;
    color: var(--gold);
    filter: drop-shadow(0 0 10px rgba(var(--gold-rgb), 0.5));
}

.portfolio-tag {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(11, 12, 16, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-secondary);
    font-size: 0.65rem;
    padding: 0.15rem 0.5rem;
    border-radius: 6px;
}

.portfolio-info {
    padding: 0.85rem;
    text-align: right;
}

.portfolio-card-title {
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.portfolio-card-desc {
    font-size: 0.72rem;
    color: var(--text-muted);
    line-height: 1.4;
}

/* About / Biography */
.bio-card {
    padding: 1.3rem 1.4rem;
    text-align: justify;
}

.bio-text {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.software-tools {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tool-tag {
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--gold);
    padding: 0.25rem 0.6rem;
    background: rgba(212, 175, 55, 0.08);
    border: 1px solid rgba(212, 175, 55, 0.15);
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

/* Footer Section */
.profile-footer {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.footer-text {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.footer-subtext {
    font-size: 0.75rem;
    color: var(--gold);
    margin-top: 0.3rem;
    opacity: 0.7;
    font-weight: 400;
}

/* Card Click Ripple Effect */
.ripple-effect {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: translate(-50%, -50%) scale(5);
        opacity: 0;
    }
}

/* Pulsing wave for increment button */
.btn-ripple-wave {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    pointer-events: none;
}

.salawat-btn:active .btn-ripple-wave {
    animation: wave-ripple 0.5s ease-out;
}

@keyframes wave-ripple {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
}

/* Media Queries for Responsiveness */
@media (max-width: 480px) {
    body {
        padding: 2rem 1rem;
    }
    .profile-header {
        margin-bottom: 1.5rem;
    }
    .avatar-container {
        width: 100px;
        height: 100px;
    }
    .profile-name {
        font-size: 1.5rem;
    }
    .profile-bio {
        font-size: 0.88rem;
    }
    .creative-section {
        margin-bottom: 1.5rem;
    }
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    .audio-player-card {
        padding: 1rem 1.1rem;
    }
    .link-card {
        padding: 0.85rem 1.1rem;
    }
    .card-icon {
        width: 38px;
        height: 38px;
        margin-left: 0.95rem;
    }
    .card-title {
        font-size: 0.95rem;
    }
    .action-btn {
        padding: 0.3rem 0.75rem;
        font-size: 0.72rem;
    }
}`;

// 3. JavaScript (app.js)
const AppJs = `document.addEventListener('DOMContentLoaded', () => {
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
            window.open(\`https://eitaa.com/\${supportId}\`, '_blank', 'noopener,noreferrer');
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

                hadithText.style.opacity = '1';
                hadithRef.style.opacity = '1';
            }, 250);
        });

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

            ripple.style.left = \`\${x}px\`;
            ripple.style.top = \`\${y}px\`;

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
            
            glowGold.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
            glowTurquoise.style.transform = \`translate(\${-moveX}px, \${-moveY}px)\`;
        });
    }
});`;

// 4. Avatar image (replace with your actual avatar.png base64)
// This is a 1x1 transparent PNG placeholder.
// Copy your real avatar.png content, encode it as Base64, and paste here.
const AvatarBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

// -------------- Request Handler --------------
async function handleRequest(request) {
    const url = new URL(request.url);

    switch (url.pathname) {
        case "/":
            return new Response(Index, {
                headers: { "Content-Type": "text/html; charset=utf-8" }
            });
        case "/style.css":
            return new Response(Styles, {
                headers: { "Content-Type": "text/css; charset=utf-8" }
            });
        case "/app.js":
            return new Response(AppJs, {
                headers: { "Content-Type": "application/javascript; charset=utf-8" }
            });
        case "/avatar.png": {
            // Decode base64 to binary
            const binary = atob(AvatarBase64);
            const bytes = new Uint8Array(binary.length);
            for (let i = 0; i < binary.length; i++) {
                bytes[i] = binary.charCodeAt(i);
            }
            return new Response(bytes, {
                headers: { "Content-Type": "image/png" }
            });
        }
        default:
            return new Response("Not Found", {
                status: 404,
                headers: { "Content-Type": "text/plain; charset=utf-8" }
            });
    }
}

// -------------- Fetch Event Listener --------------
addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});