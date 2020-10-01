import React from "react";
import "./navButton.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NavButton = () => {
    const {t} = useTranslation()

    return (
        <div className="navBtn">
            <Link className="link1" to="/">
                {t("navbar.home")}
            </Link>

            <Link className="link1" to="/about">
                {t("navbar.about")}
            </Link>

            <Link className="link1" to="/activity">{t("navbar.activities")}</Link>
            <Link className="link1" to="/destinations">{t("navbar.destinations")}</Link>
        </div>
    );
};
export default NavButton;
