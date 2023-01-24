import Subcontents from "./Subcontents";
import Advertisement from "./Advertisement";

const Main = () => {
    return (
        <div className="main">
            <Subcontents className={"subcontents1"}/>
            <Subcontents className={"subcontents2"}/>
            <Subcontents className={"subcontents3"}/>
            <Advertisement />
        </div>
    );
}

export default Main;
