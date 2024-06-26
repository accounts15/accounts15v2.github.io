const arrStudents = [
    {
        "name": "Alex",
        "age": 24,
        "year": "3th year",
        "section": "A",
        "photo": "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg"
    },
    {
        "name": "Jess",
        "age": 34,
        "year": "4th year",
        "section": "A",
        "photo": "https://img.freepik.com/premium-photo/young-asian-indian-student-with-glasses-backpack-holds-book-shows-thumbs-up_928503-89.jpg"
    },
    {
        "name": "Jessica",
        "age": 22,
        "year": "1st year",
        "section": "A",
        "photo": "https://i.pinimg.com/736x/aa/c9/4e/aac94e41310947cbcd5f38a41ccc0132.jpg"
    },
    {
        "name": "Jaimie",
        "age": 26,
        "year": "2nd year",
        "section": "A",
        "photo": "https://www.collegiateparent.com/wp-content/uploads/2022/08/AdobeStock_429176281.jpg"
    }
];

let newArray = arrStudents.map( ( {name, age, year, section, photo} ) => {
    return `<div class="col-md-3">
                <div class="card">
                    <img src="${photo}" class="card-img-top" style="height: 200px;">
                    <div class="card-body">
                    <h5 class="card-title">${name} - ${age}</h5>
                    <p class="card-text">
                        ${year} - ${section}
                    </p>
                    </div>
                </div>
            </div>`;
});

document.getElementById("div-data").innerHTML = newArray.join('');
