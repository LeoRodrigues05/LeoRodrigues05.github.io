// Content configuration for the website
// Edit this file to update the About Me section, Education, Projects, and Research content

const CONTENT = {
    // About Me Section
    aboutMe: {
        name: "Leo Rodrigues",
        title: "Master's Student in Computer Science",
        // Edit this paragraph to update the About Me section on the homepage
        description: "I am a first-year Master's student at Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI) specializing in Computer Science and working with my supervisor Jian Kang.",
        description_list: [
                      "I am a first-year Master's student at <a href='https://mbzuai.ac.ae/' target='_blank'>Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)</a> specializing in Computer Science and working with my supervisor <a href='https://jiank2.github.io/' target='_blank'>Jian Kang</a>. <br>",
                      "I currently enjoy working on problems related to the Interpretability of Language Models (Like <a href='https://www.alignmentforum.org/posts/StENzDcD3kpfGJssR/a-pragmatic-vision-for-interpretability' target='_blank'>Pragmatic</a> and Applied Interpretability, <a href='https://www.alignmentforum.org/posts/MnkeepcGirnJn736j/how-can-interpretability-researchers-help-agi-go-well#Model_Biology' target='_blank'>Model Biology</a> etc). I also like to delve into topics like Machine Translation (in Low Resource Settings), x-AI and efficient AI. <br>", 
                      "In general I like working on problems that will help change the way we approach building AI systems such that they're more efficient, safe and accessible. ",
                      "If you think we can work together on anything (not limited to aforementioned topics), please do reach out!" 
                    ]  
    },
    // Note: You can add HTML links using <a href='URL' target='_blank'>text</a> syntax in any description

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
    ],

    // Projects and Research - Add or remove project entries here
    projects: [
        {
            title: "Hierarchical Reasoning Interpretability (Ongoing)",
            description: "Research on class of models that utilize hierarchical reasoning. Developing novel approaches to interpret model behaviour for different tasks.",
            categories: ["hierarchical-reasoning", "interpretability", "research"],
            tags: ["HRM", "Mechanistic Interpretability", "Research"],
            icon: "🔬",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "A Thresholding Method for Improving translation Quality for Indic MT task",
            description: "Presents an analysis of a novel method of corpus filtration for machine translation tasks on Indic languages",
            categories: ["machine-translation", "nlp", "research"],
            tags: ["Neural Machine Translation", "Corpus Filtration", "Research"],
            icon: "🎥",
            link: "https://acl-bg.org/proceedings/2025/LowResNLP%202025/pdf/2025.lowresnlp-1.3.pdf"
        },
        {
            title: "Effects of Back-Translation on Indic Language MT Tasks",
            description: "Analysis on the effect of different variations of back-translation for over 15 Indic languages.",
            categories: ["machine-translation", "nlp", "research"],
            tags: ["Neural Machine Translation", "Back Translation", "Research"],
            icon: "👁️",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Hull Market Prediction",
            description: "A leak-safe, fully modular machine-learning pipeline for the Hull Tactical Market Prediction Kaggle competition. Built with Polars and Poetry for high-speed data processing and designed for extensibility, reproducibility, and zero data leakage.",
            categories: ["market-prediction", "ml-pipeline", "pytorch"],
            tags: ["Market Prediction", "Machine Learning", "PyTorch"],
            icon: "🧠",
            link: "https://github.com/OrionXV/HullPrediction"
        },
        {
            title: "Pump It Up",
            description: "Predicts the operating condition of waterpoints (wells) using machine learning classification models. Includes exploratory data analysis, feature engineering, handling imbalanced classes, and hyperparameter tuning across multiple algorithms.",
            categories: ["ml"],
            tags: ["Machine Learning"],
            icon: "🎬",
            link: "https://github.com/Magus4450/pump-it-up"
        },
        {
            title: "Graphical Password Authenticator",
            description: "Developed a graphical password interface with multiple methods of setting a graphical password. Used SHA-256 encryption to ensure that passwords are safely stored in the database.",
            categories: [""],
            tags: ["Graphical Password", "Security", "Software Engineering"],
            icon: "🔍",
            link: "https://github.com/LeoRodrigues05"
        }
    ],

    // Research Interests - Add or remove research interest areas here
    researchInterests: [
        {
            title: "Mechanistic Interpretability",
            icon: "👁️",
            description: "Reverse engineering model algorithms to infer model behaviour during various situations.",
            link: "https://www.alignmentforum.org/tag/mechanistic-interpretability"
        },
        {
            title: "Model Biology",
            icon: "🔬",
            description: "Understanding the qualitative properties driving model behaviour under different circumstances",
            link: "https://www.alignmentforum.org/posts/MnkeepcGirnJn736j/how-can-interpretability-researchers-help-agi-go-well#Model_Biology"
        },
        {
            title: "Machine Translation",
            icon: "📜",
            description: "Low-resource language translation techniques and tasks",
            link: "https://github.com/LeoRodrigues05"
        },
        {
            title: "Efficient AI Systems",
            icon: "⚡",
            description: "Developing lightweight models for edge deployment and real-world applications",
            link: "https://github.com/LeoRodrigues05"
        }
    ],

    // Skills and Technologies - Add or remove skills here
    skills: {
        "Programming Languages": ["Python", "C#", "C++", "TypeScript", "Bash", "SQL", "MongoDB", "R", "Java"],
        "Frameworks": [".NET Microservices", "Angular Plugin", "MongoDB", "PyTorch", "TensorFlow", "Fairseq"],
        "Research Areas": ["Mechanistic Interpretability", "Model Biology", "Efficient AI", "Machine Translation", "Graph Neural Networks", "Deep Learning"],
        "Tools & Platforms": ["Git", "Docker", "Linux (MintOS, Ubuntu)", "Jupyter", "AzureML", "Visual Studio 2022", "Visual Studio Code"]
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT;
}
