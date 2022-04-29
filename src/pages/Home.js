import React from "react";
import { Plus } from "react-bootstrap-icons";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.fabcontainer}>
        <div className={styles.fab}>
          <div className={styles.fabcontent}>
            <span >
              <Plus className={styles.faplus} />
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 cards">
          <div className="col">
            <div className="card card-one">
              <div className="card-body">
                <h5 className="card-title">Diary Title</h5>
                <p
                  className="card-text d-inline-block text-truncate"
                  
                >
                  Diary Text
                </p>
                <p
                  className="card-text d-inline-block text-truncate"
                  
                >
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
