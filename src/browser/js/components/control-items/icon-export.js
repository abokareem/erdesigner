import { h } from 'preact'

const IconExport = ({ ...props }) => (
    <div class='icon icon-export' title='Export' onClick={props.onClick}>
        <svg viewBox='0 0 50 50' width='30' height='30'>
            <path d='M25 3.6l-.5.5-.1.06c-.1.07-.18.17-.24.28l-7.88 7.84c-.34.32-.42.83-.2 1.24.24.4.72.6 1.17.48.18-.05.34-.14.47-.28L24 7.44V36c0 .3.13.6.37.8.23.2.55.27.85.2.1-.03.2-.07.28-.13.02 0 .04 0 .06-.03.06-.04.1-.1.16-.15l.2-.23.08-.3V7.43l6.28 6.28c.24.24.6.35.94.28.1-.03.2-.07.28-.13.03 0 .06 0 .1-.03l.15-.15c.37-.4.36-1.04-.03-1.42l-7.88-7.84-.06-.1-.06-.06-.1-.06zM2 36v6c0 2.75 2.25 5 5 5h36c2.75 0 5-2.25 5-5v-6h-2v6c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3v-6z' />
        </svg>
    </div>
)

export { IconExport }
