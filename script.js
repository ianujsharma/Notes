// script.js

// GitHub API endpoint
const apiEndpoint = 'https://api.github.com/repos/your-username/your-repo-name/contents/';

// Function to fetch notes from GitHub repository
async function fetchNotes() {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    data.forEach(file => {
      const noteLink = document.createElement('a');
      noteLink.href = `notes.html?file=${file.name}`;
      noteLink.textContent = file.name;
      notesList.appendChild(noteLink);
    });
  } catch (error) {
    console.error(error);
  }
}

// Function to save note to GitHub repository
async function saveNote(fileContent, fileName) {
  try {
    const response = await fetch(`${apiEndpoint}${fileName}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer YOUR_GITHUB_TOKEN',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Create new note',
        content: btoa(fileContent),
        branch: 'ain'
      })
    });
    const data = await response.json();
    console.log(`Note saved: ${fileName}`);
    window.location.href = 'index.html';
  } catch (error) {
    console.error(error);
  }
}

// Add event listener to create note button
document.addEventListener('DOMContentLoaded', () => {
  const createNoteButton = document.querySelector('a[href="notes.html"]');
  createNoteButton.addEventListener('click', () => {
    fetchNotes();
  });
});

// Add event listener to save note button
document.addEventListener('DOMContentLoaded', () => {
  const saveNoteButton = document.querySelector('button[type="submit"]');
  saveNoteButton.addEventListener('click', () => {
    const noteTitle = document.getElementById('note-title').value;
    const noteContent = document.getElementById('note-content').value;
    saveNote(noteContent, noteTitle);
  });
});
