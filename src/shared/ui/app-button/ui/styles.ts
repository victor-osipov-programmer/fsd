import { computed } from "vue";
import type { Props } from "./types";

export function useStyles(props: Props) {
    const color_style = computed(() => {
        switch (props.color) {
            case undefined: return 'white'
            case 'pale-yellow':
            case 'white': return 'var(--dark-blue-color)'
        }
    })
    const background_color_style = computed(() => {
        switch (props.color) {
            case undefined: return 'var(--dark-blue-color)';
            case 'pale-yellow': return 'var(--pale-yellow-color)';
            case 'white': return 'white';
        }
    })
    const border_style = computed(() => {
        switch (props.color) {
            case 'white': return '1px solid var(--dark-blue-color)';
        }
    })

    return { color_style, background_color_style, border_style }
}
