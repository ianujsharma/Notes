const notesList = document.getElementById('notes-list');
const noteForm = document.getElementById('note-form');
const noteContent = document.getElementById('note-content');

// Function to load notes from JSON file (or database)
function loadNotes() {
    fetch('notes.json') // Adjust path if using a database
        .then(response => response.json())
        .then(data => {
            data.forEach(note => {
                const listItem = document.createElement('li');
                const noteLink = document.createElement('a');
                noteLink.textContent = note.title; // Use note.title if available
                noteLink.href = `note.html?id=${note.id}`; // Pass note ID for editing
                listItem.appendChild(noteLink);
                notesList.appendChild(listItem);
            });
        });
}

// Function to handle note editing (optional, consider server-side validation)
function handleNoteEdit(event) {
    event.preventDefault();
    // Save note content to JSON file (or database)
    // ...

    // Clear form after saving
    noteForm.reset();
}

// Load notes on page load
loadNotes();

// Add event listener for note editing
noteForm.addEventListener('submit', handleNoteEdit);
