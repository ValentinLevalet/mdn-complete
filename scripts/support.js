function generateFakePerson() {

    function generateFakeFirstName() {
        var fnames = ["a", "�", "abaissa", "abaissable", "abaissables", "abaissai", "abaissaient", "abaissais", "abaissait", "abaiss�mes", "abaissant", "abaissante", "abaissantes", "abaissants", "abaissas", "abaissasse", "abaissassent", "abaissasses", "abaissassiez", "abaissassions", "abaiss�t", "abaiss�tes", "abaisse", "abaiss�", "abaiss�e", "abaiss�es", "abaisse-langue", "abaissement", "abaissements", "abaissent", "abaisser", "abaissera", "abaisserai", "abaisseraient", "abaisserais", "abaisserait", "abaisseras", "abaiss�rent", "abaisserez", "abaisseriez", "abaisserions", "abaisserons", "abaisseront", "abaisses", "abaiss�s", "abaisseur", "abaisseurs", "abaissez", "abaissiez", "abaissions", "abaissons", "abajoue", "abajoues", "abandon", "abandonna", "abandonnai", "abandonnaient", "abandonnais", "abandonnait", "abandonn�mes", "abandonnant", "abandonnas", "abandonnasse", "abandonnassent", "abandonnasses", "abandonnassiez", "abandonnassions", "abandonn�t", "abandonnataire", "abandonnataires", "abandonn�tes", "abandonne", "abandonn�", "abandonn�e", "abandonn�es", "abandonnent", "abandonner", "abandonnera", "abandonnerai", "abandonneraient", "abandonnerais", "abandonnerait", "abandonneras", "abandonn�rent", "abandonnerez", "abandonneriez", "abandonnerions", "abandonnerons", "abandonneront", "abandonnes", "abandonn�s", "abandonnez", "abandonniez", "abandonnions", "abandonnons", "abandons", "abaque", "abaques", "abasourdi", "abasourdie", "abasourdies", "abasourd�mes", "abasourdir", "abasourdira", "abasourdirai", "abasourdiraient", "abasourdirais", "abasourdirait", "abasourdiras", "abasourdirent", "abasourdirez", "abasourdiriez", "abasourdirions", "abasourdirons", "abasourdiront", "abasourdis", "abasourdissaient", "abasourdissais", "abasourdissait", "abasourdissant", "abasourdissante", "abasourdissantes", "abasourdissants", "abasourdisse", "abasourdissement", "abasourdissements", "abasourdissent", "abasourdisses", "abasourdissez", "abasourdissiez", "abasourdissions", "abasourdissons", "abasourdit", "abasourd�t", "abasourd�tes", "abat", "abatage", "abatages", "ab�tardi", "ab�tardie", "ab�tardies", "ab�tard�mes", "ab�tardir", "ab�tardira", "ab�tardirai", "ab�tardiraient", "ab�tardirais", "ab�tardirait", "ab�tardiras", "ab�tardirent", "ab�tardirez", "ab�tardiriez", "ab�tardirions", "ab�tardirons", "ab�tardiront", "ab�tardis", "ab�tardissaient", "ab�tardissais", "ab�tardissait", "ab�tardissant", "ab�tardisse", "ab�tardissement", "ab�tardissements", "ab�tardissent", "ab�tardisses", "ab�tardissez", "ab�tardissiez"];
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