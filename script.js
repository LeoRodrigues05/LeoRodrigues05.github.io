// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.getElementById('mobileMenuToggle');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const FILTER_ANIMATION_DELAY = 10; // Small delay to ensure CSS transitions work properly

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all') {
                card.classList.remove('hidden');
                setTimeout(() => {
                    card.style.display = 'block';
                }, FILTER_ANIMATION_DELAY);
            } else {
                const categories = card.getAttribute('data-category').split(' ');
                if (categories.includes(filterValue)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.display = 'block';
                    }, FILTER_ANIMATION_DELAY);
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe interest cards
document.querySelectorAll('.interest-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = navbar.offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentId = section.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add smooth reveal for sections on scroll
const revealSections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.05
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// Prevent default behavior for placeholder links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Initialize page with config values
function initializeConfigValues() {
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG is not defined. Make sure config.js is loaded before script.js');
        return;
    }

    // Update all elements with data-config-src attribute (for img src, object data, iframe src)
    document.querySelectorAll('[data-config-src]').forEach(element => {
        const configKey = element.getAttribute('data-config-src');
        const assetPath = CONFIG.assets[configKey];
        
        if (assetPath) {
            if (element.tagName === 'IMG') {
                element.src = assetPath;
            } else if (element.tagName === 'OBJECT') {
                element.setAttribute('data', assetPath);
            } else if (element.tagName === 'IFRAME') {
                element.src = assetPath;
            }
        } else {
            console.warn(`Config key "${configKey}" not found in CONFIG.assets`);
        }
    });

    // Update all elements with data-config-href attribute (for anchor hrefs)
    document.querySelectorAll('[data-config-href]').forEach(element => {
        const configKey = element.getAttribute('data-config-href');
        let value;

        // Check if it's in assets or social links
        if (CONFIG.assets[configKey]) {
            value = CONFIG.assets[configKey];
        } else if (CONFIG.contact.social[configKey]) {
            value = CONFIG.contact.social[configKey];
        }

        if (value) {
            element.href = value;
            
            // Show Google Scholar link if URL is provided
            if (configKey === 'googleScholar' && element.id === 'googleScholarLink') {
                element.classList.remove('hidden');
            }
        } else {
            // Hide Google Scholar link if no URL provided
            if (configKey === 'googleScholar' && element.id === 'googleScholarLink') {
                element.classList.add('hidden');
            }
            console.warn(`Config key "${configKey}" not found in CONFIG`);
        }
    });

    // Update content from content.js
    if (typeof CONTENT !== 'undefined') {
        initializeContent();
    }
}

// Simple HTML sanitizer to prevent XSS attacks
// Only allows safe tags: a, em, strong, b, i, u, br
function sanitizeHTML(html) {
    if (!html) return '';
    
    // Helper function to escape HTML entities
    function escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
    
    // Create a temporary div to parse HTML
    const temp = document.createElement('div');
    temp.textContent = html; // First escape everything
    
    // Then replace allowed tags back
    let sanitized = temp.innerHTML;
    
    // Allow <a> tags with href and target attributes
    sanitized = sanitized.replace(/&lt;a\s+href='([^']*?)'\s+target='_blank'&gt;(.*?)&lt;\/a&gt;/gi, 
        (match, href, text) => {
            // Validate URL - only allow http, https, and mailto
            if (href.match(/^(https?:\/\/|mailto:)/i)) {
                // Escape href and text to prevent XSS
                const safeHref = escapeHTML(href);
                const safeText = text; // Already escaped by temp.textContent above
                return `<a href='${safeHref}' target='_blank' rel='noopener noreferrer'>${safeText}</a>`;
            }
            return text; // Return escaped text if URL is invalid
        });
    
    // Allow basic formatting tags - content is already escaped
    sanitized = sanitized.replace(/&lt;(em|strong|b|i|u)&gt;(.*?)&lt;\/\1&gt;/gi, '<$1>$2</$1>');
    sanitized = sanitized.replace(/&lt;br\s*\/?&gt;/gi, '<br>');
    
    return sanitized;
}

// Initialize all content from content.js
function initializeContent() {
    if (typeof CONTENT === 'undefined') {
        console.error('CONTENT is not defined. Make sure content.js is loaded before script.js');
        return;
    }

    // Update About Me section
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && CONTENT.aboutMe.title) {
        heroSubtitle.textContent = CONTENT.aboutMe.title;
    }

    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) {
        // Use description_list if available, otherwise fall back to description
        let descriptionContent = '';
        if (CONTENT.aboutMe.description_list && Array.isArray(CONTENT.aboutMe.description_list)) {
            // Concatenate all sentences from description_list with space separation
            descriptionContent = CONTENT.aboutMe.description_list.join(' ');
        } else if (CONTENT.aboutMe.description) {
            descriptionContent = CONTENT.aboutMe.description;
        }
        
        // Use innerHTML to support HTML tags like links
        heroDescription.innerHTML = sanitizeHTML(descriptionContent);
    }

    // Update Education section
    initializeEducation();

    // Update Projects section
    initializeProjects();

    // Update Research Interests section
    initializeResearchInterests();

    // Update Skills section
    initializeSkills();
}

// Initialize Education timeline
function initializeEducation() {
    if (!CONTENT.education || CONTENT.education.length === 0) return;

    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    // Clear existing timeline items
    timeline.replaceChildren();

    // Add education entries from content.js
    CONTENT.education.forEach(edu => {
        if (!edu || !edu.degree || !edu.institution) return; // Skip invalid entries
        
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const degreeH4 = document.createElement('h4');
        degreeH4.textContent = edu.degree;
        
        const metaPara = document.createElement('p');
        metaPara.className = 'timeline-meta';
        metaPara.textContent = `${edu.institution} | ${edu.period || ''}`;
        
        const descPara = document.createElement('p');
        // Use innerHTML to support HTML tags like links
        descPara.innerHTML = sanitizeHTML(edu.description || '');
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        content.appendChild(degreeH4);
        content.appendChild(metaPara);
        content.appendChild(descPara);
        
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        
        timelineItem.appendChild(dot);
        timelineItem.appendChild(content);
        timeline.appendChild(timelineItem);
    });
}

// Initialize Projects grid
function initializeProjects() {
    if (!CONTENT.projects || CONTENT.projects.length === 0) return;

    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Clear existing projects
    projectsGrid.replaceChildren();

    // Add project cards from content.js
    CONTENT.projects.forEach(project => {
        if (!project || !project.title) return; // Skip invalid entries
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        const categories = project.categories || [];
        projectCard.setAttribute('data-category', categories.join(' '));
        
        // Create project image
        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';
        const placeholder = document.createElement('div');
        placeholder.className = 'project-placeholder';
        placeholder.textContent = project.icon || '📝';
        projectImage.appendChild(placeholder);
        
        // Create project content
        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        const desc = document.createElement('p');
        desc.className = 'project-description';
        // Use innerHTML to support HTML tags like links
        desc.innerHTML = sanitizeHTML(project.description || '');
        
        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'project-tags';
        const tags = project.tags || [];
        tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag';
            tagSpan.textContent = tag;
            tagsDiv.appendChild(tagSpan);
        });
        
        const linksDiv = document.createElement('div');
        linksDiv.className = 'project-links';
        const link = document.createElement('a');
        // Validate URL to prevent javascript: injection
        const safeLink = project.link && (project.link.startsWith('http://') || project.link.startsWith('https://') || project.link.startsWith('/')) 
            ? project.link 
            : '#';
        link.href = safeLink;
        link.className = 'project-link';
        link.textContent = 'View on GitHub →';
        linksDiv.appendChild(link);
        
        projectContent.appendChild(title);
        projectContent.appendChild(desc);
        projectContent.appendChild(tagsDiv);
        projectContent.appendChild(linksDiv);
        
        projectCard.appendChild(projectImage);
        projectCard.appendChild(projectContent);
        projectsGrid.appendChild(projectCard);

        // Apply fade-in animation
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateY(30px)';
        projectCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(projectCard);
    });
}

// Initialize Research Interests
function initializeResearchInterests() {
    if (!CONTENT.researchInterests || CONTENT.researchInterests.length === 0) return;

    const interestsGrid = document.querySelector('.interests-grid');
    if (!interestsGrid) return;

    // Clear existing interests
    interestsGrid.replaceChildren();

    // Add interest cards from content.js
    CONTENT.researchInterests.forEach(interest => {
        if (!interest || !interest.title) return; // Skip invalid entries
        
        const interestCard = document.createElement('div');
        interestCard.className = 'interest-card';
        
        const icon = document.createElement('div');
        icon.className = 'interest-icon';
        icon.textContent = interest.icon || '📚';
        
        const title = document.createElement('h4');
        title.textContent = interest.title;
        
        const desc = document.createElement('p');
        // Use innerHTML to support HTML tags like links
        desc.innerHTML = sanitizeHTML(interest.description || '');
        
        interestCard.appendChild(icon);
        interestCard.appendChild(title);
        interestCard.appendChild(desc);
        interestsGrid.appendChild(interestCard);

        // Apply fade-in animation
        interestCard.style.opacity = '0';
        interestCard.style.transform = 'translateY(30px)';
        interestCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(interestCard);
    });
}

// Initialize Skills section
function initializeSkills() {
    if (!CONTENT.skills) return;

    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    // Clear existing skills
    skillsGrid.replaceChildren();

    // Add skill categories from content.js
    Object.entries(CONTENT.skills).forEach(([category, skills]) => {
        if (!skills || !Array.isArray(skills)) return; // Skip invalid entries
        
        const skillCategory = document.createElement('div');
        skillCategory.className = 'skill-category';
        
        const title = document.createElement('h4');
        title.textContent = category;
        
        const skillTags = document.createElement('div');
        skillTags.className = 'skill-tags';
        
        skills.forEach(skill => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'skill-tag';
            tagSpan.textContent = skill;
            skillTags.appendChild(tagSpan);
        });
        
        skillCategory.appendChild(title);
        skillCategory.appendChild(skillTags);
        skillsGrid.appendChild(skillCategory);
    });
}

// Run initialization as soon as DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeConfigValues);
} else {
    // DOM is already ready
    initializeConfigValues();
}

console.log('Website loaded successfully! 🚀');
