import React from "react";
import './navigation-tabs';

export const DomainTableRows = (props) =>
<tbody>
{
    props.tableItems.map((item, index) =>
        (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{new Date(item.updatedAt).toISOString().slice(0,10)}</td>
            </tr>
        )
    )
}
</tbody>


