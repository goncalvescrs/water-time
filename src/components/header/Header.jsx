import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaUserCircle } from "react-icons/fa";
import styles from "./styles.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdLogin, MdWaterDrop } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import ModalSettings from "../modalSettings/ModalSettings";
import { TbLogin2 } from "react-icons/tb";

function Header({ handleSave }) {
  const { handleLogout } = useContext(UserContext);
  const { userData } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <ModalSettings
        handleSave={handleSave}
        showSettings={showSettings}
        onClose={() => setShowSettings(false)}
      />
      <div style={{ backgroundColor: "#397097" }}>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <div className={styles.navContainer}>
              <div className={styles.brand}>
                <MdWaterDrop color="#FFFFFF" size={30} />
                <span className={styles.brandName}>WaterTime</span>
              </div>
              <div>
                <ul className={styles.navList}>
                  <li className={styles.navItem}>
                    <RiInformation2Fill
                      color="#FFF"
                      style={{ marginRight: "5px" }}
                    />

                    <a className={styles.navLink} href="#">
                      {"Relatório"}
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
                  </li>
                  <li className={styles.navItem}>
                    <FaUser color="#FFF" style={{ marginRight: "5px" }} />
                    <a className={styles.navLink} href="/cadastro">
                      {"Cadastrar"}
                    </a>
                  </li>
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className={styles.Dropdown}
                    ></Dropdown.Toggle>

                    <Dropdown.Menu style={{ marginTop: ".3rem" }}>
                      <Dropdown.Item
                        className={styles.Dropdown_item}
                        href="/login"
                      >
                        <MdLogin size={20} />

                        {" Entrar"}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className={styles.Dropdown_item}
                        href="#/premium"
                      >
                        <FaCrown />
                        {" Premium"}
                      </Dropdown.Item>

                      {/* <Dropdown.Divider /> */}
                      {/* <Dropdown.Item
                        className={styles.Dropdown_item}
                        href=""
                        onClick={handleLogout}
                      >
                        <MdLogout size={20} /> Sair
                      </Dropdown.Item> */}
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
