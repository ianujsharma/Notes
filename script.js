const notesList = document.getElementById('notes-list');
const noteForm = document.getElementById('note-form');
const noteContent = document.getElementById('note-content');
const newNoteBtn = document.getElementById('new-note-btn');

// Function to load notes from JSON file (or database)
function loadNotes() {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    existingNotes.forEach(note => {
        const listItem = document.createElement('li');
        const noteLink = document.createElement('a');
        noteLink.textContent = note.title || 'Untitled Note'; // Use note.title if available
        noteLink.href = `note.html?id=${note.id}`; // Pass note ID for editing
        listItem.appendChild(noteLink);
        notesList.appendChild(listItem);
    });
}

// Function to handle note creation (optional, consider server-side validation)
function createNote() {
    // Generate a unique ID (consider using a library like UUID.js)
    const newNoteId = Math.random().toString(36).substring(2, 15); // Example approach

    // Create a new note object with title (optional) and content
    const newNote = {
        id: newNoteId,
        title: document.getElementById('note-title').value || '',
        content: noteContent.value
    };

    // Add the new note to the existing data (modify for database)
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    existingNotes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(existingNotes));

    // Update displayed list after adding a new note
    notesList.innerHTML = ''; // Clear existing notes before re-rendering
    loadNotes();
}

// Function to handle note editing (optional, consider server-side validation)
function handleNoteEdit(event) {
    event.preventDefault();

    const noteId = new URLSearchParams(window.location.search).get('id');

    // Find the note to update (modify for database)
    let updatedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteIndex = updatedNotes.findIndex(note => note.id === noteId);

    if (noteIndex !== -1) {
        updatedNotes[noteIndex] = {
            id: noteId,
            title: document.getElementById('note-title').value || '',
            content: noteContent.value
        };

        // Update data (modify for database)
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    // Clear form after saving
    noteForm.reset();

    // Redirect back to homepage (optional)
    window.location.href = 'index.html';
}

// Call loadNotes function on page load to fetch saved notes
window.onload = loadNotes;

// Add event listener for creating a new note
newNoteBtn.addEventListener('click', createNote);

// Add event listener for note editing
noteForm.addEventListener('submit', handleNoteEdit);
