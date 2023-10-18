console.log('Checking for changes.');

function removeTpYtPaperDialog() {
    const tpYtPaperDialogs = document.getElementsByTagName("tp-yt-paper-dialog");
    
    if (tpYtPaperDialogs.length > 0) {
      // Remove all instances of "tp-yt-paper-dialog" elements
      while (tpYtPaperDialogs.length > 0) {
        tpYtPaperDialogs[0].parentNode.removeChild(tpYtPaperDialogs[0]);
      }
      
      console.log('Removed tp-yt-paper-dialog element(s).');
    }
  }
  
  // Set the interval to check for "tp-yt-paper-dialog" every second (1000 milliseconds)
  const intervalId = setInterval(removeTpYtPaperDialog, 1500);
  
  // To stop checking and clearing the interval, you can call clearInterval(intervalId) when needed.
  


// Function to handle the changes when a "ytd-popup-container" is added
// function handleMutations(mutationsList) {
//     for (const mutation of mutationsList) {
//       if (mutation.type === 'childList') {
//         for (const node of mutation.addedNodes) {
//           if (node.tagName && node.tagName.toLowerCase() === 'ytd-popup-container') {
//             // The "ytd-popup-container" element has been added to the DOM
//             console.log('A ytd-popup-container element has been added to the document.');

//             // You can perform additional actions here
//           }
//         }
//       }
//     }
//   }
  
//   // Create a MutationObserver instance
//   const observer = new MutationObserver(handleMutations);
  
//   // Define the options for the MutationObserver (observe changes in the subtree)
//   const observerOptions = {
//     childList: true, // Watch for child elements being added/removed
//     subtree: true,   // Watch the entire subtree of the document
//   };
  
//   // Start observing the document for changes
//   observer.observe(document, observerOptions);
  
  // To stop observing changes, you can call:
  // observer.disconnect();
  
console.log('Hey there...');
