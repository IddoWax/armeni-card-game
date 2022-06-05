import axios from "axios";
import React from "react";

export default class DefaultApi extends React.Component {
    constructor(config) {
        super(config);
        this.api = axios.create(config);
    }
}