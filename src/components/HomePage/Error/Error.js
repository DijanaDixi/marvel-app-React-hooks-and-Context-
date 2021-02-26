import React from "react";
import { faFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Error/Error.module.css";

function Error() {
  return (
    <div className="container">
      <div>
        <div className="col-10 offset-1">
          <div className="row">
            <div className={styles.error}>
              <p className={styles.message}>
                <FontAwesomeIcon
                  icon={faFrownOpen}
                  className={styles.colorFavicon}
                />
                No results found
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
