export class InputZhu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
    <polygon points="0 50, 50 20, 100 50" stroke-width="1" stroke="#8d6449" fill="#8d6449" />
    <polygon points="0 50, 50 80, 100 50" stroke-width="1" stroke="#96514d" fill="#96514d" />
</svg>
        `
    }

    // 読み込み時
    connectedCallback() {

    }

    // 購読
    static get observedAttributes() {

        return [];
    }

    // 監視イベント
    attributeChangedCallback() {
        switch (null) {
            default:
                break;
        }
    }
}
customElements.define('input-zhu', InputZhu);
