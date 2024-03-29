import React from 'react';
import 'assets/general-css/reset.css'
import 'assets/general-css/App.css';
import {Header} from "header/Header";
import {Main} from "main/Main";
import {Skills} from "skills/Skills";
import {Portfolio} from "portfolio/Portfolio";
import {Contact} from "contact/Contact";
import {Feedbacks} from "feedbacks/Feedbacks";

export const App = () => {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Portfolio/>
            <Feedbacks/>
            <Contact/>
        </div>
    );
}