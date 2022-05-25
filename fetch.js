let url = 'https://gabrieldiaz39.github.io/APIJSON/JSON%20-%20Diaz%20Diego%20-%20TI51BIS.json';

function loadInfo() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => ShowInfo(data))
        .catch((error) => console.log(error));

    const ShowInfo = (data) => {
        console.log(data)
        let Nombre = "";
        let Edad = "";
        let Nacionalidad = "";
        let FechaNacimiento = "";
        let Educacion = "";
        let Profesional = "";
        let EscuelaGraduacion = "";
        let CodigoPostal = "";
        let Aficiones = "";
        let CuidadOrigen = "";
        let Correo = "";
        let ExperienciaPersonal = "";
        let Presentacion = "";
        Nombre += `
            <li>
             ${data[0].Nombre}
            </li>
        `;
        FechaNacimiento += `
            <li>
             ${data[0].FechaNacimiento}
            </li>
        `;
        Profesional += `
            <li>
            ${data[0].Profesional}
            </li>
        `;
        Aficiones += `
            <li>
            ${data[0].Aficiones}
        `;
        Edad += `
            <li>
            ${data[0].Edad}
            </li>
        `;
        Educacion += `
            <li>
                ${data[0].Educación}
            </li>
        `;
        EscuelaGraduacion += `
            <li>
              ${data[0].EscuelaGraduación}
            </li>
        `;
        CuidadOrigen += `
            <li>
             ${data[0].CuidadOrigen}
            </li>
        `;
        Nacionalidad += `
        <li>
          ${data[0].Nacionalidad}
        </li>
    `;
        CodigoPostal += `
        <li>
         ${data[0].CodigoPostal}
        </li>
    `;
        Correo += `
        <li>
         ${data[0].Correo}
        </li>
    `;
        ExperienciaPersonal += `
        <li>
         ${data[0].ExperenciaPersonal}
        </li>
    `;
        Presentacion += `
        <li>
         ${data[0].Presentacion}
        </li>
    `;

        document.getElementById('name').innerHTML = Nombre;
        document.getElementById('edad').innerHTML = Edad;
        document.getElementById('nacionalidad').innerHTML = Nacionalidad;
        document.getElementById('fechanacimiento').innerHTML = FechaNacimiento;
        document.getElementById('educacion').innerHTML = Educacion;
        document.getElementById('profesional').innerHTML = Profesional;
        document.getElementById('escuelagraduacion').innerHTML = EscuelaGraduacion;
        document.getElementById('codigopostal').innerHTML = CodigoPostal;
        document.getElementById('aficiones').innerHTML = Aficiones;
        document.getElementById('cuidadorigen').innerHTML = CuidadOrigen;
        document.getElementById('correo').innerHTML = Correo;
        document.getElementById('experiencia').innerHTML = ExperienciaPersonal;
        document.getElementById('presentacion').innerHTML = Presentacion;
    }
}

loadInfo();