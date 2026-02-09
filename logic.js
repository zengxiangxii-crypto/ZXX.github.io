document.addEventListener('DOMContentLoaded', () => {
    // 1. 渲染个人信息
    const p = siteConfig.profile;
    document.getElementById('nav-logo').innerText = p.name;
    document.getElementById('hero-name').innerText = p.name;
    document.getElementById('hero-title').innerText = p.title;
    document.getElementById('hero-bio').innerText = p.bio;
    
    const emailLink = document.getElementById('contact-email');
    emailLink.innerText = p.email;
    emailLink.href = `mailto:${p.email}`;

    const socialContainer = document.getElementById('social-container');
    p.social.forEach(s => {
        const a = document.createElement('a');
        a.href = s.url;
        a.innerText = s.name;
        a.target = "_blank";
        socialContainer.appendChild(a);
    });

    // 2. 渲染作品集
    const worksContainer = document.getElementById('works-container');
    siteConfig.works.forEach((work, index) => {
        const div = document.createElement('div');
        div.className = 'work-item';
        div.innerHTML = `
            <div class="work-img-wrap">
                <img src="${work.image}" alt="${work.title}">
            </div>
            <h4>${work.title}</h4>
            <div class="work-cat">${work.category}</div>
        `;
        // 点击事件
        div.addEventListener('click', () => openModal(index));
        worksContainer.appendChild(div);
    });

    // 3. 渲染简历
    const resumeContainer = document.getElementById('resume-container');
    siteConfig.resume.forEach(item => {
        const div = document.createElement('div');
        div.className = 'resume-item';
        div.innerHTML = `
            <div class="resume-year">${item.year}</div>
            <div class="resume-detail">
                <h4>${item.role}</h4>
                <h5>${item.company}</h5>
                <p>${item.desc}</p>
            </div>
        `;
        resumeContainer.appendChild(div);
    });

    // 4. 菜单交互
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.menu-overlay');
    
    const toggleMenu = () => overlay.classList.toggle('active');
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.menu-list a').forEach(a => {
        a.addEventListener('click', toggleMenu);
    });

    // 5. 弹窗交互
    const modal = document.getElementById('work-modal');
    const closeIcon = document.querySelector('.close-modal');
    
    function openModal(index) {
        const data = siteConfig.works[index];
        document.getElementById('modal-img').src = data.image;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-cat').innerText = data.category;
        document.getElementById('modal-desc').innerText = data.description;
        modal.classList.add('open');
    }

    closeIcon.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });
});