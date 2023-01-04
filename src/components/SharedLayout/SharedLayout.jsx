import Navigation from "components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Container, Header } from "./SharedLayout.styled";
import Loader from "components/Loader/Loader";
import { Suspense } from "react";

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Navigation />
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
                </Suspense>
        </Container>
    )
}

export default SharedLayout;