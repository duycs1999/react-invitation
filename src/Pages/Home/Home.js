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
      alert(`Bỏ cái trò bẩn tưởi này đi, éo vào đc đâu, cay thế nhờ 😏`)
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
          <Opener name={user?.name} />
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
