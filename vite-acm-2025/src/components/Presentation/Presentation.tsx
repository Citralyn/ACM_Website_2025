import Card from "react-bootstrap/Card";
import styles from "./Presentation.module.scss";


interface PresentationProps {
  title: string;
  url: string;
}

const Presentation: React.FC<PresentationProps> = ({ title, url }) => {
    return (
        <Card className={styles.presentation + " mx-4 my-3"}>
            <a href={url}>
                <h4 className="text-center m-0">{title}</h4>
            </a>
        </Card>
    );
}

export default Presentation;
