import React from "react";

import "@styles/Filter.scss";
import arrowUp from "@icons/arrow-up.png";
import arrowDown from "@icons/arrow-down.png";

const Filter = ({ handleGender, handleStatus, status, gender }) => {
  const [toggleFilter, setToggleFilter] = React.useState(false);

  const handleToggleFilter = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <>
      <div
        className="filter"
        onMouseEnter={handleToggleFilter}
        onMouseLeave={handleToggleFilter}
      >
        <div className="filter__button">
          <span className="filter__title">Filter</span>
          <img
            className="filter__icon"
            src={!toggleFilter ? arrowDown : arrowUp}
            alt=""
          />
        </div>
        {toggleFilter && (
          <div className="filter__wrapper">
            <span className="filter__group">Status</span>
            <div className="filter__line">
              <input
                type="radio"
                id="ch0"
                name="status"
                value=""
                onChange={handleStatus}
                {...(status.length < 1 ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch0">None</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch1"
                name="status"
                value="alive"
                onChange={handleStatus}
                {...(status === "alive" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch1">Alive</label>
            </div>
            <div className="filter__line"></div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch2"
                name="status"
                value="dead"
                onChange={handleStatus}
                {...(status === "dead" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch2">Dead</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch3"
                name="status"
                value="unknown"
                onChange={handleStatus}
                {...(status === "unknown" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch3">Unknown</label>
            </div>
            <span className="filter__group">Gender</span>
            <div className="filter__line">
              <input
                type="radio"
                id="ch8"
                name="gender"
                value=""
                onChange={handleStatus}
                {...(gender === "" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch8">None</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch4"
                name="gender"
                value="female"
                onChange={handleGender}
                {...(gender === "female" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch4">Female</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch5"
                name="gender"
                value="male"
                onChange={handleGender}
                {...(gender === "male" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch5">Male</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch6"
                name="gender"
                value="genderless"
                onChange={handleGender}
                {...(gender === "genderless" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch6">Genderless</label>
            </div>
            <div className="filter__line">
              <input
                type="radio"
                id="ch7"
                name="gender"
                value="unknown"
                onChange={handleGender}
                {...(gender === "unknown" ? { defaultChecked: true } : null)}
              />
              <label htmlFor="ch7">Unknown</label>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { Filter };
