import "./Landing.css";

const svg = `<svg width="160" height="222" viewBox="0 0 173 222" fill="none" xmlns="http://www.w3.org/2000/svg">
<a xlink:href="https://github.com/ACM-VIT" target="_blank">
<path d="M123.019 0C118.028 0.000206959 113.2 1.7763 109.398 5.01049C105.597 8.24467 103.071 12.7259 102.271 17.6523C101.472 22.5788 102.452 27.629 105.035 31.8992C107.618 36.1695 111.637 39.3813 116.371 40.9598C117.422 41.1437 117.817 40.5132 117.817 39.9614C117.817 39.4622 117.79 37.807 117.79 36.0467C112.509 37.0188 111.143 34.7594 110.723 33.5771C110.256 32.4272 109.517 31.4082 108.568 30.6082C107.833 30.2141 106.782 29.242 108.542 29.2157C109.214 29.2887 109.859 29.5226 110.421 29.8976C110.984 30.2726 111.448 30.7777 111.774 31.3701C112.061 31.8865 112.448 32.3411 112.911 32.7079C113.375 33.0747 113.906 33.3464 114.475 33.5075C115.043 33.6686 115.638 33.7158 116.225 33.6466C116.812 33.5774 117.38 33.393 117.895 33.1041C117.986 32.0356 118.462 31.0365 119.235 30.293C114.559 29.7675 109.672 27.9546 109.672 19.9151C109.642 17.8262 110.413 15.8051 111.826 14.2664C111.184 12.4508 111.259 10.4584 112.036 8.69646C112.036 8.69646 113.797 8.14471 117.816 10.8509C121.256 9.90497 124.886 9.90497 128.326 10.8509C132.345 8.11846 134.106 8.69646 134.106 8.69646C134.883 10.4584 134.959 12.4508 134.316 14.2664C135.733 15.8024 136.505 17.8253 136.47 19.9151C136.47 27.9809 131.557 29.7675 126.881 30.293C127.382 30.8014 127.769 31.4118 128.013 32.0827C128.258 32.7536 128.356 33.4694 128.299 34.1814C128.299 36.9926 128.273 39.2521 128.273 39.9615C128.273 40.5132 128.667 41.17 129.718 40.9598C134.445 39.3685 138.452 36.1492 141.024 31.8767C143.596 27.6043 144.566 22.5567 143.761 17.635C142.956 12.7133 140.429 8.23793 136.629 5.00768C132.829 1.77743 128.006 0.00259559 123.019 0Z" fill="white"/>
</a>
<a xlink:href="https://www.instagram.com/acmvit/?hl=en" target="_blank">
<path d="M64.4997 148.027C62.824 148.027 61.1859 148.524 59.7926 149.455C58.3993 150.386 57.3133 151.71 56.672 153.258C56.0308 154.806 55.863 156.509 56.1899 158.153C56.5168 159.796 57.3238 161.306 58.5087 162.491C59.6936 163.676 61.2032 164.483 62.8468 164.81C64.4903 165.137 66.1938 164.969 67.742 164.328C69.2901 163.686 70.6134 162.6 71.5444 161.207C72.4753 159.814 72.9722 158.176 72.9722 156.5C72.9723 155.387 72.7531 154.286 72.3273 153.258C71.9016 152.23 71.2775 151.296 70.4907 150.509C69.704 149.722 68.77 149.098 67.742 148.672C66.7141 148.247 65.6123 148.027 64.4997 148.027ZM64.4997 162C63.4118 162 62.3483 161.678 61.4438 161.073C60.5392 160.469 59.8342 159.61 59.4179 158.605C59.0016 157.6 58.8927 156.494 59.1049 155.427C59.3172 154.36 59.8411 153.38 60.6103 152.611C61.3796 151.841 62.3597 151.317 63.4266 151.105C64.4936 150.893 65.5996 151.002 66.6047 151.418C67.6097 151.835 68.4688 152.54 69.0732 153.444C69.6776 154.349 70.0001 155.412 70.0001 156.5C70.0002 157.222 69.858 157.938 69.5816 158.605C69.3052 159.272 68.9001 159.879 68.3893 160.39C67.8785 160.9 67.2721 161.306 66.6047 161.582C65.9373 161.858 65.222 162 64.4997 162Z" fill="white"/>
<path d="M80.9001 149.697C80.8731 148.329 80.6139 146.974 80.1337 145.692C79.7187 144.592 79.0693 143.594 78.2305 142.769C77.4069 141.93 76.4098 141.28 75.309 140.866C74.027 140.386 72.6727 140.127 71.304 140.1C69.5446 140.02 68.9822 140 64.5014 140C60.0205 140 59.4576 140.019 57.6973 140.1C56.3286 140.127 54.9744 140.386 53.6924 140.866C52.5913 141.281 51.5939 141.93 50.7695 142.769C49.9294 143.593 49.2798 144.591 48.8664 145.692C48.3862 146.974 48.1271 148.329 48.1 149.697C48.0187 151.457 48 152.019 48 156.5C48 160.981 48.0187 161.543 48.1 163.303C48.127 164.671 48.3862 166.026 48.8664 167.308C49.2799 168.409 49.9295 169.407 50.7695 170.231C51.5943 171.069 52.5916 171.719 53.6924 172.134C54.9744 172.614 56.3286 172.873 57.6973 172.9C59.4576 172.98 60.0191 173 64.5 173C68.9809 173 69.5434 172.981 71.3026 172.9C72.6714 172.873 74.0256 172.614 75.3076 172.134C76.4039 171.71 77.3995 171.062 78.2305 170.231C79.0616 169.399 79.7099 168.404 80.1337 167.308C80.6145 166.026 80.8736 164.671 80.9001 163.303C80.9801 161.542 80.9987 160.981 80.9987 156.5C80.9987 152.019 80.9801 151.457 80.9001 149.697ZM77.9318 163.168C77.9191 164.214 77.7271 165.251 77.3642 166.232C77.0895 166.944 76.669 167.59 76.1295 168.129C75.5901 168.668 74.9437 169.089 74.232 169.363C73.2508 169.727 72.2143 169.919 71.1679 169.931C69.4286 170.01 68.9062 170.027 64.4999 170.027C60.0936 170.027 59.5726 170.01 57.8339 169.931C56.7875 169.919 55.751 169.727 54.7697 169.363C54.053 169.098 53.4046 168.676 52.8718 168.129C52.3233 167.597 51.9015 166.949 51.6376 166.232C51.2738 165.251 51.0818 164.214 51.07 163.168C50.99 161.429 50.9741 160.906 50.9741 156.5C50.9741 152.094 50.9914 151.573 51.07 149.832C51.0832 148.786 51.2752 147.75 51.6376 146.768C51.9025 146.051 52.3241 145.403 52.8718 144.87C53.4037 144.321 54.0524 143.9 54.7697 143.636C55.7509 143.272 56.7875 143.08 57.8339 143.068C59.5731 142.988 60.0955 142.972 64.4999 142.972C68.9043 142.972 69.4272 142.99 71.1679 143.068C72.2141 143.082 73.2505 143.274 74.232 143.636C74.9439 143.91 75.5905 144.331 76.1299 144.87C76.6694 145.41 77.0898 146.056 77.3642 146.768C77.7279 147.749 77.9199 148.786 77.9318 149.832C78.0118 151.573 78.0277 152.094 78.0277 156.5C78.0277 160.906 78.0118 161.427 77.9318 163.168Z" fill="white"/>
<path d="M73.3089 145.712C72.7839 145.712 72.2797 145.921 71.9085 146.292C71.5373 146.664 71.3288 147.167 71.3289 147.692C71.3289 148.217 71.5375 148.721 71.9087 149.092C72.28 149.463 72.7835 149.672 73.3085 149.672C73.8335 149.672 74.337 149.463 74.7083 149.092C75.0795 148.721 75.2881 148.217 75.2882 147.692C75.2882 147.167 75.0797 146.664 74.7085 146.292C74.3373 145.921 73.8339 145.712 73.3089 145.712Z" fill="white"/>
</a>
<a xlink:href="https://www.linkedin.com/company/acmvit/" target="_blank">
<path d="M120.615 97.0002H95.205C94.9193 96.9962 94.6357 97.0486 94.3703 97.1542C94.1049 97.2599 93.8629 97.4168 93.6582 97.616C93.4534 97.8152 93.2899 98.0527 93.177 98.3151C93.0641 98.5775 93.0039 98.8596 93 99.1452V124.855C93.0039 125.14 93.0641 125.423 93.177 125.685C93.2899 125.947 93.4534 126.185 93.6582 126.384C93.8629 126.583 94.1049 126.74 94.3703 126.846C94.6357 126.951 94.9193 127.004 95.205 127H120.615C120.9 127.004 121.184 126.951 121.449 126.846C121.715 126.74 121.957 126.583 122.161 126.384C122.366 126.185 122.53 125.947 122.643 125.685C122.756 125.423 122.816 125.14 122.82 124.855V99.1452C122.816 98.8596 122.756 98.5775 122.643 98.3151C122.53 98.0527 122.366 97.8152 122.161 97.616C121.957 97.4168 121.715 97.2599 121.449 97.1542C121.184 97.0486 120.9 96.9962 120.615 97.0002ZM102.045 122.11H97.5449V108.61H102.045V122.11ZM99.7949 106.72C99.4876 106.72 99.1833 106.66 98.8994 106.542C98.6155 106.424 98.3576 106.252 98.1403 106.035C97.923 105.817 97.7507 105.559 97.6331 105.276C97.5155 104.992 97.4549 104.687 97.4549 104.38C97.4549 104.073 97.5155 103.769 97.6331 103.485C97.7507 103.201 97.923 102.943 98.1403 102.725C98.3576 102.508 98.6155 102.336 98.8994 102.218C99.1833 102.101 99.4876 102.04 99.7949 102.04C100.124 102.003 100.458 102.035 100.774 102.136C101.09 102.237 101.381 102.403 101.629 102.624C101.876 102.844 102.074 103.115 102.21 103.418C102.345 103.721 102.415 104.048 102.415 104.38C102.415 104.712 102.345 105.04 102.21 105.342C102.074 105.645 101.876 105.916 101.629 106.137C101.381 106.358 101.09 106.524 100.774 106.624C100.458 106.725 100.124 106.757 99.7949 106.72ZM118.275 122.11H113.775V114.865C113.775 113.05 113.13 111.865 111.495 111.865C110.989 111.869 110.496 112.027 110.083 112.32C109.67 112.612 109.356 113.024 109.185 113.5C109.067 113.853 109.017 114.224 109.035 114.595V122.095H104.535C104.535 122.095 104.535 109.825 104.535 108.595H109.035V110.5C109.444 109.791 110.038 109.206 110.754 108.81C111.471 108.413 112.282 108.22 113.1 108.25C116.1 108.25 118.275 110.185 118.275 114.34V122.11Z" fill="#E6E6E6"/>
</a>
<a xlink:href="https://www.youtube.com/@associationforcomputingmac7961" target="_blank">
<path d="M67.952 64.6302C68.0575 61.5767 67.3898 58.546 66.0107 55.8196C65.0751 54.7009 63.7765 53.9459 62.3414 53.6863C56.4055 53.1476 50.4449 52.9269 44.4854 53.0249C38.5476 52.9224 32.6086 53.1361 26.6935 53.6649C25.524 53.8777 24.4418 54.4262 23.5788 55.2436C21.6588 57.0143 21.4455 60.0436 21.2321 62.6036C20.9226 67.2064 20.9226 71.8248 21.2321 76.4275C21.2939 77.8684 21.5084 79.2986 21.8721 80.6942C22.1294 81.7717 22.6498 82.7685 23.3868 83.5955C24.2556 84.4562 25.3631 85.036 26.5655 85.2595C31.1647 85.8272 35.799 86.0625 40.4321 85.9635C47.8988 86.0702 54.4481 85.9635 62.1921 85.3662C63.424 85.1564 64.5626 84.5759 65.4561 83.7022C66.0533 83.1047 66.4994 82.3733 66.7574 81.5689C67.5203 79.2278 67.895 76.7776 67.8667 74.3156C67.952 73.1209 67.952 65.9102 67.952 64.6302ZM39.6641 75.5955V62.3902L52.2934 69.0249C48.7521 70.9876 44.0801 73.2062 39.6641 75.5955Z" fill="#FFF7F7"/>
</a>
<rect opacity="0.9" x="86" y="48" width="43.25" height="43.25" fill="#007ACC"/>
<path opacity="0.9" d="M129 48H173V91H129V48Z" fill="#007ACC"/>
<path opacity="0.9" d="M129 91H173V134H129V91Z" fill="#007ACC"/>
<path opacity="0.9" d="M129 134H173V178H129V134Z" fill="#007ACC"/>
<path opacity="0.9" d="M86 134H129V178H86V134Z" fill="#007ACC"/>
<path opacity="0.9" d="M43 91H86V135H43V91Z" fill="#007ACC"/>
<path opacity="0.9" d="M0 91H43V135H0V91Z" fill="#007ACC"/>
<path opacity="0.9" d="M0 135H43V178H0V135Z" fill="#007ACC"/>
<path opacity="0.9" d="M0 178H43V222H0V178Z" fill="#007ACC"/>
<path opacity="0.9" d="M43 178H86V222H43V178Z" fill="#007ACC"/>
</svg>
`;

function Landing() {
  return (
    <div className="container">
      <img src="assets/H2.png" alt="" className="H2" />
      <img src="assets/Rectangle 26.png" alt="" className="side_half" />
      <img src="assets/Dots.png" alt="" className="top_dots" />
      <img src="assets/rect.png" alt="" className="top_rect" />
      <img src="assets/Rectangle 25.png" alt="" className="top_half" />

      <div className="main">
        <div>
          <a href="https://acmvit.in/" target="_blank">
            <img src="assets/ACM Logo.png" alt="ACM Logo" className="logo" />
          </a>
        </div>
        <div>
          <div className="acm">ACM Organizing Committee Selections</div>
        </div>
        <div>
          <button className="register-button">REGISTER NOW</button>
        </div>
        <div>
          <button className="faq">FAQs</button>
        </div>
      </div>

      <img src="assets/rect.png" alt="" className="bottom_rect" />
      <img src="assets/Dots.png" alt="" className="bottom_dots" />
      <img src="assets/Rectangle 27.png" alt="" className="side_half2" />
      <img src="assets/Rectangle 24.png" alt="" className="bottom_half" />
      <img src="assets/H2 rev.png" alt="" className="H2_rev" />
      <div className="social" dangerouslySetInnerHTML={{ __html: svg }}></div>
    </div>
  );
}

export default Landing;
