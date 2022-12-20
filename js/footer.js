class Footer extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		
		`
	}
}

customElements.define('lc-footer', Footer);