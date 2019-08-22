import React from "react";
import './navigation-tabs';
import styles from './navigation-tabs.module.scss';

export const DomainTableRows = (props) =>
    props.tableItems.map((item, index) =>
        (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
            </tr>
        ));

