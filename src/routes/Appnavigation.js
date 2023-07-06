import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import DemoPage from "../demo/DemoPage";
import NewQuestion from "../demo/NewQuestion";
import ReportComponent from "../demo/ReportComponent";
import CostSheet from "../demo/CostSheet";
import Users from "../demo/Users";
import Customers from "../demo/Customers";
import NewCustomer from "../demo/NewCustomer";
import NewUser from "../demo/NewUser";
import SettingsPage from "../demo/SettingPage";
import Quotations from "../demo/Quotations";
import SearchComponent from "../demo/SearchComponent";

export default function AppNavigation() {
    let Pages = useRoutes([
        {
            path: '/',
            element: <AppIndex />,
            children: [
                {
                    path: 'home',
                    element: <DemoPage />
                },
                {
                    path: 'create-new-quotation',
                    element: <NewQuestion />
                },
                {
                    path: 'cost-sheet',
                    element: <CostSheet />
                },
                {
                    path: 'new-user', // Updated to a relative path
                    element: <NewUser />
                },
                {
                    path: 'new-customer', // Updated to a relative path
                    element: <NewCustomer />
                },
                {
                    path: 'report',
                    element: <ReportComponent />
                },
                {
                    path: 'users',
                    element: <Users />,
                },
                {
                    path: 'customers',
                    element: <Customers />,
                },
                {
                    path: 'settings',
                    element: <SettingsPage />
                },
                {
                    path: "/quotations",
                    element: <Quotations />
                },{
                    path: "/search",
                                        element: <SearchComponent />
                }
            ]
        }
    ]);

    return Pages;
}

