// Content configuration for About Me section
const ABOUT_CONTENT = {
    hero: {
        subtitle: "Master's Student in Machine Learning | Computer Vision Researcher",
        description: `I'm a first year Master's student at Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI) 
            specializing in Machine Learning and Computer Vision. My research focuses on self-supervised 
            learning, video understanding, and efficient AI systems that push the boundaries of 
            intelligent visual perception.`
    },
    
    // User can easily edit this section to add more personalized content
    biography: {
        short: "First year Master's student at MBZUAI focusing on ML and Computer Vision",
        detailed: "Add more detailed information about your background, research interests, and academic journey here. This content can be easily updated by editing the content.js file."
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ABOUT_CONTENT;
}
