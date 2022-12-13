1. select name from students
2.SELECT * from students WHERE Age > 30
3.SELECT * from students WHERE Age > 30 AND Gender = 'F'
4.SELECT Points FROM students WHERE name = 'Alex'
5.INSERT INTO students (ID, name, Age, Gender, Points) VALUES (7, 'zak', 19, 'M', 200)
6.UPDATE students SET Points = 750 WHERE name = 'Basma'
7.UPDATE students SET Points = 100 WHERE name = 'Alex'

CREATE TABLE graduates (
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name TEXT NOT NULL UNIQUE,
	Age INTEGER,
	Gender TEXT,
	Points INTEGER,
	Graduation TEXT
);
9.INSERT INTO graduates (ID, name, Age, Gender, Points, Graduation) SELECT *, '08/09/2019' FROM students WHERE name = 'Layal'
10.INSERT INTO graduates (ID, name, Age, Gender, Points) SELECT * FROM students WHERE name = 'Layal'
11.UPDATE graduates SET Graduation = '08/09/2019' WHERE name = 'Layal'
12.DELETE from students WHERE name = 'Layal'

14.SELECT employees.Name, employees.Company, companies.Date FROM employees 
 INNER JOIN companies ON companies.Name = employees.Company
15.SELECT employees.Name FROM employees 
  INNER JOIN companies ON companies.Name = employees.Company
  WHERE companies.Date < 2000
16.SELECT companies.Name FROM employees 
 INNER JOIN companies ON companies.Name = employees.Company
 WHERE employees.Role = 'Graphic Designer'
