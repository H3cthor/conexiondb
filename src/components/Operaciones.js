import React, { useState } from "react";

const Operaciones = () => {
    const [view, setView] = useState([]);
    const [products, setProducts] = useState([]);

    const handleView = async () => {
        try{
          const response = await fetch('/api/call_view');
          
          if(response.ok){
            const data = await response.json();

            setView(data.result);
            console.log(data);
          }
          else{
            console.error('Error en la llamada a la vista');
          }
        }
        catch(error){
          console.error(`Error en la solicitud ${error}`)
        }
    }

    const handleSearch = async () =>
    {
        try{
            const response = await fetch('/api/search_products');

            if(response.ok){
                const data = await response.json();

                setProducts(data.products);
                console.log(data.products)
            }else{
                console.error('Error al buscar productos');
            }
        }
        catch(error){
            console.error(`Error en la solicitud: ${error}`);
        }
    }

    return(
        <div>
            <button
                onClick={handleView}
            >
                LLamada a la vista
            </button>
            <div>
            {view.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                view.map( (v) => (
                                    <tr key={v.product_id}>
                                        <td>{v.product_id}</td>
                                        <td>{v.product_name}</td>
                                        <td>{v.product_description}</td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
                  )
                }
            </div>
            <br/>
            <br/>
            <button
            onClick={handleSearch}>
                Buscar productos
            </button>
            <br/>
            <div>
                {products.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                products.map( (product) => (
                                    <tr key={product.product_id}>
                                        <td>{product.product_id}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.product_description}</td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
                  )
                }
            </div>
        </div>        
    );
}

export default Operaciones;

