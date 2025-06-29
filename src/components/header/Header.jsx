import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import styles from "./styles.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdWaterDrop } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import ModalSettings from "../modalSettings/ModalSettings";

function Header() {
  const { handleLogout } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  function handleSave() {
    console.log("handleSave no cabeçalho");
  }

  return (
    <>
      <div style={{ backgroundColor: "#397097" }}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <div className={styles.navContainer}>
              <div className={styles.brand}>
                <MdWaterDrop color="#FFFFFF" size={30} />
                <a className={styles.brandName} href="#">
                  WaterTime
                </a>
              </div>
              <div>
                <ul className={styles.navList}>
                  {/* <li className={styles.navItem}>
                                    <a className={styles.navLink} href="#">Home</a>
                                </li> */}
                  <li className={styles.navItem}>
                    <RiInformation2Fill
                      color="#FFF"
                      style={{ marginRight: "5px" }}
                    />

                    <a className={styles.navLink} href="#">
                      {userData.name ? userData?.name : "Cadastrar"}
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <FaCrown color="#FFF" style={{ marginRight: "5px" }} />
                    <a className={styles.navLink} href="#">
                      {" "}
                      Premium
                    </a>
                  </li>
                  <li className={styles.navItem}>
                    <IoMdSettings color="#FFF" style={{ marginRight: "5px" }} />
                    <a
                      className={styles.navLink}
                      href=" "
                      onClick={(e) => {
                        e.preventDefault();
                        setShowSettings(true);
                      }}
                    >
                      {"Configurações"}
                    </a>
                    <ModalSettings
                      handleSave={handleSave}
                      showSettings={showSettings}
                      onClose={() => setShowSettings(false)}
                    />
                  </li>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className={styles.Dropdown}
                    >
                      <FaUser />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="">
                        {userData.name ? "Olá " + userData.name : "Cadastrar"}
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-1">
                        Action 01 jhjhjs
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-3" onClick={handleLogout}>
                        <MdLogout /> Sair
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
