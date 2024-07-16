function changeLanguage(lang) {
    var content = document.getElementById('content');
    if (lang === 'ar') {
        content.innerHTML = 'اسمي كريم أو جوشوا، من الجنسية المصرية. أعمل في مجال البرمجة منذ <font color="red">2018</font>. لدي شركة تطوير تدعى Rozx.';
        content.className = 'arabic-text';
    } else if (lang === 'en') {
        content.innerHTML = 'My name is Karim or Joshua, Egyptian nationality. I have been working in the field of programming since <font color="red">2018</font>. I have a development company called Rozx.';
        content.className = 'english-text';
    } else if (lang === 'fr') {
        content.innerHTML = 'Je m\'appelle Karim ou Joshua, de nationalité égyptienne. Je travaille dans le domaine de la programmation depuis <font color="red">2018</font>. J\'ai une entreprise de développement appelée Rozx.';
        content.className = 'english-text';
    } else if (lang === 'de') {
        content.innerHTML = 'Mein Name ist Karim oder Joshua, ägyptischer Nationalität. Ich arbeite seit <font color="red">2018</font> im Bereich Programmierung. Ich habe eine Entwicklungsfirma namens Rozx.';
        content.className = 'english-text';
    }
}
