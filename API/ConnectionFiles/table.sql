//student_management_result

-- Student Table
create table student_Result(
    rollno int primary key,
    name varchar(250),
    DOB date,
    marks INT (10)
);

-- Student Records
insert into student_Result(rollno,name,DOB,marks) values(1,'Ankit','2002-06-27',79);
insert into student_Result(rollno,name,DOB,marks) values(2,'Prakhar','2000-09-22',89);
insert into student_Result(rollno,name,DOB,marks) values(3,'Varun','2001-09-21',99);

-- Teacher Table
create table admin(
    name varchar(250),
    email varchar(250)
);
-- Teacher Records
insert into admin(name, email) values('teacher1','teacher1@gmail.com');
insert into admin(name, email) values('teacher2','teacher2@gmail.com');
