interface imageOptions{
    width: string,
    height: string
}

function LogoWhite({width, height} : imageOptions) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 184 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3429 58V56.656C12.6469 56.656 13.9909 56.2293 14.3749 55.376V23.184C13.9909 22.3307 12.6469 21.904 10.3429 21.904V20.56H36.1349V26.768H34.7909C34.7909 24.464 34.3643 23.12 33.5109 22.736H20.2629V37.456H29.2229C30.0763 37.072 30.5029 35.728 30.5029 33.424H31.8469V43.664H30.5029C30.5029 41.36 30.0763 40.016 29.2229 39.632H20.2629V55.376C20.6469 56.2293 21.9909 56.656 24.2949 56.656V58H10.3429ZM50.3254 39.44V55.824H55.7654C61.7388 55.824 64.7254 52.9227 64.7254 47.12C64.7254 45.1147 63.9788 43.344 62.4854 41.808C60.9921 40.2293 58.4961 39.44 54.9974 39.44H50.3254ZM50.3254 22.736V37.584H52.9494C58.9228 37.584 61.9094 34.8747 61.9094 29.456C61.9094 24.976 58.6668 22.736 52.1814 22.736H50.3254ZM40.4054 58V56.656C42.7094 56.656 44.0534 56.2293 44.4374 55.376V23.184C44.0534 22.3307 42.7094 21.904 40.4054 21.904V20.56H52.1814C57.5148 20.56 61.5254 21.4347 64.2134 23.184C66.9441 24.9333 68.3094 27.0027 68.3094 29.392C68.3094 33.744 66.0481 36.688 61.5254 38.224C64.7254 38.9493 67.1148 40.144 68.6934 41.808C70.3148 43.4293 71.1254 45.1787 71.1254 47.056C71.1254 50.2987 69.8241 52.944 67.2214 54.992C64.6614 56.9973 60.8428 58 55.7654 58H40.4054ZM75.6554 58V56.656C77.9594 56.656 79.3034 56.2293 79.6874 55.376V23.184C79.3034 22.3307 77.9594 21.904 75.6554 21.904V20.56H90.3754C96.0501 20.56 100.615 22.288 104.071 25.744C107.527 29.1573 109.255 33.6373 109.255 39.184C109.255 44.7307 107.57 49.2533 104.199 52.752C100.829 56.2507 96.4768 58 91.1434 58H75.6554ZM85.5754 22.416V55.824H91.1434C92.5088 55.824 93.8314 55.5253 95.1114 54.928C96.4341 54.288 97.6928 53.3493 98.8874 52.112C100.082 50.8747 101.042 49.1467 101.767 46.928C102.493 44.7093 102.855 42.1493 102.855 39.248C102.855 33.7013 101.597 29.52 99.0794 26.704C96.6048 23.8453 93.7034 22.416 90.3754 22.416H85.5754ZM114.28 58V56.656C116.584 56.656 117.928 56.2293 118.312 55.376V23.184C117.928 22.3307 116.584 21.904 114.28 21.904V20.56H140.072V26.768H138.728C138.728 24.464 138.302 23.12 137.448 22.736H124.2V37.456H133.16C134.014 37.072 134.44 35.728 134.44 33.424H135.784V43.664H134.44C134.44 41.36 134.014 40.016 133.16 39.632H124.2V55.824H138.792C139.859 55.3547 140.819 54.0107 141.672 51.792H142.952L141.416 58H114.28ZM157.406 20.56V21.904C155.443 21.904 154.206 22.16 153.694 22.672L163.486 49.488L172.894 23.056C172.467 22.288 171.145 21.904 168.926 21.904V20.56H179.422V21.904C177.033 21.904 175.731 22.2453 175.518 22.928L162.974 58H159.902L147.486 23.248C147.145 22.352 145.779 21.904 143.39 21.904V20.56H157.406Z"
        fill="white"
      />
      <path
        d="M0.381405 60L6.15489 65.7735L11.9284 60L6.15492 54.2265L0.381405 60ZM174.155 26.5L162.805 28.6244L170.32 37.3915L174.155 26.5ZM18.155 60L18.1549 61L18.155 61L18.155 60ZM143.155 60.0001L143.155 61.0001L143.655 61.0001L143.955 60.6001L143.155 60.0001ZM155.155 44L155.155 43L154.655 43L154.355 43.4L155.155 44ZM156.655 44L156.655 45L156.932 45L157.169 44.8575L156.655 44ZM159.655 38.5L159.249 37.5862L158.733 37.8156L158.663 38.376L159.655 38.5ZM166.655 31.5L166.208 30.6056L165.91 30.7547L165.761 31.0528L166.655 31.5ZM164.155 36.5L164.561 37.4138L164.889 37.2681L165.049 36.9472L164.155 36.5ZM159.155 42.5L159.669 43.3575L160.087 43.1071L160.147 42.624L159.155 42.5ZM170.655 29.5L171.102 30.3945L171.212 30.3394L171.306 30.2593L170.655 29.5ZM6.15491 61L18.1549 61L18.155 59L6.15491 59L6.15491 61ZM18.155 61L143.155 61.0001L143.155 59.0001L18.155 59L18.155 61ZM143.955 60.6001L155.955 44.6L154.355 43.4L142.355 59.4001L143.955 60.6001ZM155.155 45L156.655 45L156.655 43L155.155 43L155.155 45ZM160.061 39.4138L164.561 37.4138L163.749 35.5862L159.249 37.5862L160.061 39.4138ZM165.049 36.9472L167.549 31.9472L165.761 31.0528L163.261 36.0528L165.049 36.9472ZM157.169 44.8575L159.669 43.3575L158.64 41.6425L156.14 43.1425L157.169 44.8575ZM160.147 42.624L160.647 38.6241L158.663 38.376L158.163 42.376L160.147 42.624ZM167.102 32.3944L171.102 30.3945L170.208 28.6056L166.208 30.6056L167.102 32.3944Z"
        fill="url(#paint0_linear_88_110)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_88_110"
          x1="6.66701"
          y1="66.9368"
          x2="157.463"
          y2="60.1198"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#28909E" />
          <stop offset="1" stop-color="#7B006F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LogoWhite;
