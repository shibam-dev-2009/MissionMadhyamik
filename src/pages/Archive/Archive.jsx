import React from "react";
import Header from "../../components/Header/Header";
import "./Archive.css";
import assets from "../../assets/assets";
function Archive() {
  return (
    <div className="archive">
        <img className="heroimage" src={assets.NCERT} alt="NCERT books image" />
      <Header
        title="The Digital Stack"
        subtitle="Get all links here, all things are free to read"
      />
      <div className="links">
      <a href=""></a><button className="btn">Get all ME Books here <img src={assets.filepdf} alt="books" /></button>
      <a href=" https://drive.google.com/drive/folders/1qhT55NXDXOJ5ftdnzB3mKMK--L5BkRDj"><button className="btn">Get all HS Books here <img src={assets.filepdf} alt="books" /></button></a>
      <a href="https://chat.whatsapp.com/Jp5xfPfnVoN0sOZUyH5t5B"><button className="btn">Whatsapp Link <img src={assets.whatsapp} alt="Whatsapp" /></button></a>
      <a href="https://www.youtube.com/@MissionMadhyamik100"><button className="btn">Youtube <img src={assets.youtube} alt="youtube" /></button></a>
      <a href="https://t.me/+6y6tcv4zvxBhYTg1"><button className="btn">Telegram <img src={assets.telegram} alt="telegram" /></button></a>
</div>
      <div className="videos">
        <iframe width="360" height="215" src="https://www.youtube.com/embed/NsdM7VlDJN4?si=NNbM5ShOGqYBxnRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/spVzMllGW98?si=pFOc2qLTdI0K81WE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/RogJ5yXJy9Q?si=8Bz-ApGzf95ErTtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/vtgQhB9ZICU?si=YL3Ym_SrkY5WC3kn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Archive;
