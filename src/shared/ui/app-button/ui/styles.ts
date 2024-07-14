import { computed, type StyleHTMLAttributes, type StyleValue } from 'vue'
import type { Props } from './types'
import type { IStyles } from '@/shared/types'

export function useStyles(props: Props) {
    const styles: IStyles = {}

    switch (props.color) {
        default:
            styles.app_button = {
                'background-color': 'var(--dark-blue-color)',
                color: 'white',
                border: 'none'
            }
            break
        case 'pale-yellow':
            styles.app_button = {
                'background-color': 'var(--pale-yellow-color)',
                color: 'var(--dark-blue-color)',
                border: 'none'
            }
            break
        case 'white':
            styles.app_button = {
                'background-color': 'white',
                color: 'var(--dark-blue-color)',
                border: '1px solid var(--dark-blue-color)'
            }
            break
    }

    return styles
}
