import { h, Component } from 'preact'
import { bind } from 'decko'
import {ACTION} from '../../redux/actions'

import nodeStore from '../../redux/store'

class IconRedo extends Component {
    @bind
    redo() {
        nodeStore.dispatch({type: ACTION.REDO})
    }

    render() {
        return (
            <div class='icon icon-redo' onClick={this.redo} title='Redo'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='30' height='30'>
                    <path d='M28.875 11c-.504.063-.88.492-.875 1v7.063c-11.512.35-17.72 6.445-20.78 12.5C4.112 37.699 4.003 43.682 4 43.874V44c-.016.55.418 1.016.97 1.03.55.017 1.014-.417 1.03-.968V44c.008-.094.23-3.12 3.094-6.344 2.812-3.16 8.3-6.347 18.906-6.562V38c0 .383.22.734.566.902.348.168.758.12 1.06-.12l16-13c.237-.192.374-.477.374-.782 0-.305-.137-.59-.375-.78l-16-13c-.21-.173-.48-.25-.75-.22zM30 14.094L43.406 25 30 35.906V30c0-.55-.45-1-1-1-11.754 0-18.09 3.613-21.406 7.344-.125.14-.196.265-.313.406.423-1.375.978-2.844 1.72-4.313C11.918 26.672 17.488 21 29 21c.55 0 1-.45 1-1z' />
                </svg>
            </div>
        )
    }
}

export { IconRedo }
