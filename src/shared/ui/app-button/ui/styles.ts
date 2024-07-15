import type { Props } from './types'
import type { IStyles } from '@/shared/types'
import { Styles } from '@/shared/lib'

export function useStyles(props: Props): IStyles {
    const styles = new Styles()

    switch (props.color) {
        default:
            styles.add('app_button', {
                'background-color': 'var(--dark-blue-color)',
                color: 'white',
                border: 'none'
            })
            break
        case 'pale-yellow':
            styles.add('app_button', {
                'background-color': 'var(--pale-yellow-color)',
                color: 'var(--dark-blue-color)',
                border: 'none'
            })
            break
        case 'white':
            styles.add('app_button', {
                'background-color': 'white',
                color: 'var(--dark-blue-color)',
                border: '1px solid var(--dark-blue-color)'
            })
            break
    }

    return styles.get()
}
