function signup() {
    var firstName = document.getElementById("firstName").value;
    var verifFirstName = verifLength(firstName, 4);
    if (verifFirstName) {
        document.getElementById("firstNameError").innerHTML = "";
    }
    else {
        document.getElementById("firstNameError").innerHTML = "First name must have at least 4 characters";
        document.getElementById("firstNameError").style.color = "red";
    }

    var lastName = document.getElementById("lastName").value;
    var verifLastName = verifLength(lastName, 4);
    if (verifLastName) {
        document.getElementById("lastNameError").innerHTML = "";
    }
    else {
        document.getElementById("lastNameError").innerHTML = "Last name must have at least 4 characters";
        document.getElementById("lastNameError").style.color = "red";
    }

    var email = document.getElementById("email").value;
    var verifEmail = validateEmail(email);
    if (verifEmail) {
        document.getElementById("emailError").innerHTML = "";
    }
    else {
        document.getElementById("emailError").innerHTML = "Invalid Email";
        document.getElementById("emailError").style.color = "red";
    }

    var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
    var emailExist = false;
    for (let i = 0; i < usersMH.length; i++) {
        if (usersMH[i].email == email) {
            emailExist = true;
        }
    }
    if (emailExist == false) {
        document.getElementById("emailExistError").innerHTML = "";
    }
    else {
        document.getElementById("emailExistError").innerHTML = "Email is already existed";
        document.getElementById("emailExistError").style.color = "red";
    }

    var pwd = document.getElementById("pwd").value;
    var verifPwd = verifLength(pwd, 8);
    if (verifPwd) {
        document.getElementById("pwdError").innerHTML = "";
    }
    else {
        document.getElementById("pwdError").innerHTML = "Password must have at least 8 characters";
        document.getElementById("pwdError").style.color = "red";
    }

    var confirmPwd = document.getElementById("confirmPwd").value;
    if (pwd == confirmPwd) {
        document.getElementById("confirmPwdError").innerHTML = "";
    }
    else {
        document.getElementById("confirmPwdError").innerHTML = "Password confirmation is invalid";
        document.getElementById("confirmPwdError").style.color = "red";
    }

    var tel = document.getElementById('tel').value;
    if (tel.length == 8) {
        document.getElementById("telError").innerHTML = "";
    }
    else {
        document.getElementById("telError").innerHTML = "The telephone is invalid";
        document.getElementById("telError").style.color = "red";
    }

    if ((emailExist == false) && verifFirstName && verifLastName && verifEmail && verifPwd && (pwd == confirmPwd) && (tel.length == 8)) {
        var idUserMH = JSON.parse(localStorage.getItem("idUserMH") || "20");
        var userMH = {
            id: idUserMH,
            firstName: firstName,
            lastName: lastName,
            email: email,
            pwd: pwd,
            confirmPwd: confirmPwd,
            tel: tel,
            role: "user" 
        };

        usersMH.push(userMH);
        localStorage.setItem("usersMH", JSON.stringify(usersMH));
        localStorage.setItem("idUserMH", idUserMH + 1);

        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'votre Compte a ete creer avec succes',
        showConfirmButton: false,
        timer: 4000
        });
        location.replace("login.html");
    }
}

function verifLength(ch, nb) {
    return ch.length >= nb;
}

function validateEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}

function insertSuperAdmin() {
    var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
    var superAdmin = {
        id: 1,
        firstName: "Med Amine",
        lastName: "Bouazizi",
        email: "mohamed-amine.bouazizi@enis.tn",
        pwd: "superadmin123",
        tel: "23886515",
        role: "super admin"
    };
    usersMH.push(superAdmin);
    localStorage.setItem("usersMH", JSON.stringify(usersMH));
    localStorage.setItem("addedSuperAdminMH", "true");
}

function insertProp() {  
    var firstNameProp = document.getElementById('firstNameProp').value;
    var verifFirstNameProp = verifLength(firstNameProp, 4);
    if (verifFirstNameProp) {
        document.getElementById("firstNamePropError").innerHTML = "";
    }
    else {
        document.getElementById("firstNamePropError").innerHTML = "First Name must have at least 4 characters";
        document.getElementById("firstNamePropError").style.color = "red";
    }

    var lastNameProp = document.getElementById('lastNameProp').value;
    var verifLastNameProp = verifLength(lastNameProp, 4);
    if (verifLastNameProp) {
        document.getElementById("lastNamePropError").innerHTML = "";
    }
    else {
        document.getElementById("lastNamePropError").innerHTML = "First Name must have at least 4 characters";
        document.getElementById("lastNamePropError").style.color = "red";
    }

    var emailProp = document.getElementById('emailProp').value;
    var verifEmailProp = validateEmail(emailProp);
    if (verifEmailProp) {
        document.getElementById("emailPropError").innerHTML = "";   
    }
    else {
        document.getElementById("emailPropError").innerHTML = "Invalid email";
        document.getElementById("emailPropError").style.color = "red";}

    var pwdProp = document.getElementById('pwdProp').value;
    var verifPwdProp = verifLength(pwdProp, 8);
    if (verifPwdProp) {
        document.getElementById("pwdPropError").innerHTML = "";
    }
    else {
        document.getElementById("pwdPropError").innerHTML = "Password must have at least 8 characters";
        document.getElementById("pwdPropError").style.color = "red";
    }

    var telProp = document.getElementById('telProp').value;
    if (telProp.length == 8) {
        document.getElementById("telPropError").innerHTML = "";
    }
    else {
        document.getElementById("telPropError").innerHTML = "The telephone is invalid";
        document.getElementById("telPropError").style.color = "red";
    }

    if ( verifFirstNameProp && verifLastNameProp && verifEmailProp && verifPwdProp && (telProp.length == 8)) {

        var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
        var idPropMH = JSON.parse(localStorage.getItem("idPropMH") || "2");

    var prop = {
        id: idPropMH,
        firstName: firstNameProp,
        lastName: lastNameProp,
        email: emailProp,
        pwd: pwdProp,
        tel: telProp,
        role: "proprietor"
    };

    usersMH.push(prop);

    localStorage.setItem("usersMH", JSON.stringify(usersMH));
    localStorage.setItem("idPropMH", idPropMH + 1);
    location.reload();
    }
}

function login() {
    var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
    var emailLogin = document.getElementById("emailLogin").value;
    var pwdLogin = document.getElementById("pwdLogin").value;
    for (let i = 0; i < usersMH.length; i++) {
        if (usersMH[i].email == emailLogin && usersMH[i].pwd == pwdLogin) {
            var findedUserMH = usersMH[i];
        }
    }

    switch (findedUserMH.role) {
        case "super admin":
            location.replace('admin.html');
            localStorage.setItem("connectedUserMH", JSON.stringify(findedUserMH));
        break;

        case "proprietor":
            location.replace('proprietor.html');
            localStorage.setItem("connectedUserMH", JSON.stringify(findedUserMH));
        break;

        default:
            location.replace('index.html');
            localStorage.setItem("connectedUserMH", JSON.stringify(findedUserMH));
        break;
    }
}

function deleteObject(pos, T) {
    var objects = JSON.parse(localStorage.getItem(T) || "[]");
    objects.splice(pos, 1);
    localStorage.setItem(T, JSON.stringify(objects));
    location.reload();
}

function displayProp() {
    var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
    var propTable = `<table class="table table-hover"> 
    <tr>
        <th> First name </th> 
        <th> Last name </th> 
        <th> Email </th> 
        <th> Tel </th> 
        <th> Actions </th> 
    </tr> `;

    for (let i = 0; i < usersMH.length; i++) {
        if (usersMH[i].role == "proprietor" ) {
        propTable = propTable + `
        <tr>
        <td> ${usersMH[i].firstName} </td> 
        <td> ${usersMH[i].lastName} </td> 
        <td> ${usersMH[i].email} </td> 
        <td> ${usersMH[i].tel} </td> 
        <td> 
            <button type="button" class="btn btn-danger" onclick="deleteObject(${i}, 'usersMH')">Delete</button>
        </td> 
        </tr> 
        `;
    }
    }
    propTable = propTable + `</table> `;
    document.getElementById("propTable").innerHTML = propTable;
}

function displayUsersMH() {
    var usersMH = JSON.parse(localStorage.getItem("usersMH") || "[]");
    var UsTable = `<table class ="table table-hover">
                <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Telephone</th>
                     <th>Actions</th>
                </tr>
    `;

    for (let i = 0; i < usersMH.length; i++) {
        if (usersMH[i].role == "user") {
            UsTable = UsTable + `
                <tr>
                    <td>${usersMH[i].firstName}</td>
                    <td>${usersMH[i].lastName}</td>
                    <td>${usersMH[i].email}</td>
                    <td>${usersMH[i].tel}</td>
                    <td>
                        <button type="button" class="btn btn-danger" onclick="deleteObject(${i},'usersMH')">Delete</button>
                    </td>
                </tr>
            `;
        }
    }
    UsTable = UsTable + `</table>`;
    document.getElementById("UsTable").innerHTML = UsTable;
}

function setHeaderIndex() {
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var headerIndex = ``;

    if (connectedUserMH) {

        //  proprietor
        if (connectedUserMH.role == "proprietor") {
            headerIndex = `
                <li class="active"><a href="./proprietor.html">Dashboard</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }

        else if (connectedUserMH.role == "super admin") {
            headerIndex = `
                <li class="active"><a href="./admin.html">Dashboard</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }

        // user
        else {
            headerIndex = `
                <li class="active"><a href="./bag.html">Bag</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }
    }

    else {
        //visiteur
        headerIndex = `
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./login.html">Login</a></li>
            <li><a href="./signup.html">Signup</a></li>
        `;  
    }
    document.getElementById("headerIndex").innerHTML = headerIndex;
}

function setHeader() {
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var header = ``;

    if (connectedUserMH) {

        //  proprietor
        if (connectedUserMH.role == "proprietor") {
            header = `
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./proprietor.html">Dashboard</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }

        else if (connectedUserMH.role == "super admin") {
            header = `
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./admin.html">Dashboard</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }

        // user
        else {
            header = `
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./bag.html">Bag</a></li>
                <li><a href="./about.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li> ${connectedUserMH.firstName + ' ' + connectedUserMH.lastName} </a></li>
                <li onclick="logout()">Logout</a></li>
            `;
        }
    }

    else {
        //visiteur
        header = `
            <li class="active"><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About Us</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./login.html">Login</a></li>
            <li><a href="./signup.html">Signup</a></li>
        `;  
    }
    document.getElementById("headerId").innerHTML = header;
}

function logout() {
    localStorage.removeItem("connectedUserMH");
    location.replace("index.html");
}

function addGuestHouse() {
    var NameHouse = document.getElementById('NameHouse').value;
    var verifNameHouse = verifLength(NameHouse, 3);
    if (verifNameHouse) {
        document.getElementById("NameHouseError").innerHTML = "";
    }
    else {
        document.getElementById("NameHouseError").innerHTML = "The name of the guest house must contain at least 3 characteres ";
        document.getElementById("NameHouseError").style.color = "red";
    }

    var adress = document.getElementById('adress').value;
    if (adress != "") {
        document.getElementById("adressHouseError").innerHTML = "";
    }
    else {
        document.getElementById("adressHouseError").innerHTML = "The adress must be not empty";
        document.getElementById("adressHouseError").style.color = "red";
    }
 
    var numberRooms = document.getElementById('numberRooms').value;
    if (numberRooms > 0) {
        document.getElementById("numberRoomsError").innerHTML = "";
    }
    else {
        document.getElementById("numberRoomsError").innerHTML = "Number of rooms must be positif";
        document.getElementById("numberRoomsError").style.color = "red";
    }

    var tariffAdult = document.getElementById('tariffAdult').value;
    if (tariffAdult > 0) {
        document.getElementById("tariffAdultError").innerHTML = "";
    }
    else {
        document.getElementById("tariffAdultError").innerHTML = "Adult tariff must be positif";
        document.getElementById("tariffAdultError").style.color = "red";
    }

    var tariffKids = document.getElementById('tariffKids').value;
    if (tariffKids > 0) {
        document.getElementById("tariffKidsError").innerHTML = "";
    }
    else {
        document.getElementById("tariffKidsError").innerHTML = "Kids tariff must be positif";
        document.getElementById("tariffKidsError").style.color = "red";
    }

    var tariffAdultSeason = document.getElementById('tariffAdultSeason').value;
    if (tariffAdultSeason > 0) {
        document.getElementById("tariffAdultSeasonError").innerHTML = "";
    }
    else {
        document.getElementById("tariffAdultSeasonError").innerHTML = "Adult tariff at season must be positif";
        document.getElementById("tariffAdultSeasonError").style.color = "red";
    }

    var tariffKidsSeason = document.getElementById('tariffKidsSeason').value;
    if (tariffKidsSeason > 0) {
        document.getElementById("tariffKidsSeasonError").innerHTML = "";
    }
    else {
        document.getElementById("tariffKidsSeasonError").innerHTML = "Kids tariff at season must be positif";
        document.getElementById("tariffKidsSeasonError").style.color = "red";
    }

    var region = document.getElementById('region').value;
    if (region != "") {
        document.getElementById("regionError").innerHTML = "";
    }
    else {
        document.getElementById("regionError").innerHTML = "You must choose a region";
        document.getElementById("regionError").style.color = "red";
    }

    var description = document.getElementById('description').value;
    if (description != "") {
        document.getElementById("descriptionError").innerHTML = "";
    }
    else {
        document.getElementById("descriptionError").innerHTML = "The description must be not empty";
        document.getElementById("descriptionError").style.color = "red";
    }

    var houseImage = document.getElementById("avatar").value;
    var newImage = replacePath(houseImage);
    if (newImage != "") {
        document.getElementById("newImageError").innerHTML = "";
    }
    else {
        document.getElementById("newImageError").innerHTML = "Choose an Image";
        document.getElementById("newImageError").style.color = "red";
    }

    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));

    if (verifNameHouse && (adress != "") && (numberRooms>0) && (tariffAdult>0) && (tariffKids>0) && (tariffAdultSeason>0) && (tariffKidsSeason>0) && (region != "") && (description != "") && (connectedUserMH.role == "proprietor") && (newImage != "") ) {
        var houses = JSON.parse(localStorage.getItem("houses") || "[]");
        var idHouse = JSON.parse(localStorage.getItem("idHouse") || "1");

        var house = {
            id: idHouse,
            idProp: connectedUserMH.id,
            NameHouse: NameHouse,
            adress: adress,
            numberRooms: numberRooms,
            tariffAdult: tariffAdult,
            tariffKids: tariffKids,
            tariffAdultSeason: tariffAdultSeason,
            tariffKidsSeason: tariffKidsSeason,
            region:region,
            description: description,
            image:newImage
        };

        houses.push(house);
        localStorage.setItem("houses", JSON.stringify(houses));
        localStorage.setItem("idHouse", idHouse + 1);
        location.reload();
    }
}

function replacePath(path) {
    var newpath = path.replace(/\\/g, "/");
    var res = newpath.replace("fakepath", "/Users/MBM info/Desktop/hiroto-master/hiroto-master/img");
    return res;
}

function displayGuestHouseProp() {
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var houseProp = [];
    var guestHouseTable = ``;
    var guestHouseTable = `<table class="table table-hover"> 
    <tr>
        <th> Name of geust house </th> 
        <th> Region  </th>
        <th> Adress </th> 
        <th> Number of rooms </th> 
        <th> Tariff for adult </th> 
        <th> Tariff for kids > 2 ans  </th>
        <th> Tariff for adult at season  </th>
        <th> Tariff for kids > 2 ans at season </th>
        <th> Actions </th> 
    </tr> `;

    for (let i = 0; i < houses.length; i++) {
        if (connectedUserMH.id == houses[i].idProp) {
            houseProp.push(houses[i]);
            guestHouseTable = guestHouseTable + `
        <tr>
            <td> ${houseProp[i].NameHouse} </td>
            <td> ${houseProp[i].region} </td>
            <td> ${houseProp[i].adress} </td>
            <td> ${houseProp[i].numberRooms} </td>
            <td> ${houseProp[i].tariffAdult} </td>
            <td> ${houseProp[i].tariffKids} </td>
            <td> ${houseProp[i].tariffAdultSeason} </td>
            <td> ${houseProp[i].tariffKidsSeason} </td>
            <td>
                <button type="button" class="btn btn-danger" style="margin-bottom: 5px;" onclick="editGeustHouse(${houseProp[i].id})">Edit</button>
                <button type="button" class="btn btn-warning"  onclick="deleteObject(${searchPosition(houseProp[i].id, 'houses')},'houses')">Delete</button>
            </td>
        </tr>`;
        }
    }
    guestHouseTable = guestHouseTable + `</table>`;
    document.getElementById("guestHouseTable").innerHTML = guestHouseTable;
}

function searchPosition(id, T) {
    var tab = JSON.parse(localStorage.getItem(T) || "[]");
    var pos;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == id) {
            pos = i;
        }
    }
    return pos;
}

function editGeustHouse(id) {
    var searchedMH = rechercherObjet(id, "houses");
    var editHouse = ` 
    
    <div class="col-md-12 form-group">
        <input type="number" class="form-control" id="newNumberRooms" name="newNumberRooms" placeholder="Number of Rooms" value = ${searchedMH.numberRooms}>
        <span id="newNumberRoomsError"></span>
    </div>

    <div class="col-md-12 form-group">
        <input type="number" class="form-control" id="newTariffAdult" name="newTariffAdult" placeholder="Tariff for adult" value = ${searchedMH.tariffAdult}>
        <span id="newTariffAdultError"></span>
    </div>

    <div class="col-md-12 form-group">
        <input type="number" class="form-control" id="newTariffKids" name="newTariffKids" placeholder="Tariff for kids older than 2 years" value = ${searchedMH.tariffKids}>
        <span id="newTariffKidsError"></span>
    </div>

    <div class="col-md-12 form-group">
        <input type="number" class="form-control" id="newTariffAdultSeason" name="newTariffAdultSeason" placeholder="Tarif for adult at season" value = ${searchedMH.tariffAdultSeason}>
        <span id="newTariffAdultSeasonError"></span>
    </div>

    <div class="col-md-12 form-group">
        <input type="number" class="form-control" id="newTariffKidsSeason" name="newTariffKidsSeason" placeholder="Tariff for kids > 2 years at season" value = ${searchedMH.tariffKidsSeason}>
        <span id="newTariffKidsSeasonError"></span>
    </div>

    <div class="col-md-12 form-group">
        <button type="submit" value="submit" class="btn btn-warning" onclick="validateEditGuestHouse(${searchedMH.id})" > Validate </button>
    </div>
    `;
    document.getElementById("editHouse").innerHTML = editHouse;
}

function rechercherObjet(id, T) {
    var objets = JSON.parse(localStorage.getItem(T) || "[]");
    for (let i = 0; i < objets.length; i++) {
        var obj;
        if (objets[i].id == id) {
            obj = objets[i];
        }
    }
    return obj;
}

function validateEditGuestHouse(id) {
    var newNumberRooms = document.getElementById('newNumberRooms').value;
    if (newNumberRooms > 0) {
        document.getElementById("newNumberRoomsError").innerHTML = "";
    }
    else {
        document.getElementById("newNumberRoomsError").innerHTML = "Number of rooms is invalide";
        document.getElementById("newNumberRoomsError").style.color = "red";
    }

    var newTariffAdult = document.getElementById('newTariffAdult').value;
    if (newTariffAdult > 0) {
        document.getElementById("newTariffAdultError").innerHTML = "";
    }
    else {
        document.getElementById("newTariffAdultError").innerHTML = "Tariff is invalide";
        document.getElementById("newTariffAdultError").style.color = "red";
    }

    var newTariffKids = document.getElementById('newTariffKids').value;
    if (newTariffKids > 0) {
        document.getElementById("newTariffKidsError").innerHTML = "";
    }
    else {
        document.getElementById("newTariffKidsError").innerHTML = "Tariff is invalide";
        document.getElementById("newTariffKidsError").style.color = "red";
    }

    var newTariffAdultSeason = document.getElementById('newTariffAdultSeason').value;
    if (newTariffAdultSeason > 0) {
        document.getElementById("newTariffAdultSeasonError").innerHTML = "";
    }
    else {
        document.getElementById("newTariffAdultSeasonError").innerHTML = "Tariff is invalide";
        document.getElementById("newTariffAdultSeasonError").style.color = "red";
    }

    var newTariffKidsSeason = document.getElementById('newTariffKidsSeason').value;
    if (newTariffKidsSeason > 0) {
        document.getElementById("newTariffKidsSeasonError").innerHTML = "";
    }
    else {
        document.getElementById("newTariffKidsSeasonError").innerHTML = "Tariff is invalide";
        document.getElementById("newTariffKidsSeasonError").style.color = "red";
    }

    if ((newNumberRooms > 0) && (newTariffAdult > 0) && (newTariffKids > 0) && (newTariffAdultSeason > 0) && (newTariffKidsSeason > 0)) {
        var houses = JSON.parse(localStorage.getItem("houses") || "[]");
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id == id) {
                houses[i].numberRooms = newNumberRooms;
                houses[i].tariffAdult = newTariffAdult;
                houses[i].tariffKids = newTariffKids;
                houses[i].tariffAdultSeason = newTariffAdultSeason;
                houses[i].tariffKidsSeason = newTariffKidsSeason;
            }
            localStorage.setItem("houses", JSON.stringify(houses));
            location.reload();
        }
    }
}

function displayGuestHouseAdmin() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var guestHouseTableAdmin = ``;
    var guestHouseTableAdmin = `<table class="table table-hover"> 
    <tr>
        <th> Name of geust house </th> 
        <th> Region  </th>
        <th> Adress </th> 
        <th> Number of rooms </th> 
        <th> Tariff for adult </th> 
        <th> Tariff for kids > 2 ans  </th>
        <th> Tariff for adult at season  </th>
        <th> Tariff for kids > 2 ans at season </th>
        <th> Actions </th> 
    </tr> `;

    for (let i = 0; i < houses.length; i++) {
        guestHouseTableAdmin = guestHouseTableAdmin + `
        <tr>
            <td> ${houses[i].NameHouse} </td>
            <td> ${houses[i].region} </td>
            <td> ${houses[i].adress} </td>
            <td> ${houses[i].numberRooms} </td>
            <td> ${houses[i].tariffAdult} </td>
            <td> ${houses[i].tariffKids} </td>
            <td> ${houses[i].tariffAdultSeason} </td>
            <td> ${houses[i].tariffKidsSeason} </td>
            <td>
                <button type="button" class="btn btn-warning"  onclick="deleteObject(${searchPosition(houses[i].id, 'houses')},'houses')">Delete</button>
            </td>
        </tr>`;
    }
    guestHouseTableAdmin = guestHouseTableAdmin + `</table>`;
    document.getElementById("guestHouseTableAdmin").innerHTML = guestHouseTableAdmin;
}

function displayGuestHouseIndex() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var houseIndex = ``;
    for (let i = 0; i < houses.length; i++) {
        houseIndex = houseIndex + `
        <div class="col-lg-3 col-md-6 col-sm-6 p-0">
            <img style="padding-left: 10px;" src='${houses[i].image}'/>
            <h4 style="padding-left: 20px;">${houses[i].NameHouse}</h4>
            <h4 style="padding-left: 20px;">${houses[i].region}</h4>
            <h2 style="padding-left: 20px;">${houses[i].tariffAdult} dt/day</h2> <br>
            <button class="submitButton" type="submit" onclick="goToReservation(${houses[i].id})" style="margin-left: 110px;">Booking Now</button> 
        </div>
       `;
    }
    document.getElementById("houseIndex").innerHTML = houseIndex;
}

function goToReservation(id) {
    localStorage.setItem("idHouseToReserve", id);
    location.replace("reservation.html");
}

function searchById(x, T) {
    var objects = JSON.parse(localStorage.getItem(T) || "[]");
    var obj;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].id == x) {
            obj = objects[i];
        }
    }
    return obj;
}

function displayHouseToReserve() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var idHouseToReserve = localStorage.getItem("idHouseToReserve");
    var houseReservation = ``;
    for (let i = 0; i < houses.length; i++) {
        if (idHouseToReserve == houses[i].id) {
            houseReservation = houseReservation +`
                <div class="col-lg-4 p-0 order-lg-1 col-md-6 order-md-1">
                    <img style="padding-left: 10px;" src='${houses[i].image}'/>
                </div>
                <div class="col-lg-4 p-0 order-lg-2 col-md-6 order-md-2">
                    <div class="latest__blog__text_Reservation">
                        <h2>${houses[i].NameHouse}</h2>
                        <h2>${houses[i].region}</h2>
                        <h5>Adress: ${houses[i].adress}</h5>
                        <h5>Number of rooms: ${houses[i].numberRooms}</h5>
                        <h5>Tariff for Adult: ${houses[i].tariffAdult} DT</h5>
                        <h5>Tariff for kids: ${houses[i].tariffKids} DT</h5>
                        <h5>Tariff for Adult at season: ${houses[i].tariffAdultSeason} DT</h5>
                        <h5>Tariff for kids at season: ${houses[i].tariffKidsSeason} DT</h5>
                    </div>
                </div>
                <div class="col-lg-4 p-0 order-lg-2 col-md-6 order-md-2">
                    <p style="padding-left: 30px; padding-top: 30px"> Description:<br> ${houses[i].description}</p>
                </div>
            `;
        }
    }
    document.getElementById("houseReservation").innerHTML = houseReservation;
}

function validateReservation() {
    var reservedRooms = document.getElementById("nbrReservedRooms").value;
    var dateCheckIn = document.getElementById("dateCheckIn").value;
    var dateCheckOut = document.getElementById("dateCheckOut").value;
    var numberAdult = document.getElementById("numberAdult").value;
    var numberKids = document.getElementById("numberKids").value;
    var idHouseToReserve = localStorage.getItem("idHouseToReserve");
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var searchedHouse = searchById(idHouseToReserve, "houses");

    // if ((reservedRooms > 0) && (searchedHouse.availableRooms > 0) && (connectedUserMH.role == "user") ) {
    //     document.getElementById("roomsError").innerHTML = "";
    if (connectedUserMH.role == "user") {
        var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
        var idReservation = JSON.parse(localStorage.getItem("idReservation") || "1");

        var reservation = {
            id: idReservation,
            idHouse: searchedHouse.id,
            idUser: connectedUserMH.id,
            reservedRooms: reservedRooms,
            dateCheckIn : dateCheckIn,
            dateCheckOut: dateCheckOut,
            numberAdults: numberAdult,
            numberKids: numberKids
        };

        reservations.push(reservation);
        localStorage.setItem("reservations", JSON.stringify(reservations));
        localStorage.setItem("idReservation", idReservation + 1);
    }
    // else{
    //     location.reload()
    //     alert("Hello! I am an alert box!!");
        // document.getElementById("displayError").innerHTML = "You must login with your account or create a one if you don't have";
        // document.getElementById("displayError").style.color = "red";
    // else {
    //     document.getElementById("roomsError").innerHTML = "Number of rooms is not available";
    //     document.getElementById("roomsError").style.color = "red";
    // }   
}

function date(){
    // récupérer la date actuelle sous forme littérale (ex: Sat Jun 05 2021 10:24:47 GMT+0200 (heure d’été d’Europe centrale))
    let date= new Date(); 
    // renvoyer la partie jj/mm/aaaa de cette date récupérée déjà
    let dateLocale= date.toLocaleDateString(); 
    let day='';
    let month='';
    let year='';
    for(let i=0;i<2;i++){
          day=day+dateLocale[i];
    } 
    for(let j=3;j<5;j++){
          month=month+dateLocale[j];
    } 
    for(let k=6;k<dateLocale.length;k++){
          year=year+dateLocale[k];
    } 
}

function comparerDates(a,b) {
    var V=true;
    var day1='';
    var month1='';
    var year1='';
    var day2='';
    var month2='';
    var year2='';
    for(let i=0;i<2;i++){
          day1=day1+a[i];
          day2=day2+b[i];
    } 
    for(let j=3;j<5;j++){
        month1=month1+a[j];
        month2=month2+b[j];
    } 
    for(let k=6;k<a.length;k++){
        year1=year1+a[k];
        year2=year2+b[k];
    } 
    if (Number(month1)>Number(month2)) {
        V=false;
    }
    else if ( (Number(month1) == Number(month2)) && ( (Number(day1) > Number(day2)) || (Number(day1) == Number(day2)) ) ) {
        V=false;
    }
    else{
        V=true;
    }
    return V;
}

function bag() {
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    var myReservations = [];
    for (let i = 0; i < reservations.length; i++) {
        if (reservations[i].idUser == connectedUserMH.id) {
            myReservations.push(reservations[i]);
        }
    }
    var cartTable = ` <table class="table">
    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col" style="padding-left:50px;">The guest House Informations</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Reserved Rooms</th>
            <th scope="col" style="padding-bottom:24px;">Guests</th>
            <th scope="col">Rate per night</th>
            <th scope="col" style="padding-bottom:24px;">Actions</th>
        </tr>
    </thead>
    <tbody> `;
    var totalRate = 0;
    for (let j = 0; j < myReservations.length; j++) {
        var reservedHouse = rechercherObjet(Number(myReservations[j].idHouse), "houses");
        var ratePerNight = Number(myReservations[j].numberAdults) * Number(reservedHouse.tariffAdult) + Number(myReservations[j].numberKids) * Number(reservedHouse.tariffKids);
        var periodStay = 2;
        totalRate = totalRate + ratePerNight * periodStay;
        cartTable = cartTable + `
        <tr>
            <td>
                <img style="padding-left: 10px;" src='${reservedHouse.image}'/>
            </td> 
            <td>
                <div class="latest__blog__text_Reservation">
                    <h5>${reservedHouse.NameHouse}</h2>
                    <h5>${reservedHouse.region}</h2>
                    <h6>${reservedHouse.adress}</h5>
                </div>
            </td>   
            <td>
                <h5>${myReservations[j].dateCheckIn}</h5>
            </td>
            <td>
                <h5>${myReservations[j].dateCheckOut}</h5>
            </td>
            <td>
                <h5 style="margin-left:30px;">${myReservations[j].reservedRooms}</h5>
            </td>
            <td>
                <h5>Adults:${myReservations[j].numberAdults}</h5>
                <h5>Kids: ${myReservations[j].numberKids}</h5>
            </td>
            <td>
                <h5 style="margin-left:12px;">${ratePerNight} DT</h5>
            </td>
            <td>
                <button class="btn btn-danger" onclick="deleteObject(${searchPosition(myReservations[j].id, 'reservations')},'reservations')">Cancel</button>
                <button class="btn btn-warning" onclick="editReservation(${myReservations[j].id})">Edit</button>
            </td>
        </tr>
        `;
    }
    cartTable = cartTable + ` <tr>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
        </td>
        <td>
            <h5>Total rate of stay</h5>
        </td>
        <td>
            <h5>${totalRate} DT</h5>
        </td>
        <td>
        </td>
        <td>
        </td>
    </tr>
    </tbody>
    </table> `;
    document.getElementById("cartTable").innerHTML = cartTable;
}

function editReservation(id) {
    var reservation = rechercherObjet(id, "reservations");
    var editReservationTable = `
            <form action="#" class="filter__form">
                <div class="filter__form__item">
                    <p>Check In</p>
                    <div class="filter__form__datepicker">
                        <span class="icon_calendar"></span>
                        <input type="text" class="datepicker_pop check__in" id="editdateCheckIn" value=${reservation.dateCheckIn}>
                        <i class="arrow_carrot-down"></i>
                    </div>
                </div>
                <div class="filter__form__item">
                    <p>Check Out</p>
                    <div class="filter__form__datepicker">
                        <span class="icon_calendar"></span>
                        <input type="text" class="datepicker_pop check__out" id="editdateCheckOut" value=${reservation.dateCheckOut}>
                        <i class="arrow_carrot-down"></i>
                    </div>
                </div>
                <div class="filter__form__item filter__form__item--select_reservation">
                    <p>Person</p>
                    <div class="filter__form__select_reservation">
                        <span class="icon_group"></span>
                        <select id="editNumberAdult" value=${reservation.numberAdults}>
                            <option value="1">1 Adult</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                            <option value="5">5 Adults</option>
                            <option value="6">6 Adults</option>
                        </select>
                    </div>
                </div>
                <div class="filter__form__item filter__form__item--select_reservation">
                    <p>Children</p>
                    <div class="filter__form__select_reservation">
                        <span class="icon_group"></span>
                        <select id="editNumberKids" value=${reservation.numberKids}>
                            <option value="1">1 kid</option>
                            <option value="2">2 kids</option>
                            <option value="3">3 kids</option>
                            <option value="4">4 kids</option>
                        </select>
                    </div>
                </div>
                <div class="filter__form__item filter__form__item--numberReservedRooms">
                    <p>Reserved rooms</p>
                    <div class="filter__form__input_number">
                        <input type="number" placeholder="Number of rooms" id="editNbrReservedRooms" min="1" value=${reservation.reservedRooms}>
                    </div>
                </div>
                <a href="bag.html" onclick="validateEditReservation(${reservation.id})">Valid Edit</a>
            </form>
    `;
    document.getElementById("editReservationTable").innerHTML = editReservationTable;
}

function validateEditReservation(id) {
    var newDateCheckIn = document.getElementById("editdateCheckIn").value;
    var newDateCheckOut = document.getElementById("editdateCheckOut").value;
    var newNumberAdult = document.getElementById("editNumberAdult").value;
    var newNumberKids = document.getElementById("editNumberKids").value;
    var newNbrReservedRooms = document.getElementById("editNbrReservedRooms").value;
    var reservation = rechercherObjet(id, "reservations");
    var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
        for (let i = 0; i < reservations.length; i++) {
            if (reservations[i].id == reservation.id) {
                reservations[i].dateCheckIn = newDateCheckIn;
                reservations[i].dateCheckOut = newDateCheckOut;
                reservations[i].numberAdults = newNumberAdult;
                reservations[i].numberKids = newNumberKids;
                reservations[i].reservedRooms = newNbrReservedRooms;
            }
        }
    localStorage.setItem("reservations", JSON.stringify(reservations));
    location.reload();
}

function searchRegion(event) {
    var key = event.keyCode;
    if (key == 13) {
        var region = document.getElementById("regionToSearch").value;
        localStorage.setItem("regionToSearch", region);
        location.replace("result.html");
    }
}

function displaySearchedHouses() {
    var region = localStorage.getItem("regionToSearch");
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var searchedHouses = [];
    for (let i = 0; i < houses.length; i++) {
        if ((houses[i].region).toLowerCase() == region.toLowerCase()) {
            searchedHouses.push(houses[i]);
        }
    }
    var resultSearch = ``;
    for (let j = 0; j < searchedHouses.length; j++) {
        resultSearch = resultSearch + `
        <div class="col-lg-3 col-md-6 col-sm-6 p-0">
            <img style="padding-left: 10px;" src='${searchedHouses[j].image}'/>
            <h4 style="padding-left: 20px;">${searchedHouses[j].NameHouse}</h4>
            <h4 style="padding-left: 20px;">${searchedHouses[j].region}</h4>
            <h2 style="padding-left: 20px;">${searchedHouses[j].tariffAdult} DT/day</h2> <br>
            <button class="submitButton" type="submit" onclick="goToReservation(${searchedHouses[j].id})" style="margin-left: 110px;">Booking Now</button> 
        </div>
        `;
    }
    document.getElementById("resultSearch").innerHTML = resultSearch;
}

function displayReservationAdmin() {
    var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    var reservationsAdminTable = ``;
    var reservationsAdminTable = `<table class="table table-hover"> 
    <tr>
        <th> Client Name </th> 
        <th> Email  </th>
        <th> Telephone </th> 
        <th> Proprietor Name </th> 
        <th> House Name </th> 
        <th> Check In </th>
        <th> Check Out </th>
        <th> Number Adults </th>
        <th> Number Kids </th>
        <th> Reserved Rooms </th>
    </tr> `;

    for (let i = 0; i < reservations.length; i++) {
        var userReserving=rechercherObjet(reservations[i].idUser, "usersMH");
        var houseReserved=rechercherObjet(reservations[i].idHouse, "houses");
        var propHouse=rechercherObjet(houseReserved.idProp, "usersMH");
        reservationsAdminTable = reservationsAdminTable + `
        <tr>
            <td> ${userReserving.firstName + ' ' + userReserving.lastName} </td>
            <td> ${userReserving.email} </td>
            <td> ${userReserving.tel} </td>
            <td> ${propHouse.firstName + ' ' + propHouse.lastName} </td>
            <td> ${houseReserved.NameHouse} </td>
            <td> ${reservations[i].dateCheckIn} </td>
            <td> ${reservations[i].dateCheckOut} </td>
            <td> ${reservations[i].numberAdults} </td>
            <td> ${reservations[i].numberKids}</td>
            <td> ${reservations[i].reservedRooms}</td>
        </tr>`;
    }
    reservationsAdminTable = reservationsAdminTable + `</table>`;
    document.getElementById("reservationsAdminTable").innerHTML = reservationsAdminTable;
}

function displayReservationProp() {
    var reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    var connectedUserMH = JSON.parse(localStorage.getItem("connectedUserMH"));
    var propReservations = [];
    var reservationsPropTable = ``;
    var reservationsPropTable = `<table class="table table-hover"> 
    <tr>
        <th> Client Name </th> 
        <th> Email  </th>
        <th> Telephone </th> 
        <th> House Name </th> 
        <th> Check In </th>
        <th> Check Out </th>
        <th> Number Adults </th>
        <th> Number Kids </th>
        <th> Reserved Rooms </th>
    </tr> `;
    
    for (let j = 0; j < reservations.length; j++) {
        var houseReserved=rechercherObjet(reservations[j].idHouse, "houses");
        if (houseReserved.idProp == connectedUserMH.id) {
            propReservations.push(reservations[j]);
        }        
    }

    for (let i = 0; i < propReservations.length; i++) {
        var userReserving=rechercherObjet(propReservations[i].idUser, "usersMH");
        var houseReserved=rechercherObjet(propReservations[i].idHouse, "houses");
        reservationsPropTable = reservationsPropTable + `
        <tr>
            <td> ${userReserving.firstName + ' ' + userReserving.lastName} </td>
            <td> ${userReserving.email} </td>
            <td> ${userReserving.tel} </td>
            <td> ${houseReserved.NameHouse} </td>
            <td> ${propReservations[i].dateCheckIn} </td>
            <td> ${propReservations[i].dateCheckOut} </td>
            <td> ${propReservations[i].numberAdults} </td>
            <td> ${propReservations[i].numberKids}</td>
            <td> ${propReservations[i].reservedRooms}</td>
        </tr>`;
    }
    reservationsPropTable = reservationsPropTable + `</table>`;
    document.getElementById("reservationsPropTable").innerHTML = reservationsPropTable;
}

