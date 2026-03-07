async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
}

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const nombre = this.getAttribute("nombre");
        const precio = this.getAttribute("precio");
        const desc = this.getAttribute("descripcion");
        const imagen = this.getAttribute("imagen") || "https://via.placeholder.com/400x300";

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: rgba(30, 41, 59, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 24px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: all 0.4s ease;
                    backdrop-filter: blur(8px);
                }
                .card:hover {
                    transform: translateY(-12px);
                    border-color: rgba(56, 189, 248, 0.5);
                    background: rgba(30, 41, 59, 0.6);
                }
                .img-box {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s ease;
                }
                .card:hover img {
                    transform: scale(1.08);
                }
                .info {
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }
                h2 {
                    color: white;
                    font-size: 1.3rem;
                    margin: 0 0 0.8rem 0;
                    font-weight: 700;
                }
                p {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                }
                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .price {
                    font-size: 1.6rem;
                    font-weight: 800;
                    color: #38bdf8;
                }
                .btn {
                    background: #38bdf8;
                    color: #0f172a;
                    padding: 0.7rem 1.4rem;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    cursor: pointer;
                }
            </style>
            <div class="card">
                <div class="img-box"><img src="${imagen}"></div>
                <div class="info">
                    <h2>${nombre}</h2>
                    <p>${desc}</p>
                    <div class="footer">
                        <span class="price">$${precio}</span>
                        <div class="btn">Comprar</div>
                    </div>
                </div>
            </div>`;
    }
}

customElements.define("product-card", ProductCard);

cargarComponente("header-placeholder", "componentes/header/header.html");
cargarComponente("footer-placeholder", "componentes/footer/footer.html");