import React, { useEffect, useState } from "react";
import Opener from "../../components/Opener/Opener";
import GetStarted from "../../components/GetStarted/GetStarted";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import Importance from "../../components/Importance/Importance";
import Mission from "../../components/Mission/Mission";
import Food from "../../components/Food/Food";
import "aos/dist/aos.css";
import AOS from "aos";
import data from "../../constants/data.json"
import _ from "lodash";
import {useHistory} from "react-router-dom";
export default function Home({match}) {
  const { userName } = match.params;
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    const targetUser = _.find(data, {"user":`${userName}`})
    if(targetUser==null){
      history.replace("/")
    }
    else if(targetUser.user=='tiendh3'){
      alert(`Tiến à, Tiến thì ... lại éo có tuổi mất rồi, cay thế nhờ 😏`)
      history.replace("/")
    }
    else {
      setUser(targetUser)
    }
    setTimeout(() => setLoading(false), 3000);
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Opener name={userName} />
        </div>
      ) : (
        <main id="home">
          <GetStarted />
          <Importance />
          <Mission />
          <Food />
          <Footer name={user?.name}/>
        </main>
      )}
    </>
  );
}
