// Content configuration for the website
// Edit this file to update the About Me section, Education, Projects, and Research content

const CONTENT = {
    // About Me Section
    aboutMe: {
        name: "Leo Rodrigues",
        title: "Master's Student in Computer Science",
        // Edit this paragraph to update the About Me section on the homepage
        description: "I'm a first-year Master's student at Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI) specializing in Computer Science. My research focuses on self-supervised learning, video understanding, and efficient AI systems that push the boundaries of intelligent visual perception."
    },

    // Education Section - Add or remove education entries here
    education: [
        {
            degree: "MSc. Computer Science",
            institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
            period: "2025 - Present",
            description: "Specialization in Computer Science. Research focus on interpretability in reasoning models, model biology, and efficient AI systems."
        },
        {
            degree: "B.Tech Computer Science",
            institution: "National Institute of Technology, Rourkela",
            period: "2019 - 2023",
            description: "Specialization in Computer Science. Research focus on Neural Machine Translation (NMT) for Indic Languages."
        }
        // Add more education entries here (don't forget the comma above if adding more):
        // {
        //     degree: "Bachelor's in Computer Science",
        //     institution: "University Name",
        //     period: "2019 - 2023",
        //     description: "Description of your undergraduate studies..."
        // }
    ],

    // Projects and Research - Add or remove project entries here
    projects: [
        {
            title: "Self-Supervised Visual Learning",
            description: "Research on self-supervised learning methods for visual representation learning. Developing novel approaches to learn robust visual features without labeled data.",
            categories: ["self-supervised", "computer-vision"],
            tags: ["PyTorch", "Self-Supervised Learning", "Computer Vision"],
            icon: "🔬",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Video Understanding Systems",
            description: "Advanced video analysis using deep learning for temporal understanding, action recognition, and event detection in video sequences.",
            categories: ["video", "computer-vision"],
            tags: ["Video Analysis", "Deep Learning", "Temporal Modeling"],
            icon: "🎥",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Efficient Computer Vision Models",
            description: "Research on developing efficient and lightweight computer vision architectures optimized for real-world deployment and edge devices.",
            categories: ["computer-vision"],
            tags: ["Model Efficiency", "Computer Vision", "Edge AI"],
            icon: "👁️",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Contrastive Learning Research",
            description: "Investigating contrastive learning approaches for representation learning, exploring novel loss functions and training strategies.",
            categories: ["self-supervised"],
            tags: ["Contrastive Learning", "Representation Learning", "PyTorch"],
            icon: "🧠",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Self-Supervised Video Representation",
            description: "Developing self-supervised methods for learning video representations without manual annotations, focusing on temporal coherence and motion patterns.",
            categories: ["video", "self-supervised"],
            tags: ["Video Learning", "Self-Supervised", "Temporal Reasoning"],
            icon: "🎬",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Visual Recognition Systems",
            description: "Advanced object detection and recognition systems using state-of-the-art deep learning architectures for various computer vision applications.",
            categories: ["computer-vision"],
            tags: ["Object Detection", "Recognition", "Deep Learning"],
            icon: "🔍",
            link: "https://github.com/LeoRodrigues05"
        }
    ],

    // Research Interests - Add or remove research interest areas here
    researchInterests: [
        {
            title: "Computer Vision",
            icon: "👁️",
            description: "Visual recognition, object detection, and understanding visual content from images and videos"
        },
        {
            title: "Self-Supervised Learning",
            icon: "🔬",
            description: "Learning robust representations from unlabeled data without manual annotations"
        },
        {
            title: "Video Understanding",
            icon: "🎥",
            description: "Temporal modeling, action recognition, and understanding dynamic visual content"
        },
        {
            title: "Efficient AI Systems",
            icon: "⚡",
            description: "Developing lightweight models for edge deployment and real-world applications"
        }
    ],

    // Skills and Technologies - Add or remove skills here
    skills: {
        "Programming Languages": ["Python", "C++", "CUDA", "Shell"],
        "AI/ML Frameworks": ["PyTorch", "TensorFlow", "OpenCV", "Scikit-learn"],
        "Research Areas": ["Computer Vision", "Self-Supervised Learning", "Video Understanding", "Deep Learning"],
        "Tools & Platforms": ["Git", "Docker", "Linux", "Jupyter"]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT;
}
