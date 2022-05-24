import { Switch, Route } from "react-router";

import HomePage from "../pages/client/HomePage";

const Client = () => {
    return (
        <Switch>
            <Route path="/" component={HomePage} exact />
        </Switch>
    );
};

export default Client;
