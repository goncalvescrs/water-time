import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Informations from '../informations/Informations';
import './styles.css'
import InfoUser from '../infoUser/InfoUser';
import Dashboard from '../dashboard/Dashboard';

function TabInfo(props) {
  
  return (
    <Tabs
      defaultActiveKey="data"
      id="uncontrolled-tab-example"
      className="custom-tabs mb-3"
      fill
    >
      <Tab eventKey="data" title="Dados">
        <Informations
          date={props.date}
          cups={props.cups}
          cancel={props.cancel}
          bottleCapacity={props.bottleCapacity}
          currentBottleVolume={props.currentBottleVolume}
          endOfDay={props.endOfDay}
        />
      </Tab>

      <Tab eventKey="contact" title="Usuário">
        <InfoUser/>
      </Tab>

      <Tab eventKey="profile" title="Dashboard">
        <Dashboard/>
      </Tab>
    </Tabs>
  );
}

export default TabInfo;