import {useContext} from "react";
import {PageContext} from "../context";


export default function Invoices() {
    const context = useContext(PageContext)
    console.log(context);
    return (
        <main style={{padding: "1rem"}}>
            <h2>Invoices</h2>
        </main>
    );
}
