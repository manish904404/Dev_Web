WEB-DEV is a collection of web development assignments and assessments built using JavaScript, HTML and CSS — covering both Node.js and React.js based tasks. This repo includes different exercises that help practice front-end and back-end skills.

## 📂 Repository Structure
/              — root directory
├── NodeJS ASSESSMENT/    — back-end (Node.js) projects
├── ReactJS ASSESSMENT/   — front-end (React.js) projects
└── (other folders/files as added)

## 🛠️ Technologies Used
- JavaScript (ES6+)
- HTML5
- CSS3
- Node.js (for backend assignments)
- React.js (for frontend assignments)

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed (for NodeJS projects)
- A modern web browser (for HTML/CSS/React projects)

### Installation & Run

**For Node.js assignments**
cd "NodeJS ASSESSMENT/<project-folder>"
npm install
npm start

**For React.js assignments**
cd "ReactJS ASSESSMENT/<project-folder>"
npm install
npm start

**For static HTML/CSS/JS**
Open the HTML file in your browser (e.g. index.html)

## 🤝 Contributing
Feel free to fork this repository, create a new branch, add your project/assignment inside appropriate folder (NodeJS / ReactJS / static), and submit a pull request.

If you add a new project:
- Add a meaningful folder name
- Include your source files (HTML, CSS, JS, etc.)
- (Optional) Add a small README inside that folder describing the project

## ✅ Status
This repository is in active development/learning mode.

## 📄 License
This project is licensed under MIT License.
"""

doc = Document()
for line in content.split("\n"):
    doc.add_paragraph(line)

file_path = "/mnt/data/WEB-DEV-README.docx"
doc.save(file_path)

file_path
