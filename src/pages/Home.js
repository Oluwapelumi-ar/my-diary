import React from "react";
import { Plus } from "react-bootstrap-icons";
import styles from "./Home.module.css";
import Modal from "react-bootstrap/Modal";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <div className={styles.fabcontainer}>
        <div className={styles.fab}>
          <div className={styles.fabcontent}>
            <span >
              <Plus className={styles.faplus} onClick={showModal}/>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`row row-cols-1 row-cols-md-4 g-4 cards ${styles.cards}`}>
          <div className="col">
            <div className= {`${styles.card} ${styles.cardOne}`}>
              <div className="card-body">
                <h5 className={styles.cardTitle}>Diary Title</h5>
                <p
                  className={` d-inline-block text-truncate ${styles.cardText}`}
                  
                >
                  Diary Text
                </p>
                <p
                  className={` d-inline-block text-truncate ${styles.cardText}`}
                  
                >
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Secret Title</label><br></br>
            <input type="text" name="" id="" /><br></br>
            <label> Title</label><br></br>
            <input type="text" name="" id="" /><br></br>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
