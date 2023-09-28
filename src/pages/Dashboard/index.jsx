import { useEffect } from "react";
import SideBar from "../../components/SideBar";
import { container } from "../../styles/styles.css";
import { ChangePage } from "../../redux/slices/activePage";
import { useDispatch } from "react-redux";



// ToDo
// [ ] - Faturamento
// [ ] - Lucro
// [ ] - Porcentagem de Lucro
// [ ] - Capital
// [ ] -


function Dashboard() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ChangePage('dashboard'))
  }, [])

  return (
    <div className={container.main}>
      <SideBar />
    </div>
  );
}

export default Dashboard;
