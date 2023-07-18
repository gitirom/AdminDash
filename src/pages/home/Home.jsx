
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userData } from "../../dummyData";
import './home.css';
import { useEffect } from "react";

export default function Home() {
    useEffect(() => { //I fix ResizeObserver error by this useEffect hook
        window.addEventListener('error', e => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById(
                    'webpack-dev-server-client-overlay-div'
                );
                const resizeObserverErr = document.getElementById(
                    'webpack-dev-server-client-overlay'
                );
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });
    }, []);
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
