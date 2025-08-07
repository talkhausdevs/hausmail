const inbox = document.getElementById('inbox');
const composeBtn = document.getElementById('compose-btn');
const composeForm = document.getElementById('compose-form');
const emailDetails = document.getElementById('email-details');
const emailContent = document.getElementById('email-content');
const emailForm = document.getElementById('email-form');

let emails = [
  { subject: 'Hello from HAUSmail!', sender: 'haus@mail.com', body: 'Welcome to HAUSmail, your new email space!', isRead: false },
  { subject: 'Reminder: HAUSmail Launch Event', sender: 'event@hausmail.com', body: 'Don’t forget to join our launch event. It’s gonna be lit!', isRead: false }
];

// Function to render inbox
const renderInbox = () => {
  inbox.innerHTML = ''; // Clear the inbox
  emails.forEach((email, index) => {
    const li = document.createElement('li');
    li.textContent = `${email.subject} - ${email.sender}`;
    
    // Change color based on read/unread status
    li.style.backgroundColor = email.isRead ? '#444' : '#333';
    
    li.addEventListener('click', () => viewEmail(index));

    // Double-click to mark as read/unread
    li.addEventListener('dblclick', () => toggleReadStatus(index)); 

    inbox.appendChild(li);
  });
};

// Function to mark email as read/unread
const toggleReadStatus = (index) => {
  emails[index].isRead = !emails[index].isRead;
  renderInbox(); // Re-render inbox to reflect the status change
};

// Function to show email details
const viewEmail = (index) => {
  const email = emails[index];
  emailDetails.style.display = 'block';
  composeForm.style.display = 'none';
  emailContent.innerHTML = `
    <h3>${email.subject}</h3>
    <p><strong>From:</strong> ${email.sender}</p>
    <p>${email.body}</p>
  `;
};

// Function to show compose form
composeBtn.addEventListener('click', () => {
  composeForm.style.display = 'block';
  emailDetails.style.display = 'none';
});

// Handle email form submission
emailForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const subject = document.getElementById('subject').value;
  const recipient = document.getElementById('recipient').value;
  const body = document.getElementById('body').value;

  emails.push({ subject, sender: 'you@hausmail.com', body, isRead: false });
  renderInbox();

  document.getElementById('subject').value = '';
  document.getElementById('recipient').value = '';
  document.getElementById('body').value = '';
  alert('Email Sent!');
});

// Initial inbox render
renderInbox();
