import React, {useState, useEffect} from 'react';
import axios from "axios";
import {URL} from '../../Constants'

const Channel = () => {
    const fetchChannels = () => {
        axios.get(`${URL}/channels`).then(res => {
            console.log(res)
        })
    }

    useEffect(() => {
        fetchChannels();
    }, []);

    return <h1>Hello</h1>;
}