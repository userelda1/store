document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");
  
    setTimeout(() => {
      elements.forEach(element => {
        element.classList.add("show");
      });
    }, 500); // Delay for animation to look natural
  });
  /*After the page loads, the script waits for 500 milliseconds.
Then, it finds all elements with the .slide-in-left or .slide-in-right classes.
It adds a show class to each of these elements, which likely starts the sliding animation.*/ 