function generateFakePerson() {

    function generateFakeFirstName() {
        var fnames = ["a", "à", "abaissa", "abaissable", "abaissables", "abaissai", "abaissaient", "abaissais", "abaissait", "abaissâmes", "abaissant", "abaissante", "abaissantes", "abaissants", "abaissas", "abaissasse", "abaissassent", "abaissasses", "abaissassiez", "abaissassions", "abaissât", "abaissâtes", "abaisse", "abaissé", "abaissée", "abaissées", "abaisse-langue", "abaissement", "abaissements", "abaissent", "abaisser", "abaissera", "abaisserai", "abaisseraient", "abaisserais", "abaisserait", "abaisseras", "abaissèrent", "abaisserez", "abaisseriez", "abaisserions", "abaisserons", "abaisseront", "abaisses", "abaissés", "abaisseur", "abaisseurs", "abaissez", "abaissiez", "abaissions", "abaissons", "abajoue", "abajoues", "abandon", "abandonna", "abandonnai", "abandonnaient", "abandonnais", "abandonnait", "abandonnâmes", "abandonnant", "abandonnas", "abandonnasse", "abandonnassent", "abandonnasses", "abandonnassiez", "abandonnassions", "abandonnât", "abandonnataire", "abandonnataires", "abandonnâtes", "abandonne", "abandonné", "abandonnée", "abandonnées", "abandonnent", "abandonner", "abandonnera", "abandonnerai", "abandonneraient", "abandonnerais", "abandonnerait", "abandonneras", "abandonnèrent", "abandonnerez", "abandonneriez", "abandonnerions", "abandonnerons", "abandonneront", "abandonnes", "abandonnés", "abandonnez", "abandonniez", "abandonnions", "abandonnons", "abandons", "abaque", "abaques", "abasourdi", "abasourdie", "abasourdies", "abasourdîmes", "abasourdir", "abasourdira", "abasourdirai", "abasourdiraient", "abasourdirais", "abasourdirait", "abasourdiras", "abasourdirent", "abasourdirez", "abasourdiriez", "abasourdirions", "abasourdirons", "abasourdiront", "abasourdis", "abasourdissaient", "abasourdissais", "abasourdissait", "abasourdissant", "abasourdissante", "abasourdissantes", "abasourdissants", "abasourdisse", "abasourdissement", "abasourdissements", "abasourdissent", "abasourdisses", "abasourdissez", "abasourdissiez", "abasourdissions", "abasourdissons", "abasourdit", "abasourdît", "abasourdîtes", "abat", "abatage", "abatages", "abâtardi", "abâtardie", "abâtardies", "abâtardîmes", "abâtardir", "abâtardira", "abâtardirai", "abâtardiraient", "abâtardirais", "abâtardirait", "abâtardiras", "abâtardirent", "abâtardirez", "abâtardiriez", "abâtardirions", "abâtardirons", "abâtardiront", "abâtardis", "abâtardissaient", "abâtardissais", "abâtardissait", "abâtardissant", "abâtardisse", "abâtardissement", "abâtardissements", "abâtardissent", "abâtardisses", "abâtardissez", "abâtardissiez"];
        return randomArrayElm(fnames);
    }

    /*function generateFakeLastName() {
        var lnames = ["Adams", "Anderson", "Boudreaux", "Brown", "Camden", "Jackson", "Johnson", "Jones", "Miller", "Moneymaker", "Moore", "Sharp", "Smith", "Stroz", "Taylor", "Thomas", "Williams", "Wilson",
                      "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright",
                      "Lopez", "Hill", "Scott", "Green", "Baker", "Gonzales", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner"];
        return randomArrayElm(lnames);
    }*/

    /*function generateFakeDepartment() {
        return randomArrayElm(["Engineering", "Marketing", "Janitorial", "Sales", "Quality Assurance", "Training", "Evangelism", "Product Management"]);
    }*/

    var person = {};
    person.firstname = generateFakeFirstName();
    //person.lastname = generateFakeLastName();
    //person.department = generateFakeDepartment();

    //person.email = person.firstname.charAt(0).toLowerCase() + person.lastname.toLowerCase() + "@fakecorp.com";
    return person;
}

function randomArrayElm(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}