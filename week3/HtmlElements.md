# In this section, we will explore a tag found within the <form> tag called <fieldset> tag and <legend> tag.


## Use <fieldset> Tag appropriately in HTML pages
Use <legend> Tag to decorate your fieldset.
HTML fieldset tag
The HTML <fieldset> tag is found within the <form> tag and is used to group related elements in an HTML form inside a box.
There is no restriction to the kind of elements that can be inside a fieldset. But they are mostly used to group related input type of elements, as shown in the example below.
The elements can be grouped in a fieldset. This element can be specially useful in large forms, where readability and ease of access can be improved with segmentation. Browsers will most likely render a frame around the grouped controls.
Syntax
<fieldset> Contents... </fieldset>

Attribute
disabled: It specifies that the elements belonging to the fieldset should be disabled.
form: It specifies id of the form the fieldset is to be considered a part of.
name: It specifies the name for the fieldset.
Example
In the first example we will try to create a form:

<!DOCTYPE html>
<html>
<body>

<h1>The fieldset element</h1>

<form>
        <fieldset form="user_regn" name="user_details"> 
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"><br><br>
    </fieldset>
    <input type="submit" value="Submit">
</form>
</body>
</html>

## HTML legend tag
A fieldset can additionally have a title or name, that can be provided by legend. The <legend> tag is used with the <fieldset> element as a first child to define the caption for the grouped related fields This tag is also commonly referred to as the <fieldset> element. By using <legend> tag with <fieldset> elements, it is easy to understand the purpose of grouped form elements.

Example
To understand the <legend> tag, let's add this tag to the above example and see what will be the output:

<!DOCTYPE html>
<html>
<body>

<h1>The fieldset element</h1>

<form>
        <fieldset form="user_regn" name="user_details"> <legend>Personal Details:</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"><br><br>
    </fieldset>
    <input type="submit" value="Submit">
</form>
</body>
</html>
