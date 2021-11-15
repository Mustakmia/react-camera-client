import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Camera Shop.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Mustafijur@Phero</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://web.facebook.com/?campaign_id=1653623006&partner_id=googlesem&creative=318466835510&keyword=www%20facebook%20com&extra_1=s%7Cc%7C318466835510%7Cb%7Cwww%20facebook%20com%7C&extra_2=campaignid%3D1653623006%26adgroupid%3D69016732768%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-334665927%26loc_physical_ms%3D9069455%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRoY_C2y1atUL4YW6gNQ5aVsIuQ0q8NbU5KlMdRshUcy2IPbWcgYztYaAtS-EALw_wcB">Instagram</a>
        <a href="https://web.facebook.com/?campaign_id=1653623006&partner_id=googlesem&creative=318466835510&keyword=www%20facebook%20com&extra_1=s%7Cc%7C318466835510%7Cb%7Cwww%20facebook%20com%7C&extra_2=campaignid%3D1653623006%26adgroupid%3D69016732768%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-334665927%26loc_physical_ms%3D9069455%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRoY_C2y1atUL4YW6gNQ5aVsIuQ0q8NbU5KlMdRshUcy2IPbWcgYztYaAtS-EALw_wcB">Youtube</a>
        <a href="https://web.facebook.com/?campaign_id=1653623006&partner_id=googlesem&creative=318466835510&keyword=www%20facebook%20com&extra_1=s%7Cc%7C318466835510%7Cb%7Cwww%20facebook%20com%7C&extra_2=campaignid%3D1653623006%26adgroupid%3D69016732768%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-334665927%26loc_physical_ms%3D9069455%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAnb79BRDgARIsAOVbhRoY_C2y1atUL4YW6gNQ5aVsIuQ0q8NbU5KlMdRshUcy2IPbWcgYztYaAtS-EALw_wcB">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
