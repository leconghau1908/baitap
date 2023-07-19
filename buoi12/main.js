let listStudent = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        age: 15,
        gender: 'boy',
        point: 10,
    },
    {
        id: 2,
        name: 'Trần Thị B',
        age: 15,
        gender: 'girl',
        point: 5,
    },
    {
        id: 3,
        name: 'Binz',
        age: 15,
        gender: 'girl',
        point: 7,
    },
    {
        id: 4,
        name: 'ABC',
        age: 15,
        gender: 'girl',
        point: 10,
    },
];

const tableStudent = document.getElementById('table-student');
const btnAdd = document.getElementById('btn-add');
const btnUpdate = document.getElementById('btn-update');
const listBtnDelete = document.getElementsByClassName('btn-delete');
const btnSearch = document.getElementById('btn-search');
const searchInput = document.getElementById('search-input');

function clearInput() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
    document.getElementById('point').value = '';
}

// Function to add a new student
btnAdd.onclick = function () {
    const id = Number(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const point = Number(document.getElementById('point').value);

    let isExistId = false;

    for (let student of listStudent) {
        if (student.id === id) {
            isExistId = true;
            break;
        }
    }

    if (isExistId) {
        alert('Id đã tồn tại, yêu cầu nhập lại');
    } else {
        const newStudent = {
            id: id,
            name: name,
            age: age,
            gender: gender,
            point: point,
        };

        listStudent.push(newStudent);
        renderStudent();

        clearInput();
    }
};


btnUpdate.onclick = function () {
    const id = Number(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const point = Number(document.getElementById('point').value);

    const studentUpdate = {
        id: id,
        name: name,
        age: age,
        gender: gender,
        point: point,
    };

    const indexToUpdate = listStudent.findIndex(student => student.id === id);

    if (indexToUpdate !== -1) {
        listStudent[indexToUpdate] = studentUpdate;
        renderStudent();

        clearInput();

        btnUpdate.style.display = 'none';
        btnAdd.style.display = 'inline';
    }
};


function deleteStudent(index) {
    listStudent.splice(index, 1);
    renderStudent();
}


btnSearch.onclick = function () {
    const searchText = searchInput.value.trim().toLowerCase();
    const foundStudents = listStudent.filter(student =>
        student.id.toString().includes(searchText) ||
        student.name.toLowerCase().includes(searchText) ||
        student.age.toString().includes(searchText) ||
        student.gender.toLowerCase().includes(searchText) ||
        student.point.toString().includes(searchText)
    );

    if (foundStudents.length > 0) {
        tableStudent.innerHTML = '';
        renderStudent(foundStudents);
    } else {
        alert('Không tìm thấy học sinh.');
        renderStudent();
    }
};


function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(listStudent));
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('students');
    if (data) {
        listStudent = JSON.parse(data);
    }
}


function renderStudent(students = listStudent) {
    let stringHTML = '';
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        stringHTML += `
            <tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.gender}</td>
                <td>${student.point}</td>
                <td>
                    <button type="button" class="btn btn-success btn-update" onclick='updateStudent(${i})'>Cập Nhật</button>
                    <button type="button" class="btn btn-danger btn-delete" onclick='deleteStudent(${i})'>Xóa</button>
                </td>
            </tr>
        `;
    }
    tableStudent.innerHTML = stringHTML;
    saveToLocalStorage();
}


loadFromLocalStorage();


renderStudent();
