const html = (location = '.') => { return `
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container-fluid">

        <!-- github logo -->
        <a class="navbar-brand" href="https://github.com/rvnnie">
          <i class='bx bxl-github bx-md' color='#ffffff'></i>
        </a>

        <a class="navbar-brand" href="${location}/index.html">rvnnie</a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav">
            <li class="nav-item">
              <a class="nav-link" href="${location}/pages/terminal.html">Terminal</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${location}/pages/projects.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${location}/pages/tools.html">Tools</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  `
}

class Navbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = html(window.location.href.endsWith('index.html') ? '.' : '..')
    }
}

customElements.define('nav-bar', Navbar)