//alert("I am here");
//API CALL TO ACCESS DATA
window.onload = pageReady;


function pageReady(){

    //CREATING FUNCTIONS
    //Creates an element
        function createNode(element) {
            return document.createElement(element);
        }
    // Appends child to parent
        function append(parent, el) {
            return parent.appendChild(el);
        }
   //Create

    //CREATING CONSTANTS
    //Getting elements where data will be displayed
        const maincontainer = document.getElementById("members");
        console.log(maincontainer);

    //Getting the information from this link
        const url = 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php';


    //FETCH API
        fetch(url)
            //Transformng the data into Json
            .then ((response)=> response.json())

            //After transforming handling it
            .then(function(data){
                //Get the result set
                var employees = data;
                //Check the data is being received well
                console.log(employees);
                console.log(Object.keys(employees).length);
                //Loop through the results and create markup per employee
                for(var i = 1; i <= Object.keys(employees).length; i++){

                    // creating the div for the profile
                    console.log(employees[i].employeefname);

                    //Creating elements
                    //Creating the profile container
                    let employeeprofile = createNode('div');
                    let empcontainer = document.createAttribute('class');
                    empcontainer.value = 'profile-container';
                    employeeprofile.setAttributeNode(empcontainer);

                    //Creating the image element
                    let img = createNode('img');

                    //Creating the title
                    let title = createNode('h3');

                    //Creating the description of the employee
                    let bio = createNode('p');
                    let bioclass = document.createAttribute('class');
                    bioclass.value = 'bio';
                    bio.setAttributeNode(bioclass);

                    //Creating the div for the roles
                    let roles = createNode('div');
                    let classroles = document.createAttribute('class');
                    classroles.value='roles';
                    roles.setAttributeNode(classroles);

                    //Assigning values to the elements
                    img.src = "http://sandbox.bittsdevelopment.com/code1/employeepics/"+ employees[i].employeeid +".jpg";
                    title.innerHTML = employees[i].employeefname + " " + employees[i].employeelname;
                    bio.innerHTML = employees[i].employeebio;

                    //Getting the roles information
                    //console.log(employees[i].roles.length);
                    for( var x = 0; x <employees[i].roles.length; x++ ){
                        //console.log(employees[i].role[x])
                        let role = createNode('div');
                        let roleclass = document.createAttribute('class');
                        roleclass.value = 'individual-role';
                        role.setAttributeNode(roleclass);
                        role.innerHTML = employees[i].roles[x].rolename;
                        role.style.backgroundColor = employees[i].roles[x].rolecolor;
                        //role.style.backgroundColor = blue;
                        append(roles,role);

                    }

                    let featured = createNode('div');
                    let featuredclass = document.createAttribute('class');
                    featuredclass.value = 'featured';
                    featured.setAttributeNode(featuredclass);

                    //See if the employee is featured
                    if(employees[i].employeeisfeatured == 1){
                        //if they are featured create the crown element

                        featured.innerHTML = '&#128081';

                    }

                    console.log(employeeprofile);

                    //Appending all the elements into the main html file
                    append(employeeprofile,featured);
                    append(employeeprofile,img);
                    append(employeeprofile,title);
                    append(employeeprofile,bio);
                    append(employeeprofile,roles);
                    append(maincontainer,employeeprofile);
                    //document.appendChild(profile);

                }


            })
            .catch(function(error){
                console.log(error);

            });


}





