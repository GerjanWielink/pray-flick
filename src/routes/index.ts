import {MainNavItemT} from "baseui/app-nav-bar";
import {ComponentType } from "react";

import Home from './Home'
import Practice from './Practice'

/**
 * Application routes.
 */
export const routes : ApplicationRoute[] = [{
    item: {},
    mapItemToString: () => 'Practice',
    component: Practice,
    path: '/practice'
}, {
    item: {},
    mapItemToString: () => 'Home',
    component: Home,
    path: '/'
}]

/**
 * Extend the MainNavItemT type provided by baseUI to be able
 * to pass the array to the Navbar
 */
export interface ApplicationRoute extends MainNavItemT {
    component: ComponentType,
    path: string
}

/**
 * Type guard to check for our self defined ApplicationRoute type. Is needed because
 * baseUI will require functions taking the MainNavItemT type so we'll need to manually
 * verify for our extended ApplicationRoute type.
 */
export const isApplicationRoute = (route: MainNavItemT) : route is ApplicationRoute => {
    return (route as ApplicationRoute).path !== undefined
        && (route as ApplicationRoute).component !== undefined
}
