CREATE TABLE Employee(
id BIGSERIAL PRIMARY KEY,
Firstname VARCHAR(50) NOT NULL,
Middlename VARCHAR(50),
Lastname VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
phonenumber BIGINT NOT NULL,
role INTEGER NOT NULL,
address VARCHAR(100) NOT NULL,
UNIQUE(email,phonenumber),
CHECK(phonenumber>1000000000),
CHECK(phonenumber<9999999999999)
);
CREATE FUNCTION validatedata()
RETURNS TRIGGER
AS $$
BEGIN
IF NEW.email !~ '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid Email';
END IF;
IF NEW.Firstname !~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid First Name';
END IF;
IF NEW.Lastname !~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid Last Name';
END IF;
IF NEW.Middlename!~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid Middle Name';
END IF;
RETURN NEW;
END;
$$
LANGUAGE plpgsql;
CREATE TRIGGER checkingdata BEFORE INSERT OR UPDATE
ON Employee
FOR EACH ROW EXECUTE PROCEDURE validatedata();