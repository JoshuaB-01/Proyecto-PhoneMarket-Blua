
const url = 'http://127.0.0.1:5500/' 


const navElements = [

    {title: 'Home', link: `${url}../private_page/index.html`},
    {title: 'Celulares', link: `${url}../private_page/celulares.html`},
    {title: 'Smartwatch', link: `${url}../private_page/smartwatch.html`},
    {title: 'Accesorios', link: `${url}../private_page/accesorios.html`}
]



export const navbarComponent = `
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        
        // <a href="../private_page/index.html" class="navbar-brand"><img src="../../assets/LogoEmpresa.svg" alt="Logo" style="width: 65px;"></a>          

        <botton class="navbar-toggler text-white bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </botton>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav">
                ${
                    navElements.map(e=>{
                        return `
                        <li class="nav-item">
                            <a class="nav-link text-white fw-bold" href=${e.link}>${e.title}</a>
                        </li>
                        `
                    }).join('')
                }                  
            </ul>            
            
            <div class="container d-flex justify-content-end mx-auto" id="navbarButton">
                <button id="navbarRedirectButton" class="btn btn-danger"><i class="bi bi-box-arrow-left"></i></button>
            </div>
            
        </div>
    </div>
</nav>
`