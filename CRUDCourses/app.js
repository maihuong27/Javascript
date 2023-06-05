var courseApi = 'http://localhost:3000/course';

function start(){
    getCourses(renderCourse);

    handleCreateForm();
}

start();

//function
function getCourses(callback){
    fetch(courseApi)
        .then(response => response.json())
        .then(callback)
}

function createCourse(data, callback){
    var options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(response => response.json)
        .then(callback)
}

function renderCourse(courses){
    var listCourses = document.getElementById('list-courses');

    var html = courses.map(course => `
        <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick = deleteCourse(${course.id})> Xóa </button>
        </li>
    `);

    listCourses.innerHTML = html.join('');
}

function handleCreateForm(){
    var createBtn = document.getElementById('create');
    createBtn.onclick = function(){
        var name = document.querySelector('input[name = "name"]').value;
        var description = document.querySelector('input[name = "description"]').value;
        
        var data = {
            name: name,
            description: description
        }
        createCourse(data);
    }
}

function deleteCourse(id){
    var options = {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
          },
    }
    fetch(courseApi + '/' + id, options)
        .then(response => response.json)
        .then(() => {
            getCourses(renderCourse);
        })
}