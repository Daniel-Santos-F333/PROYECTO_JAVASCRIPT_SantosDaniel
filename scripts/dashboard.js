
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.textContent.trim();
        const contentArea = document.querySelector('.derecha');
        if (section === "Dashboard") {
            contentArea.innerHTML = "<h2>Bienvenido al Dashboard</h2><p>Estadisticas:</p>";
        } else if (section === "Cursos") {
            contentArea.innerHTML = "<h2>Cursos</h2><p>Gestionar los cursos.</p>";
        } else if (section === "Profesores") {
            contentArea.innerHTML = "<h2>Profesores</h2><p>Gestionar a los profesores.</p>";
        } else if (section === "Estudiantes") {
            contentArea.innerHTML = "<h2>Estudiantes</h2><p>Gestionar a los estudiantes.</p>";
        } else if (section === "Configuración") {
            contentArea.innerHTML = "<h2>Configuración</h2><p>Ajusta la configuración.</p>";
        }
    });
});
