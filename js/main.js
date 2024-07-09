const dolarContainer = document.getElementById("dolar-container")

const URLDolar = "https://dolarapi.com/v1/ambito/dolares"

const cardsDolar = async () => {
    try {
        const resp = await fetch(URLDolar);
        const data = await resp.json();
        console.table (data)

        data.forEach(element => {
            dolarContainer.innerHTML += `
            <div class="card">
                <h2 class="card-title">${element.nombre}</h2>
                <div class="values-container">
                    <div>
                        <p>
                            Compra
                        </p>
                        <h3>
                            ${element.compra}
                        </h3>
                    </div>
                    <div>
                        <p>
                            Venta
                        </p>                    
                        <h3>
                            ${element.venta}
                        </h3>
                    </div>
                </div>
            </div>
            `
        });
    } catch (error) {
        console.error ("Algo está mal hecho acá")
    }
}

cardsDolar()