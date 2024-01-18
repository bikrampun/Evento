type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  logo: (props: IconProps & { mode?: "dark" | "light" }) => (
    <svg
      width="79"
      height="32"
      viewBox="0 0 79 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M71.5161 12.4114C71.1969 14.4535 69.9319 16.1127 68.2374 17.0124C66.8984 15.638 66.2003 13.6717 66.5193 11.6296C66.8386 9.5875 68.1035 7.9283 69.798 7.02835C71.1371 8.403 71.8354 10.3692 71.5161 12.4114Z"
        fill="#C83316"
      />
      <path
        opacity="0.2"
        d="M71.5161 12.4114C71.6242 11.7199 71.6131 11.0378 71.5024 10.3837C70.9165 10.6945 70.3692 11.1012 69.887 11.6083C68.4627 13.1056 67.9181 15.12 68.2374 17.0124C69.9319 16.1127 71.1968 14.4535 71.5161 12.4114Z"
        fill="#370D32"
      />
      <path
        d="M74.7523 16.4708C72.7101 17.7153 70.2989 17.8376 68.2374 17.0124C68.4503 14.8013 69.6649 12.7143 71.7073 11.4696C73.7495 10.2252 76.1607 10.1028 78.2222 10.928C78.0091 13.1393 76.7945 15.2264 74.7523 16.4708Z"
        fill="#F84616"
      />
      <path
        d="M74.0992 9.85649C73.5623 10.1836 72.9284 10.2158 72.3863 9.99887C72.4423 9.41757 72.7616 8.86887 73.2986 8.5416C73.8355 8.21433 74.4694 8.1823 75.0115 8.39923C74.9555 8.98052 74.636 9.52922 74.0992 9.85649Z"
        fill="#F84616"
      />
      <path
        d="M75.597 18.7175C74.9705 18.7698 74.3892 18.5147 74.0016 18.078C74.3117 17.5832 74.8428 17.2356 75.4693 17.1833C76.0959 17.131 76.6771 17.3862 77.0647 17.8228C76.7545 18.3176 76.2234 18.6653 75.597 18.7175Z"
        fill="#F84616"
      />
      <path
        d="M73.5848 6.59784C73.4059 7.40637 72.8588 8.03787 72.1588 8.35521C71.6579 7.77223 71.4279 6.96858 71.6068 6.16005C71.7856 5.35152 72.3328 4.72002 73.0327 4.40268C73.5337 4.98585 73.7636 5.7895 73.5848 6.59784Z"
        fill="#F84616"
      />
      <path
        d="M69.5095 23.2032C67.4693 23.5305 65.5012 22.8398 64.1221 21.5056C65.0149 19.8069 66.6684 18.5349 68.7086 18.2076C70.7487 17.8803 72.7168 18.571 74.096 19.9054C73.2031 21.6041 71.5496 22.8759 69.5095 23.2032Z"
        fill="#FA811D"
      />
      <path
        opacity="0.2"
        d="M69.5095 23.2032C70.2003 23.0923 70.8454 22.8711 71.433 22.5637C70.9566 22.1023 70.4006 21.7072 69.7696 21.405C67.906 20.5126 65.8227 20.6171 64.1221 21.5054C65.5012 22.8398 67.4695 23.5307 69.5095 23.2032Z"
        fill="#370D32"
      />
      <path
        d="M66.6502 27.5368C64.8361 25.9782 63.9747 23.7221 64.1221 21.5056C66.2899 21.0249 68.6494 21.5356 70.4636 23.0942C72.2777 24.6528 73.1391 26.9088 72.9917 29.1253C70.824 29.6059 68.4646 29.0952 66.6502 27.5368Z"
        fill="#FAD01D"
      />
      <path
        d="M72.7367 24.8714C72.2597 24.4617 72.0333 23.8684 72.0721 23.2858C72.6421 23.1594 73.2623 23.2937 73.7392 23.7034C74.2162 24.1131 74.4426 24.7064 74.4038 25.289C73.834 25.4154 73.2136 25.2811 72.7367 24.8714Z"
        fill="#FAD01D"
      />
      <path
        d="M64.7754 29.0347C64.5321 28.4547 64.5951 27.8228 64.8904 27.3191C65.4566 27.4613 65.9512 27.859 66.1944 28.439C66.4377 29.0189 66.3748 29.6508 66.0795 30.1546C65.5134 30.0124 65.0186 29.6147 64.7754 29.0347Z"
        fill="#FAD01D"
      />
      <path
        d="M75.6755 23.375C74.8517 23.4548 74.0821 23.1292 73.5641 22.5612C73.9638 21.9044 74.6566 21.4374 75.4804 21.3576C76.3041 21.2778 77.0737 21.6034 77.5917 22.1714C77.1923 22.8282 76.4994 23.2952 75.6755 23.375Z"
        fill="#FAD01D"
      />
      <path
        d="M58.6298 24.629C57.6883 22.7892 57.7368 20.7031 58.579 18.9787C60.47 19.3033 62.1901 20.4835 63.1317 22.3233C64.0732 24.1631 64.0247 26.2492 63.1824 27.9736C61.2917 27.6492 59.5715 26.469 58.6298 24.629Z"
        fill="#008560"
      />
      <path
        opacity="0.2"
        d="M58.6298 24.629C58.9487 25.2521 59.3584 25.7972 59.8322 26.2614C60.1236 25.6655 60.3275 25.0145 60.4196 24.3208C60.6921 22.272 59.949 20.322 58.5789 18.9787C57.7368 20.7031 57.6883 22.7892 58.6298 24.629Z"
        fill="#370D32"
      />
      <path
        d="M53.6266 23.2478C54.5478 21.0401 56.4263 19.5234 58.5791 18.9787C59.706 20.8926 59.9496 23.2954 59.0285 25.5031C58.1075 27.7108 56.2288 29.2275 54.0761 29.7722C52.9491 27.8582 52.7055 25.4555 53.6266 23.2478Z"
        fill="#05B178"
      />
      <path
        d="M58.0412 28.2149C58.2834 27.6345 58.7774 27.2357 59.3432 27.0926C59.6395 27.5958 59.7035 28.2275 59.4614 28.808C59.2193 29.3884 58.7253 29.7872 58.1594 29.9303C57.8632 29.4269 57.7991 28.7953 58.0412 28.2149Z"
        fill="#05B178"
      />
      <path
        d="M51.6232 21.9269C52.0994 21.5163 52.7194 21.3808 53.2896 21.5062C53.3295 22.0888 53.104 22.6824 52.6278 23.0931C52.1516 23.5037 51.5316 23.6391 50.9614 23.5138C50.9217 22.931 51.147 22.3375 51.6232 21.9269Z"
        fill="#05B178"
      />
      <path
        d="M60.3721 30.5487C60.0417 29.7896 60.1133 28.9568 60.4932 28.2885C61.2409 28.4658 61.8991 28.9806 62.2295 29.7398C62.5598 30.4989 62.4883 31.3318 62.1083 32C61.3606 31.8228 60.7024 31.3078 60.3721 30.5487Z"
        fill="#05B178"
      />
      <path
        d="M53.9124 14.7183C55.3706 13.254 57.3688 12.6554 59.2684 12.9239C59.5442 14.8233 58.9538 16.8245 57.4956 18.2889C56.0374 19.7533 54.0392 20.3518 52.1397 20.0834C51.8638 18.184 52.4542 16.1827 53.9124 14.7183Z"
        fill="#8B41D3"
      />
      <path
        opacity="0.2"
        d="M53.9124 14.7183C53.4186 15.2142 53.0269 15.7725 52.7321 16.3667C53.3886 16.4598 54.0704 16.4527 54.7586 16.326C56.7907 15.9521 58.4146 14.6427 59.2685 12.9239C57.3688 12.6554 55.3706 13.254 53.9124 14.7183Z"
        fill="#370D32"
      />
      <path
        d="M53.6797 9.53108C56.0631 9.72516 58.0855 11.044 59.2685 12.9239C57.7973 14.5876 55.5882 15.5617 53.2048 15.3678C50.8214 15.1737 48.799 13.8549 47.6159 11.975C49.0872 10.3113 51.2961 9.33701 53.6797 9.53108Z"
        fill="#D05AF1"
      />
      <path
        d="M50.3216 15.2665C50.9481 15.3174 51.4799 15.6642 51.791 16.1584C51.4041 16.5958 50.8234 16.8519 50.1969 16.8009C49.5703 16.75 49.0385 16.4032 48.7274 15.909C49.1143 15.4716 49.695 15.2153 50.3216 15.2665Z"
        fill="#D05AF1"
      />
      <path
        d="M54.3162 7.21698C54.8538 7.54312 55.174 8.09126 55.2311 8.67255C54.6895 8.89042 54.0555 8.85951 53.5181 8.53337C52.9804 8.20722 52.6602 7.65908 52.6031 7.07779C53.1447 6.85973 53.7787 6.89064 54.3162 7.21698Z"
        fill="#D05AF1"
      />
      <path
        d="M48.8231 18.2052C49.4428 17.6563 50.2566 17.4671 51.0094 17.622C51.0721 18.3882 50.7858 19.1735 50.1663 19.7226C49.5467 20.2714 48.7329 20.4606 47.9801 20.3057C47.9174 19.5393 48.2035 18.754 48.8231 18.2052Z"
        fill="#D05AF1"
      />
      <path
        d="M61.8766 7.16734C63.7195 8.10213 64.9059 9.81829 65.2377 11.7087C63.5172 12.558 61.4323 12.6146 59.5895 11.6798C57.7467 10.745 56.5602 9.02887 56.2284 7.13849C57.9487 6.28931 60.0338 6.23255 61.8766 7.16734Z"
        fill="#027DFF"
      />
      <path
        opacity="0.2"
        d="M61.8767 7.16735C61.2527 6.85076 60.6009 6.65069 59.9449 6.55365C60.0593 7.20707 60.2769 7.85355 60.6099 8.46913C61.5933 10.287 63.3401 11.4275 65.2378 11.7087C64.9057 9.8183 63.7193 8.10214 61.8767 7.16735Z"
        fill="#370D32"
      />
      <path
        d="M66.736 5.34291C67.288 7.67052 66.6592 10.0023 65.2377 11.7089C63.2015 10.823 61.5928 9.0225 61.0407 6.69471C60.4887 4.3671 61.1175 2.03537 62.539 0.328766C64.575 1.21466 66.184 3.0153 66.736 5.34291Z"
        fill="#02A8FF"
      />
      <path
        d="M60.2458 3.92031C60.391 4.53233 60.2256 5.14528 59.8518 5.59394C59.3165 5.36109 58.8935 4.8877 58.7483 4.27568C58.6032 3.66367 58.7686 3.05071 59.1423 2.60205C59.6777 2.83491 60.1007 3.3083 60.2458 3.92031Z"
        fill="#02A8FF"
      />
      <path
        d="M69.1327 5.23352C68.9887 5.84572 68.5666 6.31986 68.0316 6.55384C67.6571 6.10593 67.4906 5.49316 67.6346 4.88096C67.7786 4.26875 68.2007 3.79462 68.7355 3.56064C69.1102 4.00855 69.2767 4.62132 69.1327 5.23352Z"
        fill="#02A8FF"
      />
      <path
        d="M56.989 3.4027C57.7023 3.8227 58.1338 4.5385 58.219 5.30263C57.5098 5.59899 56.6748 5.56939 55.9616 5.14957C55.2483 4.72957 54.8169 4.01378 54.7317 3.24965C55.4408 2.95329 56.2758 2.98288 56.989 3.4027Z"
        fill="#02A8FF"
      />
      <path
        d="M62.6878 21.1865C61.7366 21.1865 60.9225 20.9533 60.2454 20.4868C59.5844 20.0041 59.0846 19.3768 58.746 18.6046C58.4075 17.8324 58.2382 17.0039 58.2382 16.1191C58.2382 14.8965 58.4639 13.8107 58.9153 12.8615C59.3828 11.8963 60.0116 11.1483 60.8016 10.6174C61.5915 10.0704 62.4782 9.79697 63.4617 9.79697C64.4129 9.79697 65.227 10.0383 65.9041 10.5209C66.5812 10.9874 67.0891 11.6068 67.4276 12.3789C67.7662 13.1511 67.9355 13.9796 67.9355 14.8644C67.9355 16.087 67.7017 17.1809 67.2342 18.1461C66.7666 19.0952 66.1298 19.8433 65.3237 20.3902C64.5338 20.9211 63.6551 21.1865 62.6878 21.1865ZM62.9538 18.5805C63.502 18.5805 63.9614 18.2828 64.3323 17.6876C64.7192 17.0924 64.9126 16.2237 64.9126 15.0815C64.9126 14.1968 64.7514 13.5291 64.429 13.0787C64.1065 12.6283 63.7196 12.4031 63.2682 12.4031C62.6878 12.4031 62.2042 12.7007 61.8172 13.2959C61.4464 13.875 61.261 14.7437 61.261 15.902C61.261 16.8189 61.4223 17.4946 61.7447 17.9289C62.0671 18.3633 62.4702 18.5805 62.9538 18.5805Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M59.8928 15.6848C60.1024 15.6848 60.2636 15.7813 60.3765 15.9744C60.5054 16.1674 60.5699 16.4328 60.5699 16.7707C60.5699 17.4141 60.4168 17.9128 60.1105 18.2668C59.4172 19.1194 58.6595 19.8191 57.8373 20.3661C57.0151 20.9131 56.0719 21.1865 55.0079 21.1865C51.719 21.1865 50.0746 18.8781 50.0746 14.2611C50.0746 13.5533 50.0988 12.8374 50.1472 12.1135H49.204C48.7204 12.1135 48.3899 12.025 48.2125 11.8481C48.0513 11.6711 47.9707 11.3896 47.9707 11.0035C47.9707 10.1026 48.3334 9.65218 49.0589 9.65218H50.4373C50.7114 7.88262 51.1306 6.26588 51.6949 4.80196C52.2591 3.33805 52.9362 2.17174 53.7262 1.30304C54.5323 0.434348 55.3948 0 56.3138 0C56.9909 0 57.5229 0.297609 57.9098 0.892827C58.2967 1.48804 58.4902 2.23609 58.4902 3.13696C58.4902 5.63044 57.4423 7.80218 55.3465 9.65218H58.0549C58.3129 9.65218 58.4983 9.70849 58.6111 9.8211C58.724 9.9337 58.7804 10.1428 58.7804 10.4485C58.7804 11.5585 57.8695 12.1135 56.0478 12.1135H53.0975C53.0652 12.9178 53.0491 13.5452 53.0491 13.9957C53.0491 15.6687 53.2426 16.8431 53.6295 17.5187C54.0325 18.1944 54.6613 18.5322 55.5157 18.5322C56.209 18.5322 56.8216 18.3231 57.3536 17.9048C57.8856 17.4865 58.5144 16.8591 59.2399 16.0226C59.4333 15.7974 59.651 15.6848 59.8928 15.6848ZM55.6608 2.31652C55.419 2.31652 55.1449 2.62218 54.8386 3.23348C54.5484 3.8287 54.2663 4.66522 53.9922 5.74305C53.7343 6.80479 53.5166 7.98718 53.3393 9.29023C54.2905 8.46979 54.9998 7.55283 55.4674 6.53935C55.951 5.50979 56.1929 4.57674 56.1929 3.74022C56.1929 2.79109 56.0155 2.31652 55.6608 2.31652Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M38.8273 21.1866C38.2147 21.1866 37.7794 20.8648 37.5215 20.2213C37.2796 19.5779 37.1587 18.5483 37.1587 17.1326C37.1587 15.0413 37.457 13.0546 38.0535 11.1724C38.1986 10.7059 38.4324 10.3681 38.7548 10.1589C39.0933 9.93371 39.5609 9.82111 40.1574 9.82111C40.4798 9.82111 40.7055 9.86132 40.8345 9.94176C40.9635 10.0222 41.028 10.175 41.028 10.4002C41.028 10.6576 40.9071 11.2368 40.6652 12.1376C40.504 12.7811 40.375 13.3442 40.2783 13.8268C40.1816 14.3094 40.101 14.9046 40.0365 15.6124C40.5685 14.2289 41.165 13.1028 41.826 12.2342C42.487 11.3655 43.1319 10.7461 43.7606 10.3761C44.4055 10.0061 44.9939 9.82111 45.526 9.82111C46.5739 9.82111 47.0978 10.3439 47.0978 11.3896C47.0978 12.017 46.9205 13.1511 46.5658 14.792C46.2595 16.1915 46.1064 17.1165 46.1064 17.567C46.1064 18.2105 46.3401 18.5322 46.8077 18.5322C47.1301 18.5322 47.509 18.3392 47.9442 17.9531C48.3957 17.5509 48.9922 16.9074 49.7338 16.0226C49.9272 15.7974 50.1449 15.6848 50.3867 15.6848C50.5963 15.6848 50.7575 15.7813 50.8704 15.9744C50.9993 16.1674 51.0638 16.4329 51.0638 16.7707C51.0638 17.4142 50.9107 17.9129 50.6043 18.2668C49.9111 19.1194 49.1614 19.8192 48.3554 20.3661C47.5654 20.9131 46.6626 21.1866 45.6469 21.1866C44.8247 21.1866 44.204 20.9533 43.7848 20.4868C43.3656 20.0042 43.1561 19.3124 43.1561 18.4115C43.1561 17.9611 43.2689 17.1568 43.4946 15.9985C43.7042 14.985 43.809 14.2852 43.809 13.8992C43.809 13.6418 43.7203 13.5131 43.543 13.5131C43.3334 13.5131 43.0351 13.7865 42.6482 14.3335C42.2774 14.8644 41.8905 15.5722 41.4874 16.457C41.1005 17.3418 40.7861 18.2748 40.5443 19.2561C40.367 20.0122 40.1574 20.527 39.9156 20.8005C39.6899 21.0579 39.3271 21.1866 38.8273 21.1866Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M38.4023 15.6848C38.6118 15.6848 38.7731 15.7813 38.8859 15.9744C39.0149 16.1674 39.0794 16.4329 39.0794 16.7707C39.0794 17.4142 38.9262 17.9129 38.6199 18.2668C38.0234 18.9907 37.177 19.6583 36.0807 20.2696C35.0005 20.8809 33.8398 21.1866 32.5984 21.1866C30.9056 21.1866 29.5917 20.7281 28.6566 19.8111C27.7215 18.8942 27.254 17.6394 27.254 16.0468C27.254 14.9368 27.4878 13.9072 27.9553 12.9581C28.4228 11.9928 29.0677 11.2287 29.8899 10.6657C30.7283 10.1026 31.6714 9.82111 32.7193 9.82111C33.6544 9.82111 34.404 10.1026 34.9683 10.6657C35.5326 11.2126 35.8147 11.9607 35.8147 12.9098C35.8147 14.0198 35.4117 14.977 34.6056 15.7813C33.8156 16.5696 32.4694 17.197 30.567 17.6635C30.9701 18.4035 31.7359 18.7735 32.8644 18.7735C33.5899 18.7735 34.4121 18.5242 35.331 18.0255C36.2661 17.5107 37.0722 16.8431 37.7493 16.0226C37.9428 15.7974 38.1604 15.6848 38.4023 15.6848ZM32.3082 12.1859C31.7117 12.1859 31.2039 12.5318 30.7847 13.2235C30.3816 13.9152 30.1801 14.7518 30.1801 15.7331V15.7813C31.1313 15.5561 31.881 15.2183 32.4291 14.7678C32.9773 14.3174 33.2513 13.7946 33.2513 13.1994C33.2513 12.8937 33.1627 12.6524 32.9853 12.4755C32.8241 12.2824 32.5984 12.1859 32.3082 12.1859Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M28.7238 13.7302C28.7722 13.7141 28.8528 13.7061 28.9657 13.7061C29.2075 13.7061 29.3929 13.7865 29.5219 13.9474C29.6508 14.1083 29.7153 14.3254 29.7153 14.5989C29.7153 15.0976 29.6186 15.4918 29.4251 15.7813C29.2317 16.0548 28.9415 16.2559 28.5546 16.3846C27.813 16.6259 27.023 16.7465 26.1846 16.7465C25.4753 16.7465 24.8062 16.65 24.1775 16.457C23.7099 17.2131 23.194 17.9933 22.6298 18.7976C21.9849 19.7146 21.4287 20.342 20.9612 20.6798C20.4936 21.0176 19.9616 21.1865 19.3651 21.1865C18.7041 21.1865 18.1801 20.9292 17.7932 20.4144C17.4224 19.8996 17.1887 19.0872 17.0919 17.9772C16.8985 15.725 16.8017 13.7544 16.8017 12.0652V11.2207C16.8178 10.6898 16.9629 10.3198 17.237 10.1107C17.5111 9.90153 17.9222 9.79697 18.4703 9.79697C18.8895 9.79697 19.1958 9.89349 19.3893 10.0865C19.5989 10.2635 19.7037 10.5691 19.7037 11.0035C19.7037 12.8535 19.8165 15.2585 20.0422 18.2185C21.0095 16.7868 21.735 15.6446 22.2187 14.792C21.9768 14.3254 21.8559 13.7704 21.8559 13.127C21.8559 12.58 21.9768 12.0491 22.2187 11.5344C22.4605 11.0196 22.791 10.6013 23.2102 10.2796C23.6293 9.95784 24.1049 9.79697 24.6369 9.79697C25.1045 9.79697 25.4833 9.96588 25.7735 10.3037C26.0637 10.6254 26.2088 11.1 26.2088 11.7274C26.2088 12.4513 26.0154 13.2798 25.6284 14.2128C26.2411 14.1807 27.0552 14.06 28.0709 13.8509L28.7238 13.7302Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
      <path
        d="M17.5083 16.6742C17.7502 16.5776 17.9517 16.5294 18.1129 16.5294C18.3709 16.5294 18.5643 16.6259 18.6933 16.8189C18.8223 17.012 18.8868 17.2613 18.8868 17.567C18.8868 18.0496 18.7658 18.4598 18.524 18.7976C18.2983 19.1355 17.9033 19.4411 17.3391 19.7146C16.3879 20.165 15.1545 20.527 13.6391 20.8005C12.1236 21.0579 10.6324 21.1866 9.16527 21.1866C7.13392 21.1866 5.43306 20.9613 4.06271 20.5109C2.69235 20.0444 1.66861 19.4089 0.991494 18.6046C0.330498 17.8002 0 16.8913 0 15.8778C0 14.4944 0.443351 13.32 1.33005 12.3548C2.23288 11.3735 3.55487 10.6657 5.29603 10.2313C4.34484 9.95785 3.6113 9.47524 3.0954 8.7835C2.59562 8.09176 2.34573 7.31958 2.34573 6.46697C2.34573 5.30871 2.70847 4.28719 3.43395 3.4024C4.17556 2.50153 5.16705 1.80979 6.40844 1.32719C7.64982 0.844576 9.01212 0.603271 10.4953 0.603271C12.4944 0.603271 13.9938 1.03762 14.9933 1.90632C15.9929 2.75893 16.4927 3.86893 16.4927 5.23632C16.4927 6.18545 16.3153 6.95763 15.9606 7.55284C15.6221 8.13197 15.1304 8.42154 14.4855 8.42154C14.0341 8.42154 13.6794 8.32502 13.4214 8.13197C13.1635 7.92284 13.0345 7.61719 13.0345 7.21502C13.0345 6.94154 13.0748 6.64393 13.1554 6.32219C13.236 5.79132 13.2763 5.42936 13.2763 5.23632C13.2763 4.65719 13.0587 4.19067 12.6234 3.83675C12.1881 3.46675 11.4626 3.28175 10.447 3.28175C9.0766 3.28175 7.98032 3.57132 7.1581 4.15045C6.33589 4.72958 5.92478 5.5098 5.92478 6.4911C5.92478 7.24719 6.2311 7.87458 6.84373 8.37328C7.47248 8.85589 8.48816 9.12132 9.89076 9.16958C10.2454 9.18567 10.4953 9.2661 10.6404 9.41089C10.7855 9.55567 10.8581 9.79698 10.8581 10.1348C10.8581 11.1965 10.3744 11.7355 9.4071 11.7515C8.06899 11.7837 6.95658 11.9687 6.06988 12.3065C5.1993 12.6444 4.56248 13.0787 4.15944 13.6096C3.77251 14.1244 3.57905 14.6794 3.57905 15.2746C3.57905 16.272 4.04659 17.0281 4.98165 17.5429C5.91672 18.0415 7.39993 18.2909 9.43128 18.2909C10.7694 18.2909 12.1801 18.1381 13.6633 17.8324C15.1626 17.5107 16.4443 17.1246 17.5083 16.6742Z"
        fill={props.mode === "dark" ? "#FFFEFE" : "#000"}
      />
    </svg>
  ),
}

export type IconType = keyof typeof Icons
