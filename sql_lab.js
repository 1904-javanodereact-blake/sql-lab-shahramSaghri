// SQL Lab

// 1.0	Setting up Oracle Chinook
// In this section you will begin the process of working with the Oracle Chinook database
// Task – Open the Chinook_Oracle.sql file and execute the scripts within.
// 2.0 SQL Queries
// In this section you will be performing various queries against the Oracle Chinook database.
// 2.1 SELECT
// Task – Select all records from the Employee table.
SELECT * FROM Employee;
// Task – Select all records from the Employee table where last name is King.
SELECT * FROM Employee WHERE lastname = 'King'
// Task – Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
SELECT * FROM Employee WHERE firstname = 'Andrew' 
	AND reportsto IS NULL;
// 2.2 ORDER BY
// Task – Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM Album ORDER BY title DESC;
// Task – Select first name from Customer and sort result set in ascending order by city
SELECT firstname FROM customer ORDER BY city;
// 2.3 INSERT INTO
// Task – Insert two new records into Genre table
INSERT INTO genre (genreid, name) VALUES
	(26, 'Soft Rock'),
	(27, 'Hard Rock');
// Task – Insert two new records into Employee table
INSERT INTO employee (employeeid, lastname, firstname, title, reportsto, birthdate, hiredate,
    address, city, state, country, postalcode, phone, fax, email) VALUES
   (9, 'shahram', 'saghri', 'associate', 1, '1974-03-21', '2019-04-01', 
    '466 Orange Blossm', 'Irvine', 'CA', 'Orange', '92618', '949999999', '9490000000', 'shahram.saghri@gmail'),
   (10, 'shahriar', 'saghri', 'associate', 2, '1974-03-21', '2019-04-01', 
    '466 Orange Blossm', 'Irvine', 'CA', 'Orange', '92618', '949999999', '9490000000', 'shahram@gmail.com')
// Task – Insert two new records into Customer table
INSERT INTO customers (customerid, firstname, lastname
    INSERT INTO customer (customerid, firstname, lastname, company, address, city, state, country, 
        postalcode, phone, fax, email, supportrepid) VALUES
        (61, 'Shahram', 'Saghri', 'Revature', '466 Orange Blossm', 
         'Irvine', 'CA', 'usa', '92618', '949-000-0000', '949-491-0000', 'shahram.saghri@gmail.com',  3),
         (62, 'Mahsa', 'Saghri', 'FCB', '466 Orange Blossm', 
         'Irvine', 'CA', 'usa', '92618', '949-000-0000', '949-491-0000', 'shahram.saghri@gmail.com',  3)

// 2.4 UPDATE

// Task – Update Aaron Mitchell in Customer table to Robert Walter
UPDATE customer 
	SET lastname = 'Walter',
		firstname = 'Robert'
		WHERE firstname = 'Aaron'
			AND lastname = 'Mitchell';
// Task – Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE artist
	SET name = 'CCR'
	WHERE name = 'Creedence Clearwater Revival';
// 2.5 LIKE
// Task – Select all invoices with a billing address like “T%”
SELECT * FROM invoice
	WHERE billingaddress LIKE 'T%';
// 2.6 BETWEEN
// Task – Select all invoices that have a total between 15 and 50
SELECT * FROM invoice
WHERE total BETWEEN 15 AND 50;
// Task – Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM employee
WHERE hiredate BETWEEN '2003-01-01'
	AND '2004-12-31';
// 2.7 DELETE
// Task – Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
ALTER TABLE invoice
    DROP CONSTRAINT pk_invoice CASCADE;

ALTER TABLE invoice
    DROP CONSTRAINT fk_invoicecustomerid CASCADE;

ALTER TABLE invoice
    ADD CONSTRAINT pk_invoice FOREIGN KEY (customerid)
    REFERENCES customer (customerid) ON DELETE CASCADE;
    
ALTER TABLE invoice
    ADD CONSTRAINT fk_invoicecustomerid FOREIGN KEY (customerid)
    REFERENCES customer (customerid) ON DELETE CASCADE;

DELETE FROM customer
    WHERE firstname = 'Robert'
        and lastname = 'Walter';


// 3.0	SQL Functions
// In this section you will be using the Oracle system functions, as well as your own functions, to perform various actions against the database
// 3.1 System Defined Functions
// Task – Use a function that returns the current time.
SELECT now();
// Task – Use a function that returns the length of a mediatype from the mediatype table

// 3.2 System Defined Aggregate Functions
// Task – Use a function that returns the average total of all invoices
SELECT AVG(total) FROM invoice;
// Task – Use a function that returns the most expensive track
SELECT MAX(unitprice) FROM track;
// 7.0 JOINS
// In this section you will be working with combing various tables through the use of joins. You will work with outer, inner, right, left, cross, and self joins.
// 7.1 INNER
// Task – Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT firstname, lastname, invoiceid
FROM customer JOIN invoice
	ON customer.customerid = invoice.customerid;
// 7.2 OUTER
// Task – Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT customer.customerid, firstname, lastname, invoiceid
FROM customer LEFT OUTER JOIN invoice
	ON customer.customerid = invoice.customerid;
// 7.3 RIGHT
// Task – Create a right join that joins album and artist specifying artist name and title.
SELECT title, name
FROM album RIGHT JOIN artist
	ON album.artistid = artist.artistid;
// 7.4 CROSS
// Task – Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT *
FROM album, artist
ORDER BY artist.name;
// 7.5 SELF
// Task – Perform a self-join on the employee table, joining on the reportsto column.
SELECT *
FROM employee AS e1 JOIN employee as e2
ON e1.reportsto = e2.reportsto;
