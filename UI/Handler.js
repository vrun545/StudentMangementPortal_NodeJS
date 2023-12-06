//ADMIN VERIFY FROM BACKEND
document.getElementById('adminlogin').addEventListener('submit' , async(e) => {
    e.preventDefault();
    const adminName = document.getElementById('adminname').value;
    const adminEmail = document.getElementById('adminemail').value;

    try{
        const response = await fetch('http://localhost:8080/login/adminlogin', {
            method:"POST",
            headers : {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({adminName , adminEmail})
        });

        if (response.ok){
            window.location.href="StudentsRecord.html";
            const data = await response.json();
            document.getElementById('message').textContent = data.message;
        }
        else
        {
            alert("Wrong Admin name or Admin Email")
        }
    }
    catch(error)
    {
        document.getElementById('message').textContent = 'An error occurred.'
    }
});


//STUDENT LOGIN VERIFY FROM BACKEND
function stdlogin()
{
    document.getElementById('studentlogin').addEventListener('submit' , async(e) => {
        e.preventDefault();
        const rollno = document.getElementById('rollno').value;
        const DOB = document.getElementById('dob').value;

        try{
            const response = await fetch('http://localhost:8080/student/studentresult', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , DOB})
            });

            if (response.ok)
            {
                const data = await response.json();
                const jsonData = JSON.stringify(data[0]);
                const encodedData = encodeURIComponent(jsonData);

                window.location.href='ResultPage.html?data='+encodedData;
                localStorage.setItem("data1",data);
                document.getElementById('message').textContent = data.message;
            }
            else
            {
                alert("Login Credentials are Wrong");
            }
        }
        catch(error)
        {
            // alert("Login Credentials are Wrong");
        }
    });
}


//Adding new Student from backend:
function addresult()
{
    document.getElementById('result-form').addEventListener('click' , async(e) => {
        e.preventDefault();
        const rollno = document.getElementById('rollno').value;
        const name = document.getElementById('name').value;
        const DOB = document.getElementById('dob').value;
        const marks = document.getElementById('marks').value;

        try{
            const response = await fetch('http://localhost:8080/addstudent/add', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , name, DOB, marks})
            });

            // 200
            if (response.ok){
                window.location.href="StudentsRecord.html";
                const data = await response.json();
            }
            // 500
            else{
                alert("Student Info is Wrong");
            }
        }
        catch(error)
        {
            alert("Student Info is Wrong");
        }
    });
}


//handling edit
function editresult()
{
    document.getElementById('edit-form').addEventListener('click' , async(e) => {
        e.preventDefault();
        const rollno = document.getElementById('rollno').value;
        const name = document.getElementById('name').value;
        const DOB = document.getElementById('dob').value;
        const marks = document.getElementById('marks').value;

        try{
            const response = await fetch('http://localhost:8080/editstudent/edit', {
                method:"POST",
                headers : {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({rollno , name, DOB, marks})
            });

            if (response.ok){
                const data = await response.json();
                document.getElementById('message').textContent = data.message;
            }else{
                document.getElementById('message').textContent = 'Error Procesing the Request';
            }
        }catch(error)
        {
            document.getElementById('message').textContent = 'An error occurred.'
        }
    });
}
