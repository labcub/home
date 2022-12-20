class Header extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<header>
			<div class="header">
				<span class="head-text">Labcub</span>
			</div>
			<div class="nav">
				<nav>
					<a class="nav-link" href="">Home</a>
					<a class="nav-link" href="">Products</a>
					<a class="nav-link" href="">Services</a>
					<a class="nav-link" href="">Payments</a>
					<a class="nav-link" href="">Contact</a>
					<a class="nav-link" href="">About Us</a>
				</nav>
			</div>
		</header>
		`
	}
}

customElements.define('lc-header', Header);
