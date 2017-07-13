import { h, Component } from 'preact'
import { bind } from 'decko'
import {ACTION} from '../../redux/actions'

import nodeStore from '../../redux/store'

class IconUndo extends Component {
    @bind
    undo() {
        nodeStore.dispatch({type: ACTION.UNDO})
    }

    render() {
        return (
            <div class='icon icon-undo' onClick={this.undo} title='Undo'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30' height='30'>
                    <path d='M20.875 11c-.184.023-.355.102-.5.22l-16 13c-.238.19-.375.475-.375.78 0 .305.137.59.375.78l16 13c.3.243.71.29 1.06.122.346-.168.565-.52.565-.902v-6.906c10.605.215 16.094 3.402 18.906 6.562C43.77 40.88 43.992 43.906 44 44v.063c.016.55.48.984 1.03.968.552-.014.986-.48.97-1.03v-.063-.062c-.004-.19-.113-6.176-3.22-12.313-3.06-6.054-9.268-12.148-20.78-12.5V12c.004-.29-.12-.563-.336-.754-.215-.19-.504-.28-.79-.246zM20 14.094V20c0 .55.45 1 1 1 11.512 0 17.082 5.672 20 11.438.742 1.468 1.297 2.937 1.72 4.312-.118-.14-.19-.266-.314-.406C39.09 32.614 32.754 29 21 29c-.55 0-1 .45-1 1v5.906L6.594 25z' />
                </svg>
            </div>
        )
    }
}

export { IconUndo }
