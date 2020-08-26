import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {MainNavItemT, Unstable_AppNavBar as AppNavBar, UserNavItemT} from "baseui/app-nav-bar";
import {ApplicationRoute, isApplicationRoute} from "../routes";

type Props = {
    routes: MainNavItemT[]
}

export const Menu = ({ routes } : Props) => {

    const history = useHistory()
    const location = useLocation()

    /**
     * The ApplicationRoute type adds some extra features to the baseUI MainNavItemT. We check
     * for the type using self defined type guards and use these features to verify the active
     * route
     */
    const isNavItemActive = ({ item } : { item: MainNavItemT | UserNavItemT }) => {
        if (isApplicationRoute(item)) {
            return (item as ApplicationRoute).path === location.pathname
        }

        return false
    }

    /**
     * The ApplicationRoute type adds some extra features to the baseUI MainNavItemT. We check
     * for the type using self defined type guards and use these features to redirect
     * to the selected route.
     */
    const onNavItemSelect = ({ item } : { item : MainNavItemT | UserNavItemT }) => {
        if (isApplicationRoute(item)) {
            return history.push((item as ApplicationRoute).path)
        }

        return
    }

    return (
            <AppNavBar
                appDisplayName="Prayerflick"
                mainNav={ routes }
                isNavItemActive={isNavItemActive}
                onNavItemSelect={onNavItemSelect}
            />
    )
}
