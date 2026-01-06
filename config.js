// Configuration file for website assets and content
const CONFIG = {
    // Asset file names
    assets: {
        cv: 'Research_CV_LeoRodrigues_2025.pdf',
        profilePicture: 'profile_picture1.jpeg',
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
            googleScholar: 'https://scholar.google.com/citations?user=85Hx-ZkAAAAJ&hl=en' 
        }
    },
    
    // Site metadata
    meta: {
        name: 'Leo Raphael Rodrigues',
        title: "Master's Student in Computer Science | ML Researcher",
        university: 'Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
