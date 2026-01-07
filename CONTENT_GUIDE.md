# Content Management Guide

This guide explains how to update the content on your personal website without modifying the HTML files.

## Overview

All content for your website is now managed through the `content.js` file. This makes it easy to update your:
- About Me section
- Education history
- Research projects
- Research interests
- Skills and technologies

## How to Update Content

### 1. About Me Section

Edit the `aboutMe` object in `content.js`:

```javascript
aboutMe: {
    name: "Leo Rodrigues",
    title: "Master's Student in Computer Science",
    description: "Your about me paragraph goes here...",
    description_list: [
        "First sentence about yourself.",
        "Second sentence with additional details.",
        "Third sentence about your interests.",
        "Final call to action or closing sentence."
    ]
}
```

- **name**: Your full name displayed in the hero section
- **title**: Your current title or position
- **description**: (Optional) The main paragraph describing who you are - used as fallback if description_list is not provided
- **description_list**: (Recommended) An array of sentences that will be concatenated and displayed in the About Me section. This allows better organization of your biography into multiple sentences.

#### Adding Links and References

You can include HTML links in your `description_list`, `description`, or any description field:

```javascript
description_list: [
    "I am a student at <a href='https://university.edu' target='_blank'>University Name</a>.",
    "I work on <a href='https://example.com/research' target='_blank'>important research</a>."
]
```

**Important**: Always use single quotes `'` for HTML attributes within the JavaScript strings, and `target='_blank'` to open links in a new tab.

### 2. Education Section

Add or edit education entries in the `education` array:

```javascript
education: [
    {
        degree: "Master's in Machine Learning",
        institution: "Mohamed Bin Zayed University of Artificial Intelligence (MBZUAI)",
        period: "2023 - Present",
        description: "Details about your studies..."
    },
    // Add more education entries here
]
```

Each education entry includes:
- **degree**: The degree or program name
- **institution**: University or institution name
- **period**: Time period (e.g., "2023 - Present")
- **description**: Details about your studies and research focus. **Supports HTML links** - you can include `<a href='URL' target='_blank'>link text</a>` for references.

### 3. Projects and Research

Add or edit projects in the `projects` array:

```javascript
projects: [
    {
        title: "Project Title",
        description: "Project description...",
        categories: ["computer-vision", "self-supervised"],
        tags: ["PyTorch", "Deep Learning"],
        icon: "🔬",
        link: "https://github.com/yourusername/project"
    },
    // Add more projects here
]
```

Each project includes:
- **title**: Project name
- **description**: Brief description of the project. **Supports HTML links** - you can include `<a href='URL' target='_blank'>link text</a>` for references.
- **categories**: Array of categories (used for filtering)
  - Available: `"computer-vision"`, `"self-supervised"`, `"video"`
- **tags**: Array of technology/topic tags
- **icon**: Emoji icon to display
- **link**: GitHub or project URL

### 4. Research Interests

Add or edit research interests in the `researchInterests` array:

```javascript
researchInterests: [
    {
        title: "Computer Vision",
        icon: "👁️",
        description: "Description of this research area..."
    },
    // Add more interests here
]
```

Each research interest includes:
- **title**: Research area name
- **icon**: Emoji icon
- **description**: Brief description of the research area. **Supports HTML links** - you can include `<a href='URL' target='_blank'>link text</a>` for references.

**Example with link:**
```javascript
{
    title: "Mechanistic Interpretability",
    icon: "👁️",
    description: "Understanding neural networks. Learn more at <a href='https://example.com' target='_blank'>Research Lab</a>."
}
```

### 5. Skills and Technologies

Add or edit skills in the `skills` object:

```javascript
skills: {
    "Programming Languages": ["Python", "C++", "CUDA"],
    "AI/ML Frameworks": ["PyTorch", "TensorFlow"],
    // Add more skill categories here
}
```

Each category is a key-value pair where:
- **Key**: Category name (e.g., "Programming Languages")
- **Value**: Array of skills in that category

## Configuration File

The `config.js` file manages other website settings like:
- CV/Resume file paths
- Profile picture path
- Contact information
- Social media links

Edit this file to update these settings without touching the HTML.

## Testing Your Changes

1. Save your changes to `content.js`
2. Refresh your browser to see the updates
3. All changes will appear immediately without rebuilding

## Tips

- Keep descriptions concise and clear
- Use emojis for visual appeal in projects and interests
- Maintain consistent formatting for professional appearance
- Test your changes locally before pushing to GitHub
- The website is generated dynamically, so no HTML changes are needed!

## Need Help?

If you encounter any issues or need to add new sections, check:
1. Browser console for JavaScript errors (F12 → Console)
2. Ensure `content.js` is loaded before `script.js` in `index.html`
3. Verify JSON syntax is correct (proper quotes, commas, brackets)
