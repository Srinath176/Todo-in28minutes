
import { PropTypes } from 'prop-types'

export default function CounterButton({ by, incrementMethod, decrementMethod }) {



    return (
        <div className="counter">
            <div>
                <button className="counterButton" onClick={() => incrementMethod(by)}>+{by}</button>
                <button style={{ backgroundColor: "#ff6e7f" }} className="counterButton" onClick={() => decrementMethod(by)}>-{by}</button>
            </div>

        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}