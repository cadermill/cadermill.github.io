const projects = [
  {
    title: "Unity URP Custom Cel Shader",
    category: "Technical Art",
    skills: ["Unity", "HLSL", "ShaderLab", "C#"],
    images: null,
    videos: ["/ProjectsMedia/CelShader/CelShowcase.mp4", "/ProjectsMedia/CelShader/TechnicalShowcase.mp4"],
    description: "A custom cel shader written in HLSL in Unity's ShaderLab for the Universal Render Pipeline.",
    link: "https://github.com/cadermill/Shaders/tree/main/Assets/Shaders/Cel",
    coverImg: "/ProjectsMedia/CelShader/CelShaderCoverImg.PNG",
    coverGif: null
  },
  {
    title: "Wodger the Warlock",
    category: "Digital Design",
    skills: ["Maya", "Substance Painter"],
    images: ["/ProjectsMedia/Wodger/front.jpg", "/ProjectsMedia/Wodger/side.jpg", "/ProjectsMedia/Wodger/persp.jpg", "/ProjectsMedia/Wodger/star.jpg", "/ProjectsMedia/Wodger/twirl.jpg", "/ProjectsMedia/Wodger/urded.jpg", "/ProjectsMedia/Wodger/selfie.jpg", "/ProjectsMedia/Wodger/shy.jpg", "/ProjectsMedia/Wodger/hat.jpg", "/ProjectsMedia/Wodger/wand.jpg"],
    videos: null,
    description: "Meet Wodger the Warlock! A fantasy character I modeled and rigged in Maya and textured in Substance Painter.",
    coverImg: "/ProjectsMedia/Wodger/star.jpg",
    coverGif: null
  },
  {
    title: "Apartment",
    category: "Digital Design",
    skills: ["Maya"],
    images: null,
    videos: ["/ProjectsMedia/Apartment/Apartment.mp4"],
    description: "A short animation of a stylized apartment modeling, textured, and animated in Maya",
    coverImg: "/ProjectsMedia/Apartment/ApartmentCoverImg.png",
    coverGif: null
  },
  {
    title: "Scranton Times Broadsheet",
    category: "Digital Design",
    skills: ["Adobe InDesign"],
    images: ["/ProjectsMedia/Broadsheet/Scranton-Times-Broadsheet.jpg", "/ProjectsMedia/Broadsheet/Scranton-Times-Digital-Layouts.jpg"],
    videos: null,
    description: "A broadsheet and mobile layout of a fictional newspaper: \"The Scranton Times\" inspired by \"The Office\" created in Adobe InDesign.",
    coverImg: "/ProjectsMedia/Broadsheet/Scranton-Times-Broadsheet.jpg",
    coverGif: null
  },
  {
    title: "Mushroom Forest",
    category: "Digital Design",
    skills: ["Maya"],
    images: null,
    videos: ["/ProjectsMedia/MagicMushroom/MagicMush.mp4"],
    description: "A short animation of a stylized magical mushroom forest, modeled, textured, and animated in Maya.",
    coverImg: "/ProjectsMedia/MagicMushroom/MagicMushroomCoverImg.png",
    coverGif: null
  },
  {
    title: "Office Space",
    category: "Digital Design",
    skills: ["Maya"],
    images: ["/ProjectsMedia/OfficeSpace/OfficeSpace.jpg"],
    videos: null,
    description: "A 3D model of liminal office space, modeled and textured in Maya.",
    coverImg: "/ProjectsMedia/OfficeSpace/OfficeSpace.jpg",
    coverGif: null
  },
  {
    title: "Art 463: Information Graphics",
    category: "Digital Design",
    skills: ["Adobe Illustrator", "R"],
    images: ["/ProjectsMedia/InfoGraphics/Top Netflix Movies.png", "/ProjectsMedia/InfoGraphics/How To Tie Shoe Laces.png", "/ProjectsMedia/InfoGraphics/Coca-Cola Logo History.webp", "/ProjectsMedia/InfoGraphics/Fallout Family Tree.webp", "/ProjectsMedia/InfoGraphics/Gordo Slime Distribution Map.webp"],
    videos: null,
    description: "A collection of information graphics created for an art class. Tools used include Adobe Illustrator and RStudio.",
    coverImg: "/ProjectsMedia/InfoGraphics/Top Netflix Movies.png",
    coverGif: null
  },
  {
    title: "Unity URP Digital Impressionism Shader",
    category: "Technical Art",
    skills: ["Unity", "HLSL", "ShaderLab"],
    images: null,
    videos: ["/ProjectsMedia/DigitalImpressionism/DigitalImpressionismTechnicalShowcase.mp4"],
    description: "The following showcases two shaders I have written in an effort to create a sort of “digital impressionism.” While different from my original goal, I believe to have created an aesthetically pleasing voronoi-based procedural shader suitable for various stylized applications.",
    coverImg: "/ProjectsMedia/DigitalImpressionism/DigitalImpressionismCoverImg.PNG",
    coverGif: null,
    link: "https://github.com/cadermill/Shaders/tree/main/Assets/Shaders/DigitalImpressionism"
  },
  {
    title: "Portfolio Website",
    category: "Software Development",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    images: ["/ProjectsMedia/PortfolioWebsite/PortfolioWebsiteMobile1.webp", "/ProjectsMedia/PortfolioWebsite/PortfolioWebsiteMobile2.webp"],
    videos: ["/ProjectsMedia/PortfolioWebsite/PortfolioWebsite.mp4"],
    description: "This portfolio website (that's right! The one you are on right now!) was originally built for a class project in React and Tailwind CSS. It has since, and will continue to be, updated and improved upon as I add more projects and features.",
    coverImg: "/ProjectsMedia/PortfolioWebsite/PortfolioWebsiteCoverImg.webp",
    coverGif: null,
    link: "https://github.com/cadermill/cadermill.github.io"
  },
  {
    title: "COMPAS Recidivism Bias Visualization",
    category: "Software Development",
    skills: ["R", "Shiny", "ggplot2"],
    description: "Built an interactive R Shiny application using a linear regression model to explore racial disparities in COMPAS recidivism risk scores. Allows users to adjust individual attributes and compare predicted scores across racial groups while holding other factors constant.",
    link: "https://cadermill.shinyapps.io/compas_bias_model_visualization/",
    coverImg: "/ProjectsMedia/COMPAS/graph.PNG",
    images: ["/ProjectsMedia/COMPAS/app.PNG"]
  }
];

export default projects;