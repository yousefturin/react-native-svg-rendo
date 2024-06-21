/* eslint-disable prettier/prettier */
// svgData.ts

// Define the type for the SVG data
interface SvgData {
    [key: string]: string;
}
export const svgData: SvgData = {
    'alphabet-a': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21L12 3L19 21M8.14285 14.5716L15.8571 14.5714"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-bottom-left': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.364 5.63603L5.63605 18.364M5.63605 18.364L15.5356 18.3639M5.63605 18.364V8.46446"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'hospital-clinic': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.01131V21C3 21.5523 3.44772 22 4 22H8.5C9.05228 22 9.5 21.5523 9.5 21V16.5H14.5V21C14.5 21.5523 14.9477 22 15.5 22H20C20.5523 22 21 21.5523 21 21V9.01131C21 8.69021 20.8458 8.38864 20.5855 8.20063L12 2L3.41451 8.20063C3.1542 8.38864 3 8.69021 3 9.01131Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.5V12.5M9.5 10H14.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-v': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L12 21L19 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'lock-privacy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="11" width="18" height="11" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10.9999V6.99988C7 4.23845 9.23858 1.99988 12 1.99988V1.99988C14.7614 1.99988 17 4.23845 17 6.99988V10.9999"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'discount-percent': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 16L16 8.00001M7.94636 4.24972L6.25195 4.23704C5.1357 4.22868 4.22868 5.1357 4.23704 6.25195L4.24972 7.94636C4.25377 8.48716 4.03863 9.00655 3.65336 9.38609L2.44627 10.5753C1.65105 11.3587 1.65105 12.6414 2.44627 13.4248L3.65336 14.6139C4.03863 14.9935 4.25377 15.5129 4.24972 16.0537L4.23704 17.7481C4.22868 18.8643 5.1357 19.7713 6.25195 19.763L7.94636 19.7503C8.48716 19.7463 9.00655 19.9614 9.38609 20.3467L10.5753 21.5538C11.3587 22.349 12.6414 22.349 13.4248 21.5538L14.6139 20.3467C14.9935 19.9614 15.5129 19.7463 16.0537 19.7503L17.7481 19.763C18.8643 19.7713 19.7713 18.8643 19.763 17.7481L19.7503 16.0537C19.7463 15.5129 19.9614 14.9935 20.3467 14.6139L21.5538 13.4248C22.349 12.6414 22.349 11.3587 21.5538 10.5753L20.3467 9.38609C19.9614 9.00655 19.7463 8.48716 19.7503 7.94636L19.763 6.25195C19.7713 5.1357 18.8643 4.22868 17.7481 4.23704L16.0537 4.24972C15.5129 4.25377 14.9935 4.03863 14.6139 3.65336L13.4248 2.44627C12.6414 1.65105 11.3586 1.65105 10.5753 2.44627L9.38609 3.65336C9.00655 4.03863 8.48716 4.25377 7.94636 4.24972ZM10.1667 9.00017C10.1667 9.73655 9.56973 10.3335 8.83335 10.3335C8.09697 10.3335 7.50002 9.73655 7.50002 9.00017C7.50002 8.26379 8.09697 7.66684 8.83335 7.66684C9.56973 7.66684 10.1667 8.26379 10.1667 9.00017ZM16.5 15C16.5 15.7364 15.9031 16.3333 15.1667 16.3333C14.4303 16.3333 13.8333 15.7364 13.8333 15C13.8333 14.2636 14.4303 13.6667 15.1667 13.6667C15.9031 13.6667 16.5 14.2636 16.5 15Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'work-bag': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12V14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12V14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'search': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 17L22 22M19.5 10.75C19.5 15.5825 15.5825 19.5 10.75 19.5C5.91751 19.5 2 15.5825 2 10.75C2 5.91751 5.91751 2 10.75 2C15.5825 2 19.5 5.91751 19.5 10.75Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'square-box-uncheck': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="18" height="18" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevron-up-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16L12 8L20 16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-bottom-right': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.63603 5.63603L18.364 18.364M18.364 18.364L8.46445 18.3639M18.364 18.364V8.46446"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-down': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V21M12 21L5 14M12 21L19 14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'entry-login': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7L21 12L16 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L3 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shopping-alt-bag': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7H21V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7L4.96327 3.50974C5.14039 3.19486 5.47357 3 5.83485 3H18.1652C18.5264 3 18.8596 3.19486 19.0367 3.50974L21 7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'enter-arrow-left': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11L4 15M4 15L8 19M4 15H17C18.6569 15 20 13.6569 20 12V5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bluetooth-off': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V7.5M12 21V11.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3L19 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8L16 9.71429M5 16L12 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6L22 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 16L12 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'code-tech-dev': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L3 12L7 16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8L21 12L17 16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 4L9.8589 19.4548"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'rain-cloud-weather': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34141 6C7.16508 3.66962 9.38756 2 12 2C15.3137 2 18 4.68629 18 8C20.2091 8 22 9.79086 22 12C22 14.2091 20.2091 16 18 16H7C4.23858 16 2 13.7614 2 11C2 8.46898 3.8806 6.37721 6.32069 6.04576"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 20L6 22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20L11 22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20L16 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'money-cash-currency': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V3Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 18L2 18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L2 22"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="8" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.01611 8.01611L6 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0161 8.01611L18 8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'folder-add-file': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V16M9 13H15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-w': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3L6 21L12 10L18 21L21 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-b': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1 12H5M14.1 12C16.8062 12 19 9.98528 19 7.5C19 5.01472 16.8062 3 14.1 3H5V21H14.1C16.8062 21 19 18.9853 19 16.5C19 14.0147 16.8062 12 14.1 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-u': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'video-camera-media': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1176 12L22 7.33333V16.6667L16.1176 12ZM16.1176 12V7.33333C16.1176 6.04467 15.0642 5 13.7647 5H4.35294C3.05345 5 2 6.04467 2 7.33333V16.6667C2 17.9553 3.05345 19 4.35294 19H13.7647C15.0642 19 16.1176 17.9553 16.1176 16.6667V12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'calculator-compute-math-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 4V9M20 6.5H15M4.5 14.5L6.5 16.5M6.5 16.5L8.5 18.5M6.5 16.5L8.5 14.5M6.5 16.5L4.5 18.5M20 18H15M20 15H15M9 6.5H4"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'reply': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99999 9.21468V4.92896L2.92892 12L9.99999 19.0711V14.2392M10 9.22304C10.6432 9.07708 11.3126 9.00002 12 9.00002C16.9706 9.00002 21 13.0295 21 18C21 18.8675 20.8773 19.7063 20.6482 20.5C19.5649 16.7457 16.1031 14 12 14C11.3126 14 10.6432 14.0771 10 14.223"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'ticket-pass': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 5H3C2.44772 5 2 5.44772 2 6V9.5H2.6C3.98071 9.5 5.1 10.6193 5.1 12C5.1 13.3807 3.98071 14.5 2.6 14.5H2V18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18V14.5H21.9C20.5193 14.5 19.4 13.3807 19.4 12C19.4 10.6193 20.5193 9.5 21.9 9.5H22V6C22 5.44772 21.5523 5 21 5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5V19"  stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
</svg>`,
    'calendar-appointment-date': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-circle-chat-message': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.663 3.04094 17.0829 4.73812 18.875L2.72681 21.1705C2.44361 21.4937 2.67314 22 3.10288 22H12Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9H17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H11"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'cursor-pointer-mouse': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.91304 19.4348L3 3L19.4348 6.91304L14.7391 10.0435L21 16.3043L16.3043 21L10.0435 14.7391L6.91304 19.4348Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-top-right': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.63605 18.364L18.364 5.63603M18.364 5.63603L8.46446 5.63604M18.364 5.63603V15.5355"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'calculator-compute-math': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6V10M18 8H14M6 13L8 15M8 15L10 17M8 15L10 13M8 15L6 17M18 16.5H14M18 13.5H14M10 8H6M5 21.5H19C20.1046 21.5 21.5 20.1046 21.5 19V5C21.5 3.89543 20.1046 2.5 19 2.5H5C3.89543 2.5 2.5 3.89543 2.5 5V19C2.5 20.1046 3.89543 21.5 5 21.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'volume-down': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 8H4C3.44772 8 3 8.44772 3 9V15C3 15.5523 3.44772 16 4 16H9.5L16 21V3L9.5 8Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9.35425C20.6224 10.0594 21 10.9856 21 12.0001C21 13.0145 20.6224 13.9408 20 14.6459"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'paper-note': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6H16M8 10H16M8 14H11M6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'medal-winner-gold': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L9.84043 11.3839M9 3L13.6188 11M19 3L14.1737 11.3595M15 3L13.8453 5M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'x-close-delete': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5L19 19M5 19L19 5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-t': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4V21M5 3H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'clock-time': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V12L16 16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-c': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4.22222C17.2072 2.83244 14.9243 2 12.4385 2C6.67346 2 2 6.47715 2 12C2 17.5228 6.67346 22 12.4385 22C14.9243 22 17.2072 21.1676 19 19.7778"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-p': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12.4737V3H14.2632C16.8792 3 19 5.12076 19 7.73684C19 10.3529 16.8792 12.4737 14.2632 12.4737H5ZM5 12.4737V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'battery-half': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L6 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L9 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10L21 14"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="6" width="15" height="12" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-g': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 13H19V16C19 19.3137 16.3137 22 13 22H11C7.68629 22 5 19.3137 5 16V8C5 4.68629 7.68629 2 11 2H13C15.973 2 18.441 4.16229 18.917 7"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'more-horizontal': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="12" r="1"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="1"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="18" cy="12" r="1"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'camera-off-photo': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21H4C2.89543 21 2 20.1046 2 19V8.6C2 7.49543 2.89543 6.6 4 6.6L6 6.6M9.5 3H14.5L17 6.6L20 6.6C21.1046 6.6 22 7.49543 22 8.6V16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.66498 9.75195C8.65655 10.4782 8 11.6624 8 13C8 15.2092 9.79086 17 12 17C13.2632 17 14.3896 16.4145 15.1227 15.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L22 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'receipt-payment': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2H6C5.44772 2 5 2.44772 5 3V22L7.5 20L9.5 22L12 20L14.5 22L16.5 20L19 22V3C19 2.44772 18.5523 2 18 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14H10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'loading-spinner': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16L19 19M18 12H22M8 8L5 5M16 8L19 5M8 16L5 19M2 12H6M12 2V6M12 18V22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'user-group-accounts': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="7" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3C16.8604 3.2203 17.623 3.7207 18.1676 4.42231C18.7122 5.12392 19.0078 5.98683 19.0078 6.875C19.0078 7.76317 18.7122 8.62608 18.1676 9.32769C17.623 10.0293 16.8604 10.5297 16 10.75"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 15H20C21.1046 15 22 15.8954 22 17V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'cone': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H21M7 15H17M9 9H15M19 21L13.3162 3.94868C13.1274 3.38214 12.5972 3 12 3C11.4028 3 10.8726 3.38214 10.6838 3.94868L5 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'usb': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V11H7V5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 21V12C19 11.4477 18.5523 11 18 11H6C5.44772 11 5 11.4477 5 12V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 8L11 8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chip': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22V19M10 5V2M14 22V19M14 5V2M2 14H5M19 10L22 10M19 14H22M2 10L5 10M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19ZM9.5 15H14.5C14.7761 15 15 14.7761 15 14.5V9.5C15 9.22386 14.7761 9 14.5 9H9.5C9.22386 9 9 9.22386 9 9.5V14.5C9 14.7761 9.22386 15 9.5 15Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-baby': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M8 15C8 15 9 17 12 17C15 17 16 15 16 15M12.5 7C11.1193 7 10 5.88071 10 4.5C10 3.11929 11.1193 2 12.5 2M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'crop': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2L7 15C7 16.1046 7.89543 17 9 17L22 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 22L17 9C17 7.89543 16.1046 7 15 7L2 7"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bank-financial': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14L10 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14L14 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 10L5 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10L19 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21H21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 7.00005L12 2.99994"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.00001 7.00011L12 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'fuel-gas-station': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5C4 4.44772 4.44772 4 5 4H12C12.5523 4 13 4.44772 13 5V21H4V5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 11.5H18V19C18 20.1046 18.8954 21 20 21V21C21.1046 21 22 20.1046 22 19V9M17.5 2L20.5 4.66667M20.5 4.66667L22 6V9M20.5 4.66667V9H22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21L2 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 8L7 8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'instagram-social': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12.0001" r="4.44444"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 6.0217V6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'media-cast': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H15M3 16C5.20914 16 7 17.7909 7 20M2 12H3C7.41828 12 11 15.5817 11 20M3.01611 20.0161L3 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevrons-right-arrows': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4L13 12L5 20"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4L19 12L11 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-f': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3H5V11.5M5 11.5V21M5 11.5H16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'location-pin': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.0325 15.2873L12.0001 22L17.9677 15.2873C22.5447 10.1388 18.8894 2 12.0001 2C5.11079 2 1.45549 10.1388 6.0325 15.2873Z"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="10" r="3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-q': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 13L21.1421 21.1421M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-s': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 12H14.5C16.9853 12 19 14.0147 19 16.5C19 18.9853 16.9853 21 14.5 21H5M12.5 12H9.5C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-d': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H12C16.4183 3 20 7.02944 20 12C20 16.9706 16.4183 21 12 21H4V3Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-chat-message': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11H11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L11.6464 20.6464C11.8417 20.8417 12.1583 20.8417 12.3536 20.6464L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'fast-foward': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 19V5L11 12L2 19Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19V5L22 12L13 19Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'puzzle': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22H18V16.8293C18.3128 16.9398 18.6494 17 19 17C20.6569 17 22 15.6569 22 14C22 12.3431 20.6569 11 19 11C18.6494 11 18.3128 11.0602 18 11.1707V6H11.8293C11.9398 5.68722 12 5.35064 12 5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 5.35064 6.06015 5.68722 6.17071 6H4C2.89543 6 2 6.89543 2 8V20C2 21.1046 2.89543 22 4 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'add-plus-new-square-box-square': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V12M12 12V17M12 12H7M12 12H17M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'send-message-dm': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'folder-file-project': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6H11L9.29687 3.4453C9.1114 3.1671 8.79917 3 8.46482 3H4C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'subtract-minus-remove': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="5" y1="12" x2="19" y2="12"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-wink-happy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10C16 10 15.5523 9.5 15 9.5C14.4477 9.5 14 10 14 10M9.01611 10.0161L9 10M8 15C8 15 9 17 12 17C15 17 16 15 16 15M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-e': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3H5V11.5M19 21H5V11.5M5 11.5H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'book-note-paper': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4.5C4 3.11929 5.11929 2 6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 19.5V19.5C4 18.1193 5.11928 17 6.49998 17H20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'next-arrow-forward': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12H7M17 12L13 8M17 12L13 16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-r': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12V3H14.5C16.9853 3 19 5.01472 19 7.5C19 9.98528 16.9853 12 14.5 12H5ZM5 12V21M11 12L19 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bookmark-save': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22V3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V22L12 15.8889L5 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'x-square-close-delete': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8L16 16M8 16L16 8"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="3" width="18" height="18" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'accessibility-handicap-disability-handicap-wheelchair': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21H17V16C17 15.4477 16.5523 15 16 15H12.5C11.6716 15 11 14.3284 11 13.5V8L14.5 11.5M14 18.0005C13.0878 19.2147 11.6356 20 10 20C7.23858 20 5 17.7614 5 15C5 12.9497 6.2341 11.1876 8 10.416M12 4C12 4.55228 11.5523 5 11 5C10.4477 5 10 4.55228 10 4C10 3.44772 10.4477 3 11 3C11.5523 3 12 3.44772 12 4Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'credit-card-debit': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="5" width="18" height="14" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10H21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shopping-bag': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V9Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10V6C8 3.79086 9.79086 2 12 2V2C14.2091 2 16 3.79086 16 6V9.6888"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'biker-cycle': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20L12 15L8.5 11.5L12.5 7.5L16 11L20.5 11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4142 3.58579C21.1953 4.36683 21.1953 5.63317 20.4142 6.41421C19.6332 7.19526 18.3668 7.19526 17.5858 6.41421C16.8047 5.63317 16.8047 4.36683 17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 18C22 19.6569 20.6569 21 19 21C17.3431 21 16 19.6569 16 18C16 16.3431 17.3431 15 19 15C20.6569 15 22 16.3431 22 18Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.65685 15 8 16.3431 8 18Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'user-remove-account-profile': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="7" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 11H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'adjust-horizontal-settings': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8H13M22 8H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 16H11M2 16H5"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="16" cy="8" r="3"  stroke-linecap="round" stroke-linejoin="round"/>
<circle r="3" transform="matrix(-1 0 0 1 8 16)"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'face-mask-alt-2': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8H19M5 8V13.5C5 14.1093 5.25513 14.621 5.69842 15.0175L8.74604 17.7438C10.6185 19.4187 13.3815 19.4187 15.254 17.7438L18.3016 15.0175C18.7449 14.621 19 14.1093 19 13.5V8M5 8L2 5M19 8L22 5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevron-left-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4L8 12L16 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'right-turn-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 11L20 15M20 15L16 19M20 15H7C5.34315 15 4 13.6569 4 12V5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'link': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4986 7.49586L12.7507 5.24378C14.4091 3.58541 17.0978 3.5854 18.7562 5.24378C20.4146 6.90216 20.4146 9.59093 18.7562 11.2493L16.5041 13.5014M6.5 11.5L5.24378 12.7507C3.58541 14.4091 3.5854 17.0978 5.24378 18.7562C6.90216 20.4146 9.59093 20.4146 11.2493 18.7562L12.5 17.5M9.5 14.5L14.5 9.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'wifi-off-connection': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7.92647C3.24008 7.13029 4.58126 6.47786 6 5.99271M22 7.92647C19.1151 6.07423 15.683 5 12 5C11.6645 5 11.3311 5.00891 11 5.02652"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.17159 11.7046C6.63169 10.86 8.26267 10.2779 9.99998 10.0229M18.8284 11.7046C17.9699 11.2079 17.0522 10.8021 16.0886 10.5001"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.07355 15.2544C9.98888 14.9309 10.9739 14.7549 12 14.7549C13.0261 14.7549 14.0111 14.9309 14.9265 15.2544"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9181 19.1465L11.902 19.1304"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L22 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'flag-country': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 15.0233C18.8333 15.6877 15.6 16.722 12 15.1273C10.5 14.2968 6.8 13.0301 4 15.0234M4 21.9326V2.99656C6.8 1.00328 10.5 2.26993 12 3.10047C15.6 4.69509 18.8333 3.66084 20 2.99642V14.9561"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'save-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21H19C20.1046 21 21 20.1046 21 19V8.82843C21 8.29799 20.7893 7.78929 20.4142 7.41421L16.5858 3.58579C16.2107 3.21071 15.702 3 15.1716 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 3V8H15V3"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 21V15H17V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-right': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H21M21 12L14 5M21 12L14 19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'percentage': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L20 4"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'money-alt-cash-currency': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7V17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17V7Z"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.01611 12.0161L6 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0161 12.0161L18 12"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'work-alt-bag': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L12.3922 13.9216C12.1333 13.9733 11.8667 13.9733 11.6078 13.9216L2 12"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bed-single-hotel': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L10 9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3V21M21 17V21M21 17H3M21 17V14C21 12.8954 20.1046 12 19 12H3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'coffee-tea-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3H18V15C18 16.6569 16.6569 18 15 18H6C4.34315 18 3 16.6569 3 15V3Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 4H18.9098C20.6165 4 22 5.38352 22 7.09017V7.09017C22 8.26064 21.3387 9.33065 20.2918 9.8541L18 11"  stroke-linecap="round" stroke-linejoin="round"/>
<line x1="2" y1="22" x2="22" y2="22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'previous-arrow-backward': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12H17M7 12L11 8M7 12L11 16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'thumbs-down': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9159 13.3371L13.6607 20.7609C13.21 21.7888 12.0001 22.3199 11.0189 21.7944C9.4919 20.9766 9.79819 20.2101 9.79819 15.3984H4.03407C2.78769 15.3984 1.83456 14.2723 2.02408 13.0237L3.43199 3.74785C3.58461 2.74229 4.43823 2 5.44198 2H16.9159M16.9159 13.3371V2M16.9159 13.3371H19.9664C21.0895 13.3371 22 12.4143 22 11.2758V4.06132C22 2.9229 21.0895 2.00003 19.9664 2.00003L16.9159 2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'archive': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="3" width="20" height="6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13H14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'badge-verified': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00001 12L11 14L15 10M7.94636 4.24972L6.25195 4.23704C5.1357 4.22868 4.22868 5.1357 4.23704 6.25195L4.24972 7.94636C4.25377 8.48716 4.03863 9.00655 3.65336 9.38609L2.44627 10.5753C1.65105 11.3587 1.65105 12.6414 2.44627 13.4248L3.65336 14.6139C4.03863 14.9935 4.25377 15.5129 4.24972 16.0537L4.23704 17.7481C4.22868 18.8643 5.1357 19.7713 6.25195 19.763L7.94636 19.7503C8.48716 19.7463 9.00655 19.9614 9.38609 20.3467L10.5753 21.5538C11.3587 22.349 12.6414 22.349 13.4248 21.5538L14.6139 20.3467C14.9935 19.9614 15.5129 19.7463 16.0537 19.7503L17.7481 19.763C18.8643 19.7713 19.7713 18.8643 19.763 17.7481L19.7503 16.0537C19.7463 15.5129 19.9614 14.9935 20.3467 14.6139L21.5538 13.4248C22.349 12.6414 22.349 11.3587 21.5538 10.5753L20.3467 9.38609C19.9614 9.00655 19.7463 8.48716 19.7503 7.94636L19.763 6.25195C19.7713 5.1357 18.8643 4.22868 17.7481 4.23704L16.0537 4.24972C15.5129 4.25377 14.9935 4.03863 14.6139 3.65336L13.4248 2.44627C12.6414 1.65105 11.3586 1.65105 10.5753 2.44627L9.38609 3.65336C9.00655 4.03863 8.48716 4.25377 7.94636 4.24972Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'account-search-user-person': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21V17C3 15.8954 3.89543 15 5 15H12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5 19.5L21 21M20.25 17.625C20.25 19.0747 19.0747 20.25 17.625 20.25C16.1753 20.25 15 19.0747 15 17.625C15 16.1753 16.1753 15 17.625 15C19.0747 15 20.25 16.1753 20.25 17.625Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'map-location': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6.6L9.00001 3V17.4L3 21V6.6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9999 6.6L20.9999 3V17.4L14.9999 21V6.6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.9999 6.6L8.99991 3V17.4L14.9999 21V6.6Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevron-right-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4L16 12L8 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-surprised-shocked-amazed': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'basicons': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2 12H8M13.2 12C14.7464 12 16 10.8807 16 9.5C16 8.11929 14.7464 7 13.2 7H8V17H13.2C14.7464 17 16 15.8807 16 14.5C16 13.1193 14.7464 12 13.2 12Z" stroke="#080808" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="3" width="18" height="18" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'add-circle-plus': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7V17M7 12H17"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'download': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V17M12 17L7 11.5555M12 17L17 11.5556"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'face-mask-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.01735 9.75508C6.25548 12.4258 6.25712 15.1124 6.02225 17.7834L6.00318 18.0003C6.00139 18.0207 6.01153 18.0403 6.02922 18.0507C9.71896 20.203 14.2815 20.203 17.9713 18.0507C17.989 18.0403 17.9991 18.0207 17.9973 18.0003L17.9782 17.7834C17.7434 15.1124 17.745 12.4258 17.9831 9.75508M6.01735 9.75508C6.00749 9.64445 6.07933 9.543 6.18696 9.51556L11.5062 8.15967C11.8304 8.07704 12.1701 8.07704 12.4942 8.15967L17.8135 9.51556C17.9212 9.543 17.993 9.64445 17.9831 9.75508M6.01735 9.75508C6.01735 9.75508 5.50026 4.53376 3.25965 5.03375C1.01905 5.53374 1.50026 15.0337 6.00026 18.0337M17.9831 9.75508C17.9831 9.75508 18.4555 4.53376 20.6961 5.03375C22.9367 5.53374 22.4555 15.0337 17.9555 18.0337M14.0002 12.0337H10.0002M14.0002 16.0337H10.0002"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-up-pushup-caret-sort-select-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 14L12 10L8 14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'x-octagon-error': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9L15 15M15 9L9 15M8 2H16L22 8V16L16 22H8L2 16V8L8 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'pin': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0538 16.8032L20.8584 6.74939C21.1499 6.2446 20.9769 5.59914 20.4721 5.30771L14.9882 2.14157C14.4834 1.85014 13.838 2.02309 13.5465 2.52787L7.74196 12.5817M15.0538 16.8032L11.3979 14.6925M15.0538 16.8032L17.7958 18.3863M7.74196 12.5817L5 10.9986M7.74196 12.5817L11.3979 14.6925M11.3979 14.6925L7.17638 22.0044"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'magic-wand': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 12H22M7.5 7.5L5 5M16.5 7.5L19 5M7.5 16.5L5 19M2 12H5.5M12 2V5M12 18.5V22M22.439 21.1155L13.8527 12.5292L11.1253 11.216L12.4385 13.9434L21.0248 22.5297C21.4153 22.9203 22.0485 22.9203 22.439 22.5297C22.8295 22.1392 22.8295 21.506 22.439 21.1155Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'calendar-date-appointment-time': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4H5C3.89543 4 3 4.89543 3 6V9M8 4H16M8 4V2M8 4V6M16 4H19C20.1046 4 21 4.89543 21 6V9H3M16 4V2M16 4V6M3 9V20C3 21.1046 3.89543 22 5 22H10M17 15.25V17L18.25 18.25M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'apps': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="9" height="9" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="16" y="16" width="5" height="5" rx="0.5"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="16" y="7" width="5" height="5" rx="0.5"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="16" width="5" height="5" rx="0.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'coffee-tea': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9H18V19C18 20.6569 16.6569 22 15 22H5C3.34315 22 2 20.6569 2 19V9Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11H18.9098C20.6165 11 22 12.3835 22 14.0902V14.0902C22 15.2606 21.3387 16.3307 20.2918 16.8541L18 18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 2V5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2V5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 2V5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'caret-sort-select-arrow-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6L12 10L8 6M16 18L12 14L8 18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-top-left': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.364 18.364L5.63605 5.63605M5.63605 5.63605L15.5356 5.63606M5.63605 5.63605V15.5355"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'umbrella-insurance': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9999 3C17.1853 3 21.4982 6.94668 21.9999 12C21.3942 11.8436 20.6267 11.8417 19.9013 11.9104C17.9748 12.0926 16.369 13.1073 16.1075 14.2782M11.9999 3C6.81459 3 2.55104 6.94668 2.04932 12M11.9999 3L11.9999 2M2.08044 12C2.68621 11.8436 3.45373 11.8417 4.17906 11.9104C6.10563 12.0926 7.71142 13.1073 7.97291 14.2782M7.99994 14C8.54905 12.8348 10.2583 12 11.9999 12M11.9999 12C13.7416 12 15.4508 12.8348 15.9999 14M11.9999 12L11.9999 19.5C11.9999 20.8807 10.8807 22 9.49994 22C8.11923 22 6.99994 20.8807 6.99994 19.5V19M12.1676 3C14.5452 5.62038 15.9999 9.13579 15.9999 13.0001M11.8322 3C9.45459 5.62037 7.99995 9.13572 7.99995 13"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevrons-left-arrows': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 4L11 12L19 20"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 4L5 12L13 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'crosshair-target-center-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2V8M12 16V22M22 12H16M8 12H2M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'drag-vertical': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10L3 10M21 14L3 14M12 4L12 10M12 14L12 20M15 18L12 21L9 18M15 6L12 3L9 6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'battery-charging': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10L21 14"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="6" width="15" height="12" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2222 15L13 12H8L10.7778 9"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'dollar-currency': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 5H9.5C7.567 5 6 6.567 6 8.5C6 10.433 7.567 12 9.5 12H14.5C16.433 12 18 13.567 18 15.5C18 17.433 16.433 19 14.5 19H6M12 2V22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'wallet': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 9.71429V6.28571C20 5.02335 19.1046 4 18 4H4C2.89543 4 2 5.02335 2 6.28571V17.7143C2 18.9767 2.89543 20 4 20H18C19.1046 20 20 18.9767 20 17.7143V14.2857M22 9.71429H16C14.8954 9.71429 14 10.7376 14 12C14 13.2624 14.8954 14.2857 16 14.2857H22V9.71429Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-chat-message-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H8L11.6464 20.6464C11.8417 20.8417 12.1583 20.8417 12.3536 20.6464L16 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'basketball-ball-sports': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 4.8584C6.85136 6.67332 8 9.20244 8 11.9998C8 14.7972 6.85136 17.3263 5 19.1413"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2L12 22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L2 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 4.8584C17.1486 6.67332 16 9.20244 16 11.9998C16 14.7972 17.1486 17.3263 19 19.1413"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'email-message-inbox': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="5" width="18" height="14" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 5.5L12 13L4 5.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'gif': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7V17M17 17V7H21M17 12H20M6.5 12.5H9V13.875C9 15.6009 7.65685 17 6 17C4.34315 17 3 15.6009 3 13.875V10.125C3 8.39911 4.34315 7 6 7C7.15198 7 8.15231 7.67635 8.65498 8.66863"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'eye-password-hide': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L22 22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'tag-price-discount': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12.393L3 3L12.393 3L20.4442 11.0512C21.1853 11.7922 21.1853 12.9938 20.4442 13.7349L13.7349 20.4442C12.9938 21.1853 11.7922 21.1853 11.0512 20.4442L3 12.393Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.01611 7.01611L7 7"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'stop': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="4" y="4" width="16" height="16" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'course-diary': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12V4C20 2.89543 19.1046 2 18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V18.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 2V14L16.8182 11L20 14V5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'api-integration-connection': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="4" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="12" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="4" cy="12" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="20" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12H18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15V18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'connection-signal-wifi': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.70825C19.2447 5.11852 20 6.97101 20 8.9999C20 11.0288 19.2447 12.8813 18 14.2915M6 3.70825C4.75527 5.11852 4 6.97101 4 8.9999C4 11.0288 4.75527 12.8813 6 14.2915"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6.35425C15.6224 7.05938 16 7.98563 16 9.00007C16 10.0145 15.6224 10.9408 15 11.6459M9 6.35425C8.37764 7.05938 8 7.98563 8 9.00007C8 10.0145 8.37764 10.9408 9 11.6459"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-dropdown-caret-sort-select-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10L12 14L8 10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'paper-file': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 2.5V9H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'data-server': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3.5C5 2.39543 5.89543 1.5 7 1.5H17C18.1046 1.5 19 2.39543 19 3.5V20.5C19 21.6046 18.1046 22.5 17 22.5H7C5.89543 22.5 5 21.6046 5 20.5V3.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15.5H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8.5H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.01611 12.0161L9 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.01611 5.01611L9 5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.01611 19.0161L9 19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'notification-bell-alarm': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6 9.45798V8.4C5.6 4.86538 8.46538 2 12 2C15.5346 2 18.4 4.86537 18.4 8.4V9.45798C18.4 11.7583 19.0649 14.0096 20.3146 15.9409L21 17H3L3.68539 15.9408C4.93512 14.0096 5.6 11.7583 5.6 9.45798Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20.8889V20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889V20.8889"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'share-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9289 9.21468V4.92896L21 12L13.9289 19.0711V14.2392M13.9289 9.22304C13.2857 9.07708 12.6163 9.00002 11.9289 9.00002C6.95836 9.00002 2.92892 13.0295 2.92892 18C2.92892 18.8675 3.05165 19.7063 3.28069 20.5C4.36404 16.7457 7.82583 14 11.9289 14C12.6163 14 13.2857 14.0771 13.9289 14.223"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'battery-full': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L6 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 9L9 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L12 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L15 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10L21 14"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="6" width="15" height="12" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'music-note': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18ZM9 18V5.83458C9 5.35129 9.34563 4.93716 9.82112 4.85071L19.4106 3.10717C19.7175 3.05137 20 3.28715 20 3.59911V16M20 16C20 17.6569 18.6569 19 17 19C15.3431 19 14 17.6569 14 16C14 14.3431 15.3431 13 17 13C18.6569 13 20 14.3431 20 16Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-angel-smiley-happy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5423 9.00019C21.8397 9.94717 22 10.9549 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.9549 2.16033 9.94717 2.45774 9.00019M9.01611 10.0161L9 10M8 15C8 15 9 17 12 17C15 17 16 15 16 15M15.0161 10.0161L15 10M22 4C22 5.10457 17.5228 6 12 6C6.47715 6 2 5.10457 2 4C2 2.89543 6.47715 2 12 2C17.5228 2 22 2.89543 22 4Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'analytics-graph-chart': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 21H3"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 16L12.25 10.75L15.75 14.25L21 9"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bluetooth': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3L19 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8L5 16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8L19 16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 16L12 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'pie-chart': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V12H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'watch': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8C7 7.44772 7.44772 7 8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2V7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17V22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 2V7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17V22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 13V11"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'drag-horizontal': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3L10 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3L14 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12H20"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 9L21 12L18 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 9L3 12L6 15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chevron-down-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8L12 16L20 8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'launch-link-open': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H22V7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 11L21.5 2.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'info': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6.01953V6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 10V18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'microphone-music-talk': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17C8.13401 17 5 13.866 5 10M12 17C15.866 17 19 13.866 19 10M12 17V21M15 22H9M12 13C10.3431 13 9 11.5225 9 9.7V5.3C9 3.47746 10.3431 2 12 2C13.6569 2 15 3.47746 15 5.3V9.7C15 11.5225 13.6569 13 12 13Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'linkedin-social': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="2" y="9" width="4" height="13"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 22H14V15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15V22H22V15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'asterisk-star': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4L12 20"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3137 6.00024L6.00001 17.314"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12L4 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3137 17.3137L6.00001 6.00001"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'chatbot': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12C14.2005 12.6224 13.1502 13 12 13C10.8498 13 9.79952 12.6224 9 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 8.01953V8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 8.01953V8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'sun-day': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 17.5L19 19M20 12H22M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M2 12H4M12 2V4M12 20V22M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'zoom-in': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8V14M14 11H8M21 21L17 17M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'account-user-person-square': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 21C8.25027 21 6.3754 21 5.06107 20.0451C4.6366 19.7367 4.26331 19.3634 3.95491 18.9389C3 17.6246 3 15.7497 3 12C3 8.25027 3 6.3754 3.95491 5.06107C4.26331 4.6366 4.6366 4.26331 5.06107 3.95491C6.3754 3 8.25027 3 12 3C15.7497 3 17.6246 3 18.9389 3.95491C19.3634 4.26331 19.7367 4.6366 20.0451 5.06107C21 6.3754 21 8.25027 21 12C21 15.7497 21 17.6246 20.0451 18.9389C19.7367 19.3634 19.3634 19.7367 18.9389 20.0451C17.6246 21 15.7497 21 12 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'upload-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H12H14C14.5523 22 15 21.5523 15 21V11L19 10L12 2L5 10L9 11V21C9 21.5523 9.44772 22 10 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'model-diamond': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10L6 4H18L22 10M2 10L12 20M2 10H22M12 20L22 10M12 20L16 10L12 4L8 10L12 20Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'location-pin-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14L12 22"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="8" r="6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'toogle-right': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'headphone-music-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.71428 22H3C2.44772 22 2 21.5523 2 21V15C2 14.4477 2.44772 14 3 14H6.71429C7.26657 14 7.71429 14.4477 7.71429 15V21C7.71429 21.5523 7.26657 22 6.71428 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2857 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14H17.2857C16.7334 14 16.2857 14.4477 16.2857 15V21C16.2857 21.5523 16.7334 22 17.2857 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 14V9C5 5.13401 8.13401 2 12 2V2C15.866 2 19 5.13401 19 9V14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'headphone-music': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 14.5V21C2 21.5523 2.44772 22 3 22H6.71428C7.26657 22 7.71429 21.5523 7.71429 21V15.5C7.71429 14.9477 7.26657 14.5 6.71429 14.5H2ZM2 14.5V12C2 6.47715 6.47715 2 12 2V2C17.5228 2 22 6.47715 22 12V14.5M22 14.5V21C22 21.5523 21.5523 22 21 22H17.2857C16.7334 22 16.2857 21.5523 16.2857 21V15.5C16.2857 14.9477 16.7334 14.5 17.2857 14.5H22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'edit-write': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V13"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 11.5L17.5 3.5C18.3284 2.67157 19.6716 2.67157 20.5 3.5C21.3284 4.32843 21.3284 5.67157 20.5 6.5L12.5 14.5L8 16L9.5 11.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'save': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21H19C20.1046 21 21 20.1046 21 19V8.82843C21 8.29799 20.7893 7.78929 20.4142 7.41421L16.5858 3.58579C16.2107 3.21071 15.702 3 15.1716 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 3V8H15V3"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="15" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'cut-scissors': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7224 8.69623C21.1573 7.86781 21.6489 6.03304 20.8205 4.59816C19.9921 3.16328 18.1573 2.67165 16.7224 3.50008C15.2876 4.32851 14.7959 6.16328 15.6244 7.59816C16.4528 9.03303 18.2876 9.52466 19.7224 8.69623ZM19.7224 8.69623L3 17.9999M19.7225 15.5672C21.1573 16.3956 21.649 18.2304 20.8205 19.6652C19.9921 21.1001 18.1573 21.5917 16.7225 20.7633C15.2876 19.9349 14.796 18.1001 15.6244 16.6652C16.4528 15.2304 18.2876 14.7387 19.7225 15.5672ZM19.7225 15.5672L3.00001 6.2635"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'naira-currency-money': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21V2L19 22V2M2 10H22M2 14H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'volume-mute': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10L20 12M20 12L18 14M20 12L18 10M20 12L22 14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 8H3C2.44772 8 2 8.44772 2 9V15C2 15.5523 2.44772 16 3 16H8.5L15 21V3L8.5 8Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'badge': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 8.5C18.5 12.0899 15.5899 15 12 15C8.41015 15 5.5 12.0899 5.5 8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 14V22L12.3182 19L15.5 22V14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shop-store': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.22222 6H19.7778L22 9.5V13H2V9.5L4.22222 6Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13H20V20C20 20.5523 19.5523 21 19 21H11C10.4477 21 10 20.5523 10 20V13Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 13L4 21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 2L5 2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'gender-male': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 8.5C18.5 12.0899 15.5899 15 12 15C8.41015 15 5.5 12.0899 5.5 8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 19H16.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22L12 15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alert-error': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9V13"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17.0195V17"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'zoom-out': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 11H8M21 21L17 17M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'thumbs-up': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.08409 10.6629L10.3393 3.23907C10.79 2.21121 11.9999 1.68012 12.9811 2.2056C14.5081 3.0234 14.2018 3.78995 14.2018 8.60158H19.9659C21.2123 8.60158 22.1654 9.72766 21.9759 10.9763L20.568 20.2521C20.4154 21.2577 19.5618 22 18.558 22H7.08409M7.08409 10.6629V22M7.08409 10.6629H4.03364C2.91049 10.6629 2 11.5857 2 12.7242V19.9387C2 21.0771 2.91049 22 4.03364 22L7.08409 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'camera-aperture-capture-lens': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 16L4.33008 5.66015L4.30767 5.60992M14.5 8L19.6822 18.3644M12.5 2L7.5 12M16.5 12L11.5 22M21.1679 8H9.5M14.5 16H2.83209M4.30767 5.60992C2.86663 7.34271 2 9.57015 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C8.907 2 6.14198 3.40422 4.30767 5.60992Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'play': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21V3L19 12L5 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'ad-announcement-megaphone': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9348 15.6583L18.6383 3.37924C18.2799 2.0442 16.6391 1.55235 15.603 2.46935L13.5253 4.30818C11.2132 6.35446 8.45556 7.83537 5.47068 8.63362C2.97216 9.30181 1.49142 11.8725 2.16089 14.3662C2.83037 16.8599 5.40053 18.3472 7.89906 17.679C10.8839 16.8807 14.014 16.787 17.0415 17.4054L19.762 17.961C21.1187 18.2381 22.2932 16.9933 21.9348 15.6583Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.71747 8L11.5 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'harddrive-harddisk': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.19048 15L6.50933 6.28801C6.80476 5.5125 7.54842 5 8.3783 5H15.6217C16.4516 5 17.1952 5.5125 17.4907 6.28801L20.8095 15M18.0161 16.0161L18 16M6.375 19H17.625C19.489 19 21 17.6569 21 16C21 14.3431 19.489 13 17.625 13H6.375C4.51104 13 3 14.3431 3 16C3 17.6569 4.51104 19 6.375 19Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'face-mask': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9H20C21.6569 9 23 10.3431 23 12C23 13.6569 21.6569 15 20 15H19M5 9H4C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15H5M16 10.5H8M16 13.5H8M6 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'hashtag-trending-number': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9H20M4 15H20M10 3L7 21M17 3L14 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'roadmap-timeline': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="6" height="4"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="17" width="8" height="4"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="7" y="10" width="14" height="4"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shuffle-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17H14L8 7H3M21 17L18 14M21 17L18 20M21 7H14L8 17H3M21 7L18 4M21 7L18 10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'phone-call': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.51089 2L7.15002 2.13169C7.91653 2.15942 8.59676 2.64346 8.89053 3.3702L9.96656 6.03213C10.217 6.65159 10.1496 7.35837 9.78693 7.91634L8.40831 10.0375C9.22454 11.2096 11.4447 13.9558 13.7955 15.5633L15.5484 14.4845C15.9939 14.2103 16.5273 14.1289 17.0314 14.2581L20.5161 15.1517C21.4429 15.3894 22.0674 16.2782 21.9942 17.2552L21.7705 20.2385C21.6919 21.2854 20.8351 22.1069 19.818 21.9887C6.39245 20.4276 -1.48056 1.99997 3.51089 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'photo-image-picture': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21L16 10L21 15"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="3" width="18" height="18" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="8.5" cy="8.5" r="1.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'toogle-left': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 8.68629 4.68629 6 8 6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'marker-create-pen': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21L9 14H15L16 21M11.6154 8.34613L10 14H14L12.3846 8.34613C12.2741 7.95932 11.7259 7.95932 11.6154 8.34613ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'battery-empty': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L6 15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10L21 14"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="3" y="6" width="15" height="12" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'redo': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10H7C4.79086 10 3 11.7909 3 14V14C3 16.2091 4.79086 18 7 18H12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 6L21 10L17 14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'cursor-alt-pointer-mouse': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10.2069L3 3L10.2069 22L13.4828 13.4828L22 10.2069Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'health-cross-firstaid': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14V10C21 9.44772 20.5523 9 20 9H15L15 4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V9L4 9C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H9L9 20C9 20.5523 9.44771 21 10 21H14C14.5523 21 15 20.5523 15 20V15L20 15C20.5523 15 21 14.5523 21 14Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'inbox-mail': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.04819 12H8.44444L10.2222 14H13.7778L15.5556 12H20.9361M6.70951 5.4902L3.27942 11.2785C3.09651 11.5871 3 11.9393 3 12.2981V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V12.2981C21 11.9393 20.9035 11.5871 20.7206 11.2785L17.2905 5.4902C17.1104 5.18633 16.7834 5 16.4302 5H7.5698C7.21659 5 6.88958 5.18633 6.70951 5.4902Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'upload-share': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17V3M12 3L7 8.44446M12 3L17 8.44444"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'check-good-yes': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12L9 18L21 6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'swim': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 19H2.54405C3.30819 19 4.03284 18.7041 4.52203 18.1923L5.125 17.5615C5.84057 16.8128 7.15943 16.8128 7.875 17.5615C8.59057 18.3101 9.90943 18.3101 10.625 17.5615C11.3406 16.8128 12.6594 16.8128 13.375 17.5615C14.0906 18.3101 15.4094 18.3101 16.125 17.5615C16.8406 16.8128 18.1594 16.8128 18.875 17.5615L19.478 18.1923C19.9672 18.7041 20.6918 19 21.4559 19H23" />
<path d="M19.4142 5.58579C20.1953 6.36683 20.1953 7.63317 19.4142 8.41421C18.6332 9.19526 17.3668 9.19526 16.5858 8.41421C15.8047 7.63317 15.8047 6.36683 16.5858 5.58579C17.3668 4.80474 18.6332 4.80474 19.4142 5.58579Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 7H10L17.5 13.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10L9.5 13.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'add-plus': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4V20M4 12H20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'connect-link-category': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="2" width="6" height="6" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 18V14C4 13.4477 4.44772 13 5 13H19C19.5523 13 20 13.4477 20 14V18"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="4" cy="20" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="20" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="20" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'theater-mask': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 6V3C16 2.44772 15.5523 2 15 2H3C2.44772 2 2 2.44772 2 3V11C2 14.6979 4.86736 17.726 8.5 17.9824"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7V15C22 18.866 18.866 22 15 22C11.134 22 8 18.866 8 15V7Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0161 11.0161L12 11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0161 11.0161L18 11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.2359 16.9998C16.6866 17.6136 15.8883 17.9998 14.9998 17.9998C14.0688 17.9998 13.2368 17.5757 12.6865 16.9102"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'lightning-energy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L8 3H15.5L14 8.99991H18L9 21L10.5 12H6Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'blockchain': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6V18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 6V18"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3H6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-square-chat-message': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11H11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'volume-up': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8H3C2.44772 8 2 8.44772 2 9V15C2 15.5523 2.44772 16 3 16H8L14 21V3L8 8Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 9.35425C17.6224 10.0594 18 10.9856 18 12.0001C18 13.0145 17.6224 13.9408 17 14.6459"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8C21.6224 9.06603 22 10.4663 22 12C22 13.5337 21.6224 14.934 21 16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'maximize-expand': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21L10.5 13.5M3 21V15.4M3 21H8.6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.0711 3L13.5 10.5M21.0711 3V8.65685M21.0711 3H15.4142"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'paper-file-text': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 2.5V9H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 17H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 13H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 9H9"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'star-ratings': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'menu-hambuger': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="5" y1="7" x2="19" y2="7"  stroke-linecap="round" stroke-linejoin="round"/>
<line x1="5" y1="12" x2="19" y2="12"  stroke-linecap="round" stroke-linejoin="round"/>
<line x1="5" y1="17" x2="19" y2="17"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'face-id': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 7.55556V4.22222C22 2.99492 21.0051 2 19.7778 2H16.4444M22 16.4444V19.7778C22 21.0051 21.0051 22 19.7778 22H16.4444M2 16.4444V19.7778C2 21.0051 2.99492 22 4.22222 22H7.55556M2 7.55556V4.22222C2 2.99492 2.99492 2 4.22222 2H7.55556"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 9L8 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 8L12.5 11.5C12.5 12.6046 11.6046 13.5 10.5 13.5L10 13.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9L16 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 16.5L15 17.0961C14.3696 17.5621 13.4037 18 12 18C10.5963 18 9.63041 17.5621 9 17.0961L8.5 16.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'subtract-circle-minus-remove': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12H17"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'notification-off-bell-alarm': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7438 17H3L3.67285 15.9408C4.89971 14.0096 5.55243 11.7583 5.55243 9.45798V8.4C5.55243 7.61493 5.69119 6.86288 5.94511 6.16791M8.46159 3C9.4362 2.36687 10.5937 2 11.8353 2C15.3053 2 18.1182 4.86537 18.1182 8.4V9.45798C18.1182 11.0231 18.4204 12.5656 19 14"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20.8889V20.8889C11.5344 21.4827 12.4656 21.4827 13 20.8889V20.8889"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 2L22 22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'branch-git-fork': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="7" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="7" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="17" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 7H6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7V7C8.65685 7 10 8.34315 10 10V15C10 16.1046 10.8954 17 12 17H18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'down-turn-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 15L9 19M9 19L5 15M9 19L9 8C9 6.34315 10.3431 5 12 5L19 5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'upload-cloud': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3414 6.15897C7.16507 3.73597 9.38755 2 12 2C15.3137 2 18 4.79305 18 8.23846C20.2091 8.23846 22 10.1005 22 12.3974C22 13.9368 21.1956 15.2809 20 16M6.32069 6.20644C3.8806 6.55106 2 8.72597 2 11.3576C2 13.0582 2.7854 14.5682 3.99965 15.5167"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 16L12 12M12 12L16 16M12 12V22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-circle-alt-chat-message': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.663 3.04094 17.0829 4.73812 18.875L2.72681 21.1705C2.44361 21.4937 2.67314 22 3.10288 22H12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'plug-connect': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7H18V12C18 15.3137 15.3137 18 12 18V18C8.68629 18 6 15.3137 6 12V7Z"  stroke-linecap="round" stroke-linejoin="round"/>
<line x1="15" y1="2" x2="15" y2="7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18V22"  stroke-linecap="round" stroke-linejoin="round"/>
<line x1="9" y1="2" x2="9" y2="7"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'heart-love-like': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'desktop-mac-computer': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22H13M17 22H19M8.99999 12L6.00002 22M5 2L11.5 17.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'desktop-computer-mac': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 16V17.1716C9 18.9826 8.28058 20.7194 7 22H17C15.7194 20.7194 15 18.9826 15 17.1716V16M4 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2H4C2.89543 2 2 2.89543 2 4V14C2 15.1046 2.89543 16 4 16Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'user-add-account-profile': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="7" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 21V17C2 15.8954 2.89543 15 4 15H14C15.1046 15 16 15.8954 16 17V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 8V14M16 11H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'expand-arrows': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L12 22M12 22L9 19M12 22V15.5M15 5L12 2M12 2L9 5M12 2V8.5M5 9L2 12M2 12L5 15M2 12H8.5M19 9L22 12M22 12L19 15M22 12H15.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'euro-currency': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 2.83209C17.7751 2.2969 16.4222 2 15 2C9.47715 2 5 6.47715 5 12C5 17.5228 9.47715 22 15 22C16.4222 22 17.7751 21.7031 19 21.1679M2 10H15M2 14H15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'user-account-profile': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'crosshair-target-center': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H16M12 22C6.47715 22 2 17.5228 2 12M12 22V16M2 12C2 6.47715 6.47715 2 12 2M2 12L8 12M12 2V8"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'twitter-social-tweet': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.288 21C15.832 21 19.96 14.4544 19.96 8.78772C19.96 8.60357 19.96 8.41943 19.952 8.23528C20.752 7.62425 21.448 6.87092 22 6.01715C21.248 6.36033 20.456 6.5947 19.64 6.69514C20.496 6.15945 21.136 5.31404 21.44 4.31798C20.632 4.8202 19.752 5.17175 18.832 5.3559C17.28 3.62324 14.68 3.53954 13.024 5.17175C11.96 6.21804 11.504 7.78328 11.84 9.2732C8.552 9.09742 5.472 7.46521 3.392 4.78671C2.304 6.74537 2.856 9.25646 4.664 10.512C4.008 10.4953 3.376 10.3111 2.8 9.9763C2.8 9.99305 2.8 10.0098 2.8 10.0265C2.8 12.0689 4.176 13.8266 6.096 14.2368C5.488 14.4126 4.856 14.4377 4.24 14.3121C4.776 16.0615 6.32 17.2585 8.072 17.292C6.616 18.4889 4.824 19.1334 2.976 19.1334C2.648 19.1334 2.32 19.1083 2 19.0748C3.88 20.3387 6.056 21 8.288 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'attachment-clip-hook': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.0265L12.8445 19.289C10.5925 21.5707 6.94113 21.5707 4.68905 19.289C2.43698 17.0074 2.43698 13.3081 4.68905 11.0265L11.4853 4.14106C12.9867 2.61997 15.4209 2.61997 16.9223 4.14106C18.4236 5.66215 18.4236 8.12832 16.9223 9.64941L10.126 16.5348C9.37535 17.2954 8.15824 17.2954 7.40754 16.5348C6.65685 15.7743 6.65685 14.5412 7.40754 13.7807L14.2038 6.89524"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'minimize-collapse': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 13.5L3 21M10.5 13.5V19.1M10.5 13.5H4.9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 10.5L21 3M13.5 10.5V4.84315M13.5 10.5H19.1568"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-meh-sad': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10H14M10 10H8M15 16H9M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'fire-trend-hot': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99998 9C11.8752 5.5 11.3921 3.5 11.3921 2C17 6 14.8333 10.5 13.5 12.5C15.1 12.1 18 10 18.5 9C23.5 16.5 17.8921 21.1667 14.8921 22C12.4921 21.6 10.5588 18.1667 9.89211 16.5C8.69211 19.3 9.05878 21.3333 9.39211 22C2.62477 19 2.12475 12.5 6.99998 9Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'moon-night': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.3812 2.04327C7.76937 2.50154 6.2485 3.36519 4.97948 4.63421C1.00684 8.60687 1.00684 15.0478 4.97948 19.0205C8.95213 22.9932 15.3931 22.9932 19.3657 19.0205C20.6429 17.7433 21.5095 16.211 21.9654 14.5876M9.5384 2C8.6321 5.39377 9.51018 9.16492 12.1726 11.8274C14.8351 14.4899 18.6063 15.368 22 14.4617"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'home-house': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10.25V20C3 20.5523 3.44771 21 4 21H8.42857C8.98086 21 9.42857 20.5523 9.42857 20V13.2857H14.5714V20C14.5714 20.5523 15.0191 21 15.5714 21H20C20.5523 21 21 20.5523 21 20V10.25C21 9.93524 20.8518 9.63885 20.6 9.45L12 3L3.4 9.45C3.14819 9.63885 3 9.93524 3 10.25Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'check-box': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12L10.5 15.5L17 9M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'camera-photo': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21H20C21.1046 21 22 20.1046 22 19V8.6C22 7.49543 21.1046 6.6 20 6.6L17 6.6L14.5 3H9.5L7 6.6L4 6.6C2.89543 6.6 2 7.49543 2 8.6V19C2 20.1046 2.89543 21 4 21Z"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="13" r="4"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'sparkle-star': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4L13.4308 10.5692L20 13L13.4308 15.4308L11 22L8.56918 15.4308L2 13L8.56918 10.5692L11 4Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 2L16.9051 3.09486L18 3.5L16.9051 3.90514L16.5 5L16.0949 3.90514L15 3.5L16.0949 3.09486L16.5 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 7L21.2701 7.72991L22 8L21.2701 8.27009L21 9L20.7299 8.27009L20 8L20.7299 7.72991L21 7Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'reply-all': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 5.95795L7 11.9036L13 17.765V13.7309C13.5339 13.609 13.9589 13.5734 14.5295 13.5734C17.9353 13.5734 20.8088 15.8657 21.708 19.0001C21.8981 18.3374 22 17.6371 22 16.9129C22 12.7631 18.6553 9.39898 14.5295 9.39898C13.9589 9.39898 13.5339 9.42114 13 9.543L13 5.95795Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 6L2 12L8 18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-happy-face': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M8 15C8 15 8.12514 15.2503 8.4197 15.5738C8.9578 16.1647 10.0613 17 12 17C13.9387 17 15.0422 16.1647 15.5803 15.5738C15.8749 15.2503 16 15 16 15M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-h': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3V11.9474M5 11.9474V21M5 11.9474H19M19 3V11.9474M19 11.9474V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'mobile-phone': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="3" width="12" height="19" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0161 18.0161L12 18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'download-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2H12H14C14.5523 2 15 2.44771 15 3V13L19 14L12 22L5 14L9 13V3C9 2.44772 9.44772 2 10 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'delete': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9L18 15M18 9L12 15M8.36364 5L2 12L8.36364 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5H8.36364Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-sad-face': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0161 10.0161L15 10M9.01611 10.0161L9 10M15.5789 16.4247C15.0403 15.8338 13.9371 15 12 15C10.0629 15 8.9597 15.8338 8.42109 16.4247M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'trash-alt-delete-bin': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'tram-train-transport': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="5" width="14" height="15" rx="3"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2H16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 16H8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 16H19"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L12 2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 22L8.00001 20"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 22L16 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'comment-square-alt-chat-message': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'security-shield-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'up-turn-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 9L9 5M9 5L5 9M9 5L9 16C9 17.6569 10.3431 19 12 19H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'gift': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 13H20V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V13Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9H22V13H2V9Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L12 22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5.5C12 3.567 10.433 2 8.5 2C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 9C17.433 9 19 7.433 19 5.5C19 3.567 17.433 2 15.5 2C13.567 2 12 3.567 12 5.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'car': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 17H21C21.5523 17 22 16.5523 22 16V12.6311C22 12.2188 21.747 11.8488 21.3629 11.6992L17 10L14 5H6L4 10H3C2.44772 10 2 10.4477 2 11V16C2 16.5523 2.44772 17 3 17H6M18 17C18 18.1046 17.1046 19 16 19C14.8954 19 14 18.1046 14 17M18 17C18 15.8954 17.1046 15 16 15C14.8954 15 14 15.8954 14 17M6 17C6 18.1046 6.89543 19 8 19C9.10457 19 10 18.1046 10 17M6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17M10 17H14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'mastercard-credit-debit': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="5" width="18" height="14" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="15" cy="13" r="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3229 11.5C12.9703 11.1888 12.5072 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15C12.5072 15 12.9703 14.8112 13.3229 14.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'more-vertical': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="18" r="1" transform="rotate(-90 12 18)"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="1" transform="rotate(-90 12 12)"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="6" r="1" transform="rotate(-90 12 6)"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'facebook-social': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H18V6H16C14.8954 6 14 6.89543 14 8V10H18L16.9565 14H13.8261V22H9.65217V14H6V10.0396H10V7C10 4.23858 12.2386 2 15 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-i': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'emoji-smiley-dizzy-happy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C8 15 9 17 12 17C15 17 16 15 16 15M16 9L15 10M15 10L14 11M15 10L16 11M15 10L14 9M10 9L9 10M9 10L8 11M9 10L10 11M9 10L8 9M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'security-shield': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12L10.5 14.5L16 9"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-up': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21V3M12 3L5 10M12 3L19 10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-k': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21L9 11M5 3V14M5 14V21M5 14L19 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'help-question': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.2744V18.25"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14.5C14 13.5 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'eye-password-show': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'edit-write-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="3" y1="21" x2="21" y2="21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 13.5L14.5 3.5C15.3284 2.67157 16.6716 2.67157 17.5 3.5C18.3284 4.32843 18.3284 5.67157 17.5 6.5L7.5 16.5L3.5 17.5L4.5 13.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'undo': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10H17C19.2091 10 21 11.7909 21 14V14C21 16.2091 19.2091 18 17 18H12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6L3 10L7 14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'compress-arrows-converge': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6L12 9M12 9L9 6M12 9V2M15 18L12 15M12 15L9 18M12 15V22M6 9L9 12M9 12L6 15M9 12H2M18 9L15 12M15 12L18 15M15 12H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'security-password-key': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0151 13.6556C14.8093 14.3587 16.9279 13.9853 18.3777 12.5355C20.3304 10.5829 20.3304 7.41709 18.3777 5.46447C16.4251 3.51184 13.2593 3.51184 11.3067 5.46447C9.85687 6.91426 9.48353 9.03288 10.1866 10.8271M12.9964 13.6742L6.82843 19.8422L4.2357 19.6065L4 17.0138L10.168 10.8458M15.5493 8.31568V8.29289"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'gender-female': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15.5C15 19.0899 12.0899 22 8.5 22C4.91015 22 2 19.0899 2 15.5C2 11.9101 4.91015 9 8.5 9C12.0899 9 15 11.9101 15 15.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2H22V9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5 10.5L22 2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'filter': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 3H2L10 12V19.2L14 21V12L22 3Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'youtube-video': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.44974 6.99251C2.57907 6.0915 3.31865 5.41506 4.22659 5.35027C6.16394 5.21201 9.53638 5 12 5C14.4636 5 17.8361 5.21201 19.7734 5.35027C20.6813 5.41506 21.4209 6.0915 21.5503 6.99251C21.749 8.37719 22 10.4356 22 12.0001C22 13.5647 21.749 15.623 21.5503 17.0077C21.4209 17.9087 20.6813 18.5852 19.7733 18.6499C17.836 18.7881 14.4636 19 12 19C9.53641 19 6.16403 18.7881 4.22666 18.6499C3.31869 18.5852 2.57906 17.9087 2.44973 17.0077C2.25098 15.623 2 13.5647 2 12.0001C2 10.4356 2.25099 8.37719 2.44974 6.99251Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12L10 15.4641V8.5359L16 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15V8.5L16 12L10 15Z" />
</svg>`,
    'emoji-smiley-angry-mad': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17C8 17 9 15 12 15C15 15 16 17 16 17M16 9.50014L14 10.5001M9.99999 10.5001L7.5 9.50001M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'bed-double-hotel': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L10 9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9L18 9"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 17V21M21 17H3M21 17V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V21"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V9"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'filter-alt': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 7H22M6 12H18M11 17H13"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'tiktok-social': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.33333C17.5307 7.33333 14.0204 5.31371 14.0204 2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5102 11.4737C5.467 11.4737 3 13.8301 3 16.7368C3 19.6436 5.467 22 8.5102 22C11.5534 22 14.0204 19.6436 14.0204 16.7368V2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'focus-camera-plus-add': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 9V5C21 3.89543 20.1046 3 19 3H15M21 15V19C21 20.1046 20.1046 21 19 21H15M3 15V19C3 20.1046 3.89543 21 5 21H9M3 9V5C3 3.89543 3.89543 3 5 3H9M12 9V12M12 12V15M12 12H9M12 12H15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'arrow-left': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12H3M3 12L10 5M3 12L10 19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'logout-exit': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12H15"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 7L3 12L8 17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 3L21 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'laptop-computer': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="4" width="18" height="12" rx="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 20H22"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'thunderstorm-weather': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34141 7C7.16508 4.66962 9.38756 3 12 3C15.3137 3 18 5.68629 18 9C20.2091 9 22 10.7909 22 13C22 14.8638 20.7252 16.4299 19 16.874M6.32069 7.04576C3.8806 7.37721 2 9.46898 2 12C2 14.0503 3.2341 15.8124 5 16.584"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 11.0002L9 16.0005L15 16.0001M15 16.0491L12 21.0493"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'rocket-launch': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11H2L6 7L13 7L15 5.00002C16.1252 3.8748 17.4087 3.00002 19 3.00002L21 3L21 5.00002C21 6.50001 20 8.00001 19 9.00001L17 11L17 18L13 22V16.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9497 12L7 16.9497"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alert-cirlcle-error': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.0195V16"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-j': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'caret-sort-select-arrow': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10L12 6L8 10M16 14L12 18L8 14"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'cloud': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.34141 9C7.16508 6.66962 9.38756 5 12 5C15.3137 5 18 7.68629 18 11C20.2091 11 22 12.7909 22 15C22 17.2091 20.2091 19 18 19H7C4.23858 19 2 16.7614 2 14C2 11.469 3.8806 9.37721 6.32069 9.04576"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'download-cloud': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3414 6.15897C7.16507 3.73597 9.38755 2 12 2C15.3137 2 18 4.79305 18 8.23846C20.2091 8.23846 22 10.1005 22 12.3974C22 13.9368 21.1956 15.2809 20 16M6.32069 6.20644C3.8806 6.55106 2 8.72597 2 11.3576C2 13.0582 2.7854 14.5682 3.99965 15.5167"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18L12 22M12 22L16 18M12 22V12"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'adjust-vetical-settings': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2L16 13M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19M16 13C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19M16 19L16 22M8 22L8 11M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5M8 5L8 2"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-n': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21V3L19 21V3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shuffle': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L9.5 9.5M14.5 14.5L21 21M21 21H16M21 21V16M4 20L21 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'error': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 19L19 5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'account-user-person-round': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75988 19.8248C6.9173 17.5547 9.27709 16 12 16C14.7019 16 17.0462 17.5308 18.2131 19.7723M14.3333 10.4444C14.3333 11.7945 13.2389 12.8889 11.8889 12.8889C10.5389 12.8889 9.44444 11.7945 9.44444 10.4444C9.44444 9.09442 10.5389 8 11.8889 8C13.2389 8 14.3333 9.09442 14.3333 10.4444ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-y': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L12 12M12 12V21M12 12L19 3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'rewind': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 19V5L13 12L22 19Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 19V5L2 12L11 19Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'pause': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="6" y="4" width="4" height="16"  stroke-linecap="round" stroke-linejoin="round"/>
<rect x="14" y="4" width="4" height="16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'copy-duplicate': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="9" width="13" height="13" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'forward': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9289 9.21468V4.92896L21 12L13.9289 19.0711V14.2392M13.9289 9.22304C13.2857 9.07708 12.6163 9.00002 11.9289 9.00002C6.95836 9.00002 2.92892 13.0295 2.92892 18C2.92892 18.8675 3.05165 19.7063 3.28069 20.5C4.36404 16.7457 7.82583 14 11.9289 14C12.6163 14 13.2857 14.0771 13.9289 14.223"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'trash-delete-bin': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 11V17"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11V17"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alert-octagon-error': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2H8L2 8V16L8 22H16L22 16V8L16 2Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8V12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16.0195V16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'globe-world-earth': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H22"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2.2019C14.4744 4.72698 16 8.18526 16 11.9999C16 15.8145 14.4744 19.2728 12 21.7978"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2.2019C9.52563 4.72698 8 8.18526 8 11.9999C8 15.8145 9.52563 19.2728 12 21.7978"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'airport-plane-travel': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V16"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L17.1962 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L6.80385 12"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16L9.5 17.5"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16L14.5 17.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'snowflakes-weather-cold': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12 22M9.5 3.5L12 6L14.5 3.5M9.5 20.5L12 18L14.5 20.5M3.33975 7L20.6603 17M3.38879 9.91506L6.80385 9L5.88879 5.58494M18.1112 18.4151L17.1962 15L20.6112 14.0849M20.75 6.83494L3.4295 16.8349M20.701 9.75L17.2859 8.83494L18.201 5.41987M5.97854 18.25L6.8936 14.8349L3.47854 13.9199"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'lock-open': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="11" width="18" height="11" rx="2"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.6539 5.16851C15.9232 3.3131 14.1149 2 12 2C9.23858 2 7 4.23858 7 7V11"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'microphone-off-music-talk': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 12.1597C13.4692 12.6823 12.7684 13 12 13C10.3431 13 9 11.5225 9 9.7V7M15 8.5V5.3C15 3.47746 13.6569 2 12 2C10.9468 2 10.0204 2.59694 9.48516 3.5M12 17C8.13401 17 5 13.866 5 10M12 17C13.9073 17 15.6364 16.2372 16.899 15M12 17V21M19 10C19 10.7752 18.874 11.5209 18.6414 12.2179M15 22H9M4 2L22 20"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-x': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L19 21M19 3L5 21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'settings-account-more': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0761 3.16311C10.136 2.50438 10.6883 2 11.3497 2H12.6503C13.3117 2 13.864 2.50438 13.9239 3.16311C13.9731 3.70392 14.3623 4.14543 14.8708 4.336C15.0015 4.38499 15.1307 4.43724 15.2582 4.49263C15.7613 4.71129 16.3531 4.66938 16.7745 4.31818C17.2953 3.8842 18.0611 3.91894 18.5404 4.39829L19.4584 5.31623C19.9154 5.77326 19.9485 6.50338 19.5347 6.99992C19.1901 7.41349 19.158 7.99745 19.3897 8.48341C19.49 8.69386 19.5816 8.90926 19.664 9.12916C19.8546 9.63767 20.2961 10.0269 20.8369 10.0761C21.4956 10.136 22 10.6883 22 11.3497V12.6503C22 13.3117 21.4956 13.864 20.8369 13.9239C20.2961 13.9731 19.8546 14.3623 19.664 14.8708C19.59 15.0682 19.5086 15.262 19.4202 15.4518C19.2053 15.913 19.2401 16.4637 19.5658 16.8546C19.962 17.33 19.9303 18.0291 19.4927 18.4667L18.4667 19.4927C18.0291 19.9303 17.33 19.962 16.8546 19.5658C16.4637 19.2401 15.913 19.2053 15.4518 19.4202C15.262 19.5086 15.0682 19.59 14.8708 19.664C14.3623 19.8546 13.9731 20.2961 13.9239 20.8369C13.864 21.4956 13.3117 22 12.6503 22H11.3497C10.6883 22 10.136 21.4956 10.0761 20.8369C10.0269 20.2961 9.63767 19.8546 9.12917 19.664C8.90927 19.5816 8.69387 19.49 8.48343 19.3897C7.99746 19.158 7.4135 19.1901 6.99992 19.5347C6.50338 19.9485 5.77325 19.9154 5.31622 19.4584L4.39829 18.5404C3.91893 18.0611 3.8842 17.2953 4.31818 16.7745C4.66939 16.3531 4.71129 15.7613 4.49263 15.2582C4.43724 15.1307 4.385 15.0016 4.336 14.8708C4.14544 14.3623 3.70392 13.9731 3.16311 13.9239C2.50438 13.864 2 13.3117 2 12.6503V11.3497C2 10.6883 2.50438 10.136 3.16311 10.0761C3.70393 10.0269 4.14544 9.63768 4.33601 9.12917C4.3936 8.9755 4.45568 8.82402 4.52209 8.67489C4.7571 8.14716 4.71804 7.52257 4.34821 7.07877C3.89722 6.53758 3.93332 5.74179 4.43145 5.24365L5.24364 4.43146C5.74178 3.93332 6.53757 3.89722 7.07876 4.34822C7.52256 4.71805 8.14715 4.7571 8.67488 4.52209C8.82401 4.45568 8.97549 4.3936 9.12916 4.33601C9.63767 4.14544 10.0269 3.70393 10.0761 3.16311Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'pound-currency-money': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21H4.21053C6.30339 21 8 19.3034 8 17.2105V9.5C8 5.91015 10.9101 3 14.5 3H15C17.087 3 18.9251 4.06551 20 5.6822M4 21H21M3 13H16"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'shopping-cart': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="20" r="1"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="18" cy="20" r="1"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 3H5.5C5.5 3 5.91294 4.82843 6.17753 6C6.70622 8.34099 7.43235 11.5562 7.85836 13.4425C8.0643 14.3543 8.87398 15 9.8088 15H18.3957C19.3331 15 20.1447 14.3489 20.348 13.4339L22 6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 6H6.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-o': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-m': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21V3L12 14L20 3V21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-z': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3H19L5 21H19"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'mouse': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="5" y="2" width="14" height="20" rx="7"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 6V10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'planet-saturn-space': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1377 6.78518C20.4309 5.98947 22.0586 5.81342 22.4264 6.45046C23.1167 7.64619 19.1068 11.2538 13.4699 14.5082C7.83303 17.7627 2.70379 19.4316 2.01344 18.2359C1.64686 17.601 2.60555 16.286 4.42938 14.705M12 20C7.58173 20 4.00001 16.4183 4.00001 12C4.00001 7.58172 7.58173 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'wifi-connection': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8C4.88494 6.10123 8.31702 5 12 5C15.683 5 19.1151 6.10123 22 8"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.99995 11.8774C7.05917 10.6054 9.44994 9.87744 12 9.87744C14.55 9.87744 16.9407 10.6054 19 11.8774"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.07355 15.4549C10.0119 15.0016 11.0216 14.7549 12.0735 14.7549C13.1255 14.7549 14.1352 15.0016 15.0735 15.4549"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9181 19.1465L11.902 19.1304"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'sketch-diamond': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 3.5L12 3L17.5 3.5M6.5 3.5L2 8M6.5 3.5L12 21M2 8L12 21M2 8H22M12 21L22 8M12 21L17.5 3.5M22 8L17.5 3.5"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'browser-chrome': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 8H21M4 6L8.5 14M11 21.9999L15.5 13.9998M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'security-shield-privacy-bad': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13V4.22222L4.94372 4.07224C6.6371 3.94158 8.29889 3.54213 9.86666 2.88889L12 2L14.1333 2.88889C15.7011 3.54213 17.3629 3.94158 19.0563 4.07224L21 4.22222V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9L12 12M12 12L9 15M12 12L9 9M12 12L15 15"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'print': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 16H21C21.5523 16 22 15.5523 22 15V9C22 8.44772 21.5523 8 21 8H3C2.44772 8 2 8.44772 2 9V15C2 15.5523 2.44772 16 3 16H6"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 12H18V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V12Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V8H6V4Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'education-school': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 11V16L12 19.5L5 16V11"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 14V18"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'x-circle-close-delete': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8L12 12M12 12L8 16M12 12L8 8M12 12L16 16"  stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="10"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'snapchat-social': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9756 17.1497C21.8884 16.8566 21.4712 16.6499 21.4712 16.6499C21.4317 16.6288 21.3965 16.6099 21.3674 16.5951C20.672 16.2535 20.0555 15.8423 19.5365 15.3762C19.1193 15.0008 18.7623 14.5875 18.4758 14.1489C18.125 13.6132 17.961 13.1662 17.8904 12.9237C17.851 12.7655 17.8572 12.7022 17.8904 12.62C17.9174 12.5504 17.9984 12.485 18.0357 12.4534C18.2703 12.2847 18.6481 12.0358 18.8806 11.884C19.0819 11.7512 19.2542 11.6373 19.3559 11.5656C19.6818 11.3336 19.906 11.0974 20.0368 10.8423C20.207 10.5133 20.2278 10.1506 20.0949 9.79418C19.9164 9.31337 19.4743 9.02657 18.9117 9.02657C18.7872 9.02657 18.6585 9.04133 18.5298 9.06875C18.208 9.14045 17.9029 9.25643 17.6475 9.35765C17.6289 9.36609 17.6081 9.35133 17.6102 9.33024C17.6372 8.68705 17.6683 7.82244 17.5977 7.00211C17.5355 6.25981 17.3839 5.63349 17.139 5.0873C16.892 4.53901 16.5702 4.13412 16.319 3.841C16.0803 3.56263 15.6589 3.15141 15.0237 2.78237C14.1311 2.2636 13.114 2 12.0013 2C10.8908 2 9.87572 2.2636 8.98105 2.78237C8.30849 3.1725 7.87879 3.61324 7.68367 3.841C7.4325 4.13412 7.11075 4.53901 6.86372 5.0873C6.6167 5.63349 6.46724 6.2577 6.40497 7.00211C6.33439 7.82666 6.36345 8.62168 6.39252 9.33024C6.39252 9.35133 6.37383 9.36609 6.35308 9.35765C6.09775 9.25643 5.79261 9.14045 5.47086 9.06875C5.34423 9.04133 5.21553 9.02657 5.08891 9.02657C4.52844 9.02657 4.08629 9.31337 3.9057 9.79418C3.77285 10.1506 3.7936 10.5133 3.96382 10.8423C4.09667 11.0974 4.31878 11.3336 4.64469 11.5656C4.74432 11.6373 4.91869 11.7512 5.12005 11.884C5.34631 12.0337 5.71373 12.2763 5.95037 12.4429C5.97943 12.4639 6.07907 12.5399 6.11021 12.62C6.14342 12.7043 6.14965 12.7676 6.10605 12.9363C6.0334 13.1809 5.86941 13.6238 5.52483 14.1489C5.23837 14.5896 4.88133 15.0008 4.46409 15.3762C3.94514 15.8423 3.32862 16.2535 2.63323 16.5951C2.60002 16.612 2.56057 16.631 2.51906 16.6563C2.51906 16.6563 2.1039 16.8714 2.02502 17.1497C1.90877 17.5609 2.21807 17.9469 2.53151 18.1535C3.04631 18.4909 3.67321 18.6723 4.03647 18.7714C4.13819 18.7988 4.22952 18.8241 4.31256 18.8494C4.36445 18.8663 4.49523 18.9169 4.55127 18.9907C4.62185 19.0835 4.63016 19.1974 4.65506 19.326C4.69451 19.5432 4.78377 19.811 5.04739 19.9966C5.33801 20.1991 5.70542 20.2138 6.17248 20.2328C6.6603 20.2518 7.26643 20.275 7.96183 20.5091C8.28358 20.6166 8.57627 20.8001 8.91255 21.011C9.61832 21.4517 10.4964 22 11.9951 22C13.4959 22 14.3802 21.4496 15.0901 21.0067C15.4264 20.798 15.715 20.6166 16.0305 20.5112C16.7259 20.2771 17.332 20.2539 17.8198 20.2349C18.2869 20.2159 18.6543 20.2033 18.9449 19.9987C19.2272 19.8005 19.3082 19.5053 19.3456 19.2838C19.3663 19.1742 19.3788 19.0751 19.441 18.9949C19.495 18.9253 19.6154 18.8768 19.6715 18.8579C19.7566 18.8305 19.8521 18.8051 19.9579 18.7756C20.3212 18.6765 20.7779 18.5605 21.3321 18.2421C22.0005 17.8562 22.0462 17.3838 21.9756 17.1497Z"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'activity-graph': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12H6L9 21L16 3L18 12H21"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'yuan-currency-money': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 3L12 12M12 12L5 3M12 12L12 21M7 12H17M7 16H17"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    'alphabet-l': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21H5V3"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
};
