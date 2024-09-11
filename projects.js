// Array of project objects with title, description, link, and image properties
const projects = [
    {
      title: "Neural Machine Translation",
      description: "Engineered a Transformer model for English-French translation using Canadian Hansards dataset.",
      link: "https://github.com/yourusername/project1",
      image: "path/to/project1-image.jpg"
    },
    {
      title: "Word Sense Disambiguation",
      description: "Implemented Lesk Algorithm with improvements using word2vec’s skip-gram model.",
      link: "https://github.com/yourusername/project2",
      image: "path/to/project2-image.jpg"
    },
    // Add more projects as needed
  ];
  
  // Variables to control the number of projects shown and batch size
  let projectsToShow = 2; // Number of projects to show initially
  const projectsBatchSize = 2; // Number of projects to load with each click
  
  // Function to generate the HTML content for a single project
  function generateProjectHTML(project) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
  
    const projectImg = document.createElement('img');
    projectImg.src = project.image;
    projectImg.alt = project.title;
    projectDiv.appendChild(projectImg);
  
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);
  
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);
  
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = "View Project";
    projectLink.target = "_blank";
    projectDiv.appendChild(projectLink);
  
    return projectDiv;
  }
  
  // Function to display projects
  function displayProjects(startIndex, endIndex) {
    const projectsSection = document.getElementById('recent-projects');
  
    // Loop through the projects array and append each project to the section
    projects.slice(startIndex, endIndex).forEach(project => {
      const projectHTML = generateProjectHTML(project);
      projectsSection.appendChild(projectHTML);
    });
  }
  
  // Function to load more projects when the button is clicked
  function loadMoreProjects() {
    const currentIndex = document.getElementById('recent-projects').children.length;
  
    // Check if there are more projects to load
    if (currentIndex < projects.length) {
      const newEndIndex = Math.min(currentIndex + projectsBatchSize, projects.length);
      displayProjects(currentIndex, newEndIndex);
  
      // Hide the "Load More" button if all projects are loaded
      if (newEndIndex >= projects.length) {
        document.getElementById('load-more').style.display = 'none';
      }
    }
  }
  
  // Initial load of projects
  document.addEventListener('DOMContentLoaded', function() {
    displayProjects(0, projectsToShow);
  
    // Attach click event to the "Load More" button
    document.getElementById('load-more').addEventListener('click', loadMoreProjects);
  });
  