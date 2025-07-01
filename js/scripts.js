var skillsData = [
    {name: 'SQL', type: 'data'},
    {name: 'Excel', type: 'data'},
    {name: 'Data Visualization', type: 'data'},
    {name: 'Pivot tables', type: 'data'},
    {name: 'VLOOKUP', type: 'data'},
    {name: 'Google Sheets', type: 'data'},
    {name: 'Segment', type: 'data'},
    {name: 'Google Analytics', type: 'data'},
    {name: 'A/B Testing', type: 'qa'},
    {name: 'Event Tracking', type: 'qa'},
    {name: 'QA Testing', type: 'qa'},
    {name: 'Optimizely', type: 'qa'},
    {name: 'HTML', type: 'design'},
    {name: 'CSS', type: 'design'},
    {name: 'Figma', type: 'design'},
    {name: 'Canva', type: 'design'},
    {name: 'Jira', type: 'design'},
    {name: 'Miro', type: 'design'},
    {name: 'Jira', type: 'design'},
    {name: 'HubSpot', type: 'crm'},
    {name: 'Email Marketing', type: 'crm'},
    {name: 'Microsoft Word', type: 'other'},
    {name: 'Photoshop', type: 'other'}
]

function buildSkillSections() {
    var skillsList = document.getElementById("skill-list");
    var skillsSectionList = ['data', 'qa', 'design', 'crm', 'other']
    skillsSectionList.forEach(section => {
        var newDiv = document.createElement('div');
        skillsList.appendChild(newDiv);
        newDiv.classList.add('skill-section-container');
        var sectionHeader = document.createElement('p');
        sectionHeader.classList.add('skills-section-header');

        var sectionTitle = ''
          switch (section) {
            case 'data':
                sectionTitle = 'Data & Analytics:'
              break;
            case 'qa':
                sectionTitle = 'Experimentation & QA:'
              break;
            case 'design':
                sectionTitle = 'Data & Analytics:'
            break;
            case 'crm':
                sectionTitle = 'CRM & Marketing:'
            break;   
            case 'other':
                sectionTitle = 'Other:'
            break;          
        }

        sectionHeader.textContent = sectionTitle;
        var sectionList = document.createElement('ul');
        var listClassName = section + "-list"
        sectionList.id = listClassName
        sectionList.classList.add('skills-section-list');
        newDiv.appendChild(sectionHeader)
        newDiv.appendChild(sectionList)
  
    });
}
function buildSkillsList(skills) {
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.name;
        var sectionNameForList = skill.type + "-list"
        var skillsList = document.getElementById(sectionNameForList);
        skillsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // buildSkillSections()
    // buildSkillsList(skillsData);
});