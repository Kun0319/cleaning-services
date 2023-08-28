import Indexbg from "./homepage/indexbg"
import Process from "./homepage/Process"
import Service from "./homepage/Service"
import Topic from "./homepage/Topic"
import StaffInfos from "./homepage/StaffInfos"
import Footer from "./Footer"
import Title from "./homepage/Title"

export default function Container() {
    return (
        <>
            <Indexbg />
            <Title />
            <Process />
            <Service />
            <StaffInfos />
            <Topic />
            <Footer />
        </>
    )
}