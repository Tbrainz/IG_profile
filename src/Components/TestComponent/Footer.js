import React from "react";

export default function Footer(){
    return(
        <footer>
            <div className="footer_con">
                <div className="footer_links">
                    <h2>QUICK LINKS</h2>
                    <ul className="footer_ul">
                        <li><a href="">FQA</a></li>
                        <li><a href="">PERMISSIONS</a></li>
                        <li><a href="">WHATSUPP</a></li>
                        <li><a href="">YOUTUBE</a></li>
                        <li><a href="">FACEBOOK</a></li>
                    </ul>
                </div>


                <div className="footer_right">
                    <small>
                        @copyright 2023 IGLO networks limited
                    </small>
                </div>

            </div>
        </footer>
    )
}