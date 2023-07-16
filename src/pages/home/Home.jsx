
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userData } from "../../dummyData";
import './home.css';

export default function Home() {
    return (
        <div className='home' >
            <Featuredinfo />
            <Chart data={userData} title="User Analytics " grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
    }
