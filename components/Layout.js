import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
import PageFooter from "./PageFooter";

const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"/>
            </Head>
            <Header />
            {props.children}
            <PageFooter />
        </Container>
    );
};
  
export default Layout;