import "./Profile.css";
import { useData } from "../../contexts/ContextData";

export default function Profile() {
  const { data } = useData();
  const { profileData } = data;
  const { basicInfo, aboutMe } = profileData;

  return (
    <div className="profile-wrapper">
      <img className="profile__ring" src={profileData.ring} alt="circle" />
      <section className="sec-profile custom-container">
        <h2 className="sec--title">{profileData.title}</h2>
        <div className="profile">
          <div className="basic-info profile__item">
            <h3 className="basic-info__title">{basicInfo.title}</h3>
            {basicInfo.info.map((info) => {
              return (
                <div key={info.label} className="basic-info__option">
                  <label className="basic-info__label">{info.label}</label>
                  <span className="basic-info__text">{info.text}</span>
                </div>
              );
            })}
          </div>
          <div className="profile__about-me profile__item">
            <h3 className="about-me__title">{aboutMe.title}</h3>
            {aboutMe.paragraphs.map((paragraph) => (
              <p className="about-me__paragraphs" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
