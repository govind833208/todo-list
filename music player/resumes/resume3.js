document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const school = document.getElementById('school').value;
    const job = document.getElementById('job').value;
    const company = document.getElementById('company').value;
    const workdesc = document.getElementById('workdesc').value;
    const skills = document.getElementById('skills').value;
  
    const resumeHTML = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <h3>Education</h3>
      <p>${education} at ${school}</p>
      <h3>Work Experience</h3>
      <p>${job} at ${company}</p>
      <p>${workdesc}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;
  
    document.getElementById('resume-output').innerHTML = resumeHTML;
  });