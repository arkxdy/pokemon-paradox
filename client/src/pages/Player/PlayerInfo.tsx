import { useParams } from "react-router-dom";

const PlayerInfo = () => {
    let { userId } = useParams<{ userId: string}>();
    return (
        <>
            {userId ?? "no"}
        </>
    )
}

export default PlayerInfo;