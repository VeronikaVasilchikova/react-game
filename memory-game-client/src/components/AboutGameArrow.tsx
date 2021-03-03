import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Arrow } from '../interfaces/interfaces';

export const AboutGameArrow: React.FunctionComponent<Arrow> = (props) => {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div onClick={clickFunction} className={`about-arrow ${direction}`}>{icon}</div>;
}
