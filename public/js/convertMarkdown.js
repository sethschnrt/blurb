// Configure marked options
marked.setOptions({
    sanitizer: true,
  });
  
  window.addEventListener('DOMContentLoaded', (event) => {
      // Query all the elements containing the post content
      const postContents = document.querySelectorAll('.post-content');
  
      // Iterate over each element and convert markdown content to HTML
      postContents.forEach(element => {
          const markdownString = element.textContent;
          const htmlString = marked(markdownString);
  
          // Insert the converted HTML back into the element
          element.innerHTML = htmlString;
      });
  });