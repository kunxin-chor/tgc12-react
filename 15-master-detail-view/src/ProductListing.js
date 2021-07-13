import React, {useContext} from "react"
import ProductContext from "./ProductContext"
import { Link } from 'react-router-dom'

export default function ProductListing() {
    let context = useContext(ProductContext);

    return <React.Fragment>
        <ul>
            {context.products().map(p => <li key={p.id}>
               <Link to={"/productDetails/" + p.id}>
                {p.product_name}
                </Link>
            </li>)}
        </ul>

    </React.Fragment>

}