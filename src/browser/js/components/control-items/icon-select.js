import { h, Component } from 'preact'
import { bind } from 'decko'
import {ACTION} from '../../redux/actions'

import nodeStore from '../../redux/store'

class IconSelect extends Component {
    @bind
    selectNodes() {
        this.setState({connectNodes: false})
        nodeStore.dispatch({type: ACTION.SELECT_NODE})
    }

    render() {
        return (
            <div class='icon icon-select' title='Select Nodes'>
                <label htmlFor='select-nodes'>
                    <input type='radio' name='choose' id='select-nodes' onClick={this.selectNodes} checked={!this.state.connectNodes} />
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' width='30' height='30'>
                        <path d='M14.166 4c-.552 0-1 .447-1 1v2.072c0 .553.448 1 1 1s1-.447 1-1V5c0-.553-.448-1-1-1zM7.303 6.43c-.256 0-.512.097-.707.293-.39.39-.39 1.023 0 1.414l1.466 1.465c.196.195.452.293.708.293.256 0 .51-.098.707-.293.39-.39.39-1.024 0-1.415L8.01 6.723c-.196-.196-.452-.293-.707-.293zm13.726 0c-.256 0-.512.097-.708.293l-1.467 1.465c-.39.39-.39 1.023 0 1.414.196.195.453.293.707.293.256 0 .513-.098.708-.293l1.466-1.465c.39-.39.39-1.023 0-1.414-.195-.196-.45-.293-.707-.293zm-7.053 5.404c-.577-.05-1.15.154-1.58.584-.572.573-.743 1.396-.444 2.15l16.07 40.5c.284.715.94 1.196 1.706 1.256.76.054 1.484-.313 1.875-.976l6.735-11.39 13.34 13.345c.567.566 1.32.88 2.123.88.802 0 1.555-.313 2.12-.88l1.415-1.414c1.168-1.17 1.17-3.076 0-4.245l-13.34-13.338 11.326-6.684c.663-.39 1.04-1.11.98-1.877-.058-.768-.54-1.42-1.257-1.703L14.55 11.973c-.188-.075-.38-.122-.573-.14zm-9.104 1.46c-.552 0-1 .446-1 1 0 .552.448 1 1 1h2.074c.553 0 1-.448 1-1 0-.554-.448-1-1-1H4.873zm8.94.536L54.309 29.9 42.98 36.584c-.537.316-.887.853-.966 1.47-.08.62.13 1.226.57 1.667l13.338 13.34c.39.388.39 1.025 0 1.415l-1.416 1.414c-.377.378-1.036.378-1.414 0L39.752 42.544c-.38-.38-.882-.586-1.41-.586-.084 0-.17.004-.254.015-.618.078-1.156.43-1.473.966l-6.732 11.39-16.07-40.5zM8.77 18.69c-.256 0-.512.097-.707.292l-1.467 1.465c-.39.39-.39 1.023 0 1.414.195.196.45.294.707.294.256 0 .512-.098.707-.293l1.467-1.464c.39-.39.39-1.023 0-1.414-.196-.195-.452-.293-.707-.293zm13.26.732c-.39.01-.755.246-.907.63-.204.515.05 1.096.563 1.3l3.146 1.25c.12.048.247.07.37.07.397 0 .773-.24.93-.633.202-.515-.05-1.096-.562-1.3l-3.148-1.248c-.13-.05-.26-.073-.39-.07zm7.208 2.86c-.39.01-.754.247-.906.632-.204.514.05 1.095.563 1.3l14.695 5.83c.12.05.244.07.367.07.398 0 .776-.24.932-.632.203-.514-.05-1.094-.564-1.298l-14.695-5.83c-.128-.05-.262-.074-.392-.07z' />
                    </svg>
                </label>
            </div>
        )
    }
}

export { IconSelect }
