function showCourses() {

    fetch("http://localhost:8080/courses")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }

            return response.json();
        })
        .then(courses => {

            const courseList = document.getElementById("courseList");

            courseList.innerHTML = "";

            courses.forEach(course => {

                const row = `
                    <tr>
                        <td>${course.courseId}</td>
                        <td>${course.courseName}</td>
                        <td>${course.durationInWeeks}</td>
                        <td>${course.trainer}</td>
                    </tr>
                `;

                courseList.innerHTML += row;
            });

            if (courses.length === 0) {
                courseList.innerHTML =
                    "<tr><td colspan='4'>No courses available</td></tr>";
            }

        })
        .catch(error => {
            console.error("Error fetching courses:", error);
            alert("Unable to load courses. Check the browser console.");
        });
}

function showEnrolledStudents() {
    fetch("http://localhost:8080/enrolledStudents")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            return response.json();
        })
        .then(enrolledStudents => {
            const studentList = document.getElementById("enrolledStudentsList");
            studentList.innerHTML = "";

            enrolledStudents.forEach(student => {
                const row = `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.emailId}</td>
                        <td>${student.courseName}</td>
                        <td>${student.id}</td>
                    </tr>
                `;

                studentList.innerHTML += row;
            });

            if (enrolledStudents.length === 0) {
                studentList.innerHTML =
                    "<tr><td colspan='4'>No enrolled students found</td></tr>";
            }
        })
        .catch(error => {
            console.error("Error fetching enrolled students:", error);
            alert("Unable to load enrolled students. Check the browser console.");
        });
}