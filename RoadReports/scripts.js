document.addEventListener('DOMContentLoaded', () => {
    const submitReportBtn = document.getElementById('submitReportBtn');
    const reportsContainer = document.getElementById('reports');

    submitReportBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.issue-checkbox');
        const locationPin = document.getElementById('locationPin').value;
        const description = document.getElementById('description').value;
        const urgencyLevel = document.getElementById('urgencyLevel').value;

        let issues = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                issues.push(checkbox.nextSibling.nodeValue.trim());
            }
        });

        const report = document.createElement('div');
        report.classList.add('report');

        report.innerHTML = `
            <p><strong>Issues:</strong> ${issues.join(', ')}</p>
            <p><strong>Location:</strong> ${locationPin}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Urgency Level:</strong> ${urgencyLevel}</p>
        `;

        reportsContainer.appendChild(report);
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}
