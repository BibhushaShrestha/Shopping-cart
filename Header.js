import '../App.css';

function Header(props) {
  return (
    <div className='flex shopping-card'>
        <div onClick={() => props.handleShow(false)} >👼T͙i͙n͙y͙ ͙T͙r͙e͙a͙s͙u͙r͙e͙s͙®</div>
        <div >🅱🅰🅱🆈 </div>
        <div onClick={() => props.handleShow(true)}>Cart🛒 
            <sup> {props.count} </sup>
        </div>
        
    </div>
  )
}


export default Header;