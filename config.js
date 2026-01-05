// Configuration file for website assets and content
const CONFIG = {
    // Asset file names
    assets: {
        cv: 'Resume_LeoRodrigues_2025.pdf',
        profilePicture: 'profile.jpg',
        cvHtml: 'Resume_LeoRodrigues_2025.html' // Keep for backwards compatibility
    },
    
    // Contact information
    contact: {
        email: {
            primary: 'Leo.Rodrigues@mbzuai.com',
            secondary: 'leoraphaelro@hotmail.com'
        },
        social: {
            linkedin: 'https://www.linkedin.com/in/leo-rodrigues-3b9b361b8/',
            github: 'https://github.com/LeoRodrigues05',
            twitter: 'https://x.com/leo_raphael_ro',
            googleScholar: '' // To be filled by user
        }
    },
    
    // Site metadata
    meta: {
        name: 'Leo Rodrigues',
        title: 'Master\'s Student in Machine Learning | Computer Vision Researcher',
        university: 'Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
