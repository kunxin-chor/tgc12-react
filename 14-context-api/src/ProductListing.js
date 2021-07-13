import React, {useContext} from "react"
import ProductContext from "./ProductContext"

export default function ProductListing() {
    let context = useContext(ProductContext);

    return <React.Fragment>
        <ul>
            {context.products().map(p => <li key={p.id}>{p.product_name}</li>)}
        </ul>

    </React.Fragment>

}