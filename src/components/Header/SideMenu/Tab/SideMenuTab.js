import './SideMenuTab.css';

function SideMenuTab(props) {
    function clickHandler() {
        props.onClick();
    }

    return (
        <button className={`side-menu-tab side-menu-tab__${props.selected} highlight`} onClick={clickHandler}>
            {props.text}
        </button>
    )
}

export default SideMenuTab;